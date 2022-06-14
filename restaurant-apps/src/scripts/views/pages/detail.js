import RestaurantDbSource from '../../data/restaurantdb-source'
import UrlParser from '../../routes/url-parser'
import LikeButtonPresenter from '../../utils/like-button-presenter'
import { createRestaurantDetailTemplate } from '../templates/template-creator'
import FavoriteRestaurantIdb from '../../data/restaurantapps-idb'

const Detail = {
  async render () {
    return `
        <div id="restaurant" class="restaurant"></div>
        <div id="likeButtonContainer"></div>
        
        `
  },

  async afterRender () {
    const jumbotronNull = document.querySelector('#jumbotron')
    jumbotronNull.innerHTML = ''
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const restaurant = await RestaurantDbSource.detailRestaurant(url.id)
    const restaurantContainer = document.querySelector('#restaurant')
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant)

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        rating: restaurant.rating,
        pictureId: restaurant.pictureId
      }
    })
  }
}

export default Detail
