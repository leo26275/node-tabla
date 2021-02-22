//Sirve para importar la libreria para grabar en archivos
const fs = require('fs');
const { resolve } = require('path');
const colors = require('colors');


//Un ejemplo es asi
// const crearArchivo = (base = 5) => {

//     return new Promise((resolve, reject) => {
//         console.log('==============================');
//         console.log(`       Tabla del: ${base}`);
//         console.log('==============================');

//         let salida = '';
//         for (let i = 1; i <= 10; i++) {
//             salida += `${base} X ${i} = ${base * i}\n`;
//         }
//         console.log(salida);

//         //Sirve para grabar en un archivo txt
//         fs.writeFileSync(`tabla-${base}.txt`, salida);

//         resolve(`tabla-${base}.txt creada`);
//     })
// }

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {
        
        let salida = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} X ${i} = ${base * i}\n`;
        }
        
        if (listar) {
            console.log('==============================');
            console.log(`       Tabla del: ${base}`.green);
            console.log('==============================');

            console.log(salida.rainbow);
        }       

        //Sirve para grabar en un archivo txt
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt creada`.underline.red;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}