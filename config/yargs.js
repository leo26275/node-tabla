const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla a multiplicar'
    })
    .option('l', {
        alias: 'lista',
        type: 'boolean',
        default: false,
        describe: 'Es la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Limita hasta donde llegara la tabla'
    })
    .check((argv, option) => {
        if (isNaN(argv.h)) {
            throw 'Tiene que ser un numero';
        }
        return true;
    })
    .check((argv, option) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero';
        }
        return true;
    })
    .argv;

module.exports = argv;