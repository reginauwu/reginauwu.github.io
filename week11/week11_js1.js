// https://stackoverflow.com/questions/8297754/adding-sound-to-page-using-jquery

console.log("yo");

const Q = $(".Q").on("click", myFunction);
const W = $(".W").on("click", myFunction);
const E = $(".E").on("click", myFunction);
const R = $(".R").on("click", myFunction);
const T = $(".T").on("click", myFunction);
const Y = $(".Y").on("click", myFunction);
const U = $(".U").on("click", myFunction);
const I = $(".I").on("click", myFunction);
const O = $(".O").on("click", myFunction);
const P = $(".P").on("click", myFunction);
const A = $(".A").on("click", myFunction);
const S = $(".S").on("click", myFunction);
const D = $(".D").on("click", myFunction);
const F = $(".F").on("click", myFunction);
const G = $(".G").on("click", myFunction);
const H = $(".H").on("click", myFunction);
const J = $(".J").on("click", myFunction);
const K = $(".K").on("click", myFunction);
const L = $(".L").on("click", myFunction);
const Z = $(".Z").on("click", myFunction);
const X = $(".X").on("click", myFunction);
const C = $(".C").on("click", myFunction);
const V = $(".V").on("click", myFunction);
const B = $(".B").on("click", myFunction);
const N = $(".N").on("click", myFunction);
const M = $(".M").on("click", myFunction);
const Backspace = $(".Backspace").on("click", erase);
const Enter = $(".Enter").on("click", enter);

let count = 0;
let word = "";

function myFunction() {
    console.log("click");
    const text = $(this).text() 

    $("<audio></audio>").attr({
        'src':'click.wav',
        'volume':0.4,
        'autoplay':'autoplay'
    }).appendTo("body");


    if (count == 0){
        $(".flexbox-item-1").text(text);
    }
    else if (count == 1) {
        $(".flexbox-item-2").text(text);
    }
    else if (count == 2) {
        $(".flexbox-item-3").text(text);
    }
    else if (count == 3) {
        $(".flexbox-item-4").text(text);
    }
    else if (count == 4) {
        $(".flexbox-item-5").text(text);
    }
    else if (count == 5) {
        $(".flexbox-item-6").text(text);
    }
    else if (count == 6) {
        $(".flexbox-item-7").text(text);
    }
    else if (count == 7) {
        $(".flexbox-item-8").text(text);
    }
    else if (count == 8) {
        $(".flexbox-item-9").text(text);
    }
    // else if (count == 9) {
    //     $(".flexbox-item-10").text(text);
    // }
    if (count < 9) {
        count += 1;
        word += text;
    }
    console.log(word);
}

function erase(){ 
    $("<audio></audio>").attr({
        'src':'click.wav',
        'volume':0.4,
        'autoplay':'autoplay'
    }).appendTo("body");


    if (count == 1) {
        $(".flexbox-item-1").text(null);
    }
    else if (count == 2) {
        $(".flexbox-item-2").text(null);
    }
    else if (count == 3) {
        $(".flexbox-item-3").text(null);
    }
    else if (count == 4) {
        $(".flexbox-item-4").text(null);
    }
    else if (count == 5) {
        $(".flexbox-item-5").text(null);
    }
    else if (count == 6) {
        $(".flexbox-item-6").text(null);
    }
    else if (count == 7) {
        $(".flexbox-item-7").text(null);
    }
    else if (count == 8) {
        $(".flexbox-item-8").text(null);
    }
    else if (count == 9) {
        $(".flexbox-item-9").text(null);
    }
    // else if (count == 10) {
    //     $(".flexbox-item-10").text(null);
    // }
    if (count > 0) {
        count -= 1;
    }
    word = word.slice(0,-1);
    console.log(word);
    console.log(count);
}

function enter() {
    $("<audio></audio>").attr({
        'src':'click.wav',
        'volume':0.4,
        'autoplay':'autoplay'
    }).appendTo("body");


    if (word == "STARBURST") {
        console.log("RIGHT!");
        $('.nextLevel').show();
        $('.sparkle').fadeIn(2000);
        $('.right').fadeIn(2000);

        $("<audio></audio>").attr({
            'src':'yay.wav',
            'volume':0.4,
            'autoplay':'autoplay'
        }).appendTo("body");

        $('.right').fadeOut(4000);
        $('.sparkle').fadeOut(4000);
    }
    else {
        console.log("WRONG!!");
        $('.wrong').fadeIn(2000);
        $('.wrong').fadeOut(4000);

        $("<audio></audio>").attr({
            'src':'boo.mp3',
            'volume':0.4,
            'autoplay':'autoplay'
        }).appendTo("body");

        restart();
    }
}

function restart() {
    count = 0;
    word = "";
    $(".flexbox-item-1").text(null);
    $(".flexbox-item-2").text(null);
    $(".flexbox-item-3").text(null);
    $(".flexbox-item-4").text(null);
    $(".flexbox-item-5").text(null);
    $(".flexbox-item-6").text(null);
    $(".flexbox-item-7").text(null);
    $(".flexbox-item-8").text(null);
    $(".flexbox-item-9").text(null);
    // $(".flexbox-item-10").text(null);
    console.log(word);
    console.log(count);
}