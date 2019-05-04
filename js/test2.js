
//open the modal

var modal = document.getElementById('myModal1')
var img = document.getElementById('myImg1')
var modalImg = document.getElementById('imga1')
var captionText = document.getElementById('caption1')
img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var modal = document.getElementById('myModal2')
var img = document.getElementById('myImg2')
var modalImg = document.getElementById('imga2')
var captionText = document.getElementById('caption2')
img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var modal = document.getElementById('myModal3')
var img = document.getElementById('myImg3')
var modalImg = document.getElementById('imga3')
var captionText = document.getElementById('caption3')
img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
