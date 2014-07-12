//contained to hold 1000 scrambled numbers
var randomlyGeneratedNumbers = [];
//generate random numbers
for (i = 0; i < 1000; i++) {
  //truncates decimals and creates number between 1-1000
  var newlyGeneratedNumber = Math.floor(Math.random()*1000);
  console.log(Math.floor(Math.random()*1000));
  //check for duplicate numbers
  var duplicateNumber = randomlyGeneratedNumbers.indexOf(i);
  if (duplicateNumber != -1) {
    //if duplicate found generate new number and assign to 
    //newlyGeneratedNumber var
    newlyGeneratedNumber = Math.floor(Math.random()*1000;
  };//if not found, continue with loop
  //push checked numbers in container
  randomlyGeneratedNumbers.push(newlyGeneratedNumber);
};
console.log(randomlyGeneratedNumbers);


//##############use splice to randomly pull out numbers of established array
//by index, then place into new container
// var randomlyGeneratedNumbers = [];
// //generate random numbers
// for (i = 0; i <= 1000; i++) {
  
// randomlyGeneratedNumbers.push(i);
//   var randomIndex = Math.floor(Math.random()*1000);
//   randomlyGeneratedNumbers.splice(randomIndex, 1);
//   console.log(randomIndex);;;
  

// };
// console.log(randomlyGeneratedNumbers);