// 80 is the max str length
export function truncate(content: string) {
  return content.length > 80 ? `${content.slice(0, 80)}...` : content;
}
