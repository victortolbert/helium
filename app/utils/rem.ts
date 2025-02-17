import { round } from './round'

export function rem(px: number) {
  return `${round(px / 16)}rem`
}
