/*
1. inserisco tutte le img nell'array
2. Creo un ciclo FOR ed inserisco nel items-wrapper gli elementi HTML che contengono le img con già classe hide
  2.a mostro solo la prima img
3. 
*/


// Elements
const itemsWrapper = document.querySelector('.items-wrapper');
const itemsCollection = document.getElementsByClassName('img');

let counterImg = 0;

// 1
const images = [
  'assets/img/01.webp',
  'assets/img/02.webp',
  'assets/img/03.webp',
  'assets/img/04.webp',
  'assets/img/05.webp',
];

console.log(images);

// 2
for(let i = 0; i < images.length; i++){
  const img = images[i];
  itemsWrapper.innerHTML += `<img class="img hide" src="${img}">`
  
}

// 2.a
itemsCollection[counterImg].classList.remove('hide');


