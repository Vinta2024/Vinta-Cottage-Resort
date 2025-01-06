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



