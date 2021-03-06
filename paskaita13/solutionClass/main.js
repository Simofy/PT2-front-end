


class HandlerLocalStorage {
  list = [];
  constructor() {
    // this.handleClick = this.handleClick.bind(this);
    // this.save = this.save.bind(this);
    const formCache = localStorage.getItem('form');
    if (formCache) {
      const formParsed = JSON.parse(formCache);
      const entries = Object.entries(formParsed);
      for (let i = 0; i < entries.length; i += 1) {
        const [inputName, inputValue] = entries[i];
        if (inputName !== 'list') {
          const input = document.querySelector(`input[name=${inputName}]`)
          input.value = inputValue;
        } else {
          this.list = inputValue;
          inputValue.forEach(function (listItem) {
            const p = document.createElement('p');
            p.innerHTML = listItem;
            document.querySelector('.list-container').appendChild(p);
          });
        }
      }
    }
  }
  save(e) {
    const formElm = document.querySelector('form');
    const {
      list
    } = this;
    const toSaveObj = {
      list,
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
  }
  handleClick() {
    const {
      value,
    } = document.querySelector('input[name=list-text]');
    console.log(this);
    this.list.push(value);
    const p = document.createElement('p');
    p.innerHTML = value;
    document.querySelector('.list-container').appendChild(p);
  }
}

window.addEventListener('load', function () {
  const storageHandler = new HandlerLocalStorage();
  const formElm = document.querySelector('form');
  formElm.addEventListener('submit', storageHandler.save);


  /* <input name="list-text">
        <button name="add-to-list">Add to list</button>
        <div class="list-container"></div> */
  document
    .querySelector('button[name=add-to-list]')
    .addEventListener('click', storageHandler.handleClick);

});