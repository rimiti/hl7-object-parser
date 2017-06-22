# hl7-parser

Convert your HL7 message to an object.

# Install
```
$ npm install hl7-object-parser
```


## HL7 parsed messages:
Adt:
```
- A04 - Patient registration
- A08 - Patient information update
- A40 - Merge patient
```

Siu:
```
- S12 - Notification of new appointment booking
- S13 - Notification of appointment rescheduling
- S14 - Notification of appointment modification
- S15 - Notification of appointment cancellation
- S17 - Notification of appointment deletion
- S26 - Notification that patient did not show up for scheduled appointment
```


## How to use it ?
```js
import parser from 'hl7-object-parser'
import config from './json-hl7-mapping.json'

parser.configure({
    "mapping": config
  }
)

const hl7Message = `MSH|^~\&|mllp_http_proxy|proxy00-prodaz|mllp_http_proxypartenaire|proxy00-prodpartenaire|20160923155836||ADT^A04|154779|P|2.5.1|||||FRA|UTF-8\rEVN|ADT^A04|20160923155836\rPID|||123456^^^ODS^PI||DO BAIRRO^Dimitri^^^^^L||19920506|M|Nom usuel||Avenue des Champs-Élysées^^Paris^^75000||0100000000^^^dimitri.dobairro@clicrdv.com~0200000000\rPV1||U`
const obj = parser.decode(hl7Message)
console.log(obj.message_type)
console.log(obj.message_type_detail)
console.log(obj.patient_id)
console.log(obj.pid_origin)
console.log(obj.firstname)
console.log(obj.lastname)
console.log(obj.birthdate)
console.log(obj.gender)
console.log(obj.common_name)
console.log(obj.address)
console.log(obj.city)
console.log(obj.cp)
console.log(obj.firstphone)
```

## Tests
```js
// Run tests
gulp mocha
```

## License
MIT © [Dimitri DO BAIRRO](https://dimsolution.com)
