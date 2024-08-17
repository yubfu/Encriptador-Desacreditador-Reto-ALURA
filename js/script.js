
const diccionario = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function validarTexto(texto) {
    return /^[a-z\s\?\¿\!\¡\,\.\;\:\-]*$/.test(texto);
}

function mostrarResultado(texto) {
    document.getElementById('no-message').style.display = 'none';
    document.getElementById('output').style.display = 'block';
    document.getElementById('output').value = texto;
    document.getElementById('copy-btn').style.display = 'block';
}

function encriptar() {
    let texto = document.getElementById('input').value;
    if (!validarTexto(texto) | texto == "" ) {
        if(!validarTexto(texto) ){
            alert('Error: Recuerda que solo se permiten letras minúsculas sin acentos ni caracteres especiales.');
        }else{
            alert('Error: ¡No se ha ingresado ningun texto!');
        } 
        return;
    }
    let resultado = texto.replace(/[aeiou]/g, letra => diccionario[letra]);
    document.getElementById('input').value = "";
    mostrarResultado(resultado);
}

function desencriptar() {
    let texto = document.getElementById('input').value;
    if (!validarTexto(texto) | texto == "") {

        if(!validarTexto(texto) ){
            alert('Error: Recuerda que solo se permiten letras minúsculas sin acentos ni caracteres especiales.');
        }else{
            alert('Error: ¡No se ha ingresado ningun texto!');
        } 
        return;
    }
    let resultado = texto;
    for (let [key, value] of Object.entries(diccionario)) {
        resultado = resultado.split(value).join(key);
    }
    document.getElementById('input').value = "";
    mostrarResultado(resultado);
}

function copiar() {
    const output = document.getElementById('output'); 
    if (output) {
        const texto = output.value || output.innerText;

        
        navigator.clipboard.writeText(texto).then(() => {
            alert('Texto copiado al portapapeles');
        }).catch(err => {
            console.error('Error al copiar al portapapeles: ', err);
            alert('Error al copiar el texto');
        });
    } else {
        alert('No se encontró el elemento a copiar');
    }
}
