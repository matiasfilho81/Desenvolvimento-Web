// trocados de cores do background

let listaCores = ["green","blue","red","yellow","magenta"]

function trocarCores(){
    document.body.style.background = listaCores[Math.floor(5 * Math.random())];
}

setInterval(trocarCores,1000);
