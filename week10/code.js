let theButton = document.querySelector("button");
let theBody = document.querySelector("body")
let theTxt = document.querySelector("h3")

const text = document.querySelector(".text");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for (let i = 0; i < splitText.length; i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if (char === splitText.length) {
        complete();
        return;
    }
}


function complete() {
    clearInterval(timer);
    timer = null;
}

theButton.addEventListener('click', buttonOne)

function buttonOne(){
    console.log("you cliked!");
   console.log(theBody.style)
   theBody.style.backgroundColor = "pink"
    theTxt.textContent = "horray you pressed the button!"
}