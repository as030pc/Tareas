//import {data} from './data/data.js';
const URL_Movies= "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1"
const imageMovies = `https://image.tmdb.org/t/p/w1280`
let template1 = document.querySelector('#template').content;
let fragment = document.createDocumentFragment();
//let descripcion = document.createDocumentFragment();
const items = document.getElementById('items');
const detail = document.getElementById('detail');
let pelicula = {};


async function obtenerPeliculas(url) {
    const res = await fetch(url);
    const data = await res.json()
    console.log(data.results)
    loadData(data.results)
    document.addEventListener('DOMContentLoaded', () => {
        loadData(data);
    
    })
}
obtenerPeliculas(URL_Movies)




const loadData = data => {
    data.forEach(pelicula => {
        const{id, title, poster_path, overview}= pelicula;
       
        template1.querySelector('h5').textContent = title
        template1.querySelector('img').setAttribute('src', imageMovies + poster_path)
        template1.querySelector('img').dataset.id = id;
        template1.querySelector('h6').textContent = overview;
        const clone = template1.cloneNode(true);
        
        fragment.appendChild(clone)
    })
    items.appendChild(fragment);

    items.addEventListener('click', e => {
    
    console.log(e.target.dataset.id);
    let idTarget = e.target.dataset.id;
    data.forEach(pelicula => {
        const {id, title, poster_path, overview} = pelicula;
        
        if(id == idTarget){
            
            
            const objeto = {
                id: id,
                title: title,
                poster_path: poster_path,
                overview: overview,
    
            }
            
            localStorage.setItem("Pelicula",JSON.stringify(objeto));
            getPelicula();
  
        }   
    })
    e.stopPropagation();
    e.preventDefault();
 })
 
 
 function getPelicula(){
     detail.innerHTML = '';
     
     pelicula = JSON.parse(localStorage.getItem("Pelicula")); 
    
     const {id, title, poster_path,overview} = pelicula;
     
     detail.innerHTML = `
     <table border="2px" align="center">
     <tr>
     
         <td align="center">
          <h2>${title}</h2>
          <h4>${overview}</h4>

         </td>
     </tr>
 </table>
     `
 }

    
}
 
// items.addEventListener('click', e => {
    
//     console.log(e.target.dataset.id);
//     let idTarget = e.target.dataset.id;
//     data.forEach(pelicula => {
//         const {id, title, poster_path, overview} = pelicula;
        
//         if(id == idTarget){
            
            
//             const objeto = {
//                 id: id,
//                 title: title,
//                 poster_path: poster_path,
//                 overview: overview,
    
//             }
            
//             localStorage.setItem("Pelicula",JSON.stringify(objeto));
//             getPelicula();
  
//         }   
//     })
//     e.stopPropagation();
//     e.preventDefault();
//  })
 
 
//  function getPelicula(){
//      detail.innerHTML = '';
     
//      pelicula = JSON.parse(localStorage.getItem("Pelicula")); 
    
//      const {id, title, poster_path,overview} = pelicula;
     
//      detail.innerHTML = `
//      <table border="2px" align="center">
//      <tr>
         
//          <td align="center">
//           <h2>${title}</h2>
//           <h4>${overview}</h4>

//          </td>
//      </tr>
//  </table>
//      `
//  }








/*
items.addEventListener('click', e => {
    let idObjetivo = e.target.dataset.id;
    console.log(e.target.dataset.id);

    data.forEach(pelicula => {
        const{id, title, poster_path, overview}= pelicula;
        if (id == idObjetivo) {
        detail.innerHTML = `<table border="2px" align="justify">
        <tr>
            <td rowspan="3"><img src=""${imageMovies + poster_path}""  width="400" height="500"></td>
            <td align="center">
             <h1> ${title} </h1>
             <p> ${overview}</p>
            </td>
        </tr>
    </table>
        `
        }
    })
    
        
    
    e.stopPropagation();
    e.preventDefault();
    
})

*/

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


