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