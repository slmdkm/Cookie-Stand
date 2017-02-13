
//Lab07-Constructors
// function cookieStoreConstructor(location, min, max, avg, hours, randoms) {
//   //var newCookieStore = {};
//   newCookieStore.location = location;
//   newCookieStore.min = min;
//   newCookieStore.max = max;
//   newCookieStore.avg = avg;
//   newCookieStore.randoms = randoms;
//   return newCookieStore;
// }
function cookieStoreConstructor(location, min, max, avg, hours, randoms) {
  //var this = {};
  this.location = location;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.randoms = randoms;
  this.getRandomCookieCount= function(){
    return Math.floor(((Math.random() * (this.max - this.min) + this.min + 1)) * this.avg);
  };

  //Cookies per hour
  this.randoms = function(){
    for (var i =0; i<pikePlace.hours.length; i++){
      pikePlace.Randoms.push(pikePlace.getRandomCookieCount());

      //Multiplied by average Cookies
      console.log(pikePlace.Randoms[i]);
    }
  };
  //Calculate sum - Randoms
  var sum=0;
  this.randoms = function(Randoms){
    for (var i=0; i<this.randoms.length; i++){
      sum = sum + this.randoms[i];
      console.log('randoms: '+ this.randoms[i]);
      console.log('sum:'+ sum);
    }
    return sum;

  };
  this.randoms.push(sum);

  var store1 = cookieStoreConstructor('Pike Place', 17, 88, 5.2,[]);

  var store2 = cookieStoreConstructor('Sea Tac Airport', 6, 24, 1.2, []);

  var store3 = cookieStoreConstructor('Southcenter',11, 38, 1.9, []);

  var store4 = cookieStoreConstructor('Bellevue Square',20, 48, 3.3,[]);

  var store5 = cookieStoreConstructor('Alki', 3, 24, 2.6,[]);


  for (i =0; i<8; i++){
    //Create a cell
    var cell = document.createElement('td');
    //Create a text node, append the text to cell
    cell.appendChild(document.createTextNode(cookieStore.hours[i] + ":"));
    cell.appendChild(document.createTextNode(cookieStore.Randoms[i]));
    //Append cell to table
    parent.appendChild(cell);
  }
  child=document.createElement('td');
  child.textContent = 'Total: '+ cookieStoreSum();
  parent.appendChild(child);
}

    this.render = function(){
      var storeList = document.getElementById('storeList');
      var liElement = document.createElement('li');
      liElement.textContent = this.location + '' +this.min + '' + this.max + ''+ this.avg + '' + this.randoms;
      storeList.appendChild(liElement);

    }

    this.renderAsRow = function(){
      var storeTable = document.getElementById('storeTable');
      var trElement = document.createElement('tr');
      var locationData=document.createElement('td');
      var minData = document.createElement('td');
      var maxData =document.createElement('td');
      var avgData =document.createElement('td');
      var randomsData =document.createElement('td');
      locationData.textContent=this.location;
      minData.textContent = this.min;
      maxData.textContent = this.max;
      avgData.textContent = this.avg;
      randomsData.textContent = this.randoms;
      trElement.appendChild(locationData);
      trElement.appendChild(minData);
      trElement.appendChild(maxData);
      trElement.appendChild(avgData);
      trElement.appendChild(randomsData);
      storeTable.appendChild(trElement);

}

    store1.renderAsRow();
    store2.renderAsRow();
    store3.renderAsRow();
    store4.renderAsRow();
    store5.renderAsRow();
