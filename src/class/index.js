import Decoder from './decoder'
import fs from 'fs'

let configuration

export default {

  /**
   * @description Configure usage
   * @param config
   */
  configure: (config) => configuration = config,

  /**
   * @description Decode message with configuration
   * @param emitter
   * @param recipient
   * @returns {Generator}
   */
  decode: (message) => {
    fs.readFile(configuration.mapping_file, 'utf8', (err, data) => {
      if (err) throw new Error(e)
      let decoder = new Decoder(message, JSON.parse(data))
      return decoder
    })
  }
}
