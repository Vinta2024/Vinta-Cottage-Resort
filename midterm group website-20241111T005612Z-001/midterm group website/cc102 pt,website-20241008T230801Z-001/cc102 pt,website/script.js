// function for open nav
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
    document.querySelector(".search-icon").style.display = "none";
    document.querySelector("form").style.display = "none";
}
// function for close nav
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    document.querySelector(".search-icon").style.display = "block";
    document.querySelector("form").style.display = "block";
}
// function for search 
function toggleSearch() {
    const searchForm = document.getElementById("searchForm");
    searchForm.classList.toggle("active");
}
const searchInput = document.getElementById('searchInput');
const suggestionsBox = document.getElementById('suggestionsBox');
const suggestions = [
    { name: 'Home', url: 'Index.html' },
    { name: 'bout Us', url: 'aboutus.html' },
    { name: 'facilities', url: 'learning.html' },
    { name: 'Contact Us', url: 'contact.html' },
   
];
searchInput.addEventListener('input', function() {
    const inputVal = searchInput.value.toLowerCase();
    suggestionsBox.innerHTML = '';
    if (inputVal) {
        suggestions.forEach(suggestion => {
            if (suggestion.name.toLowerCase().includes(inputVal)) {
                const suggestionEl = document.createElement('a');
                suggestionEl.classList.add('suggestion-item');
                suggestionEl.textContent = suggestion.name;
                suggestionEl.href = suggestion.url;
                suggestionsBox.appendChild(suggestionEl);
            }
        });
        suggestionsBox.classList.add('active');
    } else {
        suggestionsBox.classList.remove('active');
    }
});
// end function for search 

// This part is modal function
var modal = document.getElementById("myModal");
var images = document.querySelectorAll("img[id^='myImg']");

images.forEach(function(img) {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}
// end part is modal function

// function for dropdown
function toggleDropdown(dropdownId) {
    var dropdownContent = document.getElementById(dropdownId);
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}

window.onclick = function(event) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (!event.target.matches('.dropdown') && openDropdown.style.display === 'block') {
            openDropdown.style.display = 'none';
        }
    }
};
// end function for dropdown

// function volunteer submission
function handleFormSubmit() {
    alert("You are now part of Greenlife Guardians!");
    return false; // Prevent form submission
}