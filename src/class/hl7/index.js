import ADT from './class/adt'
import SIU from './class/siu'
import HL7Base from './class/base'
import simpleHL7 from 'simple-hl7'

export default class hl7 extends HL7Base {

  constructor(message, config) {
    super()

    // Parse hl7 message
    const hl7Parser = new simpleHL7.Parser()
    message = hl7Parser.parse(message)

    this._message = message
    this._config = config

    // To manage messages like objects
    this._adt = new ADT(message, config)
    this._siu = new SIU(message, config)
    if (!['adt', 'siu'].includes(this.message_type)) return new Error(`Bad message type`)
  }

  get patient_id() {
    if (this._isADT()) return this._adt.patient_id
    if (this._isSIU()) return this._siu.patient_id
  }

  get patient_id_complete() {
    if (this._isADT()) return this._adt.patient_id_complete
    if (this._isSIU()) return this._siu.patient_id_complete
  }

  get pid_origin() {
    if (this._isADT()) return this._adt.pid_origin.toUpperCase()
    if (this._isSIU()) return this._siu.pid_origin.toUpperCase()
  }

  get siu_origin() {
    if (!this._isSIU()) return new Error(`siu_origin method cannot be used with ADT message`)
    return this._siu.siu_origin.toUpperCase()
  }

  get firstname() {
    if (this._isADT()) return this._adt.firstname
    if (this._isSIU()) return this._siu.firstname
  }

  get lastname() {
    if (this._isADT()) return this._adt.lastname
    if (this._isSIU()) return this._siu.lastname
  }

  get birthdate() {
    if (this._isADT()) return this._adt.birthdate
    if (this._isSIU()) return this._siu.birthdate
  }

  get gender() {
    if (this._isADT()) return this._adt.gender
    if (this._isSIU()) return this._siu.gender
  }

  get common_name() {
    if (this._isADT()) return this._adt.common_name
    if (this._isSIU()) return this._siu.common_name
  }

  get address() {
    if (this._isADT()) return this._adt.address
    if (this._isSIU()) return this._siu.address
  }

  get city() {
    if (this._isADT()) return this._adt.city
    if (this._isSIU()) return this._siu.city
  }

  get cp() {
    if (this._isADT()) return this._adt.cp
    if (this._isSIU()) return this._siu.cp
  }

  get firstphone() {
    if (this._isADT()) return this._adt.firstphone
    if (this._isSIU()) return this._siu.firstphone
  }

  get email() {
    if (this._isADT()) return this._adt.email
    if (this._isSIU()) return this._siu.email
  }

  get secondphone() {
    if (this._isADT()) return this._adt.secondphone
    if (this._isSIU()) return this._siu.secondphone
  }

  get appointment_id() {
    if (!this._isSIU()) return new Error(`appointment_id() method cannot be used with ADT message`)
    return this._siu.appointment_id
  }

  get intervention_type() {
    if (!this._isSIU()) return new Error(`intervention_type() method cannot be used with ADT message`)
    return this._siu.intervention_type
  }

  get length() {
    if (!this._isSIU()) return new Error(`length() method cannot be used with ADT message`)
    return this._siu.length
  }

  get date() {
    if (!this._isSIU()) return new Error(`date() method cannot be used with ADT message`)
    return this._siu.date
  }

  get rpps() {
    if (!this._isSIU()) return new Error(`rpps() method cannot be used with ADT message`)
    return this._siu.rpps
  }

  get doctor_firstname() {
    if (!this._isSIU()) return new Error(`doctor_firstname() method cannot be used with ADT message`)
    return this._siu.doctor_firstname
  }

  get doctor_lastname() {
    if (!this._isSIU()) return new Error(`doctor_lastname() method cannot be used with ADT message`)
    return this._siu.doctor_lastname
  }

  get status() {
    if (!this._isSIU()) return new Error(`status() method cannot be used with ADT message`)
    return this._siu.status.toUpperCase()
  }

  get comment() {
    if (!this._isSIU()) return new Error(`comment() method cannot be used with ADT message`)
    return this._siu.comment
  }

  get rpps_finess() {
    if (!this._isSIU()) return new Error(`rpps_finess() method cannot be used with ADT message`)
    return this._siu.rpps_finess
  }

  get mrg_patient_id() {
    if (!this._isADT()) return new Error(`mrg_patient_id() method cannot be used with SIU message`)
    return this._adt.mrg_patient_id
  }

  get mrg_origin() {
    if (!this._isADT()) return new Error(`mrg_origin() method cannot be used with SIU message`)
    return this._adt.mrg_origin
  }

  _isADT() {
    return (this.message_type === 'adt') ? true : false
  }

  _isSIU() {
    return (this.message_type === 'siu') ? true : false
  }
}
