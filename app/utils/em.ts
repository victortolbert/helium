import { round } from './round'

export function em(px: number, base: number) {
  return `${round(px / base)}em`
}
