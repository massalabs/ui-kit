// 80 is the max str length, 77 is the max str length minus 3 dots
export function truncate(content: string) {
  return content.length > 80 ? `${content.slice(0, 77)}...` : content;
}
