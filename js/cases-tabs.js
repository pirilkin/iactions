const casesTabs = document.querySelectorAll(".cases-tags__element")
const casesTabItems = document.querySelectorAll(".cases-main__tags")
casesTabs.forEach(function(item) {
    item.addEventListener("click", function () {
        let currentTabBtn = item
        let tabId = currentTabBtn.getAttribute("data-case")
        let currentTabs = document.querySelectorAll(tabId)
        casesTabs.forEach(function(item) {
            item.classList.remove("active")
        })
        casesTabItems.forEach(function(item) {
            item.classList.remove("active")
        })
        currentTabs.forEach(function(item) {
            item.classList.add("active")
        })


        currentTabBtn.classList.add("active")
    })
})

