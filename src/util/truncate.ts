// 80 is the max str length
export function truncate(content: string, limit = 80) {
  return content.length > limit ? `${content.slice(0, limit)}...` : content;
}
