//Assignment one
function checkValue(){
  let number = 200;
  for (let i = 1; i <= number; i++) {
    if ((i % 8 == 0 && i % 6 == 0)){
      console.log("ShamsTIIDELAB");
    }
    else if (i % 6 == 0) {
      console.log('Shams');
    }
    else if (i % 8 == 0){
      console.log('TIIDELAB');
    }
    else
    console.log(i);
  }
}
checkValue();

//Assignment two
function createChessBoard(number) {
  //declaration
  // let number = 8;
  let chessBoard = '';
  for (let index = 0; index < number; index++) {
    for (let x = 0; x < number; x++) {
      if ((x + index) % 2 == 0){
        chessBoard += " ";
      }
      else{
        chessBoard += "#";
      }
    }
    chessBoard += `\n`;
  }
  console.log(chessBoard);
}
createChessBoard();
