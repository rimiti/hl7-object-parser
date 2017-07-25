import simpleHL7 from 'simple-hl7'

export default class hl7 {

  constructor(message, config) {
    const hl7Parser = new simpleHL7.Parser()
    message = hl7Parser.parse(message)
    this._message = message
    this._config = config
  }

  /**
   * @description Convert from config mapping file hl7 to object
   * @return {{}}
   */
  process() {
    let obj = {}
    for (let segment in this._config.mapping) {
      let s = (segment.toUpperCase() === 'MSH') ? this._message.header : this._message.getSegment(segment.toUpperCase())
      for (let value of this._config.mapping[segment].values) {
        if (value.field && s instanceof Object) {
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
      }
    }
    return obj
  }

  /**
   * @description Add attribute(s) into existing object
   * @param obj
   * @param property
   * @param value
   * @private
   */
  _generateObject(obj, property, value) {
    let paths = property.split('.')
    let i = 0
    let tmp = obj
    for (; i < paths.length - 1; i++) {
      tmp = (tmp[paths[i]]) ? Object.assign(tmp[paths[i]], tmp[paths[i]]) : tmp[paths[i]] = {}
    }
    tmp[paths[i]] = value
  }

}
