
var quantityNum = document.getElementsByClassName('quantity__num')[0]
var quantityError = document.getElementsByClassName('quantity__error')[0]

class Quantity {

    constructor(min, max, value) {
        this.min = min
        this.max = max
        this.value = value
    }

    getValue() {
        if (quantityNum) {
            quantityNum.value = this.value
            quantityNum.max = this.max
            quantityNum.min = this.min
        }
        this.warningMsg()
    }

    warningMsg() {
        if (quantityNum) {
            quantityNum.addEventListener('change', (e) => {
                if (e.target.value >= this.max) {
                    quantityError.innerHTML = `Warning, you are attempting to go above the ${this.max} threshhold.`
                } else if (e.target.value <= this.min) {
                    quantityError.innerHTML = `Warning, you are attempting to go below the ${this.min} threshhold.`
                } else {
                    quantityError.innerHTML = ''
                }
            })
        }
    }
}

let quantity = new Quantity(1, 10, 5)
quantity.getValue()

module.exports = { Quantity }