
// converts 5.531 to 0.531, will be usual later
export const getDecimalPoints = (value: number) => {
  const intPart = Math.trunc(value)
  return value - intPart
}
