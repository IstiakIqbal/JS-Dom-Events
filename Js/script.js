/*
const liCollection = document.getElementsByTagName('li');

for(li of liCollection){
    console.log(li.innerText);
}
*/

// const fruits = document.getElementById('fruits-title');
// fruits.innerText = 'All the cars collection';

// const individualFruit = document.getElementsByClassName('individual-fruit');

// for(const fruit of individualFruit)
// {
//     console.log(fruit.innerText);
// }

// const section = document.querySelectorAll('section li');

// for(const sectionLi of section)
// {
//     sectionLi.style.color = 'red';
//     sectionLi.style.backgroundColor = 'yellow';
//     sectionLi.style.border = '2px dashed gray';
//     sectionLi.style.margin = '22px';
//     sectionLi.style.padding = '12px';
// // }

// const placeContainer = document.getElementById('places-container');
// placeContainer.classList.add('largeText')
// placeContainer.classList.remove('largeText');

//where to add
const placeList = document.getElementById('place-list');

// what to add
const li = document.createElement('li');
li.innerText = 'Sundarban';

//Then add there as a child
placeList.appendChild(li);

// 1
const main = document.getElementById('main');
// 2
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'Welcome to dom again'

const li1 = document.createElement('li');
li1.innerText = 'Bandorbon';
const li2 = document.createElement('li');
li2.innerText = 'Khagrachari';
const li3 = document.createElement('li');
li3.innerText = 'Manikchari';
const li4 = document.createElement('li');
li4.innerText = 'Himchori';

const ul = document.createElement('ul');

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);

section.appendChild(h1);
section.appendChild(ul);

main.appendChild(section);