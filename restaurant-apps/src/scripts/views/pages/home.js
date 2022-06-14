import RestaurantDbSource from '../../data/restaurantdb-source'
import { createRestaurantItemTemplate } from '../templates/template-creator'

const Home = {
  async render () {
    return `
    <div class="restaurants" id="restaurants"></div>
    `
  },

  async afterRender () {
    const listRestaurants = await RestaurantDbSource.listRestaurants()
    const restaurantContainer = document.querySelector('#restaurants')
    listRestaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant)
    })
  }
}

export default Home
