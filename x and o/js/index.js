const boxes = Array.from(document.getElementsByClassName('box'));
const playText = document.getElementById('playText');
const restartBtn = document.getElementById('restartBtn')
const O = "O";
const X = "X";
let currentPlayer = X;
const space = [null, null, null, null, null, null, null, null, null];

const board = () => {
    boxes.forEach((box, index) =>{
        box.addEventListener('click', boxClicked);
    });
};

    

 const boxClicked = (e) => {
     const id = e.target.id;
     console.log(id);
     if(!space[id]){
         space[id] = currentPlayer;
         e.target.innerText = currentPlayer;
         if(hasWon()){
             playText.innerText = `${currentPlayer} has won`;
             return;
         }
         currentPlayer = currentPlayer === X ? O : X;
     }
 };

 const hasWon = () => {
     if(space[0] === currentPlayer){
         if(space[1] === currentPlayer && space[2] === currentPlayer){
            //  console.log(`${currentPlayer} wins up top`);
             return true;
         }
         if(space[3] === currentPlayer && space[6] === currentPlayer){
            // console.log(`${currentPlayer} wins on left`);
            return true;
        }
        if(space[4] === currentPlayer && space[8] === currentPlayer){
            // console.log(`${currentPlayer} wins diogonal`);
            return true;
        }
     } 
    else if (space[0] === currentPlayer) {
        if(space[2] === currentPlayer && space[5] === currentPlayer){
            // console.log(`${currentPlayer} wins up top`);
            return true;
        }
        if(space[6] === currentPlayer && space[7] === currentPlayer){
        //    console.log(`${currentPlayer} wins on left`);
           return true;
       }
     }
     if(space[4] === currentPlayer){
        if(space[1] === currentPlayer && space[7] === currentPlayer){
            // console.log(`${currentPlayer} wins up top`);
            return true;
     }
     if(space[3] === currentPlayer && space[5 ] === currentPlayer){
        // console.log(`${currentPlayer} wins up top`);
        return true;
    }
    }
 };


 const restart = () =>{
    space.forEach((elem, index) =>{
        space[index] = null;
    })
    boxes.forEach(box =>{
        box.innerText = '';
    })
    // playText.innerText = 'play again';
    // currentPlayer = X;
 }
 restartBtn.addEventListener('click', restart);

 restart();
 board();
