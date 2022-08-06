const hexValues = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F',
}

export const rgbToHex = (array) => {
    const resultArray = []
    array.forEach(value => {
        // take the first number which is r (r , g, b) divide to 16. 
        // Then take a decimal value of result multiply with 16. After that push the values to resultArray
        const divided = value / 16
        let floor = Math.floor(divided)
        resultArray.push(hexValues[`${floor}`])
        const decimal = divided - Math.floor(divided)
        let multiplyDecimalWith16 = Math.floor(decimal * 16)
        resultArray.push(hexValues[`${multiplyDecimalWith16}`])
    })

    return resultArray

}