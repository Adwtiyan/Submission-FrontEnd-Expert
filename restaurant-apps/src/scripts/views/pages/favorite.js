import favoriteRestaurantIdb from '../../data/restaurantapps-idb'
import { createRestaurantItemTemplate, createEmptyFavoriteRestaurant } from '../templates/template-creator'

const Favorite = {
  async render () {
    return `
    <div class="content">
      <h2 class="title">Favorite Restaurants</h2>
        <div id="restaurants" class="restaurants"></div>
        <div id="emptyFavorite"></div>
    </div>
          `
  },

  async afterRender () {
    const jumbotronNull = document.querySelector('#jumbotron')
    jumbotronNull.innerHTML = ''

    const restaurants = await favoriteRestaurantIdb.getAllRestaurants()
    const restaurantsContainer = document.querySelector('#restaurants')

    const emptyFavoriteRestaurant = document.querySelector('#emptyFavorite')

    if (restaurants.length === 0) {
      emptyFavoriteRestaurant.innerHTML = createEmptyFavoriteRestaurant()
    }

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant)
    })
  }
}

export default Favorite
