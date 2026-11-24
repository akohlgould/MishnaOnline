const ALLOWED_TAGS = new Set(['B', 'STRONG', 'I', 'EM', 'BR', 'SMALL', 'SPAN']);

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function sanitizeNode(node: Node): string {
  if (node.nodeType === Node.TEXT_NODE) {
    return escapeHtml(node.textContent || '');
  }

  if (node.nodeType !== Node.ELEMENT_NODE) {
    return '';
  }

  const el = node as Element;
  const tag = el.tagName.toUpperCase();

  // Sefaria embeds empty <i data-commentator="IkkarTosfotYomTov" data-label="ב"></i> footnote markers
  if (tag === 'I' && el.hasAttribute('data-commentator')) {
    return '';
  }

  let childrenHtml = '';
  el.childNodes.forEach((child) => {
    childrenHtml += sanitizeNode(child);
  });

  if (tag === 'BR') {
    return '<br />';
  }

  if (ALLOWED_TAGS.has(tag)) {
    const lower = tag.toLowerCase();
    // Drop empty <i></i> or <b></b>
    if (!childrenHtml.trim()) {
      return '';
    }
    return `<${lower}>${childrenHtml}</${lower}>`;
  }

  return childrenHtml;
}

/**
 * Sanitize Sefaria HTML commentary strings so only safe inline formatting tags remain
 * and Sefaria footnote marker tags are stripped cleanly.
 */
export function sanitizeCommentaryHtml(rawHtml: string): string {
  if (!rawHtml) return '';

  if (typeof DOMParser === 'undefined') {
    return escapeHtml(rawHtml.replace(/<[^>]+>/g, ''));
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(`<div>${rawHtml}</div>`, 'text/html');
  const container = doc.body.firstElementChild;
  if (!container) return '';

  let result = '';
  container.childNodes.forEach((child) => {
    result += sanitizeNode(child);
  });

  return result.trim();
}
