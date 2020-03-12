//Evento principal para que admita keydown
window.addEventListener('keydown', mainFuncDrumMachine)

function mainFuncDrumMachine(e){
// Creamos un query selector para el audio con el parametro e que nos indica el keyCode
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //keycode es el codigo de la tecla pulsada
    const pad = document.querySelector(`.pad[data-key="${e.keyCode}"]`); //keycode es el codigo de la tecla pulsada y nos muestra la clase key
    // Para hacer el transition end en la tecla una vez pulsada, llamamos el nodo pads

    console.log(pads);
    // console.log(audio);
    if(audio === false) {
    return; // if que detiene la funcion si no hay audio
    } else {
        audio.currentTime = -1; // permite que se pueda pulsar simultaneamente el sonido y nose retrase
        audio.play(); //activa el sonido
        pad.classList.add('playing'); //agrega la clase playing a nuestro pad
    };
};

// Funcion remover Transicion
function removeTransition(e){
   if(e.propertyName !== 'color')return; // finalice la funcion si la propiedad es diferente de color
   this.classList.remove('playing'); //de lo contrario remueva la clase playing.
};

// Query Selector para los pads.
const pads = document.querySelectorAll('.pad'); // creamos una constante  y llamamos el nodo con query selector all
pads.forEach(pad => pad.addEventListener('transitionend', removeTransition)); //creamos un ciclo para todos los pads y les agregamos un vento a cada uno