# hl7-object-parser

[![Build Status](https://travis-ci.org/rimiti/hl7-object-parser.svg?branch=master)](https://travis-ci.org/rimiti/hl7-object-parser)  [![Coverage Status](https://coveralls.io/repos/github/rimiti/hl7-object-parser/badge.svg?branch=master)](https://coveralls.io/github/rimiti/hl7-object-parser?branch=master)  [![Issue Count](https://codeclimate.com/github/rimiti/hl7-object-parser/badges/issue_count.svg)](https://codeclimate.com/github/rimiti/hl7-object-parser)  [![Dependency Status](https://david-dm.org/rimiti/hl7-object-parser/status.svg)](https://david-dm.org/rimiti/hl7-object-parser) [![Dev Dependency Status](https://david-dm.org/rimiti/hl7-object-parser/dev-status.svg)](https://david-dm.org/rimiti/hl7-object-parser?type=dev) [![NPM version](https://badge.fury.io/js/hl7-object-parser.svg)](https://badge.fury.io/js/hl7-object-parser)  [![Downloads](https://img.shields.io/npm/dt/hl7-object-parser.svg)](https://img.shields.io/npm/dt/hl7-object-parser.svg)


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

Create your hl7 mapping file like that:

```json
// s12.json
{
  "format": "hl7-2.4",
  "adapter": "default",
  "mapping": {
    "msh": {
      "values": [
        { "field": "msh.message_datetime", "component": [5,1] },
        { "field": "msh.message_type", "component": [7,1] },
        { "field": "msh.message_type_ref", "component": [7,2] },
        { "field": "msh.message_control_id", "component": [8,1] },
        { "field": "msh.principal_language_of_message", "component": [15,1] },
        { "field": "msh.character_set", "component": [16,1] }
      ]
    },
    "pid": {
      "values": [
        { "field": "pid.id", "component": [3,1] },
        { "field": "pid.origin", "component": [3,4] },
        { "field": "pid.first_name", "component": [5,2] },
        { "field": "pid.last_name", "component": [5,1] },
        { "field": "pid.birthdate", "component": [7,1] },
        { "field": "pid.gender", "component": [8,1] },
        { "field": "pid.street_name", "component": [11,1] },
        { "field": "pid.city", "component": [11,3] },
        { "field": "pid.zip_code", "component": [11,5] },
        { "field": "pid.phone", "component": [13,1] },
        { "field": "pid.email", "component": [13,4] }
      ]
    },
    "sch": {
      "values": [
        { "field": "sch.id", "component": [2,1] },
        { "field": "sch.origin", "component": [2,2] },
        { "field": "sch.length", "component": [6,1] },
        { "field": "sch.minutes", "component": [11,3] },
        { "field": "sch.datetime", "component": [11,4] },
        { "field": "sch.datetime", "component": [16,1] },
        { "field": "sch.last_name", "component": [16,2] },
        { "field": "sch.first_name", "component": [16,3] },
        { "field": "sch.source", "component": [20,1] },
        { "field": "sch.status", "component": [25,1] }
      ]
    },
    "rgs": {
      "values": [
        { "field": "rgs.id", "component": [1,1] }
      ]
    },
    "aig": {
      "values": [
        { "field": "aig.id", "component": [1,1] },
        { "field": "aig.rpps_finess", "component": [4,1] }
      ]
    },
    "nte": {
      "values": [
        { "field": "nte.comment", "component": [3,1] }
      ]
    }
  }
}

```

Import your parser and use it !

- From CommonJS **require**:

```js
const parser = require('@rimiti/hl7-object-parser')
const s12 = `MSH|^~\\&|mllp_http_proxy|proxy00-prodaz|mllp_http_proxypartenaire|proxy00-prodpartenaire|20160923155836||SIU^S12|154779|P|2.5.1|||||FRA|UTF-8|\rSCH||49849903800^DimSolution||||100|||||^^30^20161231110000|||||10101041431^KAYSSIEH^BASSEL||||ODS|||||Booked|\rPID|||123456^^^ODS^^PI||DO BAIRRO^Dimitri^^^^^L||19920506|M|Nom usuel||Avenue des Champs-Élysées^^Paris^^75000^^^^^||0100000000^^^dimitri.dobairro@dimsolution.com^^^^~0200000000^^^^^^^|\rRGS|1\rAIG|1|||10101041431@750057689\rNTE|||My comment`
const obj = parser.decode(s12, s12Mapping)
console.log(obj)
```

- From Babel **import**:

```js
import {decode} from '@rimiti/hl7-object-parser'
import s12Mapping from './s12.json'

const s12 = `MSH|^~\\&|mllp_http_proxy|proxy00-prodaz|mllp_http_proxypartenaire|proxy00-prodpartenaire|20160923155836||SIU^S12|154779|P|2.5.1|||||FRA|UTF-8|\rSCH||49849903800^DimSolution||||100|||||^^30^20161231110000|||||10101041431^KAYSSIEH^BASSEL||||ODS|||||Booked|\rPID|||123456^^^ODS^^PI||DO BAIRRO^Dimitri^^^^^L||19920506|M|Nom usuel||Avenue des Champs-Élysées^^Paris^^75000^^^^^||0100000000^^^dimitri.dobairro@dimsolution.com^^^^~0200000000^^^^^^^|\rRGS|1\rAIG|1|||10101041431@750057689\rNTE|||My comment`
const obj = decode(s12, s12Mapping)
console.log(obj)
```

Output:

```js
{ msh:
   { message_datetime: '20160923155836',
     message_type: 'SIU',
     message_type_ref: 'S12',
     message_control_id: '154779',
     principal_language_of_message: 'FRA',
     character_set: 'UTF-8' },
  pid:
   { id: '123456',
     origin: 'ODS',
     first_name: 'Dimitri',
     last_name: 'DO BAIRRO',
     birthdate: '19920506',
     gender: 'M',
     street_name: 'Avenue des Champs-Élysées',
     city: 'Paris',
     zip_code: '75000',
     phone: [ '0100000000', '0200000000' ],
     email: [ 'dimitri.dobairro@dimsolution.com', '' ] },
  sch:
   { id: '49849903800',
     origin: 'DimSolution',
     length: '100',
     minutes: '30',
     datetime: '10101041431',
     last_name: 'KAYSSIEH',
     first_name: 'BASSEL',
     source: 'ODS',
     status: 'Booked' },
  rgs: { id: '1' },
  aig: { id: '1', rpps_finess: '10101041431@750057689' },
  nte: { comment: 'My comment' } }
```

## Tests
```js
// Run tests
npm run test
```

## Related packages
Convert your object into HL7 message. ([object-hl7-parser](https://github.com/rimiti/object-hl7-parser)).


## License
MIT © [Dimitri DO BAIRRO](https://dimsolution.com)
