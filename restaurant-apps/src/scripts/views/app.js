import routes from '../routes/routes'
import UrlParser from '../routes/url-parser'
import Hamburger from '../utils/hamburger-initiator'
import { jumbotronHeroLarge, jumbotronHeroSmall } from './templates/template-creator'

class App {
  constructor ({ button, drawer, content }) {
    this._button = button
    this._drawer = drawer
    this._content = content

    this._initialAppShell()
  }

  _initialAppShell () {
    Hamburger.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content
    })
  }

  async renderPage () {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]
    this._content.innerHTML = await page.render()
    await page.afterRender()

    const skipLinkElem = document.querySelector('.skip-link')
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault()
      document.querySelector('#mainContent').focus()
    })

    const jumbotron = document.querySelector('header .hero')
    const x = window.matchMedia('(max-width: 576px)')
    function changeImage (x) {
      if (x.matches) {
        jumbotron.innerHTML = jumbotronHeroSmall()
      } else {
        jumbotron.innerHTML = jumbotronHeroLarge()
      }
    }
    changeImage(x)
    x.addEventListener('change', changeImage)
  }
}

export default App
