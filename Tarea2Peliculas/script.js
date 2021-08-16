import {data} from './data/data.js';

let template1 = document.querySelector('#template').content;
let peliculasAll  = document.getElementById('peliculasAll');
let fragment = document.createDocumentFragment();
const descripcion = document.createDocumentFragment();


document.addEventListener('DOMContentLoaded', () => {
    loadData(data);
})
const loadData = data => {
    data.forEach(pelicula => {
        const{id,nombre, imagen}= pelicula;
        descripcion.innerHTML = `<table border="2px" align="justify">
        <tr>
            <td rowspan="3"><img src=""  width="400" height="500"></td>
            <td align="center">
             <h1> ${nombre} </h1>
             <h4> ${id} 1h 29min</h4>
             <h4> Genero: Ciencia ficción, Acción</h4>
             <h5> Dirigida por Luc Besson </h5>
             <p> ${nombre}</p>
            </td>
        </tr>
    </table>
        `
        template1.querySelector('h5').textContent = nombre
        template1.querySelector('img').setAttribute('src',imagen)
        template1.querySelector('a').setAttribute('href',descripcion)


        const clone = template1.cloneNode(true);
        fragment.appendChild(clone)
    })
    peliculasAll.appendChild(fragment);

}

boton.addEventListener('click', function () {

    let nombre = document.querySelector('.nombre').value;
    let email = document.querySelector('.email').value;
    let ciudad = document.querySelector('.ciudad').value;


    if (nombre == "" || email == "" || ciudad == "") {
        alert('Ingresar todos los campos requeridos');
        return true;
    }
    else {

        localStorage.setItem("Nombre", nombre);
        localStorage.setItem("Email", email);
        localStorage.setItem("Ciudad", ciudad);
        getLocalStorage();

        return false;
    }
})

function getLocalStorage() {
    let nombreGuardado = localStorage.getItem("Nombre");
    let emailGuardado = localStorage.getItem("Email");
    let ciudadGuardada = localStorage.getItem("Ciudad");
    alert(`El usuario ${nombreGuardado}, con correo ${emailGuardado} y de la ciudad de
    ${ciudadGuardada} ha quedado suscrito a NetNet`);
}


