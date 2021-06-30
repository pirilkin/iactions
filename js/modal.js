const modalCall = $("[data-modal")

modalCall.on("click", function (event) {
    event.preventDefault()

    let $this = $(this)
    let modalId = $this.data("modal")

    $(modalId).addClass("active")
    $("body").addClass("oh")
})

const modalClose = $("[data-close]")
modalClose.on("click", function(event) {
    event.preventDefault()

    let $this = $(this)
    let modalParent = $this.parents(".custom-modal")
    modalParent.removeClass("active")
    $("body").removeClass("oh")
})
const switchElem = document.querySelectorAll('.switch');
const switchNow =  document.querySelector('.switch_now');
const switchLater =  document.querySelector('.switch_later');
const switchTextarea = document.querySelector('#textarea');
const callback = document.querySelector('#callback');
const callback_order = document.querySelectorAll('.callback_order');
const close = document.querySelector('#close');
// console.log(switchElem)

for (let i = 0; i < callback_order.length; i++) {
    callback_order[i].onclick =(e)=>{
        e.preventDefault();

        callback.classList.toggle('active');
        close.onclick =()=>{
            callback.classList.remove('active');
        }
    }
}
for (let k = 0; k < switchElem.length; k++) {
    // console.log(switchElem[i]);
    switchElem[k].onclick =(e)=>{
        e.preventDefault();
        switchElem[k].classList.add('active');
        if (switchElem[k] == switchNow){
            switchLater.classList.remove('active');
            switchTextarea.style.display = "none";
        }
        if (switchElem[k] == switchLater){
            switchNow.classList.remove('active');
            switchTextarea.style.display = "block";
        }
    }
}
$(document).on("click", ".show-alert", function(e) {
    bootbox.alert("Hello world!", function() {
        console.log("Alert Callback");
    });
});