export const randomId = () =>
    '_' +
    Math.random()
        .toString(36)
        .substr(2, 9)

export const getPercentage = (a, b) => floorOn2((a / b) * 100)

export const floorOn2 = value => Math.floor(value * 100) / 100

export function formatMoney(amount, decimalCount = 2, decimal = '.', thousands = ',') {
    try {
        decimalCount = Math.abs(decimalCount)
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount

        const negativeSign = amount < 0 ? '-' : ''

        let i = parseInt((amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))).toString()
        let j = i.length > 3 ? i.length % 3 : 0

        return (
            negativeSign +
            (j ? i.substr(0, j) + thousands : '') +
            i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
            (decimalCount
                ? decimal +
                  Math.abs(amount - i)
                      .toFixed(decimalCount)
                      .slice(2)
                : '')
        )
    } catch (e) {
        console.log(e)
    }
}
