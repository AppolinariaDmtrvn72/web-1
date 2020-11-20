$(document).ready(function(){
  $('.content .btn').click(function(e){
    $('#popup').css('top',$(this).offset().top).show();
    e.preventDefault();
  });
});

function myFunction(imgs) {
  
  var expandImg = document.getElementById("expandedImg");
  
  var imgText = document.getElementById("imgtext");
  
  expandImg.src = imgs.src;
  
  imgText.innerHTML = imgs.alt;
  
  expandImg.parentElement.style.display = "block";
}
