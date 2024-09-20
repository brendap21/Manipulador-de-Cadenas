document.addEventListener('DOMContentLoaded', () => {
    const botonProcesar = document.getElementById('procesarCadena');
    const inputCadena = document.getElementById('cadenaUsuario');
    const resultadoConcatenacion = document.getElementById('resultadoConcatenacion');
    const resultadoLongitud = document.getElementById('resultadoLongitud');
    const resultadoContainer = document.querySelector('.resultado-container');
    const illustrationNotFound = document.getElementById('illustrationNotFound');
    const noMessageContainer = document.getElementById('no-message');

    // Función para mostrar la vista inicial
    function vistaInicial() {
        illustrationNotFound.style.display = 'block';
        noMessageContainer.style.display = 'block';
        resultadoContainer.style.display = 'none';
        inputCadena.value = "Didáctica y divulgación de la programación"; // Frase predeterminada
    }

    // Función para procesar la cadena
    function procesarCadena() {
        const cadena = inputCadena.value.trim();

        // Si la cadena está vacía, mostrar mensaje e ilustración
        if (cadena === '') {
            inputCadena.placeholder = "Ingrese una cadena de texto con mínimo 6 palabras...";
            vistaInicial();
            return;
        }

        // Si se ha ingresado una cadena válida
        illustrationNotFound.style.display = 'none';
        noMessageContainer.style.display = 'none';
        resultadoContainer.style.display = 'block';

        // Separar las palabras de la cadena
        const palabras = cadena.split(' ');

        // Verificar que haya al menos 6 palabras
        if (palabras.length < 6) {
            resultadoConcatenacion.textContent = 'La cadena ingresada no tiene suficientes palabras.';
            resultadoLongitud.textContent = '';
            return;
        }

        // Extraer las palabras primera, tercera y sexta
        const primeraPalabra = palabras[0];
        const terceraPalabra = palabras[2];
        const sextaPalabra = palabras[5];

        // Concatenar las palabras y mostrarlas
        resultadoConcatenacion.innerHTML = `Las palabras <span class="highlight">${primeraPalabra}</span>, <span class="highlight">${terceraPalabra}</span> y <span class="highlight">${sextaPalabra}</span> son las seleccionadas.`;

        // Mostrar la longitud de las palabras
        resultadoLongitud.innerHTML = `La palabra <span class="highlight">${primeraPalabra}</span> tiene ${primeraPalabra.length} caracteres, la palabra <span class="highlight">${terceraPalabra}</span> tiene ${terceraPalabra.length} caracteres, y la palabra <span class="highlight">${sextaPalabra}</span> tiene ${sextaPalabra.length} caracteres.`;

        // Borrar el valor del input una vez procesada la cadena
        inputCadena.value = '';
    }

    // Asociar la función al botón de procesar
    botonProcesar.addEventListener('click', procesarCadena);

    // Inicializar con la vista predeterminada
    vistaInicial();
});
