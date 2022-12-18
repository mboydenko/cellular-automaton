export const randomBetween = (min: number, max: number) => {
    return Math.random() * (max - min + 1) + min
}

export const randomIntBetween = (min: number, max: number) => {
    return Math.floor(randomBetween(min, max))
}