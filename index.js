import { celular, celularActualizado } from './celular.js';

// Desestructurar el objeto celular
const { marca: marcaOriginal, modelo: modeloOriginal, almacenamiento: almacenamientoOriginal, camara: camaraOriginal, bateria: bateriaOriginal, fechaCreacion: fechaCreacionOriginal } = celular;

// Desestructurar el objeto celularActualizado
const { modelo, almacenamiento } = celularActualizado;

// Crear una función que muestre la descripción del celular
function mostrarDescripcionCelular() {
    const descripcion = `
    Descripción de mi celular original:
    - Marca: ${marcaOriginal}
    - Modelo: ${modeloOriginal}
    - Almacenamiento: ${almacenamientoOriginal}
    - Cámara: ${camaraOriginal}
    - Batería: ${bateriaOriginal}
    - Fecha de Creación: ${fechaCreacionOriginal}

    Descripción de mi celular actualizado:
    - Modelo: ${modelo}
    - Almacenamiento: ${almacenamiento}
    `;
    
    console.log(descripcion);
}

mostrarDescripcionCelular();


// Función que toma otra función como callback
const procesarNumeros = (numeros, callback) => {
    return numeros.map(callback); 
};

// Array de números
const numeros = [1, 2, 3, 4, 5];

// Llamamos a procesarNumeros usando una función de flecha como callback
const resultados = procesarNumeros(numeros, (numero) => numero * 2);

console.log('Utilizando callback con la sintaxis de funcion de flecha');

console.log(resultados); // [2, 4, 6, 8, 10]
