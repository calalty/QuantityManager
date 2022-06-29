require('./index')
const { Quantity } = require("./index");

describe('tests for quantity manager', () => {
    let min = 1
    let max = 10
    let value = 5
    let quantity = new Quantity(min, max, value);
    test('getValue() should return min, max and value', () => {
        const QuantityRepo = { 'min': 1, 'max': 10, 'value': 5 }
        quantity.getValue()
        expect(quantity).toEqual(QuantityRepo);
    })
})