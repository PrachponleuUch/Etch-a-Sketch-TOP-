const createGrid = function(sq){
  for(let j=0; j<sq; j++){
    let divC = document.createElement('div');
    divC.classList.add('divContainer');
    divC.setAttribute('id', `container${j+1}`);
    document.querySelector('.container').appendChild(divC);
    for(let i=0; i<sq; i++){
      let div = document.createElement('div');
      div.classList.add('divContainerChild');
      document.querySelector(`#container${j+1}`).appendChild(div);
    }
  }
}

//Callback Function to Different Color Functions
const hover = function(func){
  let divs = document.querySelectorAll('.divContainerChild');
  divs.forEach(div => {
    div.addEventListener('mouseenter', function(e){
      e.preventDefault();
      func(div);
    });
  });
}

const reset = function(){
  let divs = document.querySelectorAll('.divContainerChild');
  divs.forEach(div => {
    div.style.cssText = `background: white`;
  });
}

const colorBlack = function(div){
  div.style.cssText = `background: black`;
}

const colorWhite = function(div){
  div.style.cssText = `background: white`;
}

const colorRGB = function(div){
  div.style.cssText = `background: ${setRandomBg()}`;
}

//16777215 = FFFFFF, toString(16) = Hex String
const setRandomBg = function(){
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  return `#${randomColor}`;
}

const removeGrid = function(){
  document.querySelector('.container').textContent = '';
}

createGrid(16);
let resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', function(e){
  e.preventDefault();
  reset();
});

let blackBtn = document.querySelector('.black');
blackBtn.addEventListener('click', function(e){
  e.preventDefault();
  hover(colorBlack);
});

let rgbBtn = document.querySelector('.rgb');
rgbBtn.addEventListener('click', function(e){
  e.preventDefault();
  hover(colorRGB);
});

let eraserBtn = document.querySelector('.eraser');
eraserBtn.addEventListener('click', function(e){
  e.preventDefault();
  hover(colorWhite);
});


let g16 = document.querySelector('.one6');
g16.addEventListener('click', function(e){
  e.preventDefault();
  removeGrid();
  createGrid(16);
});

let g32 = document.querySelector('.three2');
g32.addEventListener('click', function(e){
  e.preventDefault();
  removeGrid();
  createGrid(32);
});

let g64 = document.querySelector('.six4');
g64.addEventListener('click', function(e){
  e.preventDefault();
  removeGrid();
  createGrid(64);
});

