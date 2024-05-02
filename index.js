let arr = ['😊','😊','😍','😍','❤️','❤️','😒','😒','😘','😘','😎','😎','🤐','🤐','😰','😰'];
let c = ['😮‍💨', '🤬', '😮‍💨', '🤬', '😬', '🥸', '😬', '🥸'];
let z = ['😮‍💨', '🤬', '😮‍💨', '🤬', '😬', '🥸', '😬', '🥸', '😈', '👾', '😈', '👾', '👻', '💀', '👻', '💀'];
const  preElt = document.querySelector("#pre");
let x = arr.sort(() => Math.random() - 0.5);
const game = document.querySelector('.game');
function resetGame() {
game.innerHTML = "";
  x.forEach((item, i) => {
    const box = document.createElement('button');
    box.className = 'item';
    box.innerHTML = item;
    box.onclick = function () {
      box.classList.add('boxOpen');
      let boxOpen = document.querySelectorAll('.boxOpen');
      let boxOne = boxOpen[0];
      let boxTwo = boxOpen[1];

      setTimeout(function () {
        if (boxOpen.length > 1) {
          if (boxOne.innerHTML === boxTwo.innerHTML) {
            boxOne.classList.add('boxMatch');
            boxOne.disabled = true;
            boxTwo.classList.add('boxMatch');
            boxTwo.disabled = true;
            boxTwo.classList.remove('boxOpen');
            boxOne.classList.remove('boxOpen');
            if(document.querySelectorAll('.boxMatch').length >= arr.length) preElt.style.display ='block'
          } else {
            boxTwo.classList.remove('boxOpen');
            boxOne.classList.remove('boxOpen');
          }
        }
      }, 400);
    };
  game.append(box);
  });
}
function changeGridSize(item) {
  debugger
  if (item === '4X4') {
    arr = arr
    game.style.gridTemplateColumns = `repeat(4, 100px)`;
    x = arr.sort(() => Math.random() - 0.5); 
    preElt.style.display = 'none'
    resetGame();
   
  }

  if (item === '6X4') {
    arr = arr.concat(c);
    game.style.gridTemplateColumns = `repeat(6, 100px)`;
    x = arr.sort(() => Math.random() - 0.5); 
    preElt.style.display = 'none'
    resetGame();
   
  }
  if (item === '8X4') {
    arr = arr.concat(z);
    game.style.gridTemplateColumns = `repeat(8, 100px)`;
    x = arr.sort(() => Math.random() - 0.5); 
    preElt.style.display = 'none'
    resetGame();
  }
}
resetGame()