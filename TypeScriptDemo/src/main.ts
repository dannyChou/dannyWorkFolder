
let myFunc = function(name, weather="raining",...extraArgs){
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today.")
    for(let i=0; i <extraArgs.length;i++){
      console.log("Extra Arg:" + extraArgs[i]);
    }
  }

myFunc("Danny","sunny");

myFunc("Kenny");

myFunc("Kenny","sunny","one","two","three");

let myFunc2 = (nameFunction) => ("Hello " + nameFunction() + "'");
let printName = (nameFunction,printFunction) => printFunction(myFunc2(nameFunction));

console.log( myFunc2(function() { return "DannyChou" }));

let messageFunction = function(name, weather){
  let message = "Hello, Adam";
  if (weather == "sunny"){
    let message = "It is a nice day.";
    console.log(message);
  }
  else{
    let message = "It is " + weather + " today";
    console.log(message);
  }
  console.log(message);
}

messageFunction("trace","raining");

let messageFunctiopn2 = function(weather) {
  let message = `It is ${weather} today`;
  console.log(message);
}

messageFunctiopn2("hot ");