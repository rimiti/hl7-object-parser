import logger from '../../../lib/logger'

export default class HL7Base {

  get message_type() {
    return this._message.header.getComponent(this._config.header.message_type.component[0], this._config.header.message_type.component[1]).toLowerCase()
  }

  get message_type_detail() {
    return this._message.header.getComponent(this._config.header.message_type_detail.component[0], this._config.header.message_type_detail.component[1]).toLowerCase()
  }

  /**
   * @description Return property from hl7 message from segment and indexes. This method manages iterations and simple value.
   * @param segment
   * @param component
   * @return {*}
   */
  getProperty(segment, component) {
    const [index1, index2] = component
    if (!(segment || index1 || index2)) return new Error(`Missing params`)
    try {
      let s = this._message.getSegment(segment)
      return (s.getField(index1, 1).includes('^') || s.getField(index1, 2)) ? s.getField(index1, index2) : s.getComponent(index1, index2)
    } catch (err) {
      logger.warn(`[com/dec] - error during fetching hl7 ${segment} segment with [${index1}, ${index2}] index (${err.message})`)
      return
    }
  }

  /**
   * @description Return a string with all fields from segment
   * @param segment
   * @param component
   * @return {*}
   */
  getComponentFields(segment, component) {
    const [index1, index2] = component
    if (!(segment || index1 || index2)) return new Error(`Missing params`)
    try {
      let s = this._message.getSegment(segment)
      return s.getField(index1, index2)
    } catch (err) {
      logger.warn(`[com/dec] - error during fetching hl7 ${segment} segment with [${index1}, ${index2}] index (${err.message})`)
      return
    }
  }
}
