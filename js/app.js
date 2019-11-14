// menu

const hamburger = document.querySelector('.hamburger');
console.log(hamburger);
const navList2 = document.querySelector('.navList2');

hamburger.addEventListener('click', function() {
    if (navList2.classList.contains("click")) {
        navList2.classList.toggle("click");
        navList2.style.display = 'block';
    }
    else {
        navList2.classList.add("click");
        navList2.style.display = 'none';
    }
})

// calculator

const calcPart1 = document.querySelector('.calculatorPart1');
const productsQuantity = calcPart1.firstElementChild;
const orders = productsQuantity.nextElementSibling  ;
const package = orders.nextElementSibling;

const calcPart2 = document.querySelector('.calculatorPart2');
const productsPriceArea = calcPart2.querySelector('.productsPrice');
const countingProductPrice = productsPriceArea.children[1];
let priceForProducts = productsPriceArea.children[2];

const ordersPriceArea = productsPriceArea.nextElementSibling;
const countingOrdersPrice = ordersPriceArea.children[1];
let priceForOrders = ordersPriceArea.children[2];

const totalPricePart = calcPart2.querySelector('.totalPricePart');
const totalPrice = totalPricePart.children[1];
let totalPriceSum = totalPrice.children[1];

totalPriceSum.innerText = '0$';
priceForProducts.innerText = '0$';
['change', 'keyup'].forEach(function (e) {
    productsQuantity.addEventListener(e, function () {
        if ((isNaN(productsQuantity.value) === false) & productsQuantity.value != '' & productsQuantity.value >= 0 & Number.isInteger(Number(productsQuantity.value))) {
            countingProductPrice.innerText = productsQuantity.value + ' * 0.5$';
            priceForProducts.innerText = productsQuantity.value * 0.5 + '$';
            productsPriceArea.style.display = 'flex';
            totalPricePart.style.display = 'flex';
            totalPriceSum.innerText = parseFloat(priceForTerminal.innerText) + parseFloat(priceForAccounting.innerText) + parseFloat(priceForProducts.innerText) + parseFloat(priceForOrders.innerText) + parseFloat(priceForPackage.innerText) + '$';
        } else {
            productsPriceArea.style.display = 'none';
            priceForProducts.innerText = "0$";
            totalPriceSum.innerText = parseFloat(priceForTerminal.innerText) + parseFloat(priceForAccounting.innerText) + parseFloat(priceForProducts.innerText) + parseFloat(priceForOrders.innerText) + parseFloat(priceForPackage.innerText) + '$';
        }
    })
});
        
priceForOrders.innerText = "0$";
['change', 'keyup'].forEach(function (e) {
    orders.addEventListener(e, function () {
        if (orders.value != '' & orders.value >= 0 & Number.isInteger(Number(orders.value))) {
            countingOrdersPrice.innerText = orders.value + ' * 0.5$';
            priceForOrders.innerText = orders.value * 0.5 + '$';
            ordersPriceArea.style.display = 'flex';
            totalPricePart.style.display = 'flex';
            totalPriceSum.innerText = parseFloat(priceForTerminal.innerText) + parseFloat(priceForAccounting.innerText) + parseFloat(priceForProducts.innerText) + parseFloat(priceForOrders.innerText) + parseFloat(priceForPackage.innerText) + '$';
        } else {
            priceForOrders.innerText = "0$";
            ordersPriceArea.style.display = 'none';
            totalPriceSum.innerText = parseFloat(priceForTerminal.innerText) + parseFloat(priceForAccounting.innerText) + parseFloat(priceForProducts.innerText) + parseFloat(priceForOrders.innerText) + parseFloat(priceForPackage.innerText) + '$';
        }
    })

});

const optionsPackage = document.querySelector('.package');
const packagePriceArea = calcPart2.querySelector('.packagePrice');
const typeOfPackage = packagePriceArea.children[1];
const priceForPackage = packagePriceArea.children[2];

priceForPackage.innerText = "$0";
optionsPackage.addEventListener('change', function (e) {
    if (optionsPackage.value === 'Basic') {
        typeOfPackage.innerText = 'Basic';
        priceForPackage.innerText = '40$';
        packagePriceArea.style.display = 'flex';
        totalPricePart.style.display = 'flex';
        totalPriceSum.innerText = parseFloat(priceForTerminal.innerText) + parseFloat(priceForAccounting.innerText) + parseFloat(priceForPackage.innerText) + parseFloat(priceForProducts.innerText) + parseFloat(priceForOrders.innerText) + '$';

    } else if (optionsPackage.value === 'Professional') {
        typeOfPackage.innerText = 'Professional';
        priceForPackage.innerText = '50$';
        packagePriceArea.style.display = 'flex';
        totalPricePart.style.display = 'flex';
        totalPriceSum.innerText = parseFloat(priceForTerminal.innerText) + parseFloat(priceForAccounting.innerText) + parseFloat(priceForPackage.innerText) + parseFloat(priceForProducts.innerText) + parseFloat(priceForOrders.innerText) + '$';
    } else if (optionsPackage.value === 'Premium') {
        typeOfPackage.innerText = 'Premium';
        priceForPackage.innerText = '60$';
        packagePriceArea.style.display = 'flex';
        totalPricePart.style.display = 'flex';
        totalPriceSum.innerText = parseFloat(priceForTerminal.innerText) + parseFloat(priceForAccounting.innerText) + parseInt(priceForPackage.innerText) + parseFloat(priceForProducts.innerText) + parseFloat(priceForOrders.innerText) + '$';
    }
});

const accountingCheckbox = calcPart1.querySelector('#accounting');
const terminalCheckbox = calcPart1.querySelector('#terminal');
const accountingPriceArea = calcPart2.querySelector('.accountingPrice');
const priceForAccounting = accountingPriceArea.children[1];
const terminalPriceArea = calcPart2.querySelector('.terminalPrice');
const priceForTerminal = terminalPriceArea.children[1];

priceForAccounting.innerText = '0$';
priceForPackage.innerText = "0$";
priceForProducts.innerText = "0$";
priceForOrders.innerText = "0$";
accountingCheckbox.addEventListener('click', function (e) {
    if (accountingCheckbox.checked === false) {
        priceForAccounting.innerText = '0$';
        accountingPriceArea.style.display = 'none';
        totalPriceSum.innerText = parseFloat(priceForTerminal.innerText) + parseFloat(priceForAccounting.innerText) + parseFloat(priceForPackage.innerText) + parseFloat(priceForProducts.innerText) + parseFloat(priceForOrders.innerText) + '$';
    }
    else if (accountingCheckbox.checked) {
        priceForAccounting.innerText = '35$';
        accountingPriceArea.style.display = 'flex';
        totalPricePart.style.display = 'flex';
        totalPriceSum.innerText = parseFloat(priceForTerminal.innerText) + parseFloat(priceForAccounting.innerText) + parseFloat(priceForPackage.innerText) + parseFloat(priceForProducts.innerText) + parseFloat(priceForOrders.innerText) + '$';
    }
});

priceForTerminal.innerText = '0$';
terminalCheckbox.addEventListener('click', function (e) {
    if (terminalCheckbox.checked === false) {
        priceForTerminal.innerText = '0$';
        terminalPriceArea.style.display = 'none';
        totalPriceSum.innerText = parseFloat(priceForTerminal.innerText) + parseFloat(priceForAccounting.innerText) + parseFloat(priceForPackage.innerText) + parseFloat(priceForProducts.innerText) + parseFloat(priceForOrders.innerText) + '$';
    }
    else {
        priceForTerminal.innerText = '5$';
        terminalPriceArea.style.display = 'flex';
        totalPricePart.style.display = 'flex';
        totalPriceSum.innerText = parseFloat(priceForAccounting.innerText) + parseFloat(priceForPackage.innerText) + parseFloat(priceForProducts.innerText) + parseFloat(priceForOrders.innerText) + parseFloat(priceForTerminal.innerText) + '$';
    }
});

