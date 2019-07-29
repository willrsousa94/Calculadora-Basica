let txtVal1 = document.querySelector("input#txtVal1")
let txtVal2 = document.querySelector("input#txtVal2")
let res = document.querySelector("div#res")


//Abaixo será feito todas as funções para os cálculos
function somar(){
    let num1 = Number(txtVal1.value)
    let num2 = Number(txtVal2.value)
    let resultado = num1 + num2
    res.innerHTML = `<p>${num1} + ${num2} é igual a ${resultado}</p>`
}

function subtrair(){
    let num1 = Number(txtVal1.value)
    let num2 = Number(txtVal2.value)
    let resultado = num1 - num2
    res.innerHTML = `<p>${num1} -${num2} é igual a ${resultado}</p>`
}

function multiplicar(){
    let num1 = Number(txtVal1.value)
    let num2 = Number(txtVal2.value)
    let resultado = num1 * num2
    res.innerHTML = `<p>${num1} x ${num2} é igual a ${resultado}</p>`
}

function dividir(){
    let num1 = Number(txtVal1.value)
    let num2 = Number(txtVal2.value)
    let resultado = num1 / num2
    res.innerHTML = `<p>${num1} / ${num2} é igual a ${resultado}</p>`
}