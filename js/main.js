const inputNome = document.getElementById('name')
inputNome.addEventListener('input', () => {
    let cliente = document.querySelector(".nome-cliente")
    cliente.textContent = inputNome.value+" "
})


const numero = document.getElementById('numero')
numero.addEventListener('input', () => {
    let nCliente = document.querySelector('.numero-cliente')
    nCliente.textContent = numero.value;
})



let radio = document.querySelectorAll('input[type=radio]')


function changeHandler (event){
    if (this.value == 'op1'){
        document.querySelector('.card').style.transition= '1s';
        document.querySelector('.card').style.background = "black";
    }
    else if (this.value == 'op2'){
        document.querySelector('.card').style.transition= '1s';
        document.querySelector('.card').style.background = "linear-gradient(31deg, rgba(145,43,43,1) 0%, rgba(191,32,32,1) 21%, rgba(255,0,0,1) 100%)";  
    }
    else if (this.value == 'op3'){
        document.querySelector('.card').style.transition= '1s';
        document.querySelector('.card').style.background = "linear-gradient(to bottom, violet 90%, rgb(182, 99, 182))";
    }
    else if (this.value == 'op0'){
        document.querySelector('.card').style.transition= '1s';
        document.querySelector('.card').style.background =  'linear-gradient(31deg, rgba(42,119,149,1) 0%, rgba(32,170,191,1) 21%, rgba(0,212,255,1) 100%)'
    }
    
}

Array.prototype.forEach.call(radio, function(radio) {
    radio.addEventListener('change', changeHandler)
})


const data = document.getElementById('date')
data.addEventListener('change', () => {
    let data_americana =  data.value
    let data_brasileira = data_americana.split('-').reverse().join('/');
    let datap = document.querySelector('.data-card')
    datap.textContent = data_brasileira
})


