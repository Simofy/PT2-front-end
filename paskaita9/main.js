

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

let offset = 0;

function onButtonClick() {
  const elm = document.getElementById('test');

  const newElem = document.createElement('span');

  newElem.className = 'box';
  newElem.style.backgroundColor =
    `#${((1 << 24) * Math.random() | 0).toString(16)}`;
  newElem.style.top = `${offset}px`;

  offset += 5;
  elm.appendChild(newElem);

  // switch (colorChange) {
  //   case 0:
  //     elm.style.backgroundColor = '#faa';
  //     break;
  //   case 1:
  //     elm.style.backgroundColor = '#afa';
  //     break;
  //   case 2:
  //     elm.style.backgroundColor = '#faf';
  //     break;
  //   default:
  //     break;
  // }

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