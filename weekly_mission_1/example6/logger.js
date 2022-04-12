class Logger {
    constructor (name) {
        this.count = 0
        this.name = name
    }
    log (message) {7
        this.count++
        console.log('[' + this.name + ']' + message)
    }
}

module.exports = new Logger('DEFAULT')
module.exports.Logger = Logger