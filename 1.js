const color = ["red","blue","yellow","green"];

let shuffledColors = [];
let turn = 0;


function playCorrectSound() {
    let correct = new Audio("sounds/cute-level-up-3-189853.mp3");
    correct.play();
  }

function showColors(){
return color.sort(()=> Math.random() -5.0);


} 




function displayAndFadeColors(){

   shuffledColors= showColors();
    console.log(shuffledColors);

    for ( let i= 0; i< shuffledColors.length; i++) {
        console.log( shuffledColors[i])
        let squareEL = document.querySelector(`#${shuffledColors[i]}`);

        setTimeout (() => {
            squareEL.style.backgroundColor =shuffledColors[i];
        }, i * 1000);

        setTimeout(()=>{
            squareEL.style.backgroundColor="white";
        }, i * 1000 + 1000);
    }
}

function checkColors(turn, clickedColor) {
    if (clickedColor === shuffledColors[turn]) {
     
      if (turn === shuffledColors.length - 1) {
       playCorrectSound(); 
        alert("You won ");
        setTimeout(() => {}, 3000);
      }
    } else {
      alert("You lost ");
       displayAndFadeColors();
    }
  }

  function makeAllColorsWhite() {
    const squares = document.querySelectorAll(".red, .blue, .yellow, .green");
  
    for (let i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = "white";
    }
  }


const colorRedEL = document.querySelector("#red");
const colorBlueEL = document.querySelector("#blue");
const coloryellowEL = document.querySelector("#yellow");
const colorGreenEL = document.querySelector("#green");
const buttonStartEL = document.querySelector("#button_start");

 colorRedEL.addEventListener("click", () =>{
    checkColors(turn, "red");
    turn++;
  });



colorBlueEL.addEventListener("click", () => {
    checkColors(turn, "blue");
    turn++;
  });


coloryellowEL.addEventListener("click", () =>  {
    checkColors(turn, "yellow");
    turn++;
  });


colorGreenEL.addEventListener("click", () =>{
    checkColors(turn, "green");
    turn++;
  });
  

 buttonStartEL.addEventListener("click", () => { displayAndFadeColors();
    
 });
/* 
function makeAllTheColorWhite(){

    const squares= document.querySelectorAll(".red, .blue, .yellow, .green");
    for (let i =0; i< squares.length; i++){
        console.log(squares[i]);
        squares[i].style.backgroundColor="white"
    }
}
/*  */

/* colorRedEL.addEventListener("click", ()=>{
 });
 

colorBlueEL.addEventListener("click", ()=>{ 
});

coloryellowEL.addEventListener("click", ()=>{ 
});

colorGreenEL.addEventListener("click", ()=>{ 
});  */


/* const element = document.getElementById("red","blue","yellow","green");
element.addEventListener("click", showTheAnswr2); */


/* const pickColor = ['green', 'yellow', 'blue', 'red'];
function showTheAnswr() {
    if ( pickColor === pickColor) {
        alert("winner!");
    } else {
        alert("try agine");
    }
} */


/* const pickColor2 = ['red', 'blue', 'yellow', 'green']
function showTheAnswr2() {
    const element = document.getElementById("red","blue","yellow","green");
    if ( pickColor2 === pickColor2) {

        ("click", ()=>{ alert ("winner!")})
        
    } else {
        alert("try agine");
    }
} */