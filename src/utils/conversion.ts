
// This will convert to only Foot
export const convertHeightToImperial = (metricValue: number, shouldConvert: boolean = true) => {
  if (shouldConvert === false) {
    return metricValue
  }

  return metricValue / 30.48
}

// This will convert to only Stones
export const convertWeightToImperial = (metricValue: number, shouldConvert: boolean = true) => {
  if (shouldConvert === false) {
    return metricValue
  }

  return metricValue / 6.35
}

// This will convert to only Centimeters
export const convertHeightToMetric = (imperialValue: number, shouldConvert: boolean = true) => {
  if (shouldConvert === false) {
    return imperialValue
  }

  return imperialValue * 30.48
}

// This will convert to only Kilograms
export const convertWeightToMetric = (imperialValue: number, shouldConvert: boolean = true) => {
  if (shouldConvert === false) {
    return imperialValue
  }

  return imperialValue * 6.35
}

export const convertFeetToInches = (feet: number) => {
  return feet * 12
}

export const convertInchesToFeet = (inches: number) => {
  return inches / 12
}

export const convertPoundsToStone = (stones: number) => {
  return stones / 14
}

export const convertStoneToPounds = (stones: number) => {
  return stones * 14
}
