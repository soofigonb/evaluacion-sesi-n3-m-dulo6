import pkg from 'lodash'; 
import dayjs from 'dayjs'; 

const { lt } = pkg; 

// Crear un objeto que contenga características del celular
const celular = {
    marca: 'Samsung',
    modelo: 'Galaxy S21',
    almacenamiento: '128 GB',
    camara: '64 MP',
    bateria: '4000 mAh',
    fechaCreacion: dayjs().format('YYYY-MM-DD HH:mm:ss') 
};

// Crear una copia del objeto y actualizar dos propiedades
const celularActualizado = {
    ...celular, 
    modelo: 'Galaxy S21 Ultra', 
    almacenamiento: '256 GB' 
};

// Exportar ambos objetos
export { celular, celularActualizado }; 