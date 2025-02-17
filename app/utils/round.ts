export function round(num: number) {
  return num
    .toFixed(7)
    .replace(/(\.\d+?)0+$/, '$1')
    .replace(/\.0$/, '')
}
