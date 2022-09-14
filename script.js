let Gerar = document.querySelector('#submit')

function calcular() {

    let numero = document.querySelector('#numero').value
    let resultado = document.querySelector('#p2')

    if (numero.length == 0) {
        alert('Digite um número válido!')
    } else {

        resultado.innerText = ""


        for (i = 0; i <= 10; i++) {

            resultado.innerHTML += `${numero} x ${i} = ${numero * i}<br>`
        }
    }
}
Gerar.addEventListener('click', calcular)

