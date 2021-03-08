



// console.log(interval);


const timeoutId = setTimeout(function () {
  console.log('test');
}, 5000);

clearTimeout(timeoutId);



// const userInputs = {
//   name: 'test',
//   value: 100,
//   list: [0, 1, 32],
// };

// localStorage.setItem('user', JSON.stringify(userInputs));

// const localUser = localStorage.getItem('user');

// console.log(localUser);
// console.log(JSON.parse(localUser));


async function applyTheme(theme) {
  const response = await fetch(`themes/${theme}.css`);
  const cssFile = await response.text();
  const styleBlock = document.querySelector('[data-style]');
  styleBlock.innerHTML = '';
  styleBlock.innerHTML = cssFile;
}

const stateToSave = {
  list: [],
};

function init() {
  const inputName = document.querySelector('input[name="name"]');
  const inputValue = document.querySelector('input[name="value"]');
  const inputPrice = document.querySelector('input[name="price"]');
  const localUser = localStorage.getItem('user');

  // const interval = setInterval(testAsync, 1000, 'test');
  // function testAsync() {
  //   if (inputName.value === 'Alio') {
  //     clearInterval(interval);
  //   }
  //   document.querySelector().scrollIntoView(false)
  //   console.log('alio');
  // }





  if (localUser) {
    const {
      name,
      list,
      value,
      price
    } = JSON.parse(localUser);
    console.log(JSON.parse(localUser))

    inputName.value = name || '';
    inputValue.value = value || '';
    inputPrice.value = price || '';
    stateToSave.list = list;
    const listContainer = document.querySelector('.to-add');
    for (let i = 0; i < list.length; i += 1) {
      const elm = document.createElement('div');
      elm.innerHTML = list[i];
      listContainer.appendChild(elm);
    }
  }
}

window.addEventListener('load', function () {
  const selectElm = document.querySelector('select');

  const savedTheme = localStorage.getItem('theme');

  // setInterval(() => {
  //   document.body.classList.remove('test-anim');
  //   void document.body.offsetWidth;
  //   document.body.classList.add('test-anim');
  // }, 1000);


  init();

  if (savedTheme) {
    selectElm.value = savedTheme;
    applyTheme(savedTheme);
  }

  document.querySelector('button[name=button-add]').addEventListener('click', () => {
    const elm = document.createElement('div');
    const { value } = document.querySelector('input[name=list-custom]');
    elm.innerHTML = value;
    stateToSave.list.push(value);

    document.querySelector('.to-add')
      .appendChild(elm);
  });


  document.querySelector('button[name=button-save]').addEventListener('click', () => {
    const inputName = document.querySelector('input[name="name"]');
    const inputValue = document.querySelector('input[name="value"]');
    const inputPrice = document.querySelector('input[name="price"]');

    localStorage.setItem('user', JSON.stringify({
      ...stateToSave,
      name: inputName.value,
      value: inputValue.value,
      price: inputPrice.value,
    }));
  });


  selectElm.addEventListener('change', function (e) {
    const { value } = selectElm;
    localStorage.setItem('theme', value);
    applyTheme(value);
  });
});




// console.log(localStorage.setItem('key', 'value'));
// console.log(localStorage.getItem('key'));