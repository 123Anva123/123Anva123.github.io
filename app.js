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