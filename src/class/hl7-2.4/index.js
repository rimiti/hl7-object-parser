import simpleHL7 from 'simple-hl7'
import logger from '../../lib/logger'

export default class hl7 {

  constructor(message, config) {
    const hl7Parser = new simpleHL7.Parser()
    message = hl7Parser.parse(message)
    this._message = message
    this._config = config
  }

  get message() {
    return this._message
  }

  set message(value) {
    this._message = value
  }

  get config() {
    return this._config
  }

  set config(value) {
    this._config = value
  }

  process() {
    let obj = {}
    for (let segment in this.config.mapping) {
      let s = this.message.getSegment(segment.toUpperCase())
      for (let value of this.config.mapping[segment].values) {
        if (value.field) {
          try {
            if (s instanceof Object) {
              let index1 = value.component[0]
              let index2 = value.component[1]

              if (s.getField(index1).includes('~')) {
                let split = s.getField(index1).split('~')
                let array = []
                for (let v of split) {
                  array.push(v.split('^'))
                }

                let output = []
                for (let v in array) {
                  (array[v][value.component[1] - 1]) ? output.push(array[v][value.component[1] - 1]) : output.push('')
                }
                this._generateObject(obj, value.field, output)
              } else {
                this._generateObject(obj, value.field, s.getComponent(index1, index2))
              }
            }
          } catch (e) {
            logger.warn(`[com/dec] - error during fetching hl7 ${segment} segment with [${index1}, ${index2}] index (${err.message})`)
          }
        }
      }
    }
    return obj
  }

  _generateObject(obj, property, value = '') {
    let paths = property.split('.')
    for (var i = 0, tmp = obj; i < paths.length - 1; i++) {
      tmp = (tmp[paths[i]]) ? Object.assign(tmp[paths[i]], tmp[paths[i]]) : tmp[paths[i]] = {}
    }
    tmp[paths[i]] = value
  }

}
