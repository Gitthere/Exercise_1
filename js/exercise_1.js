//contained to hold 1000 scrambled numbers
var randomlyGeneratedNumbers = [];
//generate random numbers
for (i = 0; i < 1000; i++) {
  //truncates decimals and creates number between 1-1000
  var newlyGeneratedNumber = Math.floor(Math.random()*1000);
  console.log(Math.floor(Math.random()*1000));

  randomlyGeneratedNumbers.push(newlyGeneratedNumber);

};