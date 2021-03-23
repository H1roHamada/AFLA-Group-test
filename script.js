const PLAN_ITEM = document.querySelectorAll('.plan__item')
const NUM_LICENSE = document.querySelector('.license-quantity_value')
const TOTAL_PRICE = document.getElementById('total-price')
const SELECTED_PLAN = document.getElementById('selected-plan')
let price = 13;
let num = 1;

function multiplyLicensePrice() {
    price = parseInt(price)
    num = parseInt(num)
    TOTAL_PRICE.innerHTML = `$${num * price}`
}

PLAN_ITEM.forEach(plan => plan.addEventListener('click', e => {
    PLAN_ITEM.forEach(e => e.classList.remove('active__plan'))
    plan.classList.add('active__plan')
    price = e.target.dataset.price
    multiplyLicensePrice()
    SELECTED_PLAN.innerHTML = e.target.dataset.id
}))

NUM_LICENSE.addEventListener('click', e => {
    num = e.target.value
    multiplyLicensePrice()
})

