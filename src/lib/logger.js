/**
 * ***Logging***
 * We use winston!
 * import this module (/lib/logger) to your file
 *  ex. `import logger from '../lib/logger'`
 * Usage:
 *  - logger.info is your new console.log
 *  - message structure :
 *    DO NOT LOG PASSWORDS (watch out for them while logging params)
 *    prefix your message with "[<filename>] - " to help identifying it in shared logs
 *    try to keep <filename> string excatly 7 chars, for better readability
 *  - log levels (recommendations):
 *    .0. error   - for logging errors caught as exceptions
 *    .1. warn    - for logging errors and warning due to wrong input/params
 *    .2. info    - all the activities that are not errors but important to log
 *    .3. verbose - extra processing, that you wish to see on your console, but not in log file
 *    .4. debug   - debug messages, breakpoints etc. You can leave them in code for future
 *    .5. silly   - go ahead, log that JSON object.
 *  - for debugging, change log level to debug :
 *      `logger.transports.console.level = 'debug'`
 *    and, use logger.debug() for all messages you wish to print
 *    ex. logger.debug('******'), logger.debug('inside func'), logger.debug(<myVar>)
 *  - reading logs :
 *    error log - `tail -f log/errors.log`
 *    process log - `tail -f log/process.log`
 */
import winston from 'winston'
import config from '../config'

/**
 * @description Generates custom Winston Transport config
 * @param level <string>
 * @param name <string> <optional>
 */
const generateConfig = (level, name) => {
  const levelTitles = {
    error: 'emer', warn: 'oops', info: 'fyi.', verbose: 'blah', debug: 'dbug', silly: 'sily'
  }
  let _config = {
    name,
    filename: `${config.log.path}${name}.log`,
    colorize: true,
    json: false,
    level,
    timestamp: () => {
      return (new Date()).toISOString().replace(/T/, ' ').// replace T with a space
      replace(/\..+/, '')     // delete the dot and everything after;}
    },
    formatter: (options) => {
      return `[${options.timestamp()}] [${winston.config.colorize(options.level, levelTitles[options.level])}] - ${options.message}` + (JSON.stringify(options.meta) !== '{}' ? ` - ${JSON.stringify(options.meta)}` : '')
    },
  }
  if (!name) {
    _config.filename = null
  }
  return _config
}

export default new (winston.Logger)({
  transports: [
    new (winston.transports.Console)((process.env.NODE_ENV !== 'test') ? generateConfig('verbose') : null),
    new (winston.transports.File)(generateConfig('info', 'process')),
    new (winston.transports.File)(generateConfig('warn', 'errors')),
  ]
})
