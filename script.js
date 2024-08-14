let originalContent = document.getElementById('div_textoDesencriptado').innerHTML;

function restricciones(botonClick) {
    document.getElementById(botonClick).addEventListener('click', function () {
        let input = document.getElementById('textarea').value;
        let filteredValue = input.replace(/[^a-z\s]/g, '');
        if (input !== filteredValue) {
            Swal.fire({
                title: '¡Solo son permitidas letras minúsculas sin acento!',
                icon: 'error',
                customClass: {
                  confirmButton: 'boton-personalizado',
                  title: 'clase-text',
                },
                confirmButtonText: 'Ok'
              });
            document.getElementById('div_textoDesencriptado').innerHTML = originalContent;
            /* document.getElementById('textarea').value = ''; */
        }
    });
}

function encriptarTexto() {
    alternarDivTextoEncriptado();

    valorTextArea = document.getElementById('textarea').value;
    const reglas = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    let textoEncriptado = valorTextArea.replace(/[eioua]/g, function(match) {
        return reglas[match]; 
    });

    return document.getElementById('textoAlterado').innerText = textoEncriptado;
}

function desencriptarTexto() {
    alternarDivTextoEncriptado();
    valorTextArea = document.getElementById('textarea').value;
    
    const reglasInversas = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    let textoDesencriptado = valorTextArea.replace(/enter|imes|ai|ober|ufat/g, function(match) {
        return reglasInversas[match]; 
    });
    
    return document.getElementById('textoAlterado').innerText = textoDesencriptado;
}

function alternarDivTextoEncriptado() {
    textoEncriptar = document.getElementById('textarea').value;
    flexStart = document.getElementsByClassName('flexStart');
    flexHidden = document.getElementsByClassName('flexHidden');

    if (textoEncriptar.trim() === "") {
        Swal.fire({
            title: '¡Ingresa un texto para encriptar o desencriptar!',
            icon: 'info',
            customClass: {
              confirmButton: 'boton-personalizado',
              title: 'clase-text',
            },
            confirmButtonText: 'Aceptar'
          });
        document.getElementById('div_textoDesencriptado').innerHTML = originalContent;
    } else {
        Array.from(flexStart).forEach(element => { element.style.display = 'none'; });
        Array.from(flexHidden).forEach(element => { element.style.display = 'flex'; });
    }
}

function copiar() {
    let textoCopiado = document.getElementById('textoAlterado').value;
    let botonCopiar = document.getElementById('botonCopiar');
    let alerta = document.getElementById('alerta-oculta');

    alerta.style.display = 'block'; //Mostrar alerta-coulta

    navigator.clipboard.writeText(textoCopiado).then(() => {

        // Mostrar alerta-oculta por 1 segundo 
        setTimeout(() => {
            alerta.style.display = 'none';
        }, 1000);
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    })
}

function blueDark() {
    document.documentElement.style.setProperty('--color-backaground-TextoDesencriptar', 'red');
    document.documentElement.style.setProperty('--color-background-boton-encriptar', 'red');
    document.documentElement.style.setProperty('--color-texto-h2', 'white');
    document.documentElement.style.setProperty('--color-texto-p', '#F2F2F2');
}

//Inicializamos la funcion de restricciones
restricciones('div_textoEncriptar-botonEncriptar');
restricciones('div_textoEncriptar-botonDesencriptar');
