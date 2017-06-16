import HL7Base from './base'

export default class ADT extends HL7Base {

  constructor(message, config) {
    super()
    this._message = message
    this._config = config
  }

  get patient_id() {
    return this.getProperty(this._config.adt.pid.patient_id.segment, [this._config.adt.pid.patient_id.component[0], this._config.adt.pid.patient_id.component[1]])
  }

  get patient_id_complete() {
    return this.getComponentFields(this._config.adt.pid.patient_id_complete.segment, [this._config.adt.pid.patient_id_complete.field[0], this._config.adt.pid.patient_id_complete.field[1]])
  }

  get pid_origin() {
    return this.getProperty(this._config.adt.pid.origin.segment, [this._config.adt.pid.origin.component[0], this._config.adt.pid.origin.component[1]])
  }

  get firstname() {
    return this.getProperty(this._config.adt.pid.firstname.segment, [this._config.adt.pid.firstname.component[0], this._config.adt.pid.firstname.component[1]])
  }

  get lastname() {
    return this.getProperty(this._config.adt.pid.lastname.segment, [this._config.adt.pid.lastname.component[0], this._config.adt.pid.lastname.component[1]])
  }

  get birthdate() {
    return this.getProperty(this._config.adt.pid.birthdate.segment, [this._config.adt.pid.birthdate.component[0], this._config.adt.pid.birthdate.component[1]])
  }

  get gender() {
    return this.getProperty(this._config.adt.pid.gender.segment, [this._config.adt.pid.gender.component[0], this._config.adt.pid.gender.component[1]])
  }

  get common_name() {
    return this.getProperty(this._config.adt.pid.common_name.segment, [this._config.adt.pid.common_name.component[0], this._config.adt.pid.common_name.component[1]])
  }

  get address() {
    return this.getProperty(this._config.adt.pid.address.segment, [this._config.adt.pid.address.component[0], this._config.adt.pid.address.component[1]])
  }

  get city() {
    return this.getProperty(this._config.adt.pid.city.segment, [this._config.adt.pid.city.component[0], this._config.adt.pid.city.component[1]])
  }

  get cp() {
    return this.getProperty(this._config.adt.pid.cp.segment, [this._config.adt.pid.cp.component[0], this._config.adt.pid.cp.component[1]])
  }

  get mrg_patient_id() {
    return this.getProperty(this._config.adt.mrg.patient_id.segment, [this._config.adt.mrg.patient_id.component[0], this._config.adt.mrg.patient_id.component[1]])
  }

  get mrg_origin() {
    return this.getProperty(this._config.adt.mrg.origin.segment, [this._config.adt.mrg.origin.component[0], this._config.adt.mrg.origin.component[1]])
  }

  get firstphone() {
    return this.getProperty(this._config.adt.pid.firstphone.segment, [this._config.adt.pid.firstphone.component[0], this._config.adt.pid.firstphone.component[1]])
  }

  get secondphone() {
    return this.getProperty(this._config.adt.pid.secondphone.segment, [this._config.adt.pid.secondphone.component[0], this._config.adt.pid.secondphone.component[1]])
  }

  get email() {
    return this.getProperty(this._config.adt.pid.email.segment, [this._config.adt.pid.email.component[0], this._config.adt.pid.email.component[1]])
  }
}
