import test from 'ava'
import parser from '../../src/lib/parser'
import s26MappingWrongFormat from './config/wrong-format.json'

test(`Encoder - Wrong format`, t => {
  const s26 = `MSH|^~\\&|mllp_http_proxy|proxy00-prodaz|mllp_http_proxypartenaire|proxy00-prodpartenaire|20161231110000||SIU^S26|256660|P|2.5.1|||||FRA|UTF-8|\rSCH||49849903800^DimSolution||||100|||||^^30^20161231110000|||||10101041431^KAYSSIEH^BASSEL||||ODS|||||Booked|\rPID|||123456^^^ODS^^PI||DO BAIRRO^Dimitri^^^^^L||19920506|M|Nom usuel||Avenue des Champs-Élysées^^Paris^^75000^^^^^||0100000000^^^dimitri.dobairro@dimsolution.com^^^^~0200000000^^^^^^^|\rRGS|1\rAIG|1|||10101041431@750057689\rNTE|||My comment`
  const error = t.throws(() => parser.decode(s26, s26MappingWrongFormat), Error)
  t.is(error.message, 'Unknow format: hl7-3')
})
