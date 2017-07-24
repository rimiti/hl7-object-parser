import test from 'ava'
import parser from '../../src/lib/parser'
import a04Mapping from './config/a04.json'

test('A04 - Patient registration', t => {
  const a04 = `MSH|^~\\&|mllp_http_proxy|proxy00-prodaz|mllp_http_proxypartenaire|proxy00-prodpartenaire|20160923155836||ADT^A04|154779|P|2.5.1|||||FRA|UTF-8|\rEVN|ADT^A04|20160923155836|\rPID|||123456^^^ODS^^PI||DO BAIRRO^Dimitri^^^^^L||19920506|M|Nom usuel||Avenue des Champs-Élysées^^Paris^^75000^^^^^||0100000000^^^dimitri.dobairro@dimsolution.com^^^^~0200000000^^^^^^^|\rPV1||U|`
  const obj = parser.decode(a04, a04Mapping)
  console.log(JSON.stringify(obj))
  t.is(obj.msh.message_datetime, '20160923155836')
  t.is(obj.msh.message_type, 'ADT')
  t.is(obj.msh.message_type_ref, 'A04')
  t.is(obj.msh.message_control_id, '154779')
  t.is(obj.msh.principal_language_of_message, 'FRA')
  t.is(obj.msh.character_set, 'UTF-8')
  t.is(obj.evn.id, '20160923155836')
  t.is(obj.evn.message_type, 'ADT')
  t.is(obj.evn.message_type_ref, 'A04')
  t.is(obj.pv1.val, 'U')
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
})
