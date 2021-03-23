const PLAN_ITEM = document.querySelectorAll('.plan__item')
const NUM_LICENSE = document.querySelector('.license-quantity_value')
const TOTAL_PRICE = document.getElementById('total-price')
const SELECTED_PLAN = document.getElementById('selected-plan')
var price = 13;
var num = 1;

function multiplyLicensePrice() {
    price = parseInt(price)
    num = parseInt(num)
    TOTAL_PRICE.innerHTML = `$${num * price}`
}

function selectedPlan(plan) {
    SELECTED_PLAN.innerHTML = plan
}


PLAN_ITEM.forEach(input => input.addEventListener('click', e => {
    PLAN_ITEM.forEach(e => e.classList.remove('active__plan'))
    input.classList.add('active__plan')
    price = e.target.dataset.price
    multiplyLicensePrice()
    selectedPlan(e.target.dataset.id)
}))

NUM_LICENSE.addEventListener('click', e => {
    num = e.target.value
    multiplyLicensePrice()
})

