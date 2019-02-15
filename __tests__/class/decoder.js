import {decode} from '../../src/lib/parser'
import s26MappingWrongFormat from './config/wrong-format.json'
import s26FieldMissing from './config/field-missing.json'

it(`Encoder - Wrong format`, () => {
  const s26 = `MSH|^~\\&|mllp_http_proxy|proxy00-prodaz|mllp_http_proxypartenaire|proxy00-prodpartenaire|20161231110000||SIU^S26|256660|P|2.5.1|||||FRA|UTF-8|\rSCH||49849903800^DimSolution||||100|||||^^30^20161231110000|||||10101041431^KAYSSIEH^BASSEL||||ODS|||||Booked|\rPID|||123456^^^ODS^^PI||DO BAIRRO^Dimitri^^^^^L||19920506|M|Nom usuel||Avenue des Champs-Élysées^^Paris^^75000^^^^^||0100000000^^^dimitri.dobairro@dimsolution.com^^^^~0200000000^^^^^^^|\rRGS|1\rAIG|1|||10101041431@750057689\rNTE|||My comment`;
  expect(() => decode(s26, s26MappingWrongFormat)).toThrowError('Unknow format: hl7-3');
});

it(`Encoder - Field attribute missing`, () => {
  const s26 = `MSH|^~\\&|mllp_http_proxy|proxy00-prodaz|mllp_http_proxypartenaire|proxy00-prodpartenaire|20161231110000||SIU^S26|256660|P|2.5.1|||||FRA|UTF-8|\rSCH||49849903800^DimSolution||||100|||||^^30^20161231110000|||||10101041431^KAYSSIEH^BASSEL||||ODS|||||Booked|\rPID|||123456^^^ODS^^PI||DO BAIRRO^Dimitri^^^^^L||19920506|M|Nom usuel||Avenue des Champs-Élysées^^Paris^^75000^^^^^||0100000000^^^dimitri.dobairro@dimsolution.com^^^^~0200000000^^^^^^^|\rRGS|1\rAIG|1|||10101041431@750057689\rNTE|||My comment`;
  const obj = decode(s26, s26FieldMissing);
  expect(obj.msh.message_datetime).toEqual('20161231110000');
  expect(obj.msh.message_type).toEqual('SIU');
  expect(obj.msh.message_type_ref).toEqual('S26');
  expect(obj.msh.message_control_id).toEqual('256660');
  expect(obj.msh.principal_language_of_message).toEqual('FRA');
  expect(obj.msh.character_set).toEqual('UTF-8');
  expect(obj.pid.id).toEqual('123456');
  expect(obj.pid.origin).toEqual('ODS');
  expect(obj.pid.first_name).toEqual('Dimitri');
  expect(obj.pid.last_name).toEqual('DO BAIRRO');
  expect(obj.pid.birthdate).toEqual('19920506');
  expect(obj.pid.gender).toEqual('M');
  expect(obj.pid.gender).toEqual('M');
  expect(obj.pid.street_name).toEqual('Avenue des Champs-Élysées');
  expect(obj.pid.city).toEqual('Paris');
  expect(obj.pid.phone[0]).toEqual('0100000000');
  expect(obj.pid.phone[1]).toEqual('0200000000');
  expect(obj.pid.email[0]).toEqual('dimitri.dobairro@dimsolution.com');
  expect(obj.pid.email[1]).toEqual('');
  expect(obj.sch.id).toEqual('49849903800');
  expect(obj.sch.origin).toEqual('DimSolution');
  expect(obj.sch.length).toEqual('100');
  expect(obj.sch.minutes).toEqual('30');
  expect(obj.sch.datetime).toEqual('10101041431');
  expect(obj.sch.last_name).toEqual('KAYSSIEH');
  expect(obj.sch.first_name).toEqual('BASSEL');
  expect(obj.sch.source).toEqual('ODS');
  expect(obj.sch.status).toEqual('Booked');
  expect(obj.rgs.id).toEqual('1');
  expect(obj.aig.id).toEqual('1');
  expect(obj.aig.rpps_finess).toEqual('10101041431@750057689');
  expect(obj.nte.comment).toEqual('My comment');
});
