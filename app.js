//console.log("Hola mundo soy val");
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Ing. Desarrollo y Gestion de Software .')
    .pauseFor(2500)
    .deleteAll()
    .typeString(' | Analista | ')
    .pauseFor(2500)
    .deleteChars(15)
    .typeString(' Desarrolladora Frontend')
    .pauseFor(2500)
    .start();

    document.addEventListener('DOMContentLoaded', () => {
        const element = document.querySelector('.animate-on-hover');
        element.addEventListener('mouseover', () => {
          element.classList.add('animate__animated', 'animate__pulse');
        });
        element.addEventListener('animationend', () => {
          element.classList.remove('animate__animated', 'animate__pulse');
        });
        element.addEventListener('mouseout', () => {

          element.classList.remove('animate__animated', 'animate__pulse');
        });
      });


      document.addEventListener('DOMContentLoaded', () => {
        const element = document.querySelector('.animate-on-hover1');

        element.addEventListener('mouseover', () => {
          element.classList.add('animate__animated', 'animate__pulse');
        });

        element.addEventListener('animationend', () => {

          element.classList.remove('animate__animated', 'animate__pulse');
        });

        element.addEventListener('mouseout', () => {

          element.classList.remove('animate__animated', 'animate__pulse');
        });
      });

      document.addEventListener('DOMContentLoaded', () => {
        const element = document.querySelector('.animate-on-hover2');
        element.addEventListener('mouseover', () => {
          element.classList.add('animate__animated', 'animate__pulse');
        });
        element.addEventListener('animationend', () => {
          element.classList.remove('animate__animated', 'animate__pulse');
        });
        element.addEventListener('mouseout', () => {
          element.classList.remove('animate__animated', 'animate__pulse');
        });
      });