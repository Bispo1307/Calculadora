function insertToDisplay(data) {
    const display = document.getElementById("display")
    display.value += data
}

function clean() {
    const display = document.getElementById("display")
    display.value = ''
}

function backspace() {
    const display = document.getElementById("display")
    display.value = display.value.slice(0, -1)
}

function calculate() {
    const display = document.getElementById("display")
    try {
        display.value = eval(display.value)
    } catch {
        alert("[ERRO] Digite um valor válido!")
    }
}