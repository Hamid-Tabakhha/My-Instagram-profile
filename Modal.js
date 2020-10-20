var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");

img.onclick = function () {

    modal.style.display = "block";
    modalImg.src = "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(145).jpg";
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}