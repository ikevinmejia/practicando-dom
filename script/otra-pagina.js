import data from "../data.js";
import { crearTarjeta } from "../modules/crear-tarjeta.js";

const root = document.querySelector('.root');

const localS = localStorage.getItem('clave');


const datosEncontrados = () => {
    const dato = data.find(element => {
        return element.nombre === localS;
    })
    return dato;
}

const {nombre, imagen} = datosEncontrados();


root.append(crearTarjeta(`.${imagen}`, nombre));

/*
const prueba = data.find(element => {
    return element.nombre === localS;
})
*/

