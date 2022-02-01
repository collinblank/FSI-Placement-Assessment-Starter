// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Collin Blank" 

//Function GB
function updateQuantityGB(displayQuantityGB) {
    let gb = document.querySelector('#qty-gb')
    gb.innerHTML = displayQuantityGB
} 

//Function CC
function updateQuantityCC(displayQuantityCC) {
    let cc = document.querySelector('#qty-cc')
    cc.innerHTML = displayQuantityCC
} 

//Function Sugar
 function updateQuantitySugar(displayQuantitySugar) {
    let sugar = document.querySelector('#qty-sugar')
    sugar.innerHTML = displayQuantitySugar
} 

//Function Total
function updateQuantityTotal(displayQuantityTotal){
    let total = document.querySelector('#qty-total')
    total.innerHTML = displayQuantityTotal
}
// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb and minus-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')

// selecting the element with an id of add-cc and minus-cc
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document. querySelector('#minus-cc')

// selecting the element with an id of add-sugar and minus-sugar
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')


// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
    gb++ 
    total++
   updateQuantityGB(`${gb}`)
   updateQuantityTotal(`${total}`)
   
console.log('Gingerbread + button was clicked!')

})
// Event listener for clicks on the "-" button for Gingerbread cookies
gbMinusBtn.addEventListener('click', function(){
    if (gb > 0) {
        gb --
        total --
    }
    updateQuantityGB(`${gb}`)
    updateQuantityTotal(`${total}`)
})

// Event listener for clicks on the "+" button for CC cookies
ccPlusBtn.addEventListener('click', function() {
    cc++
    total++
   updateQuantityCC(`${cc}`)
   updateQuantityTotal(`${total}`)
console.log('Chocolate Chip + button was clicked!')

})
// Event listener for clicks on the "-" button for CC cookies
ccMinusBtn.addEventListener('click', function(){
    if (cc > 0) {
        cc --
        total --
    }
    updateQuantityCC(`${cc}`)
    updateQuantityTotal(`${total}`)
})

// Event listener for clicks on the "+" button for sugar cookies
sugarPlusBtn.addEventListener('click', function() {
    sugar++
    total++
   updateQuantitySugar(`${sugar}`)
   updateQuantityTotal(`${total}`)
console.log('Sugar + button was clicked!')

})
// Event listener for clicks on the "-" button for sugar cookies
sugarMinusBtn.addEventListener('click', function(){
    if (sugar > 0) {
        sugar --
        total --
    }
    updateQuantitySugar(`${sugar}`)
    updateQuantityTotal(`${total}`)
})