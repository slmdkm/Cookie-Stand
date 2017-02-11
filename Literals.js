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
  var arraySum = function(Randoms){
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
  arraySum(pikePlace.Randoms);
  var parent = document.getElementById('PikePlace');


  for (i =0; i<8; i++ ){
  child = document.createElement('li');
  child.textContent = pikePlace.Randoms[i];
  parent.appendChild(child);
  console.log(child);
  }
  child=document.createElement('li');
  child.textContent = arraySum() + ' -total';
  parent.appendChild(child);


//Create object store and property/values
//   var seaTacAirport = {
//     location: "Sea Tac Airport",
//     min:6,
//     max:24,
//     avg:1.2,
//     hours:["10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM","5PM"],
//     Randoms:[],
//
//   //Generate random numbers with max/min range
//   getRandomCookieCount:  function(){
//     return Math.floor(((Math.random() * (seaTacAirport.max-seaTacAirport.min) + seaTacAirport.min + 1)) + seaTacAirport.min * seaTacAirport.avg);
//   }
// };

// for (var i =0; i<seaTacAirport.hours.length; i++){
//   seaTacAirport.Randoms.push(seaTacAirport.getRandomCookieCount());
// }








//Create object store and property/values
// var southCenter ={
//   location: "Southcenter",
//   min:11,
//   max:38,
//   avg:1.9,
//   hours:["10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM","5PM"],
//   Randoms:[],
//
//   //Generate random numbers with max/min range
//   getRandomCookieCount:  function(){
//     return Math.floor(((Math.random() * (southCenter.max - southCenter.min) + southCenter.min + 1)) + southCenter.min * southCenter.avg);
//   }
//   };
//
//   for (var i =0; i<southCenter.hours.length; i++){
//   southCenter.Randoms.push(southCenter.getRandomCookieCount());
//  }







  //Create object store and property/values
  // var bellevueSquare ={
  //   location: "Bellevue Square",
  //   min:20,
  //   max:48,
  //   avg:3.3,
  //   hours:["10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM","5PM"],
  //   Randoms:[],
  //
  //   //Generate random numbers with max/min range
  //   getRandomCookieCount:  function(){
  //     return Math.floor(((Math.random() * (bellevueSquare.max-bellevueSquare.min) + bellevueSquare.min + 1)) + bellevueSquare.min * bellevueSquare.avg);
  //   }
  //   };
  //
  //   for (var i =0; i<bellevueSquare.hours.length; i++){
  //   bellevueSquare.Randoms.push(bellevueSquare.getRandomCookieCount());
  //   }
  //
  //
  //
  //
  //
  //
  //
  //   //Create object store and property/values
  //   var alki ={
  //     location: "Alki",
  //     min:3,
  //     max:24,
  //     avg:2.6,
  //     hours:["10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM","5PM"],
  //     Randoms:[],
  //
  //     //Generate random numbers with max/min range
  //     getRandomCookieCount:  function(){
  //       return Math.floor(((Math.random() * (alki.max-alki.min) + alki.min + 1)) + alki.min * alki.avg);
  //     }
  //     };
  //
  //     for (var i =0; i<alki.hours.length; i++){
  //     alki.Randoms.push(alki.getRandomCookieCount());
  //     }







// var arraySum = function(Randoms){
//   var sum =0;
//   for (var i=0; i< seaTacAirport.Randoms.length; i++){sum = sum + seaTacAirport.Randoms[i];
//   }return sum;
// }
//
// var arraySum = function(Randoms){
//   var sum =0;
//   for (var i=0; i< southCenter.Randoms.length; i++){sum = sum + southCenter.Randoms[i];
//   }return sum;
// }

// var arraySum = function(Randoms){
//   var sum =0;
//   for (var i=0; i< bellevueSquare.Randoms.length; i++){sum = sum + bellevueSquare.Randoms[i];
//   }return sum;
// }
//
// var arraySum = function(Randoms){
//   var sum =0;
//   for (var i=0; i< alki.Randoms.length; i++){sum = sum + alki.Randoms[i];
//   }return sum;
// }

//Function is stored in variable called pikePlaceTotal
//var pikePlaceTotal = arraySum(pikePlace.Randoms);



//Create a list
 //var list = document.createElement('li');

//Create a text node, append the text to list
 //list.appendChild(document.createTextNode(pikePlace.hours[i] + ":"));
 //list.appendChild(document.createTextNode(pikePlace.Randoms[i]));

//Append list to body
 //parent.appendChild(list);

 //}

 //Again, create a list
 //var list = document.createElement('li');

//Create a text node element, append(add) the text to list
 //list.appendChild(document.createTextNode("Total:" + arraySum[i]));

 //Using this method append(add) list to body
 //parent.appendChild(list);

 //Return the newly made list
//return parent;
//}

//makeUL(pikePlace.Randoms,arraySum);



// function makeUL(Randoms, Totals, Hours){
//
// for (i =0; i<9 ; i++ ){
// var parent = document.getElementById('Sea Tac Aiport');
//
//
//
// //Create a list for seaTacAirport
//  var list = document.createElement('li');
// //Create a text node, append the text to list
//  list.appendChild(document.createTextNode(seaTacAirport.hours[i] + ":"));
//  list.appendChild(document.createTextNode(seaTacAirport.Randoms[i]));
// //Append list to body
//  parent.appendChild(list);
//
//  }
//  //Again, create a list
//  var list = document.createElement('li');
// //Create a text node element, append(add) the text to list
//  list.appendChild(document.createTextNode("Total:" + arraySum[i]));
//
//  //Using this method append(add) list to body
//  parent.appendChild(list);
//
//  //Return the newly made list
// return parent;
// }
// makeUL(pikePlace.Randoms,arraySum);
