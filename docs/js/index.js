const printButton = document.getElementById('print-button')

printButton.addEventListener('click', printMondriaan)

function printMondriaan() {
    return window.print()
}