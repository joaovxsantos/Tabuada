function calc() {
    let texto = document.getElementById("texto")
    let valor = parseInt(texto.value)
    let h3 = document.getElementsByTagName("h3")[0]
    var result = ""
    for (k = 0; k <= 10; k++) {
        result += " " + valor + " x " + k + " = " + k * valor + "<br/>"
    }
    h3.innerHTML = result
}

