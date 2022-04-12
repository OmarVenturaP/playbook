const Logger = require('./logger')

//crear el objeto DB
const dbLogger = new Logger('DB')
//Objeto nuevo DB hace referencia al [db]Logger que crea al nuevo constructor
//Metodo
dbLogger.info('This is an informational message')

//Crear otro objeto llamado ACCESS
const accessLogger = new Logger('ACCESS')
accessLogger.verbose('This is a verbose message')