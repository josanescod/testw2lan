/*codigo para cambiar el idioma de castellano a catalan, por defecto en castellano*/
var seleccion = 'es';



window.onload = () => {

    cargandoEventos();

    seleccionLengua();

    console.log('seleccionado lengua: ' + seleccion);

}

function cargandoEventos() {
    console.log('cargando...')
}

function seleccionLengua() {

    let selectLanguage = document.querySelector('#idioma')

    selectLanguage.addEventListener('change', function () {
       /* let opcion = document.querySelector('#resultado');

        opcion.textContent = 'has elegido el idioma ' + this.options[this.selectedIndex].text;*/
        let valorIdioma = this.options[this.selectedIndex].value;
        seleccion = valorIdioma;

        console.log('nueva seleccion: ' + seleccion);



        //petición Ajax de un fichero local, si es cat una petición si es 'castellano' otra

        if (seleccion === 'es') {

            cambiaEs();
        } else {
            cambiaCat();
            ;
        }


    });



}

function cambiaEs() {
    fetch('./language/es.json')
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }

                // Examine the text in the response
                response.json().then(function (data) {
                    console.log(data);
                    muestraDatos(data)
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });

        function muestraDatos(data){
            let eleccion=document.querySelector('#resultado')
            let titulo = document.querySelector('#titulo')
            let p1 = document.querySelector('#p1')
            let p2 = document.querySelector('#p2')
            eleccion.innerHTML = data['eleccion']
            titulo.innerHTML = data['titulo']
            p1.innerHTML = data['comentario1']
            p2.innerHTML = data['comentario2']
        }

}

function cambiaCat() {
    fetch('./language/cat.json')
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }

                // Examine the text in the response
                response.json().then(function (data) {
                    console.log(data);
                    //aqui o funcion o con los datos escupirlos
                   mostraDades(data);
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });

        function mostraDades(data){
            let eleccion=document.querySelector('#resultado')
            let titulo = document.querySelector('#titulo')
            let p1 = document.querySelector('#p1')
            let p2 = document.querySelector('#p2')
            eleccion.innerHTML = data['eleccio']
            titulo.innerHTML = data['titol']
            p1.innerHTML = data['comentari1']
            p2.innerHTML = data['comentari2']
        }


}



