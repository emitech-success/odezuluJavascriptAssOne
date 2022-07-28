//Assignment one
function checkValue(){
  let number = 200;
  for (let i = 1; i <= number; i++) {
    //for numbers that are divisible by 6 and 8
    if ((i % 8 == 0 && i % 6 == 0)){
      console.log("ShamsTIIDELAB");
    }
    //for numbers divisible by 6 only
    else if (i % 6 == 0) {
      console.log('Shams');
    }
    //for numbers divisible by 8 only
    else if (i % 8 == 0){
      console.log('TIIDELAB');
    }
    //for numbers that are neither divisible by 6 nor 8
    else
    console.log(i);
  }
}
checkValue();

