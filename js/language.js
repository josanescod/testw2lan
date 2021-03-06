/*ejemplo de codigo para cambiar el idioma, por defecto en castellano*/
var seleccion = 'es';
var file = 'es.json';

window.onload = () => {
    cargaIdioma(file);
    seleccionaIdioma();
}

function seleccionaIdioma() {
    let selectLanguage = document.querySelector('#idioma')
    selectLanguage.addEventListener('change', function () {
        seleccion = this.options[this.selectedIndex].value;
        if (seleccion === 'es') {
            file = 'es.json'
            cargaIdioma(file)
        } else {
            file = 'cat.json'
            cargaIdioma(file);
        }
    });
}

function cargaIdioma(file) {
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

   

}

function muestraDatos(data) {
    //Recorrer el objeto json 'data' y insertar en cada 'key' que corresponde a un elemento html su value que es el valor.
    Object.keys(data).forEach(function (key) {
        //console.table('key: '+ key + ', value: ' + data[key])
        let tempKey = document.querySelector(`#${key}`)
        tempKey.innerHTML = data[key]
    });
}