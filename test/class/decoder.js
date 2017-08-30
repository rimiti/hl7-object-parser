import test from 'ava'
import {decode} from '../../src/lib/parser'
import s26MappingWrongFormat from './config/wrong-format.json'
import s26FieldMissing from './config/field-missing.json'

test(`Encoder - Wrong format`, t => {
  const s26 = `MSH|^~\\&|mllp_http_proxy|proxy00-prodaz|mllp_http_proxypartenaire|proxy00-prodpartenaire|20161231110000||SIU^S26|256660|P|2.5.1|||||FRA|UTF-8|\rSCH||49849903800^DimSolution||||100|||||^^30^20161231110000|||||10101041431^KAYSSIEH^BASSEL||||ODS|||||Booked|\rPID|||123456^^^ODS^^PI||DO BAIRRO^Dimitri^^^^^L||19920506|M|Nom usuel||Avenue des Champs-Élysées^^Paris^^75000^^^^^||0100000000^^^dimitri.dobairro@dimsolution.com^^^^~0200000000^^^^^^^|\rRGS|1\rAIG|1|||10101041431@750057689\rNTE|||My comment`
  const error = t.throws(() => decode(s26, s26MappingWrongFormat), Error)
  t.is(error.message, 'Unknow format: hl7-3')
})

test(`Encoder - Field attribute missing`, t => {
  const s26 = `MSH|^~\\&|mllp_http_proxy|proxy00-prodaz|mllp_http_proxypartenaire|proxy00-prodpartenaire|20161231110000||SIU^S26|256660|P|2.5.1|||||FRA|UTF-8|\rSCH||49849903800^DimSolution||||100|||||^^30^20161231110000|||||10101041431^KAYSSIEH^BASSEL||||ODS|||||Booked|\rPID|||123456^^^ODS^^PI||DO BAIRRO^Dimitri^^^^^L||19920506|M|Nom usuel||Avenue des Champs-Élysées^^Paris^^75000^^^^^||0100000000^^^dimitri.dobairro@dimsolution.com^^^^~0200000000^^^^^^^|\rRGS|1\rAIG|1|||10101041431@750057689\rNTE|||My comment`
  const obj = decode(s26, s26FieldMissing)
  t.is(obj.msh.message_datetime, '20161231110000')
  t.is(obj.msh.message_type, 'SIU')
  t.is(obj.msh.message_type_ref, 'S26')
  t.is(obj.msh.message_control_id, '256660')
  t.is(obj.msh.principal_language_of_message, 'FRA')
  t.is(obj.msh.character_set, 'UTF-8')
  t.is(obj.pid.id, '123456')
  t.is(obj.pid.origin, 'ODS')
  t.is(obj.pid.first_name, 'Dimitri')
  t.is(obj.pid.last_name, 'DO BAIRRO')
  t.is(obj.pid.birthdate, '19920506')
  t.is(obj.pid.gender, 'M')
  t.is(obj.pid.gender, 'M')
  t.is(obj.pid.street_name, 'Avenue des Champs-Élysées')
  t.is(obj.pid.city, 'Paris')
  t.is(obj.pid.phone[0], '0100000000')
  t.is(obj.pid.phone[1], '0200000000')
  t.is(obj.pid.email[0], 'dimitri.dobairro@dimsolution.com')
  t.is(obj.pid.email[1], '')
  t.is(obj.sch.id, '49849903800')
  t.is(obj.sch.origin, 'DimSolution')
  t.is(obj.sch.length, '100')
  t.is(obj.sch.minutes, '30')
  t.is(obj.sch.datetime, '10101041431')
  t.is(obj.sch.last_name, 'KAYSSIEH')
  t.is(obj.sch.first_name, 'BASSEL')
  t.is(obj.sch.source, 'ODS')
  t.is(obj.sch.status, 'Booked')
  t.is(obj.rgs.id, '1')
  t.is(obj.aig.id, '1')
  t.is(obj.aig.rpps_finess, '10101041431@750057689')
  t.is(obj.nte.comment, 'My comment')
})
