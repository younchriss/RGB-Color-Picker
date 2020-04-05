/*var colors = [
        "rgb(255, 0, 0)",
        "rgb(255, 255, 0)",
        "rgb(0, 255, 0)",
        "rgb(0, 255, 255)",
        "rgb(0, 0, 255)",
        "rgb(255, 0, 255)"
] */

//More efficient way of creating random Colors
var colors = [];
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var numSquares = 6; // monitors which game mode we are in
var modeButtons = document.querySelectorAll(".mode");
var body = document.querySelector("body");

selectr();
init();



function init() {
    setUpModeButtons();
    setUpSquares();
    reset();
}

function selectr(){
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
}

function setUpModeButtons(){
    //modebuttons event listeners
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            selectr();
            this.classList.add("selected");
            if (this.textContent === "Easy") {
                numSquares = 3;
            } else { 
                numSquares = 6;
                body.style.background = "";
            };
            reset();
        });
    }
}

function setUpSquares(){
    for(var i = 0; i < squares.length; i++) {
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color of c;ickedColor to pickedColor
            console.log( pickedColor, clickedColor);
            if (clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play Again?";

            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
    reset();
}


function reset(){
     //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick new random colors from aray
    pickedColor = pickColor();
    //change colorDisplay text to match pickedColor
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colours";
    messageDisplay.textContent = null;
    //change colors of squares
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block"
            squares[i].style.backgroundColor = colors[i]; 
        } else {
            squares[i].style.display = "none";
        }
    }
    //reset h1 background color
    h1.style.backgroundColor = "steelblue";  
}



for(var i = 0; i < squares.length; i++) {
    // add colors to squares
    squares[i].style.backgroundColor = colors[i]; 

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color of c;ickedColor to pickedColor
        console.log( pickedColor, clickedColor);
        if (clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = pickedColor;
            resetButton.textContent = "Play Again?";

        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}


resetButton.addEventListener("click", function() {
    reset();
    /*//generate all new colors
    colors = generateRandomColors(numSquares);
    //pick new random colors from aray
    pickedColor = pickColor();
    //change colorDisplay text to match pickedColor
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i]; 
    }
    //reset h1 background color
    h1 = document.querySelector("h1");
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = null;
    this.textContent = "New Colours"; */
})

/*
easyButton.addEventListener("click", function(){
    easyButton.classList.toggle("selected");
    hardButton.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    // for each square check if they are inc in the colors array if not, hide them
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

 hardButton.addEventListener("click", function(){
    this.classList.toggle("selected");
    easyButton.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    // for each square check if they are inc in the colors array if not, hide them
    for(var i = 0; i < squares.length; i++){
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
    }
});

*/

//Function to change all squares
function changeColors(color){
    //loop through each square
    for(var i = 0; i < squares.length; i++){
        //change each color to match pickeColor
        squares[i].style.backgroundColor = color; 
    }
    
}


function pickColor(){
    //pick random whole number for rgb colors
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


function generateRandomColors(num){
    //make an array
    var arr = [];
    //repeat something num number of times
    for (var i = 0; i < num; i++){
        //get random color and push into array
        arr.push(randomColor());
    }

    //return that array
    return arr;
}

//generate random color function
function randomColor(){
    //pick a "red" from 0 - 255
   var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
   var g = Math.floor(Math.random() * 256); 
    //pick a "blue" from 0 - 255
   var b= Math.floor(Math.random() * 256); 

    return "rgb(" + r +", " + g +", " + b + ")";
} 