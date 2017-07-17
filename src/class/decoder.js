import hl7_2_4 from './hl7-2.4/index.js'

export default class Decoder {

  constructor(message, config) {
    this._message = message
    this._config = config
    this._decoder = this._setDynamicDecoder(config.format)
  }

  _setDynamicDecoder(format) {
    let obj = (format === 'hl7-2.4') ? new hl7_2_4(this._message, this._config) : null
    if (!obj) throw new Error(`Unknow format: ${format}`)
    return obj
  }
}
