var hours = ["10AM", "11AM","12AM","1PM", "2PM", "3PM","4PM","5PM"];


var allStores = [];
var grandTotals = {
  location: 'Pike Place',
  min: 0,
  max: 0,
  avg: 0,
  totalSales: 0,
  hourlySales:[]
};

var form = document.getElementById('form');
// var button = document.getElementById('fun-button');

var table = document.getElementById('table');
var tbody = document.getElementById('table-body');
var tfoot = document.getElementsByTagName('tfoot')[0];
//Calling the constructor function using these variables
new Store ('PikePlace', 17,88,5.2);
new Store ('seaTacAirport', 6,24,1.2);
new Store ('southCenter', 11,38,1.9);
new Store ('bellevueSuare',20,48,3.3);
new Store ('alki', 3,24,2.6);

function Store (location, min, max, avg){
  this.location = location;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.totalSales = 0;
  this.hourlySales = [];
  allStores.push(this);
}
Store.prototype.getRandomCustomer = function(){
  return Math.random()* (this.max - this.min) + this.min;
};
Store.prototype.getHourlySales = function (){
  for (var i =0; i< hours.length; i++){
    var rand = Math.floor(this.getRandomCustomer() * this.avg);
    this.hourlySales.push(rand);
    this.totalSales += rand;
  }
};
Store.prototype.updateGrandTotals = function (){
  grandTotals.min =+ this.min;
  grandTotals.max =+ this.max;
  grandTotals.avg =+ this.avg;

};
Store.prototype.doAllTheMethods = function(){
  this.getRandomCustomer();
  this.getHourlySales();
  this.updateGrandTotals();
};

function updateObjects(){
  for (var elem of allStore){
    elem.doAllTheMethods();
  }
}
function makeItemRow(obj){
  var row = document.createElement('tr');

  var nameCell = document.createElement('td');

  var minCell = document.createElement('td');
  minCell.textContent = obj.min;
  row.appendChild(minCell);

  var maxCell = document.createElement('td');
  maxCell.textContent = obj.max;
  row.appendChild(maxCell);

  var avgCell = document.createElement('td');
  avgCell.textContent = obj.avg;
  row.appendChild(avgCell);
}
