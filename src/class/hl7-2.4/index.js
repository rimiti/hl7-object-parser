import simpleHL7 from 'simple-hl7'

export default class hl7 extends HL7Base {

  constructor(message, config) {
    super()

    // Parse hl7 message
    const hl7Parser = new simpleHL7.Parser()
    message = hl7Parser.parse(message)

    this._message = message
    this._config = config
  }

}
