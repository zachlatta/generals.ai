import io from 'socket.io-client'

class Client {
  constructor(baseUrl="https://ws.generals.io") {
    this.baseUrl = baseUrl
  }

  start(event, connect, disconnect) {
    this.socket = io(this.baseUrl)

    this.socket.on('connect', connect)
    this.socket.on('event', event)
    this.socket.on('disconnect', disconnect)
  }
}

export default Client
