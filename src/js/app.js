window.addEventListener('DOMContentLoaded',function(){
    iniciarApp();
})

function iniciarApp(){
    efectoScroll();
    efectoHeader();
    menu();
    overlay();
}

function efectoScroll(){
    window.addEventListener('scroll', function (e){
        const header = document.querySelector('.header');
        header.classList.toggle('scroll', window.scrollY > 0 )
    })
}

function efectoHeader(){
    const typed = new Typed('.typed', {
        strings: [
            '<a href="http://sonidodeltiempo.lacolmena.tk/" class="header__efecto">El sonido del Tiempo</a>',
            '<a href="/" class="header__efecto">Wiki</a>'
        ],

        //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
        typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
        startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
        backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
        smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
        shuffle: true, // Alterar el orden en el que escribe las palabras.
        backDelay: 5000, // Tiempo de espera despues de que termina de escribir una palabra.
        loop: true, // Repetir el array de strings
        loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
        showCursor: true, // Mostrar cursor palpitanto
        cursorChar: '|', // Caracter para el cursor
        contentType: 'html', // 'html' o 'null' para texto sin formato
    });
}

function menu(){
    const headerTitulo = document.querySelector('.header__h1')
    const body = document.querySelector('body')
    const toggle = document.querySelector(".toggle-btn");
    const header = document.querySelector('.header');

    const t1 = new TimelineMax({paused: true});

    t1.to(".one", 0.8, {
         y: 6,
         rotation: 45,
         ease: Expo.easeInOut
    });

    t1.to(".two", 0.8, {
         y: -6,
         rotation: -45,
         ease: Expo.easeInOut,
         delay: -0.8
    });
    
    t1.to(".menu", 2, {
         top: "0%",
         ease: Expo.easeInOut,
         delay: -2
    });

    t1.staggerFrom(".menu ul li", 2, {y: 200, opacity: 0, ease:Expo.easeOut}, 0.3);

    t1.reverse();
    
    toggle.addEventListener('click', ()=>{
        t1.reversed(!t1.reversed());
        headerTitulo.classList.toggle('not-fixed')
        body.classList.toggle('fijar-body')

        if(window.scrollY > 0 ){
            header.classList.toggle('scroll', )
            console.log(header)
        }
        
    })
}
function overlay(){
    // OVERLAY
    TweenMax.to(".first", 1.5, {
        delay: .5,
        top: "-100%",
        ease: Expo.easeInOut
      });
  
      TweenMax.to(".second", 1.5, {
        delay: .7,
        top: "-100%",
        ease: Expo.easeInOut
      });
  
      TweenMax.to(".third", 1.5, {
        delay: .9,
        top: "-100%",
        ease: Expo.easeInOut
      });
}