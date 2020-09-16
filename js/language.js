/*codigo para cambiar el idioma de castellano a catalan, por defecto en castellano*/
var seleccion = 'es';
var file = 'es.json'
window.onload = () => {
    cargaLenguaje(file);
    seleccionLengua();
}

function seleccionLengua() {
    let selectLanguage = document.querySelector('#idioma')
    selectLanguage.addEventListener('change', function () {
        seleccion = this.options[this.selectedIndex].value;
        if (seleccion === 'es') {
            file = 'es.json'
            cargaLenguaje(file)
        } else {
            file = 'cat.json'
            cargaLenguaje(file);
        }
    });
}

function cargaLenguaje(file) {
      
    fetch(`./language/${file}`)
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
                    muestraDatos(data);
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

//mejoras
//https://stackoverflow.com/questions/37673454/javascript-iterate-key-value-from-json --> recorrer un objeto json
