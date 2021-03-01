"use strict";


function addElement(parent, fontSize, depth) {
  const element = document.createElement('div');
  element.className = 'element';
  element.style.fontSize = `${fontSize * 0.7}px`;
  element.style.backgroundColor = `#${((1 << 24) * Math.random() | 0).toString(16)}8f`;
  document.addEventListener('mousemove', function (event) {
    const { pageX, pageY } = event;
    const { innerWidth, innerHeight } = window;
    const halfW = innerWidth / 2;
    const halfH = innerHeight / 2;
    const rationX = ((pageX - halfW) / halfW) * 0.1 * (depth * 0.5);
    const rationY = ((pageY - halfH) / halfH) * 0.1 * (depth * 0.5);
    element
      .style.transformOrigin = `center center ${depth * 5}px`;

    element
      .style
      .transform = `
      perspective(${depth * 300}px)
      rotate3d(0, 1, 0, ${Math.asin(rationX)}rad)
      rotate3d(1, 0, 0, ${Math.asin(-rationY)}rad)
    `;
  })
  parent.appendChild(element);
}

function cellOnClick() {
  let child = this.firstChild;
  let lastChild = this;
  let depth = 1;
  while (child) {
    if (child) {
      lastChild = child;
      depth += 1;
    }
    child = child.firstChild;
  }
  console.log(depth);
  const fontSize = Number(lastChild.style.fontSize.slice(0, -2));
  addElement(lastChild, fontSize < 4 ? 4 : fontSize, depth);
}

window.onload = function () {

  const tableWidth = 3;
  const tableHeight = 2;
  // <div class="row">
  //   <div class="cell" style="font-size: 48px;"></div>
  //   <div class="cell" style="font-size: 48px;"></div>
  // </div>
  const container = document.querySelector('.container');

  for (let i = 0; i < tableHeight; i += 1) {
    const rowElement = document.createElement('div');
    rowElement.className = 'row';
    for (let k = 0; k < tableWidth; k += 1) {
      const cellElement = document.createElement('div');
      cellElement.className = 'cell';
      cellElement.style.fontSize = '48px';
      cellElement.onclick = cellOnClick.bind(cellElement);
      rowElement.appendChild(cellElement);
    }
    container.appendChild(rowElement);
  }
}