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
      for (let value of this.config.mapping[segment].values) {
        if (value.field) {
          try {
            let s = this.message.getSegment(segment.toUpperCase())
            let index1 = value.component[0]
            let index2 = value.component[1]
            let val = (s.getField(index1, 1).includes('^') || s.getField(index1, 2)) ? s.getField(index1, index2) : s.getComponent(index1, index2)
            this.generateObject(obj, value.field, val)
          } catch (e) {
            logger.warn(`[com/dec] - error during fetching hl7 ${segment} segment with [${index1}, ${index2}] index (${err.message})`)
          }
        }
      }
    }
    return obj
  }

  generateObject(obj, property, value = '') {
    let path = property.split('.')
    for (var i = 0, tmp = obj; i < path.length - 1; i++) {
      tmp = tmp[path[i]] = {}
    }
    tmp[path[i]] = value
  }
}
