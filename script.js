let botao = document.querySelector(".botao")
let resultado = document.querySelector("#resultado")

function digito (num){     
    let valor = resultado.innerHTML
    resultado.innerHTML = valor + num
    
    
}

function limpar (){
    resultado.innerHTML = ""
}

function back(){ 
    result = document.querySelector("#resultado").innerHTML
    document.querySelector("#resultado").innerHTML = result.slice (0, - 1)
}

function calculo(){
    re = document.querySelector("#resultado").innerHTML
    if (re){
        document.querySelector("#resultado").innerHTML = eval(re)
        
 }
}

