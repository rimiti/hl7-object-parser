import parser from '../class'
import config from '../config/default-hl7.json'

parser.configure({
    "mapping": config
  }
)

export default parser
