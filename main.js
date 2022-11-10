const nombre = 'Kristy';
const edad = 18;
const likesMusic = true;

const nombreElement = document.querySelector('span#name');
const edadElement = document.querySelector('span#age');
const likesMusicElement = document.querySelector('span#likesMusic');

nombreElement.textContent = nombre;
edadElement.textContent = edad;
if (likesMusic === true) {
  likesMusicElement.textContent = 'me encanta la musica';
} else {
  likesMusicElement.textContent = 'odio la musica';
}

function playNote(key) {
  // Obtener la nota
  const noteAudio = document.getElementById(key.dataset.note);
  // Resetear la ejecución de la nota
  noteAudio.currentTime = 0;
  // Utilizar método play() de la nota
  noteAudio.play();

  // Añadimos clase active
  key.classList.add('active');
  // Agregamos un event listener al estado ended del evento keydown
  noteAudio.addEventListener('ended', () => {
    // Cuando termine de reproducirse el sonido, removemos clase active
    key.classList.remove('active');
  });
}

const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');

keys.forEach((key) => {
  key.addEventListener('click', () => playNote(key));
});

document.addEventListener('keydown', (e) => {
  if (e.repeat) return;
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);
  console.log(whiteKeys[whiteKeyIndex]);
  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
});

function cambiarColor(element, color) {
    element.style.backgroundColor = color;
  }
  
 function pianoTema1() {
    const colorTema1 = document.querySelectorAll('.key.white');
    console.log(colorTema1);
    colorTema1.forEach((elemento) => cambiarColor(elemento, '#5a61bd'));
  }
     const botonTema1 = document.querySelector('#personalizadorTema1');
     botonTema1.addEventListener('click', pianoTema1);
  
 function pianoTema2 () {
    const colorTema2 = document.querySelectorAll(' .key.white');
    colorTema2.forEach((elemento) => cambiarColor(elemento, '#7178df'));
  }
    const botonTema2 = document.querySelector('#personalizarTema2');
    botonTema2.addEventListener('click', pianoTema2);
  
 function pianoTema3() {
    const colorTema3 = document.querySelectorAll(' .key.white');
    colorTema3.forEach((elemento) => cambiarColor(elemento, '#bbbeef'));
  }
    const botonTema3 = document.querySelector('#personalizarTema3');
    botonTema3.addEventListener('click', pianoTema3);

 function pianoTema4() {
        const colorTema4 = document.querySelectorAll(' .key.white');
        colorTema4.forEach((elemento) => cambiarColor(elemento, '#e2e8f2'));
      }
    const botonTema4 = document.querySelector('#personalizarTema4');
    botonTema4.addEventListener('click', pianoTema4);

 function pianoTema5() {
    const colorTema5 = document.querySelectorAll(' .key.white');
    colorTema5.forEach((elemento) => cambiarColor(elemento, '#f7f7fa'));
  }
    const botonTema5 = document.querySelector('#personalizarTema5');
    botonTema5.addEventListener('click', pianoTema5);