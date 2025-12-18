let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGame = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
const clickSound = new Audio("assets/draw.wav");
const winSound = new Audio("assets/win.wav");



let turnO = true;


const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

resetBtn.addEventListener("click", ()=>{
    clickSound.currentTime =0;
    clickSound.play();
    boxes.forEach(box => {
    box.innerText = "";
    box.disabled = false;
});
    turnO = true;
     msgContainer.classList.add("hide");
});

newGame.addEventListener("click", ()=>{
    clickSound.currentTime =0;
    clickSound.play();
    for(box in boxes){
        boxes[box].innerText = "";
    };
    enableBtn();
    turnO = true;
     msgContainer.classList.add("hide");
});



boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        clickSound.currentTime =0;
        clickSound.play();
        if (turnO){
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBtn = ()=>{
    for(box of boxes){
        box.disabled = true;
    };
};

const enableBtn = ()=>{
    for(box of boxes){
        box.disabled = false;
        
    };
};

const showWinner = (winner) =>{
    winSound.currentTime = 0;
    winSound.play();
    msg.innerText = `Congrtulations, winner is ${winner}` ;
    msgContainer.classList.remove("hide");
    disableBtn();
}


const checkWinner = () =>{
    for(let pattern of winPattern){
       let pos1Val = boxes[pattern[0]].innerText;
       let pos2Val = boxes[pattern[1]].innerText;
       let pos3Val = boxes[pattern[2]].innerText;
       if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
            console.log(`${pos1Val} is our winner`);
            showWinner(pos1Val);
            };
       }
    }
}; 




