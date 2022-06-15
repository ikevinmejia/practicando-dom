import data from "./data.js";
import { crearTarjeta } from "./modules/crear-tarjeta.js";

{/* <section class="section">
        <img class="img" src="" alt="imagen">
        <h2 class="title">Hola</h2>
        <button class="button">Button</button>
</section> */}

const root = document.querySelector('.root');

/* for(let i = 0; i <= data.length; i++){
    root.append(crearTarjeta(i))
} */

data.forEach(element =>  {
    root.append(crearTarjeta(element.imagen, element.nombre));
});

document.addEventListener('DOMContentLoaded', () => {

    document.addEventListener('click', ({target}) => {

        if(target.classList.contains('button')){
            localStorage.setItem('clave', target.id);

            window.location.href = './pages/otra-pagina.html'
        }
    });
})
