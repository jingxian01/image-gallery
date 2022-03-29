export const cn = (...classes: string[]) => {
  // filter(item => Boolean(item))
  return classes.filter(Boolean).join(" ")
}
