

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
  const response = await fetch(`/paskaita13/themes/${theme}.css`);
  const cssFile = await response.text();
  const styleBlock = document.querySelector('[data-style]');
  styleBlock.innerHTML = '';
  styleBlock.innerHTML = cssFile;
}



window.addEventListener('load', function () {
  const selectElm = document.querySelector('select');

  const savedTheme = localStorage.getItem('theme');

  const inputName = document.querySelector('input[name="name"]');
  const localUser = localStorage.getItem('user');
  if (localUser) {
    const {
      name,
    } = JSON.parse(localUser);
    inputName.value = name;
  }




  if (savedTheme) {
    selectElm.value = savedTheme;
    applyTheme(savedTheme);
  }

  selectElm.addEventListener('change', function (e) {
    const { value } = selectElm;
    localStorage.setItem('theme', value);
    applyTheme(value);
  });
});




// console.log(localStorage.setItem('key', 'value'));
// console.log(localStorage.getItem('key'));