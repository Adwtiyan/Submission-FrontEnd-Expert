import 'regenerator-runtime'
import '../styles/main.min.css'
import CONFIG from './globals/config'
import swRegister from './utils/sw-register'
import WebSocketInitiator from './utils/websocket-initiator'
import App from './views/app'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

const app = new App({
  button: document.querySelector('.hamburger'),
  drawer: document.querySelector('nav ul'),
  content: document.querySelector('main')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER)
})
