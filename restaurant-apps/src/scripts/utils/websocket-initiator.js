import CONFIG from '../globals/config'
import NotificationHelper from './notification-helper'

const WebSocketInitiator = {
  init (url) {
    const webSocket = new WebSocket(url)
    webSocket.onmessage = this._onMessageHandler
  },
  _onMessageHandler (message) {
    const restaurant = JSON.parse(message.data)
    NotificationHelper.sendNotification({
      name: `${restaurant.name} is new in your area`,
      options: {
        body: restaurant.description,
        pictureId: `${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}`
      }
    })
  }
}

export default WebSocketInitiator
