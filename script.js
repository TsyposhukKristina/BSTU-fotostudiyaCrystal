const halls = {
    cabinet: [
      './assets/png/Rectangle10.png',
      './assets/png/Rectangle11.png',
      './assets/png/Rectangle12.png',
      './assets/png/Rectangle13.png',
      './assets/png/Rectangle8(1).png',
      './assets/png/Rectangle9.png'
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
      './assets/png/comfort/comfort5.png'
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
  
  
  function changeImage (event) {
    const hall = event.target.dataset.hall;
    const hallImages = document.querySelectorAll('.halls__img');
    Array.from(hallImages).forEach((image, index) => {image.src = halls[hall][index];
      console.log(image);
    });
    // Array.from(seasonImages).forEach((image, index) => image.src = './assets/seasons/' + season + '/' + (index + 1) + '.jpg');
    
    const buttons = document.querySelector('.halls__buttons').children;
    Array.from(buttons).forEach(halls__button => {
      if (halls__button.dataset.hall == hall) {
        halls__button.classList.add('button_color');
      } else {
        halls__button.classList.remove('button_color');
      };
    });
    
  };
  
  function buttonClick (event) {
    if (event.target.classList.contains('halls__button')) {
      changeImage (event);
    };
  };
  
  document.querySelector('.halls__buttons').addEventListener('click', buttonClick);