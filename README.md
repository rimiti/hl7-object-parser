# hl7-object-parser [![Build Status](https://travis-ci.org/rimiti/hl7-object-parser.svg?branch=master)](https://travis-ci.org/rimiti/hl7-object-parser)
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
// json-hl7-mapping.json
{
  "format": "hl7",
  "adapter": "adaptor-name",
  "header": {
    "message_type": {
      "segment": "header",
      "component": [
        7,
        1
      ]
    },
    "message_type_detail": {
      "segment": "header",
      "component": [
        7,
        2
      ]
    }
  },
  "adt": {
    "evn": {
      "message_type": {
        "segment": "",
        "component": [
          1,
          2
        ]
      },
      "message_id": {
        "segment": "",
        "component": [
          1,
          2
        ]
      }
    },
    "pid": {
      "patient_id": {
        "segment": "PID",
        "component": [
          3,
          1
        ]
      },
      "patient_id_complete": {
        "segment": "PID",
        "field": [
          3,
          1
        ]
      },
      "origin": {
        "segment": "PID",
        "component": [
          3,
          4
        ]
      },
      "firstname": {
        "segment": "PID",
        "component": [
          5,
          2
        ]
      },
      "lastname": {
        "segment": "PID",
        "component": [
          5,
          1
        ]
      },
      "birthdate": {
        "segment": "PID",
        "component": [
          7,
          1
        ]
      },
      "gender": {
        "segment": "PID",
        "component": [
          8,
          1
        ]
      },
      "common_name": {
        "segment": "PID",
        "component": [
          9,
          1
        ]
      },
      "address": {
        "segment": "PID",
        "component": [
          11,
          1
        ]
      },
      "city": {
        "segment": "PID",
        "component": [
          11,
          3
        ]
      },
      "cp": {
        "segment": "PID",
        "component": [
          11,
          5
        ]
      },
      "firstphone": {
        "segment": "PID",
        "component": [
          13,
          1
        ]
      },
      "secondphone": {
        "segment": "PID",
        "component": [
          13,
          2
        ]
      },
      "email": {
        "segment": "PID",
        "component": [
          13,
          1
        ]
      }
    },
    "mrg": {
      "patient_id": {
        "segment": "MRG",
        "component": [
          1,
          1
        ]
      },
      "origin": {
        "segment": "MRG",
        "component": [
          1,
          4
        ]
      }
    }
  },
  "siu": {
    "sch": {
      "appointment_id": {
        "segment": "SCH",
        "component": [
          2,
          1
        ]
      },
      "origin": {
        "segment": "SCH",
        "component": [
          2,
          2
        ]
      },
      "intervention_type": {
        "segment": "SCH",
        "component": [
          6,
          1
        ]
      },
      "length": {
        "segment": "SCH",
        "component": [
          11,
          3
        ]
      },
      "date": {
        "segment": "SCH",
        "component": [
          11,
          4
        ]
      },
      "rpps": {
        "segment": "SCH",
        "component": [
          16,
          1
        ]
      },
      "doctor_firstname": {
        "segment": "SCH",
        "component": [
          16,
          3
        ]
      },
      "doctor_lastname": {
        "segment": "SCH",
        "component": [
          16,
          2
        ]
      },
      "status": {
        "segment": "SCH",
        "component": [
          25,
          1
        ]
      }
    },
    "nte": {
      "comment": {
        "segment": "NTE",
        "component": [
          3,
          1
        ]
      }
    },
    "aig": {
      "rpps_finess": {
        "segment": "AIG",
        "component": [
          4,
          1
        ]
      }
    },
    "pid": {
      "patient_id": {
        "segment": "PID",
        "component": [
          3,
          1
        ]
      },
      "patient_id_complete": {
        "segment": "PID",
        "field": [
          3,
          1
        ]
      },
      "origin": {
        "segment": "PID",
        "component": [
          3,
          4
        ]
      },
      "firstname": {
        "segment": "PID",
        "component": [
          5,
          2
        ]
      },
      "lastname": {
        "segment": "PID",
        "component": [
          5,
          1
        ]
      },
      "birthdate": {
        "segment": "PID",
        "component": [
          7,
          1
        ]
      },
      "gender": {
        "segment": "PID",
        "component": [
          8,
          1
        ]
      },
      "common_name": {
        "segment": "PID",
        "component": [
          9,
          1
        ]
      },
      "address": {
        "segment": "PID",
        "component": [
          11,
          1
        ]
      },
      "city": {
        "segment": "PID",
        "component": [
          11,
          3
        ]
      },
      "cp": {
        "segment": "PID",
        "component": [
          11,
          5
        ]
      },
      "firstphone": {
        "segment": "PID",
        "component": [
          13,
          1
        ]
      },
      "secondphone": {
        "segment": "PID",
        "component": [
          13,
          2
        ]
      },
      "email": {
        "segment": "PID",
        "component": [
          13,
          1
        ]
      }
    }
  }
}
```

Import your parser, configure it and use it !

```js
// index.js
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
