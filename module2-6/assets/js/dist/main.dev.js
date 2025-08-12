"use strict";

var CART = [{
  title: 'Milk',
  price: 32.8,
  qty: 2,
  isBuy: false
}, {
  title: 'Bread',
  price: 28.5,
  qty: 1,
  isBuy: false
}];

function _el(id) {
  return document.getElementById(id);
}

document.addEventListener('keydown', function (event) {
  if (event.target.classList.contains('form-control')) resetError(event.target);
});

function resetError(elem) {
  elem.classList.remove("is-invalid");
  elem.parentElement.classList.remove("is-invalid");
  elem.parentElement.nextElementSibling.innerText = '';
}

var formElementsValidation = [{
  id: 'prod_title',
  conditions: [{
    condition: function condition(value) {
      return value === '';
    },
    msg: 'Enter product name'
  }]
}, {
  id: 'prod_price',
  conditions: [{
    condition: function condition(value) {
      return isNaN(value);
    },
    msg: 'Enter price value'
  }, {
    condition: function condition(value) {
      return value <= 0;
    },
    msg: 'Price must be positive'
  }]
}, {
  id: 'prod_qty',
  conditions: [{
    condition: function condition(value) {
      return isNaN(value);
    },
    msg: 'Enter quantity'
  }, {
    condition: function condition(value) {
      return value <= 0;
    },
    msg: 'Quantity must be positive'
  }, {
    condition: function condition(value) {
      return value > 10;
    },
    msg: 'Quantity must be less than 10'
  }]
}];

function validate() {
  var isValid = true;
  formElementsValidation.forEach(function (elem) {
    var $elem = _el(elem.id);

    var value = $elem.type === "text" ? $elem.value : $elem.valueAsNumber;
    elem.conditions.forEach(function (item) {
      if (item.condition(value)) {
        isValid = false;
        $elem.classList.add("is-invalid");
        $elem.parentElement.classList.add("is-invalid");
        $elem.parentElement.nextElementSibling.innerText = item.msg;
      }
    });
  });
  return isValid;
}

function addToCart() {
  var title = _el("prod_title").value;

  var price = _el("prod_price").valueAsNumber;

  var qty = _el("prod_qty").valueAsNumber;

  if (!validate()) return;
  var index = CART.findIndex(function (el) {
    return el.title === title;
  });

  if (index === -1) {
    CART.push({
      title: title,
      price: price,
      qty: qty,
      isBuy: false
    });
  } else {
    CART[index].qty += qty;
  }

  _el("prod_form").reset();

  _el("prod_title").focus();

  showProduct();
}

function showProduct() {
  var html = '';
  CART.forEach(function (prod, index) {
    html += "<tr>\n      <td> ".concat(index + 1, "</td>\n      <td>").concat(prod.title, "</td>\n      <td>").concat(prod.isBuy ? '<span class="badge text-bg-success">Yes</span>' : '<span class="badge text-bg-danger">No</span>', "</td>\n      <td>").concat(prod.qty, "</td>\n      <td>").concat(prod.price, "</td>\n      <td>").concat(prod.price * prod.qty, "</td>\n      <td>\n        <button type=\"button\" class=\"btn btn-info btn-sm\" onclick=\"buyProduct(").concat(index, ")\">Buy</button>\n      </td>\n    </tr> ");
  });
  _el('prod_list').innerHTML = html;
}

function buyProduct(index) {
  CART[index].isBuy = true;
  showProduct();
}

showProduct();