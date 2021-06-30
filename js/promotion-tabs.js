const promotionTabs = document.querySelectorAll(".instruments-tabs__link")
const promotionTabItems = document.querySelectorAll(".instruments__wrapper")

promotionTabs.forEach(function (item) {
    item.addEventListener("click", function () {
        let currentTabBtn = item
        let tabId = currentTabBtn.getAttribute("data-tab-instruments")
        let currentTabs = document.querySelectorAll(tabId)
        promotionTabs.forEach(function (item) {
            item.classList.remove("active")
        })
        promotionTabItems.forEach(function (item) {
            item.classList.remove("active")
        })
        currentTabs.forEach(function (item) {
            item.classList.add("active")
        })


        currentTabBtn.classList.add("active")
    })
})

var tab = $('.portfolio-tabs-items .portfolio-tabs-items'); 
tab.hide().filter(':first').show(); 
// Клики по вкладкам.
$('#portfolio-tabs .portfolio-tabs-nav a').click(function(){
    tab.hide(); 
    tab.filter(this.hash).show(); 
    $('#portfolio-tabs .portfolio-tabs-nav a').parent().removeClass('active');
    $(this).parent().addClass('active');
    return false;
}).filter(':first').click();



var marketTab = $('.market-tabs-items .market-tabs-item'); 
marketTab.hide().filter(':first').show(); 
// Клики по вкладкам.
$('.market-tabs-items .rubrics__link').click(function(){
    marketTab.hide(); 
    marketTab.filter(this.hash).show(); 
    $('.market-tabs-items .rubrics__element .rubrics__link').parent().removeClass('active');
    $(this).parent().addClass('active');
    return false;

}).filter(':first').click();

$('#select').on('change', function() {
    if(this.value==1){
      $(".market-tabs-item").hide();
       $(".market-tab-1").show();
    };
     if(this.value==2){
       $(".market-tabs-item").hide();
      $(".market-tab-2").show();
    };
     if(this.value==3){
       $(".market-tabs-item").hide();
      $(".market-tab-3").show();
    }
     if(this.value==4){
       $(".market-tabs-item").hide();
      $(".market-tab-4").show();
    };
     if(this.value==5){
       $(".market-tabs-item").hide();
      $(".market-tab-5").show();
    }
     if(this.value==6){
       $(".market-tabs-item").hide();
      $(".market-tab-6").show();
    };
})
