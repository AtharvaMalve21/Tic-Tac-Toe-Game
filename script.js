let b = document.querySelectorAll(".box") ;

let rb = document.querySelector("#reset-button") ;

let newGameBtn = document.querySelector("#new-btn") ;

let msgContainer = document.querySelector(".msg-container") ;

let msg = document.querySelector("#msg") ;

let tO = true ; //playerX, playerO

const winPatterns = [
    [0,1,2] ,
    [0,3,6] ,
    [0,4,8] ,
    [1,4,7] ,
    [2,5,8] ,
    [2,4,6] ,
    [3,4,5] ,
    [6,7,8] ,
];

// console.log(winPatterns) ;

const resetGame = () => {
    tO = true ;
    enableBoxes() ;
    msgContainer.classList.add("hide") ;
}

b.forEach(box => {
    box.addEventListener("click", () => {
        //playerO turn
        if(tO) {
            box.innerText = "X" ;
            box.style.color = "#b0413e" ;
            tO = false ;
        }
        //playerX turn
        else {
            box.innerText = "O" ;
            box.style.color = "rgb(143, 5, 118)" ;
            tO = true ;
        }
        box.disabled = true ;

        checkWinner() ;
    });
});

const disableBoxes = () => {
    for(let box of b) {
        box.disabled = true ;
    }
}

const enableBoxes = () => {
    for(let box of b) {
        box.disabled = false ;
        box.innerText = "" ;
    }
}


const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner} ` ;
    msgContainer.classList.remove("hide") ;
    disableBoxes() ;
}

const checkWinner = () => {

    for(let pattern of winPatterns) {
       let posVal1 = b[pattern[0]].innerText ;
       let posVal2 = b[pattern[1]].innerText ;
       let posVal3 = b[pattern[2]].innerText ;

       if(posVal1!="" && posVal2!="" && posVal3!="") {
            if(posVal1===posVal2 && posVal2===posVal3) {
                console.log("Winner", posVal1) ;
                showWinner(posVal1) ;
            }
       }
    }
};

newGameBtn.addEventListener("click",resetGame) ;
rb.addEventListener("click", resetGame) ;
