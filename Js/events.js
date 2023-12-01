// Method 1
{/* <button onclick="document.body.style.backgroundColor='yellow'">Make Yellow</button> */}

// Method 2
{/* 
<button onclick="makeRed()">Make Red</button>
function makeRed(){
    document.body.style.backgroundColor = 'red';
} 
*/}
/*
// Method 3
const makeBlueButton = document.getElementById('make-blue');
    makeBlueButton.onclick = makeBlue;

    function makeBlue(){
        document.body.style.backgroundColor='blue';
    }
*/

//Method 4
{/* <button id="make-purple">Make Purple</button>
const makePurpleButton = document.getElementById('make-purple');
console.log(makePurpleButton);
makePurpleButton.onclick = function makePurple()
{
    document.body.style.backgroundColor = 'purple';
} */}

// method 5

{/* <button id="make-pink">Make Pink</button>
const makePinkButton = document.getElementById('make-pink');
makePinkButton.addEventListener('click', makePink)
function makePink(){
    document.body.style.backgroundColor = 'pink';
} */}

// Method 6

// const makeGreenButton = document.getElementById('make-green');
//     makeGreenButton.addEventListener('click', function makeGreen(){
//         document.body.style.backgroundColor = 'green';
//     }

// method 7 (Final)

// document.getElementById('make-black').addEventListener('click', function makeBlack(){
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white';
// })
