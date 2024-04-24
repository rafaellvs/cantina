export const generateRandomNumberBetween = (min: number, max: number) =>
  Math.ceil(((Math.random() + min) * max) % max)
