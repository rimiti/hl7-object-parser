import Decoder from './decoder'

export default {

  /**
   * @description Decode message with configuration
   * @param message
   * @param config
   * @return {*}
   */
  decode: (message, config) => {
    let decoder = new Decoder(message, config)
    return decoder.decode()
  }

}
