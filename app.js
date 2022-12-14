//Función para obtener los tags.
const $ = selector => document.querySelector(selector);


//Selecionando los tags.
const wrapper = $('.wrapper');
const ticket = $('.ticket');


//Recuperando los objetos width y height del wrapper tag especificando que información con .getBoundingClientRect();
const { width, height } = wrapper.getBoundingClientRect();


//Valores basados en los objetos obtenidos.
const halfWidth = width / 2;
const halfHeight = height /2;


//Modificamos el evento 'mousemove' para que la tarjeta rote. 
wrapper.addEventListener('mousemove', event => {

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

//Cuando el mouse salga del ticket activcva evento que hace que vuelva a su posición original.
wrapper.addEventListener('mouseleave', () => {

    //Añadiendo atributo a la clase "wrapper" la transición suave y el tiempo.
    ticket.style.transition = 'transform .5s ease-in-out';

    //Especificación a que coordenadas debe volver el ticket. 
    ticket.style.transform = 'rotateX(0deg) rotateY(0deg)';
});