import {decode} from '../../src/lib/parser'
import a04Mapping from './config/a04.json'
import a08Mapping from './config/a08.json'
import a40Mapping from './config/a40.json'

it('A04 - Patient registration', () => {
  const a04 = `MSH|^~\\&|mllp_http_proxy|proxy00-prodaz|mllp_http_proxypartenaire|proxy00-prodpartenaire|20160923155836||ADT^A04|154779|P|2.5.1|||||FRA|UTF-8|\rEVN|ADT^A04|20160923155836|\rPID|||123456^^^ODS^^PI||DO BAIRRO^Dimitri^^^^^L||19920506|M|Nom usuel||Avenue des Champs-Élysées^^Paris^^75000^^^^^||0100000000^^^dimitri.dobairro@dimsolution.com^^^^~0200000000^^^^^^^|\rPV1||U|`;
  const obj = decode(a04, a04Mapping);
  expect(obj.msh.message_datetime).toEqual('20160923155836');
  expect(obj.msh.message_type).toEqual('ADT');
  expect(obj.msh.message_type_ref).toEqual('A04');
  expect(obj.msh.message_control_id).toEqual('154779');
  expect(obj.msh.principal_language_of_message).toEqual('FRA');
  expect(obj.msh.character_set).toEqual('UTF-8');
  expect(obj.evn.id).toEqual('20160923155836');
  expect(obj.evn.message_type).toEqual('ADT');
  expect(obj.evn.message_type_ref).toEqual('A04');
  expect(obj.pv1.val).toEqual('U');
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
});

it(`A08 - Patient information update`, () => {
  const a08 = `MSH|^~\\&|mllp_http_proxy|proxy00-prodaz|mllp_http_proxypartenaire|proxy00-prodpartenaire|20160923155836||ADT^A08|154779|P|2.5.1|||||FRA|UTF-8|\rEVN|ADT^A08|20160923155836|\rPID|||123456^^^ODS^^PI||DO BAIRRO^Dimitri^^^^^L||19920506|M|Nom usuel||Avenue des Champs-Élysées^^Paris^^75000^^^^^||0100000000^^^dimitri.dobairro@dimsolution.com^^^^~0200000000^^^^^^^|\rPV1||U|`;
  const obj = decode(a08, a08Mapping);
  expect(obj.msh.message_datetime).toEqual('20160923155836');
  expect(obj.msh.message_type).toEqual('ADT');
  expect(obj.msh.message_type_ref).toEqual('A08');
  expect(obj.msh.message_control_id).toEqual('154779');
  expect(obj.msh.principal_language_of_message).toEqual('FRA');
  expect(obj.msh.character_set).toEqual('UTF-8');
  expect(obj.evn.id).toEqual('20160923155836');
  expect(obj.evn.message_type).toEqual('ADT');
  expect(obj.evn.message_type_ref).toEqual('A08');
  expect(obj.pv1.val).toEqual('U');
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
});

it(`A40 - Merge patient (patient identifier list)`, () => {
  const a40 = `MSH|^~\\&|mllp_http_proxy|proxy00-prodaz|mllp_http_proxypartenaire|proxy00-prodpartenaire|20160923155836||ADT^A40|154779|P|2.5.1|||||FRA|UTF-8|\rEVN|ADT^A40|20160923155836|\rPID|||123456^^^ODS^^PI||DO BAIRRO^Dimitri^^^^^L||19920506|M|Nom usuel||Avenue des Champs-Élysées^^Paris^^75000^^^^^||0100000000^^^dimitri.dobairro@dimsolution.com^^^^~0200000000^^^^^^^|\rPV1||U|\rMRG|21448557^^^DimSolution^^PI`;
  const obj = decode(a40, a40Mapping);
  expect(obj.msh.message_datetime).toEqual('20160923155836');
  expect(obj.msh.message_type).toEqual('ADT');
  expect(obj.msh.message_type_ref).toEqual('A40');
  expect(obj.msh.message_control_id).toEqual('154779');
  expect(obj.msh.principal_language_of_message).toEqual('FRA');
  expect(obj.msh.character_set).toEqual('UTF-8');
  expect(obj.evn.id).toEqual('20160923155836');
  expect(obj.evn.message_type).toEqual('ADT');
  expect(obj.evn.message_type_ref).toEqual('A40');
  expect(obj.pv1.val).toEqual('U');
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
  expect(obj.mrg.id).toEqual('21448557');
  expect(obj.mrg.origin).toEqual('DimSolution');
  expect(obj.mrg.opt).toEqual('PI');
});
