import parser from '../../lib/parser'
import chai from 'chai'
chai.should()

describe('ADT', () => {
  it(`A04`, (done) => {
    const a04 = `MSH|^~\&|mllp_http_proxy|proxy00-prodaz|mllp_http_proxypartenaire|proxy00-prodpartenaire|20160923155836||ADT^A04|154779|P|2.5.1|||||FRA|UTF-8\rEVN|ADT^A04|20160923155836\rPID|||123456^^^ODS^PI||DO BAIRRO^Dimitri^^^^^L||19920506|M|Nom usuel||Avenue des Champs-Élysées^^Paris^^75000||0100000000^^^dimitri.dobairro@clicrdv.com~0200000000\rPV1||U`
    let obj = parser.decode(a04)
    obj.message_type.should.be.equal(`adt`)
    obj.message_type_detail.should.be.equal(`a04`)
    obj.patient_id.should.be.equal(`123456`)
    obj.pid_origin.should.be.equal(`ODS`)
    obj.firstname.should.be.equal(`Dimitri`)
    obj.lastname.should.be.equal(`DO BAIRRO`)
    obj.birthdate.should.be.equal('19920506')
    obj.gender.should.be.equal(`M`)
    obj.common_name.should.be.equal(`Nom usuel`)
    obj.address.should.be.equal(`Avenue des Champs-Élysées`)
    obj.city.should.be.equal(`Paris`)
    obj.cp.should.be.equal(`75000`)
    obj.firstphone.should.be.equal(`0100000000^^^dimitri.dobairro@clicrdv.com`)
    done()
  })

  it(`A08`, (done) => {
    const a08 = `MSH|^~\&|mllp_http_proxy|proxy00-prodaz|mllp_http_proxypartenaire|proxy00-prodpartenaire|20160923155836||ADT^A08|154779|P|2.5.1|||||FRA|UTF-8\rEVN|ADT^A04|20160923155836\rPID|||123456^^^ODS^PI||DO BAIRRO^Dimitri^^^^^L||19920506|M|Nom usuel||Avenue des Champs-Élysées^^Paris^^75000||0100000000^^^dimitri.dobairro@clicrdv.com~0200000000\rPV1||U`
    let obj = parser.decode(a08)
    obj.message_type.should.be.equal(`adt`)
    obj.message_type_detail.should.be.equal(`a08`)
    obj.patient_id.should.be.equal(`123456`)
    obj.pid_origin.should.be.equal(`ODS`)
    obj.firstname.should.be.equal(`Dimitri`)
    obj.lastname.should.be.equal(`DO BAIRRO`)
    obj.birthdate.should.be.equal('19920506')
    obj.gender.should.be.equal(`M`)
    obj.common_name.should.be.equal(`Nom usuel`)
    obj.address.should.be.equal(`Avenue des Champs-Élysées`)
    obj.city.should.be.equal(`Paris`)
    obj.cp.should.be.equal(`75000`)
    obj.firstphone.should.be.equal(`0100000000^^^dimitri.dobairro@clicrdv.com`)
    done()
  })

  it(`A40`, (done) => {
    const a40 = `MSH|^~\&|mllp_http_proxy|proxy00-prodaz|mllp_http_proxypartenaire|proxy00-prodpartenaire|20160923155836||ADT^A40|154779|P|2.5.1|||||FRA|UTF-8\rEVN|ADT^A04|20160923155836\rPID|||123456^^^ODS^PI||DO BAIRRO^Dimitri^^^^^L||19920506|M|Nom usuel||Avenue des Champs-Élysées^^Paris^^75000||0100000000^^^dimitri.dobairro@clicrdv.com~0200000000\rPV1||U\rMRG|21448557^^^Clicrdv^PI`
    let obj = parser.decode(a40)
    obj.message_type.should.be.equal(`adt`)
    obj.message_type_detail.should.be.equal(`a40`)
    obj.patient_id.should.be.equal(`123456`)
    obj.pid_origin.should.be.equal(`ODS`)
    obj.firstname.should.be.equal(`Dimitri`)
    obj.lastname.should.be.equal(`DO BAIRRO`)
    obj.birthdate.should.be.equal('19920506')
    obj.gender.should.be.equal(`M`)
    obj.common_name.should.be.equal(`Nom usuel`)
    obj.address.should.be.equal(`Avenue des Champs-Élysées`)
    obj.city.should.be.equal(`Paris`)
    obj.cp.should.be.equal(`75000`)
    obj.firstphone.should.be.equal(`0100000000^^^dimitri.dobairro@clicrdv.com`)
    obj.mrg_patient_id.should.be.equal(`21448557`)
    obj.mrg_origin.should.be.equal(`Clicrdv`)
    done()
  })
})
