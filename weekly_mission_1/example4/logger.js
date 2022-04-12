class Logger {
    constructor(name) {
        this.name = name
    }

    //ejecutando metodo info
    info (message) {
        console.log(`[Objeto con nombre: ${this.name}] info: ${message}`);
    }

    //ejecutando metodo verbose
    verbose (message) {
        console.log(`[Objeto con nombre: ${this.name}] verbose: ${message}`);
}};

//Exportando clase con modulo
module.exports = Logger