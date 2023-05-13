const halls = {
  cabinet: [
    './assets/png/Rectangle10.png',
    './assets/png/Rectangle11.png',
    './assets/png/Rectangle12.png',
    './assets/png/Rectangle13.png',
    './assets/png/Rectangle8(1).png',
    './assets/png/Rectangle9.png',

    './assets/png/cabinet2/cabinet_dop5.png',
    './assets/png/cabinet2/cabinet_dop1.png',
    './assets/png/cabinet2/cabinet_dop2.png',
    './assets/png/cabinet2/cabinet_dop3.png',
    './assets/png/cabinet2/cabinet_dop4.png',
    './assets/png/cabinet2/cabinet_dop6.png'

  ],
  cyclorama: [
    './assets/png/cyclorama/cyclorama1.png',
    './assets/png/cyclorama/cyclorama2.png',
    './assets/png/cyclorama/cyclorama3.png',
    './assets/png/cyclorama/cyclorama4.png',
    './assets/png/cyclorama/cyclorama5.png',
    './assets/png/cyclorama/cyclorama6.png'
  ],
  comfort: [
    './assets/png/comfort/comfort1.png',
    './assets/png/comfort/comfort2.png',
    './assets/png/comfort/comfort3.png',
    './assets/png/comfort/comfort4.png',
    './assets/png/comfort/comfort5.png',
    './assets/png/comfort/comfort6.png'
  ],
  baby: [
    './assets/png/baby/baby1.png',
    './assets/png/baby/baby2.png',
    './assets/png/baby/baby3.png',
    './assets/png/baby/baby4.png',
    './assets/png/baby/baby5.png',
    './assets/png/baby/baby6.png'
  ],
}



const imagesLeft = Array.from(document.querySelectorAll('.slider_left > li > img'));
const imagesCenter = Array.from(document.querySelectorAll('.slider_center > li > img'));
const imagesRight = Array.from(document.querySelectorAll('.slider_right > li > img'));

let hall = 'cabinet';

function redrawPhoto(arr) {
  arr.forEach((image, index) => image.src = halls[hall][index]);
}

function changeImage(event) {
  hall = event.target.dataset.hall;
  redrawPhoto(imagesCenter);


  const buttons = document.querySelectorAll('.halls__button');
  console.log(buttons);
  buttons.forEach(button => {
      if (button.dataset.hall == hall) {
          button.classList.add('button_color');
      } else {
          button.classList.remove('button_color');
      };
  });

};

function buttonClick(event) {
  if (event.target.classList.contains('halls__button')) {
      changeImage(event);
  };
};

document.querySelector('.halls__buttons').addEventListener('click', buttonClick);

//slider
function shiftPhoto(arrow) {
  let w;
  if (window.innerWidth >= 1024){
      w = 6;
  }
  else if (window.innerWidth >= 768 && window.innerWidth <=1023) {
      w = 4;
  }
  else {
      w = 1;
  }
  if (arrow == 'left') {
      halls[hall] = halls[hall].slice(w).concat(halls[hall].slice(0, w));
  } else if (arrow == 'right') {
      halls[hall] = halls[hall].slice(-w).concat(halls[hall].slice(0, -w));
  }
}

const slider = document.querySelector('.slider');

const buttonLeft = document.querySelector('.button_slider_left');
const buttonRight = document.querySelector('.button_slider_right');

function sliderLeft() {
  buttonLeft.removeEventListener('click', sliderRight);
  buttonRight.removeEventListener('click', sliderLeft);
  slider.classList.add('move_left');
  shiftPhoto('left');
  redrawPhoto(imagesRight);
};

function sliderRight() {
  buttonLeft.removeEventListener('click', sliderRight);
  buttonRight.removeEventListener('click', sliderLeft);
  slider.classList.add('move_right');
  shiftPhoto('right');
  redrawPhoto(imagesLeft);
};

slider.addEventListener('animationend', () => {
  redrawPhoto(imagesCenter);
  slider.classList.remove('move_left');
  slider.classList.remove('move_right');
  buttonLeft.addEventListener('click', sliderRight);
  buttonRight.addEventListener('click', sliderLeft);
});


buttonLeft.addEventListener('click', sliderRight);
buttonRight.addEventListener('click', sliderLeft);



/*calc*/

function multiply(a, b){
  return a*b;
}

/* html
<div class="uCalc_432497">

     </div>
     <script> var widgetOptions432497 = { bg_color: "transparent" }; 
     (function() { var a = document.createElement("script"), h = "head"; 
     a.async = true; a.src = (document.location.protocol == "https:" ? "https:" : "http:") + "//ucalc.pro/api/widget.js?id=432497&t="+Math.floor(new Date()/18e5); document.getElementsByTagName(h)[0].appendChild(a) })();
     </script>