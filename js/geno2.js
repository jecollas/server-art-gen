
var modal = document.getElementById('descModal');
function openModal() {
  document.getElementById('descModal').style.display = "block";
}

function closeModal() {
  document.getElementById('descModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// // Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function desc(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("refModal");

  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
      }
    }
