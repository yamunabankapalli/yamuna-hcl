const track = document.querySelector(".logo-track");

let position = 0;

function rotateLogos(){

  position -= 1;

  track.style.transform = "translateX(" + position + "px)";

  if(Math.abs(position) > track.scrollWidth/2){
    position = 0;
  }

}

setInterval(rotateLogos,100);