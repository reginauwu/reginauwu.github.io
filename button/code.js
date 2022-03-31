// console.log("the Message!");

// let myName = "rebecca"
// let myLast = "leopold"

// console.log(myName + " "+ myLast + 45)

let theButton1 = document.querySelector(".button1");
let theButton2 = document.querySelector(".button2");
let theBody = document.querySelector("body")
let theTxt = document.querySelector("h3")
var sound1 = new Audio("fart-1.wav");
var sound2 = new Audio("fart-8.wav");

theButton1.addEventListener('click', buttonOne)
theButton2.addEventListener('click', buttonTwo)


function buttonOne(){
    console.log("you clicked!");
    console.log(theBody.style)
    // theBody.style.backgroundColor = "brown"
    theBody.style.backgroundImage = "url('dog.png')";
    theTxt.textContent = "YOU GOT FARTED ON"
    theButton1.textContent = "HAHAHAH U GOT FARTED ON"

    sound1.play();
    sound2.play(); 
}

function buttonTwo(){
    console.log("you clicked!");
    console.log(theBody.style)
    // theBody.style.backgroundColor = "brown"
    theBody.style.backgroundImage = "url('dog.png')";
    theTxt.textContent = "YOU GOT FARTED ON AGAIN"
    theButton2.textContent = "AAHAHAHAHHA U GOT FARTED ON TWICE"

    sound1.play();
    sound2.play(); 
}
