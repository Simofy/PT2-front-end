
const formState = {
  list: [],
}


function init() {
  const formCache = localStorage.getItem('form');
  if (formCache) {
    const formParsed = JSON.parse(formCache);
    console.log(formParsed)
    Object.entries(formParsed).forEach(function ([inputName, inputValue]) {
      if (inputName !== 'list') {
        const input = document.querySelector(`input[name=${inputName}]`)
        input.value = inputValue;
      } else {
        formState.list = inputValue;
        inputValue.forEach(function (listItem) {
          const p = document.createElement('p');
          p.innerHTML = listItem;
          document.querySelector('.list-container').appendChild(p);
        });
      }
    });
  }
}

function save(e) {
  const formElm = document.querySelector('form');
  const toSaveObj = {
    ...formState,
    toString() {
      return JSON.stringify(this);
    }
  };
  if (e) {
    e.preventDefault();
  }
  for (let i = 1; i <= 5; i += 1) {
    const inputName = `pvz-${i}`;
    toSaveObj[inputName] =
      formElm[inputName].value;
  }
  localStorage.setItem('form', toSaveObj);

  const saveElm = document.querySelector('span');
  saveElm.style.opacity = 1;
  saveElm.classList.remove("show-saved");
  void saveElm.offsetWidth;
  saveElm.classList.add("show-saved");
};

window.addEventListener('load', function () {
  init();
  const formElm = document.querySelector('form');
  formElm.addEventListener('submit', save);


  /* <input name="list-text">
        <button name="add-to-list">Add to list</button>
        <div class="list-container"></div> */


  document
    .querySelector('button[name=add-to-list]')
    .addEventListener('click', function () {
      const {
        value,
      } = document.querySelector('input[name=list-text]');
      formState.list.push(value);
      const p = document.createElement('p');
      p.innerHTML = value;
      document.querySelector('.list-container').appendChild(p);
    });

});