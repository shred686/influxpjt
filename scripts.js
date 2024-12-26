

const tabLabels = document.querySelectorAll(".tabs-label");
const tabContents = document.querySelectorAll(".tabs-content");

tabLabels.forEach(function(tabLabel) {
    tabLabel.addEventListener("click", function() {
        const tabId = tabLabel.id;
        tabLabels.forEach(function(label) {
            label.classList.remove("selected");
        });
        document.getElementById(tabId).classList.add("selected");    

        const contentId = tabId.replace("label-", "tab-content-");
        const tabContent = document.getElementById(contentId);

        tabContents.forEach(function(content) {
            content.classList.remove("visible");
            content.classList.add("notvisible");
        });

        tabContent.classList.remove("notvisible");
        tabContent.classList.add("visible");


    });
});
