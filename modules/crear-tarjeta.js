const crearTarjeta = (imagen, texto) => {
    const contenedor = document.createElement('section');
    const img = document.createElement('img');
    const title = document.createElement('h2');
    const button = document.createElement('button');

    contenedor.classList.add('section');
    img.classList.add('img');
    title.classList.add('title');
    button.classList.add('button');


    img.setAttribute('src', `.${imagen}`);
    title.textContent = texto;
    button.textContent = 'Ver más';
    button.setAttribute('id', texto);

    contenedor.append(img, title, button);

    return contenedor;
}

export {
    crearTarjeta,
}