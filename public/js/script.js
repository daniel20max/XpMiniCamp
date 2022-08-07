function start ()
{
    var buttonCalculateIMC = document.querySelector("#button-calculate-imc")
    buttonCalculateIMC.addEventListener("click", ButtonClick)

    var inputHeight = document.querySelector("#input-height")
    var inputWeight = document.querySelector("#input-weight")
    inputHeight.addEventListener("input", ButtonClick)
    inputWeight.addEventListener("input", ButtonClick)
    ButtonClick()

}
function calculateIMC(weight , height){
    return weight / (height * height)
}
function ButtonClick(){
    var inputHeight = document.querySelector("#input-height")
    var inputWeight = document.querySelector("#input-weight")

    var IMCResult = document.querySelector("#imc-result")

    var height = Number(inputHeight.value)
    var weight = Number(inputWeight.value)
    var imc = calculateIMC(weight, height)
    IMCResult.textContent = imc.toFixed(2).replace(".", ",")

    var imcTag =  document.querySelector("#imc-tag")
    imcTag.textContent = GrauIMC(imc)

}
function GrauIMC(imc){
    if (imc < 16){
        return "Valor fora da tabela."
    }
    if (imc >= 16 && imc < 17){
        return "Muito abaixo do peso"
    }
    if (imc >= 17 && imc < 18.5){
        return "Abaixo do peso"
    }
    if (imc >= 18.5 && imc < 25){
        return "Peso normal"
    }
    if (imc >= 25 && imc < 30){
        return "Acima do peso"
    }
    if (imc >= 30 && imc < 35){
        return "Obesidade grau 1"
    }
    if (imc >= 35 && imc <= 40){
        return "Obesidade grau 2"
    }
    if (imc > 40){
        return "Obesidade grau 3"
    }
}
start()