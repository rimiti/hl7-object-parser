import Decoder from './decoder'

let configuration

export default {

  /**
   * @description Configure usage
   * @param config
   */
  configure: (config) => configuration = config,

  /**
   * @description Decode message with configuration
   * @param message
   * @returns {Generator}
   */
  decode: (message) => {
    let decoder = new Decoder(message, configuration.mapping)
    return decoder.decode()
  }
}
