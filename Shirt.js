'use strict';

var allItems = [];
var grandTotals = {
  price: 0,
  tax: 0,
  qty: 0,
  total: 0
};

var form = document.getElementById('form');

var table = document.getElementById('table');
var tbody = document.getElementById('table-body');
var tfoot = document.getElementsByTagName('tfoot')[0];




function Item(name, price, qty) {
  this.name = name;
  this.price = price;
  this.qty = qty;
  this.tax = 0;
  this.total = 0;
  allItems.push(this);
}

Item.prototype.calcTax = function() {
  this.tax = (this.qty *parseFloat((this.price * 0.095).toFixed(2)));
};

Item.prototype.calcTotal = function () {
  return this.total = parseFloat(((this.price * this.qty)+ this.tax).toFixed(2));
};

Item.prototype.updateGrandTotals = function () {
  grandTotals.price += this.price;
  grandTotals.tax += this.tax;
  grandTotals.total += this.total;
};

Item.prototype.doAllTheMethods = function() {
  this.calcTax();
  this.calcTotal();
  this.updateGrandTotals();
};

//compute tax & total for all objects
function updateObjects() {
  //for(var i=0; i< allItems.length;  i++)
  for (var elem of allItems) {
    elem.doAllTheMethods();
  }
}

function makeItemRow(obj) {
  var row = document.createElement('tr');

  var nameCell = document.createElement('td');
  nameCell.textContent = obj.name;
  row.appendChild(nameCell);

  var priceCell = document.createElement('td');
  priceCell.textContent = obj.price;
  row.appendChild(priceCell);

  var taxCell = document.createElement('td');
  taxCell.textContent = obj.tax;
  row.appendChild(taxCell);

  var totalCell = document.createElement('td');
  totalCell.textContent = obj.total;
  row.appendChild(totalCell);

  tbody.appendChild(row);
}

function makeAllItemRows() {
  for (var item of allItems) {
    makeItemRow(item);
  }
}

function makeTotalRow() {
  var row = document.createElement('tr');

  var totalCell = document.createElement('th');
  totalCell.textContent = 'Total';
  row.appendChild(totalCell);

  var priceCell = document.createElement('th');
  priceCell.textContent = grandTotals.price;
  row.appendChild(priceCell);

  var taxCell = document.createElement('th');
  taxCell.textContent = grandTotals.tax;
  row.appendChild(taxCell);

  var totalCell = document.createElement('th');
  totalCell.textContent = grandTotals.total;
  row.appendChild(totalCell);

  tfoot.appendChild(row);
}



function handleFormSubmit(event) {
  event.preventDefault();
  console.log(event);

  var name = event.target.name.value;
  var price = parseFloat(event.target.price.value);
  var qty = parseFloat(event.target.qty.value);

  var newItem = new Item(name, price, qty);
  newItem.doAllTheMethods();

  makeItemRow(newItem);
  tfoot.innerHTML = ''
  makeTotalRow();
//associates with html here
  event.target.name.value = null;
  event.target.price.value = null;
  event.target.qty.value = null;
}



//broadcast
form.addEventListener('submit', handleFormSubmit);

updateObjects();
makeAllItemRows();
makeTotalRow();
