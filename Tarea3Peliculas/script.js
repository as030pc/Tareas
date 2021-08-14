import {data} from './data/data.js';

let template1 = document.querySelector('#template').content;
let peliculasAll  = document.getElementById('peliculasAll');
let fragment = document.createDocumentFragment();


document.addEventListener('DOMContentLoaded', () => {
    loadData(data);
})
const loadData = data => {
    data.forEach(pelicula => {
        const{id,nombre, imagen}= pelicula;
        template1.querySelector('h5').textContent = nombre
        template1.querySelector('img').setAttribute('src',imagen)
        const clone = template1.cloneNode(true);
        fragment.appendChild(clone)
    })
    peliculasAll.appendChild(fragment);

}
