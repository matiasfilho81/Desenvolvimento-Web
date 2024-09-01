function somar() {
    const num1 = parseFloat(document.getElementById("numero1").value);
    const num2 = parseFloat(document.getElementById("numero2").value);
    const resultado = num1 + num2;
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function subtrair(){
    const num1 = parseFloat(document.getElementById("numero1").value);
    const num2 = parseFloat(document.getElementById("numero2").value);
    const resultado = num1 - num2;
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function multiplicar(){
    const num1 = parseFloat(document.getElementById("numero1").value);
    const num2 = parseFloat(document.getElementById("numero2").value);
    const resultado = num1 * num2;
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function calcular(operacao) {
    const num1 = parseFloat(document.getElementById("numero1").value);
    const num2 = parseFloat(document.getElementById("numero2").value);
    let resultado;

    switch (operacao) {
        case 'somar':
            resultado = num1 + num2;
            break;
        case 'subtrair':
            resultado = num1 - num2;
            break;
        case 'multiplicar':
            resultado = num1 * num2;
            break;
        case 'dividir':
            resultado = num1 / num2;
            break;
        default:
            resultado = 'Operação inválida';
    }

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}


