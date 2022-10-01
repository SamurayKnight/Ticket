//Función para obtener los tags.
const $ = selector => document.querySelector(selector);


//Selecionando los tags.
const ticket = $('.ticket');


//Recuperando los objetos width y height del wrapper tag especificando que información con .getBoundingClientRect();
const { width, height } = document.body.getBoundingClientRect();


//Valores basados en los objetos obtenidos.
const halfWidth = width / 2;
const halfHeight = height /2;


//Modificamos el evento 'mousemove' para que la tarjeta rote. 
window.addEventListener('mousemove', event => {

    //Especificación de que adentro del ticket no tenga transición, si no la transición funciona mal.
    ticket.style.transition = 'none';

    //Obtenemos los objetos a modificar del evento 'mousemove'
    const { offsetX, offsetY} = event;

    //Operación matemática para hacer rotar la tarjeta y multiplicamos *10 para que los valores de rotación sean más grandes.
    const rotationX = ((offsetX - halfWidth) / halfWidth) * 10;
    const rotationY = ((offsetY - halfHeight) / halfHeight) * 10;

    //Añadiendo las rotaciones al ticket.
    ticket.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
});

