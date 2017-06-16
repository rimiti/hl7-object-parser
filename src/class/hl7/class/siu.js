import HL7Base from './base'

export default class SIU extends HL7Base {

  constructor(message, config) {
    super()
    this._message = message
    this._config = config
  }

  get appointment_id() {
    return this.getProperty(this._config.siu.sch.appointment_id.segment, [this._config.siu.sch.appointment_id.component[0], this._config.siu.sch.appointment_id.component[1]])
  }

  get siu_origin() {
    return this.getProperty(this._config.siu.sch.origin.segment, [this._config.siu.sch.origin.component[0], this._config.siu.sch.origin.component[1]])
  }

  get intervention_type() {
    return this.getProperty(this._config.siu.sch.intervention_type.segment, [this._config.siu.sch.intervention_type.component[0], this._config.siu.sch.intervention_type.component[1]])
  }

  get length() {
    return this.getProperty(this._config.siu.sch.length.segment, [this._config.siu.sch.length.component[0], this._config.siu.sch.length.component[1]])
  }

  get date() {
    return this.getProperty(this._config.siu.sch.date.segment, [this._config.siu.sch.date.component[0], this._config.siu.sch.date.component[1]])
  }

  get rpps() {
    return this.getProperty(this._config.siu.sch.rpps.segment, [this._config.siu.sch.rpps.component[0], this._config.siu.sch.rpps.component[1]])
  }

  get doctor_firstname() {
    return this.getProperty(this._config.siu.sch.doctor_firstname.segment, [this._config.siu.sch.doctor_firstname.component[0], this._config.siu.sch.doctor_firstname.component[1]])
  }

  get doctor_lastname() {
    return this.getProperty(this._config.siu.sch.doctor_lastname.segment, [this._config.siu.sch.doctor_lastname.component[0], this._config.siu.sch.doctor_lastname.component[1]])
  }

  get status() {
    return this.getProperty(this._config.siu.sch.status.segment, [this._config.siu.sch.status.component[0], this._config.siu.sch.status.component[1]])
  }

  get comment() {
    return this.getProperty(this._config.siu.nte.comment.segment, [this._config.siu.nte.comment.component[0], this._config.siu.nte.comment.component[1]])
  }

  get rpps_finess() {
    return this.getProperty(this._config.siu.aig.rpps_finess.segment, [this._config.siu.aig.rpps_finess.component[0], this._config.siu.aig.rpps_finess.component[1]])
  }

  get patient_id() {
    return this.getProperty(this._config.siu.pid.patient_id.segment, [this._config.siu.pid.patient_id.component[0], this._config.siu.pid.patient_id.component[1]])
  }

  get patient_id_complete() {
    return this.getComponentFields(this._config.siu.pid.patient_id_complete.segment, [this._config.siu.pid.patient_id_complete.field[0], this._config.siu.pid.patient_id_complete.field[1]])
  }

  get pid_origin() {
    return this.getProperty(this._config.siu.pid.origin.segment, [this._config.siu.pid.origin.component[0], this._config.siu.pid.origin.component[1]])
  }

  get firstname() {
    return this.getProperty(this._config.siu.pid.firstname.segment, [this._config.siu.pid.firstname.component[0], this._config.siu.pid.firstname.component[1]])
  }

  get lastname() {
    return this.getProperty(this._config.siu.pid.lastname.segment, [this._config.siu.pid.lastname.component[0], this._config.siu.pid.lastname.component[1]])
  }

  get birthdate() {
    return this.getProperty(this._config.siu.pid.birthdate.segment, [this._config.siu.pid.birthdate.component[0], this._config.siu.pid.birthdate.component[1]])
  }

  get gender() {
    return this.getProperty(this._config.siu.pid.gender.segment, [this._config.siu.pid.gender.component[0], this._config.siu.pid.gender.component[1]])
  }

  get common_name() {
    return this.getProperty(this._config.siu.pid.common_name.segment, [this._config.siu.pid.common_name.component[0], this._config.siu.pid.common_name.component[1]])
  }

  get address() {
    return this.getProperty(this._config.siu.pid.address.segment, [this._config.siu.pid.address.component[0], this._config.siu.pid.address.component[1]])
  }

  get city() {
    return this.getProperty(this._config.siu.pid.city.segment, [this._config.siu.pid.city.component[0], this._config.siu.pid.city.component[1]])
  }

  get cp() {
    return this.getProperty(this._config.siu.pid.cp.segment, [this._config.siu.pid.cp.component[0], this._config.siu.pid.cp.component[1]])
  }

  get firstphone() {
    return this.getProperty(this._config.siu.pid.firstphone.segment, [this._config.siu.pid.firstphone.component[0], this._config.siu.pid.firstphone.component[1]])
  }

  get secondphone() {
    return this.getProperty(this._config.siu.pid.secondphone.segment, [this._config.siu.pid.secondphone.component[0], this._config.siu.pid.secondphone.component[1]])
  }

  get email() {
    return this.getProperty(this._config.siu.pid.email.segment, [this._config.siu.pid.email.component[0], this._config.siu.pid.email.component[1]])
  }
}
