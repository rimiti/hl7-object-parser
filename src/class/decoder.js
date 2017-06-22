import hl7 from './hl7/index.js'

export default class Decoder {

  constructor(message, config) {
    this._message = message
    this._config = config
    this._decoder = this._setDynamicDecoder(config.format)
  }

  get patient_id() {
    return this._decoder.patient_id
  }

  get patient_id_complete() {
    return this._decoder.patient_id_complete
  }

  get pid_origin() {
    return this._decoder.pid_origin
  }

  get siu_origin() {
    return this._decoder.siu_origin
  }

  get firstname() {
    return this._decoder.firstname
  }

  get lastname() {
    return this._decoder.lastname
  }

  get birthdate() {
    return this._decoder.birthdate
  }

  get firstphone() {
    return this._decoder.firstphone
  }

  get email() {
    return this._decoder.email
  }

  get secondphone() {
    return this._decoder.secondphone
  }

  get gender() {
    return this._decoder.gender
  }

  get common_name() {
    return this._decoder.common_name
  }

  get address() {
    return this._decoder.address
  }

  get city() {
    return this._decoder.city
  }

  get cp() {
    return this._decoder.cp
  }

  get appointment_id() {
    return this._decoder.appointment_id
  }

  get origin() {
    return this._decoder.origin
  }

  get intervention_type() {
    return this._decoder.intervention_type
  }

  get length() {
    return this._decoder.length
  }

  get date() {
    return this._decoder.date
  }

  get rpps() {
    return this._decoder.rpps
  }

  get doctor_firstname() {
    return this._decoder.doctor_firstname
  }

  get doctor_lastname() {
    return this._decoder.doctor_lastname
  }

  get status() {
    return this._decoder.status
  }

  get comment() {
    return this._decoder.comment
  }

  get rpps_finess() {
    return this._decoder.rpps_finess
  }

  get message_type() {
    return this._decoder.message_type
  }

  get message_type_detail() {
    return this._decoder.message_type_detail
  }

  get mrg_patient_id() {
    return this._decoder.mrg_patient_id
  }

  get mrg_origin() {
    return this._decoder.mrg_origin
  }

  _setDynamicDecoder(format) {
    let obj = (format === 'hl7') ? new hl7(this._message, this._config) : null
    if (!obj) throw new Error(`Unknow format: ${format}`)
    return obj
  }
}
