

let test1 = {
  value: 123,
  'test a value inside object': 1,
  price: [1, 2, 3, 'tekstas'],
  testFunc: function () {
    console.log('ALio');
  },
};

let varTest1;
let varTest2 = null;

let varTest3 = false;

const elmObj = {}

let colorChange = 0;

let direction = false;

function onButtonClick() {
  const elm = document.getElementById('test');
  switch (colorChange) {
    case 0:
      elm.style.backgroundColor = 'red';
      break;
    case 1:
      elm.style.backgroundColor = 'green';
      break;
    case 2:
      elm.style.backgroundColor = '#faf';
      break;
    default:
      break;
  }

  if (colorChange + 1 === 3 || colorChange <= 0) {
    direction = !direction;
  }

  if (direction) {
    colorChange++;
  } else {
    colorChange--;
  }
  console.log(colorChange);
}

function onLoadFunction() {
  const buttonElm = document.getElementById('button');
  buttonElm.onclick = onButtonClick;

}

window.onload = onLoadFunction;