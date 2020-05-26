// Variables 
const dropdown = document.querySelector(".info-bar_sort-dropdown");
const dropdownListItem = document.querySelector(".dropdown_list_item");

// Show sort dropdown  item
dropdown.addEventListener("click", function () {
    this.classList.toggle("show");
});

// Hide sort dropdown item when click outside 
document.addEventListener("click", function (event) {
    if (event.target.closest(".dropdown")) return;
    dropdown.classList.remove("show")
});
