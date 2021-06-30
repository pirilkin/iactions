// if (document.getElementById("burger") ) {
//     let burger = document.getElementById("burger")
//     let toggleBurger = () => {
//     burger.classList.toggle("active")
// }
// burger.addEventListener("click", toggleBurger)
// }
const burgerClass = document.querySelector('.burger');
const headerPopup = document.querySelector('.popup-menu');
// const header = document.querySelector('.header');
burgerClass.onclick = () => {
    burgerClass.classList.toggle('active');
    headerPopup.classList.toggle('active');
    let burger = document.getElementById("burger")
    let toggleBurger = () => {
    burger.classList.toggle("active")
}
}