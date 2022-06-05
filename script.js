function calc() {
    let texto = document.getElementById("texto") //aq peguei o elemento com id texto
    let valor = parseInt(texto.value) //aq peguei o valor de texto
    let h3 = document.getElementsByTagName("h3")[0] // aq peguei o h3[0]
    var result = "" //aq uma variável vazia pra usar dps
    for (k = 0; k <= 10; k++) { //aq laço de repetição para repetir 10 vezes
        result += " " + valor + " x " + k + " = " + k * valor + "<br/>" //aq juntando td
    }
    h3.innerHTML = result //passando resultado para o h3
}

