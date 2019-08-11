var pelis = [
    {
        Nombre: ' El señor de los anillos',
        Genero: 'Acción'
    },
    {
        Nombre: ' Regreso al Futuro',
        Genero: 'Acción'
    },
    {
        Nombre: 'Los increibles 2',
        Genero: 'Animación'
    }
];
fillInPelis();
var divObjetivo = document.querySelector('ul');


pelis.forEach(element => {
    var pHijo = document.createElement("li");
    pHijo.textContent = element.Nombre;
    pHijo.classList.add(element.Genero);
    divObjetivo.appendChild(pHijo);
});













function fillInPelis() {

    for (var i = 2; i < 30; i++) {
        if (i % 2 === 0) {
            pelis.push({
                Nombre: ' Regreso al Futuro ' + i,
                Genero: 'Acción'
            })
        }else{
            pelis.push({
                Nombre: ' Regreso al Futuro ' + i,
                Genero: 'Animación'
            })
        }
    }
}
