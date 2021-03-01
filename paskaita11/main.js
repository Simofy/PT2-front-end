"use strict";


function addElement(parent, fontSize) {
  const element = document.createElement('div');
  element.className = 'element';
  element.style.fontSize = `${fontSize * 0.9}px`;
  parent.appendChild(element);
}

window.onload = function () {

  const container = document.querySelector('.container');
  console.log(container)
  container.onclick = function () {
    let child = container.firstChild;
    let lastChild = container;
    while (child) {
      if (child) {
        lastChild = child;
      }
      child = child.firstChild;
    }

    addElement(lastChild, Number(lastChild.style.fontSize.slice(0, -2)));
  }
}