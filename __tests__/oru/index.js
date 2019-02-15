import {decode} from '../../src/lib/parser'
import r01Mapping from './config/r01.json'

it(`ORU - Notification of new observation result`, () => {
  const r01 = `MSH|^~\&|LCS|LCA|LIS|TEST9999|199807311532||ORU^R01|3629|P|2.2\rPID|2|2161348462|20809880170|1614614|20809880170^TESTPAT||19760924|M|||^^^^\r00000-0000|||||||86427531^^^03|SSN# HERE\rORC|NW|8642753100012^LIS|20809880170^LCS||||||19980727000000|||HAVILAND\rOBR|1|8642753100012^LIS|20809880170^LCS|008342^UPPER RESPIRATORY\rCULTURE^L|||19980727175800||||||SS#634748641 CH14885 SRC:THROA\rSRC:PENI|19980727000000||||||20809880170||19980730041800||BN|F\rOBX|1|ST|008342^UPPER RESPIRATORY CULTURE^L||FINALREPORT|||||N|F||| 19980729160500|BN\rORC|NW|8642753100012^LIS|20809880170^LCS||||||19980727000000|||HAVILAND\rOBR|2|8642753100012^LIS|20809880170^LCS|997602^.^L|||19980727175800||||G|||\r19980727000000||||||20809880170||19980730041800|||F|997602|||008342\rOBX|2|CE|997231^RESULT 1^L||M415|||||N|F|||19980729160500|BN\rNTE|1|L|MORAXELLA (BRANHAMELLA) CATARRHALIS\rNTE|2|L| HEAVY GROWTH\rNTE|3|L| BETA LACTAMASE POSITIVE\rOBX|3|CE|997232^RESULT 2^L||MR105|||||N|F|||19980729160500|BN\rNTE|1|L|ROUTINE RESPIRATORY FLORA`;
  const obj = decode(r01, r01Mapping);
  expect(obj.msh.message_datetime).toEqual('199807311532');
  expect(obj.msh.message_type).toEqual('ORU');
  expect(obj.msh.message_type_ref).toEqual('R01');
  expect(obj.msh.message_control_id).toEqual('3629');
  expect(obj.pid.id).toEqual('20809880170');
  expect(obj.pid.origin).toEqual('');
  expect(obj.pid.first_name).toEqual('TESTPAT');
  expect(obj.pid.last_name).toEqual('20809880170');
  expect(obj.pid.birthdate).toEqual('19760924');
  expect(obj.pid.gender).toEqual('M');
  expect(obj.pid.street_name).toEqual('');
  expect(obj.pid.city).toEqual('');
  expect(obj.pid.zip_code).toEqual('');
  expect(obj.pid.phone).toEqual('');
  expect(obj.pid.email).toEqual('');
  expect(obj.nte.length).toEqual(4);
  expect(obj.nte[0].id).toEqual('1');
  expect(obj.nte[0].source).toEqual('L');
  expect(obj.nte[0].comment).toEqual('MORAXELLA (BRANHAMELLA) CATARRHALIS');
  expect(obj.nte[1].id).toEqual('2');
  expect(obj.nte[1].source).toEqual('L');
  expect(obj.nte[1].comment).toEqual(' HEAVY GROWTH');
  expect(obj.nte[2].id).toEqual('3');
  expect(obj.nte[2].source).toEqual('L');
  expect(obj.nte[2].comment).toEqual(' BETA LACTAMASE POSITIVE');
  expect(obj.nte[3].id).toEqual('1');
  expect(obj.nte[3].source).toEqual('L');
  expect(obj.nte[3].comment).toEqual('ROUTINE RESPIRATORY FLORA');
  expect(obj.orc.length).toEqual(2);
  expect(obj.obr.length).toEqual(2);
  expect(obj.obx.length).toEqual(3);
});
