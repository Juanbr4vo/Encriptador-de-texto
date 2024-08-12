
function restricciones(textarea) {
    document.getElementById(textarea).addEventListener('keypress', function(event) {
        const regex = /^[a-z\s]*$/;
        const key = String.fromCharCode(event.which);
        if (!regex.test(key)) {
            event.preventDefault();
        }
    });
    
}

function encriptarTexto() {
    textoEncriptar = document.getElementById('textarea').value;
    imgMuneco = document.getElementById('imagenMuneco');
    conatinerTextos = document.getElementById('containerTextos');
    textoEncriptado = document.getElementById('div_textoEncriptado');
    botonCopiar = document.getElementById('div_botonCopiar');
    paddingDivTextoEncriptado = document.getElementById('div_textoDesencriptado');

    document.getElementById('textoEncriptado').innerText = textoEncriptar;

    paddingDivTextoEncriptado.style.padding = "0px";

     if (textoEncriptar.trim() === "") {
         alert('No hay texto a encriptar');
     }else{
         imgMuneco.style.display = 'none';
         conatinerTextos.style.display = 'none';
         textoEncriptado.style.display = 'flex';
         botonCopiar.style.display = 'flex';
     }
}
function blueDark() {
    document.documentElement.style.setProperty('--color-backaground-TextoDesencriptar', 'red');
    document.documentElement.style.setProperty('--color-background-boton-encriptar', 'red');
    document.documentElement.style.setProperty('--color-texto-h2', 'white');
    document.documentElement.style.setProperty('--color-texto-p', '#F2F2F2');
}

//Inicializamos la funcion de restricciones
restricciones('textarea');