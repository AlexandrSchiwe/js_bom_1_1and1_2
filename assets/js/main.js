// console.log("works");

// JS Bom Level 1.1

// setTimeout(function myFunction() {
//     console.log("start in 3 seconds");
//     alert("Hallo");
// }, 3000);

// console.log("Start warten für 3 Sekunden...");

// setTimeout(function myFunction() {
//     console.log("Erledigt. Du hast 3 Sekunden verschwendet");
// }, 3000);

// let time = () => {
//     let i = new Date();
//     console.log(i.toLocaleTimeString());
// }

// time();

// let timer = setInterval(time, 1000);

// let counter = 10;

// console.log(counter);

// let countdown = () => {
//     let counter = 10;

//     console.log(counter);

//     counter--;

//     if (counter == 10) {
//         setInterval(counter, 1000);
//     } else if (counter == 0) {
//         console.log("Endlich Feierabend")
//     }
// }

// countdown();

// let counter = 10;

// let countdown = setInterval(() => {
//     console.log(counter);
//     counter--;
//     if (counter == 0) {
//         clearInterval(countdown);
//         console.log("Endlich Feierabend");
//     }
// }, 1000);

// JS Bom Level 1.2

let button = document.getElementById('button');
let div = document.querySelector('.zeit');
let counter = 100;

// setInterval(start, 100);

function start() {
    // console.log(counter);
    // console.log("button works");
    if (counter >= 100) {
        setInterval(start, 100);
    } else if (counter >= 0) {
        clearInterval(counter);
    }
    counter--;
    div.innerHTML = counter + '%';
};







