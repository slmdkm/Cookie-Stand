//Lab06 - Literals

//Create object store and property/values
var pikePlace ={
  location: "Pike Place Market",
  min:17,
  max:88,
  avg:5.2,
  hours:["10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM","5PM"],
  pikePlaceRandoms:[],


  //Generate random numbers with max/min range
  getRandomCookieCount:  function(){
    return Math.floor(((Math.random() * (pikePlace.max-pikePlace.min) + pikePlace.min + 1)) + pikePlace.min * pikePlace.avg);
  }
};

for (var i =0; i<pikePlace.hours.length; i++){
  pikePlace.pikePlaceRandoms.push(pikePlace.getRandomCookieCount());
}

//Calculate sum
var sum =0;
for (var i=0; i<pikePlace.pikePlaceRandoms.length; i++){
  sum = sum + pikePlace.pikePlaceRandoms[i];

}
 // return sum;

var pikePlaceTotal = sum;
