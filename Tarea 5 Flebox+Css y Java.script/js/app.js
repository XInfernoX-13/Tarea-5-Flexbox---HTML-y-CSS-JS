"use strict"

document.getElementById("btnAdd").onclick = function() {
    const entrada = document.getElementById("entrada")
    const salida = document.getElementById("salida")

    const texto = entrada.value.trim()
    if (texto === "") return

    const div = document.createElement("div")
    div.className = "tarea"
    div.textContent = texto

    salida.appendChild(div)
    entrada.value = ""
}
