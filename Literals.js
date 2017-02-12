//Lab06 - Literals

//Create object store and property/values
var pikePlace ={
  location: "Pike Place",
  min:17,
  max:88,
  avg:5.2,
  hours:["10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM","5PM"],
  Randoms:[],
  //Generate random numbers with max/min range

  getRandomCookieCount: function(){
  return Math.floor(((Math.random() * (pikePlace.max-pikePlace.min) + pikePlace.min + 1)) * pikePlace.avg);
   }
}

//Cookies per hour

  for (var i =0; i<pikePlace.hours.length; i++){
  pikePlace.Randoms.push(pikePlace.getRandomCookieCount());

  //multiplied by average Cookies
  console.log(pikePlace.Randoms[i]);
  }


  //Calculate sum(pikePlace.Randoms is MT array)
  var sum=0;
  var pikePlaceSum = function(Randoms){
  for (var i=0; i<pikePlace.Randoms.length; i++){
    sum = sum + pikePlace.Randoms[i];
  console.log('randoms: '+ pikePlace.Randoms[i]);
  console.log('sum:'+ sum);
  }
  //return sum didn't work because I didn't have it in a function!  Needed to create a function arraySum! Created it.
  return sum;

  }
  //Call
  var child;
  pikePlaceSum(pikePlace.Randoms);
  var parent = document.getElementById('PikePlace');

  for (i =0; i<8; i++){
    //Create a list for Pike Place
    var list = document.createElement('li');
    //Create a text node, append the text to list
    list.appendChild(document.createTextNode(pikePlace.hours[i] + ":"));
    list.appendChild(document.createTextNode(pikePlace.Randoms[i]));
    //Append list to body
    parent.appendChild(list);
  }
  child=document.createElement('li');
  child.textContent = 'Total: '+ pikePlaceSum();
  parent.appendChild(child);

//SEATAC AIRPORT
  var seaTacAirport = {
    location: "Sea Tac Airport",
    min:6,
    max:24,
    avg:1.2,
    hours:["10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM","5PM"],
    Randoms:[],

  getRandomCookieCount:  function(){
    return Math.floor(((Math.random() * (seaTacAirport.max-seaTacAirport.min) + seaTacAirport.min + 1))* seaTacAirport.avg);
  }
}

for (var i =0; i<seaTacAirport.hours.length; i++){
  seaTacAirport.Randoms.push(seaTacAirport.getRandomCookieCount());
  console.log(seaTacAirport.Randoms[i]);
  }


  var sum=0;
  var seaTacAirportSum = function(Randoms){
  for (var i=0; i<seaTacAirport.Randoms.length; i++){
    sum = sum + seaTacAirport.Randoms[i];
  console.log('randoms: '+ seaTacAirport.Randoms[i]);
  console.log('sum:'+ sum);
  }
  return sum;

  }
  //Call
  var child;
  seaTacAirportSum(seaTacAirport.Randoms);
  var parent = document.getElementById('Sea Tac Airport');

  for (i =0; i<8; i++){
    var list = document.createElement('li');
    list.appendChild(document.createTextNode(seaTacAirport.hours[i] + ":"));
    list.appendChild(document.createTextNode(seaTacAirport.Randoms[i]));
    parent.appendChild(list);
  }
  child=document.createElement('li');
  child.textContent = 'Total: '+ seaTacAirportSum();
  parent.appendChild(child);



//SOUTHCENTER
var southCenter ={
  location: "Southcenter",
  min:11,
  max:38,
  avg:1.9,
  hours:["10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM","5PM"],
  Randoms:[],

  getRandomCookieCount:  function(){
    return Math.floor(((Math.random() * (southCenter.max - southCenter.min) + southCenter.min + 1)) * southCenter.avg);
  }
  }

  for (var i =0; i<southCenter.hours.length; i++){
  southCenter.Randoms.push(southCenter.getRandomCookieCount());
  console.log(southCenter.Randoms[i]);
 }
 var sum=0;
 var southCenterSum = function(Randoms){
 for (var i=0; i<southCenter.Randoms.length; i++){
   sum = sum + southCenter.Randoms[i];
 console.log('randoms: '+ southCenter.Randoms[i]);
 console.log('sum:'+ sum);
 }
 return sum;

 }
 //Call
 var child;
 southCenterSum(southCenter.Randoms);
 var parent = document.getElementById('Southcenter');

 for (i =0; i<8; i++){
   var list = document.createElement('li');
   list.appendChild(document.createTextNode(southCenter.hours[i] + ":"));
   list.appendChild(document.createTextNode(southCenter.Randoms[i]));
   parent.appendChild(list);
 }
 child=document.createElement('li');
 child.textContent = 'Total: '+ southCenterSum();
 parent.appendChild(child);


  //BELLEVUE SQUARE
  var bellevueSquare ={
    location: "Bellevue Square",
    min:20,
    max:48,
    avg:3.3,
    hours:["10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM","5PM"],
    Randoms:[],


    getRandomCookieCount:  function(){
      return Math.floor(((Math.random() * (bellevueSquare.max-bellevueSquare.min) + bellevueSquare.min + 1))* bellevueSquare.avg);
    }
    }

    for (var i =0; i<bellevueSquare.hours.length; i++){
    bellevueSquare.Randoms.push(bellevueSquare.getRandomCookieCount());
    console.log(bellevueSquare.Randoms[i]);
    }

    var sum=0;
    var bellevueSquareSum = function(Randoms){
    for (var i=0; i<bellevueSquare.Randoms.length; i++){
      sum = sum + bellevueSquare.Randoms[i];
    console.log('randoms: '+ bellevueSquare.Randoms[i]);
    console.log('sum:'+ sum);
    }
    return sum;

    }
    //Call
    var child;
    bellevueSquareSum(bellevueSquare.Randoms);
    var parent = document.getElementById('Bellevue Square');

    for (i =0; i<8; i++){
      var list = document.createElement('li');
  list.appendChild(document.createTextNode(bellevueSquare.hours[i] + ":"));
      list.appendChild(document.createTextNode(bellevueSquare.Randoms[i]));
      parent.appendChild(list);
    }
    child=document.createElement('li');
    child.textContent = 'Total: '+ bellevueSquareSum();
    parent.appendChild(child);







  //   ALKI
    var alki ={
      location: "Alki",
      min:3,
      max:24,
      avg:2.6,
      hours:["10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM","5PM"],
      Randoms:[],


      getRandomCookieCount:  function(){
        return Math.floor(((Math.random() * (alki.max-alki.min) + alki.min + 1))* alki.avg);
      }
      }

      for (var i =0; i<alki.hours.length; i++){
      alki.Randoms.push(alki.getRandomCookieCount());
    console.log(alki.Randoms[i]);
      }

      var sum=0;
      var alkiSum = function(Randoms){
      for (var i=0; i<alki.Randoms.length; i++){
        sum = sum + alki.Randoms[i];
      console.log('randoms: '+ alki.Randoms[i]);
      console.log('sum:'+ sum);
      }
      return sum;

      }
      //Call
      var child;
      alkiSum(alki.Randoms);
      var parent = document.getElementById('Alki');

      for (i =0; i<8; i++){
        var list = document.createElement('li');
        list.appendChild(document.createTextNode(alki.hours[i] + ":"));
        list.appendChild(document.createTextNode(alki.Randoms[i]));
        parent.appendChild(list);
      }
      child=document.createElement('li');
      child.textContent = 'Total: '+ alkiSum();
      parent.appendChild(child);
