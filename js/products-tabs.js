
// if(document.getElementsByClassName("products-tabs__element")) {
//     const productTabs = document.querySelectorAll(".products-tabs__element")
//     const tabItems = document.querySelectorAll(".products-slider")
//     productTabs.forEach(function(item) {
//         item.addEventListener("click", function () {
//             let currentTabBtn = item
//             let tabId = currentTabBtn.getAttribute("data-tab")
//             let currentTab = document.querySelector(tabId)
//             productTabs.forEach(function(item) {
//                 item.classList.remove("active")
//             })
//             tabItems.forEach(function(item) {
//                 item.classList.remove("products-slider--active")
//             })

//             currentTabBtn.classList.add("active")
//             currentTab.classList.add("products-slider--active")
//             $(document).ready(function(){
//                 $(".products-slider--active").slick("reinit")
//             });
//         })
//     })
//     }
let filter = $("[data-filter]");

filter.on("click", function (e) {
    
    e.preventDefault();
    
    let cat = $(this).data('filter');
    
    filter.removeClass("active");
    
    $(this).addClass("active");
    
    $("[data-cat").each(function () {

        let workCat = $(this).data('cat')
        
        if (workCat != cat) {
            $(this).addClass("hide");
        }

        else {
            $(this).removeClass("hide");
        }
    })

})
let elem = $("[data-elem]")

elem.on("click", function () {

    let elemItem = $(this).data('elem');
    elem.removeClass("active");
    $(this).addClass("active")

    $("[data-logo").each(function () {
        let workLogo = $(this).data('logo')
        if (elemItem != workLogo) {
            $(this).addClass("hide");
        }

        else {
            $(this).removeClass("hide");
        }
    })
})