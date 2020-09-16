/*codigo para cambiar el idioma de castellano a catalan, por defecto en castellano*/
var seleccion = 'es';
window.onload = () => {
    cargaEs()
    seleccionLengua();
}

function seleccionLengua() {
    let selectLanguage = document.querySelector('#idioma')
    selectLanguage.addEventListener('change', function () {
        let valorIdioma = this.options[this.selectedIndex].value;
        seleccion = valorIdioma;
        if (seleccion === 'es') {
            cargaEs();
        } else {
            cargaCat();
            ;
        }
    });
}

function cargaEs() {
    fetch('./language/es.json')
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Ha habido algun problema. Status Code: ' +
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

    function muestraDatos(data) {
        let eleccion = document.querySelector('#resultado')
        let titulo = document.querySelector('#titulo')
        let p1 = document.querySelector('#p1')
        let p2 = document.querySelector('#p2')
        // array de elementos
        let elementos = [eleccion,titulo,p1,p2];
        let datos = [data['eleccion'],data['titulo'],data['comentario1'],data['comentario2']]
        for (i=0;i < elementos.length;i++){
            elementos[i].innerHTML=datos[i];
        }
    }

}

function cargaCat() {
    fetch('./language/cat.json')
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Ha habido algun problema. Status Code: ' +
                        response.status);
                    return;
                }

                // Examine the text in the response
                response.json().then(function (data) {
                    console.log(data);
                    mostraDades(data);
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });

    function mostraDades(data) {
        let eleccion = document.querySelector('#resultado')
        let titulo = document.querySelector('#titulo')
        let p1 = document.querySelector('#p1')
        let p2 = document.querySelector('#p2')
        // array de elementos
        let elementos = [eleccion,titulo,p1,p2];
        let datos = [data['eleccio'],data['titol'],data['comentari1'],data['comentari2']]
        for (i=0;i < elementos.length;i++){
            elementos[i].innerHTML=datos[i];
        }
    }


}


//mejoras
//https://stackoverflow.com/questions/50983150/how-to-pass-a-variable-with-url-on-javascript-fetch-method --> pasar variable a fetch?
//https://stackoverflow.com/questions/37673454/javascript-iterate-key-value-from-json --> recorrer un objeto json
