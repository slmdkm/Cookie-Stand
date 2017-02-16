//Lab07-Constructors

var hours = ["10AM", "11AM","12AM","1PM", "2PM", "3PM","4PM","5PM"];

var table = document.getElementById("stores");
var stores =[];

var pikePlace = stores.push(new CookieStoreConstructor('Pike Place', 17, 88, 5.2,'pikeRow'));

var seaTacAirport = stores.push(new CookieStoreConstructor('Sea Tac Airport', 6, 24, 1.2, 'seaTacRow'));

var southcenter = stores.push(new CookieStoreConstructor('Southcenter',11, 38, 1.9, 'southcenterRow'));

var bellevueSuare = stores.push (new CookieStoreConstructor('Bellevue Square',20, 48, 3.3,'bellevueRow'));

var alki = stores.push(new CookieStoreConstructor('Alki', 3, 24, 2.6,'alkiRow'));



function CookieStoreConstructor(location, min, max, avg, hours, storeRow) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avg = avg;//cookie per customer
  this.row = storeRow;
  this.totalSales=0;
  this.hourlySales=[];
};

//Generates random number of Customers btw min and max per hour
// Prototype property allows you to add a new property to an existing prototype which is CookieStoreConstructor.(So the property is: getRandomCustomer equalingthe function. )
CookieStoreConstructor.prototype.getRandomCustomer = function(){
  return Math.random()* (this.max - this.min) + this.min;
};
//Cookies per hour function
//Prototype is: getHourlySales equaling the function.
CookieStoreConstructor.prototype.getHourlySales = function (){
  for (var i =0; i< hours.length; i++){
    var rand = Math.floor(this.getRandomCustomer() * this.avg);
    this.hourlySales.push(rand);
    this.totalSales += rand;
  }
};
//Prototype is: render equaling the function.
  CookieStoreConstructor.prototype.render = function(){
    var storeSection = document.getElementById('stores');
    var row = document.createElement('tr');//var row - make a new table row
    var td = document.createElement('td');//var td - make a new table cell
    td.innerHTML = this.location;
    row.appendChild(td);

//innerHTML -adding or removing content from DOM Tree (2nd is Dom Manipulation)

    for (var i =0; i< this.hourlySales.length; i++){
      var tdHourly = document.createElement('td');//Create element td node, store in a var
      tdHourly.innerHTML = this.hourlySales[i];
      row.appendChild(tdHourly);//Append tdHourly to the row.
    }
  var total = document.createElement('td');
  total.innerHTML = this.totalSales
  row.appendChild(total);
  storeSection.appendChild(row);
};

function generateTableHeading(){
  var storeSection = document.getElementById('stores');
  var thead = document.createElement('thead');
  storeSection.appendChild(thead);
  var row = document.createElement('tr');
  thead.appendChild(row);
  var td = document.createElement('td');
  td.innerHTML = "Location";
  row.appendChild(td);

  for (var i = 0; i < hours.length; i++) {
    var td = document.createElement('td');
    td.innerHTML = hours[i];
    row.appendChild(td);
  }

  var tdTotal = document.createElement('th');
  tdTotal.textContent = this.totalSales;
  tdTotal.innerHTML = "Total";
  row.appendChild(tdTotal);
  storeSection.appendChild(row);
}

generateTableHeading();
stores.forEach(function(store){
  store.getHourlySales();
  store.render();
});
//Event triggers JS code - event target is topmost target in Dom tree
//Reset values back to 0.
var clearFields = function(event){
  event.target.storeLocal.value = null;
  event.target.minInput.value = null;
  event.target.maxInput.value = null;
  event.target.avgInput.value = null;
};

var formEl = document.getElementById("input Form");
formEl.addEventListener("submit", function(event) {
  event.preventDefault();
  var newStoreName = (event.target.storeLocal.value);
  var newMin = parseInt(event.target.minInput.value);
  var newMax = parseInt(event.target.maxInput.value);
  var newAvg = parseFloat(event.target.avgInput.value);

  var newRow = newStoreName + "Row";
  var newStore = new CookieStoreConstructor(newStoreName, 8, newMin, newMax, newAvg, newRow);
  newStore.getHourlySales();
  newStore.render();
  stores.push(newStore);
  clearFields(event);
});
