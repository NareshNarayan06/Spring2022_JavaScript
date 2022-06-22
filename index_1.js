let num1 = 5
let num2 = 2
console.log(`Addition : ${num1 + num2}`)
console.log(`Substraction : ${num2 - num1}`)
console.log(`Multiplication : ${num1 * num2}`)
console.log(`Division : ${num1 / num2}`)
console.log(`Is num2 greater than num1 : ${num2 > num1}`)
console.log(`Using comparison operator : ${num1 > num2}`)
num2++
++num1
console.log(`Addition after Increment : ${num1 + num2}`)
num1--
--num2
console.log(`Addition after Decrement : ${num1 + num2}`)
console.log(`Application of BODMAS : ${num1 + num1 * num2}`)
console.log(`Application of BODMAS : ${(num1 + num1) * num2}`)

console.log(`${(num1 + num1 * num2) != ((num1 + num1) * num2)} `)




