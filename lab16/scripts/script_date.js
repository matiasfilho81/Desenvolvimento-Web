function mostrarData() {
    // const dataAtual = new Date(); //UNIX TimeStamp
    const dataAtual = Date.now() 
    document.getElementById("data").innerHTML = dataAtual;
}
