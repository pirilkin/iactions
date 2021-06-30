if (document.getElementById("budget")) {
    let range = document.getElementById("budget")
let rangeProgressBar = document.getElementById("rangeProgressBar")
function setBar() {
    rangeProgressBar.style.width = range.value + "%"
}

range.addEventListener("input", setBar)

}