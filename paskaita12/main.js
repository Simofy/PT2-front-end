



async function getApiCall() {
  const response = await fetch('https://simutis.dev/api/generate-shopping-cart?limit=5');
  return await response.json();
}

window.addEventListener('load', function onLoad() {
  const tableBody = document.querySelector('.item-list > tbody');
  const basketBody = document.querySelector('.item-basket > tbody');
  const dataObject = {
    list: undefined,
    basket: []
  }

  function reRenderBasket() {
    basketBody.innerHTML = '';
    let totalPrice = 0;
    dataObject.basket.forEach(function ({
      name,
      price,
      vegan
    }, index) {
      totalPrice += price;
      const trElm = document.createElement('tr');
      trElm.innerHTML = `
        <td>${name}</td>
        <td>${price.toFixed(2)}</td>
        <td class="is-vegan-icon">
          ${vegan ?
          '<i class="fas fa-seedling"></i>'
          :
          '<i class="fas fa-drumstick-bite"></i>'
        }
        </td>
        <td class="remove-from-basket">
          <button type="button" data-index="${index}">
            <i class="fas fa-minus-circle"></i>
          </button>
        </td>
      `;
      basketBody.appendChild(trElm);
    });
    document.querySelector('.show-basket-price').innerHTML = totalPrice.toFixed(2);
    const buttons = document.querySelectorAll('.remove-from-basket > button');
    buttons.forEach(function setButtonEvents(button) {
      button.addEventListener('click', function buttonOnClick(e) {
        const index = e.target.getAttribute('data-index');
        const {
          basket
        } = dataObject;
        if (basket[index]) {
          basket.splice(index, 1);
          reRenderBasket();
        }
      })
    });
  }

  function renderList(list) {
    dataObject.list = list;
    list.forEach(function ({
      name,
      price,
      vegan
    }, index) {
      const trElm = document.createElement('tr');
      trElm.innerHTML = `
        <td>${name}</td>
        <td>${price.toFixed(2)}</td>
        <td class="is-vegan-icon">
          ${vegan ?
          '<i class="fas fa-seedling"></i>'
          :
          '<i class="fas fa-drumstick-bite"></i>'
        }
        </td>
        <td class="add-to-basket">
          <button type="button" data-index="${index}">
            <i class="fas fa-plus-circle"></i>
          </button>
        </td>
      `;
      tableBody.appendChild(trElm);
    });
    const buttons = document.querySelectorAll('.add-to-basket > button');
    buttons.forEach(function setButtonEvents(button) {
      button.addEventListener('click', function buttonOnClick(e) {
        const index = e.target.getAttribute('data-index');
        const {
          list: savedList,
          basket
        } = dataObject;
        if (savedList[index]) {
          basket.push(savedList[index]);
          reRenderBasket();
        }
      })
    });
  }

  getApiCall().then(renderList)
    .catch(function (e) {
      console.error(e);
    });
});


// const objTest = {
//   counter: 0,
//   internalCall() {
//     this.counter += 1;
//   }
// }


// function drawTable(...props) {
//   this.internalCall();
//   objTest.internalCall();
//   console.log(this);
// }