import CONFIG from '../../globals/config'

const createRestaurantDetailTemplate = (restaurant) => `
    <h1 class="title">${restaurant.name}</h1>
    <img class="thumbnail" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="restaurant__info">
        <h3 class="title__main">Information</h3>
        <h4 class="title__option">Address</h4>
        <p class="text">${restaurant.address}</p>
        <h4 class="title__option">City</h4>
        <p class="text">${restaurant.city}</p>
        <h4 class="title__option">Description</h4>
        <p class="text">${restaurant.description}</p>
        <h3 class="title__option" >Kategori</h3>
        ${restaurant.categories.map((category) => `<span  class="text">${category.name}</span>`).join('')}
        <h3 class="title__option" >Daftar Makanan</h3>
        ${restaurant.menus.foods.map((food) => `<span  class="text">${food.name}</span> `)}
        <h3 class="title__option" >Daftar Minuman</h3>
        ${restaurant.menus.drinks.map((drink) => `<span  class="text">${drink.name}</span> `)}
      </div>
      <div class="review">
      <h3 class="title__option">Review Customer</h3>
      <div class="review-container"             >
       ${restaurant.customerReviews.map((review) => `
        <div class="review-item">
          <h3 class="review-name" >${review.name}</h3>
          <p class="review-date" >${review.date}</p>
          <p class="review-comment" >${review.review}</p>
        </div>`).join('')}
      </div>      
    </div> 
`

const createRestaurantItemTemplate = (restaurant) => `
    <div class="restaurant-item">
        <div class="restaurant-item__header">
            <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name}"
                data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://restaurant-api.dicoding.dev/images/medium/'}" />
                <div class="restaurant-item__header__rating">
                    <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
                </div>
        </div>
        <div class="restaurant-item__content">
            <h3 class="restaurant-title"><a tabindex="0" href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
            <p class="description-item">${restaurant.description}</p>
        </div>
    </div>
`
const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

const jumbotronHeroLarge = () => `
            <h1 class="title">Find The Best Restaurant Near You</h1>
            <p class="text">Memudahkan anda untuk menemukan retoran terbaik dengan rating diatas bintang 4 di sekitarmu. </p>
            <div class="content">
                <div class="images">
                    <img src="/images/hero-image_4-large.jpg" alt="Jumbotron Hero" class="thumbnail">
                </div>
            </div>
`

const jumbotronHeroSmall = () => `
            <h1 class="title">Find The Best Restaurant Near You</h1>
            <p class="text">Memudahkan anda untuk menemukan retoran terbaik dengan rating diatas bintang 4 di sekitarmu. </p>
            <div class="content">
                <div class="images">
                    <img src="/images/hero-image_4-small.jpg" alt="Jumbotron Hero" class="thumbnail">
                </div>
            </div>
`

const createEmptyFavoriteRestaurant = () => `
  <h2 style="color: black" align="center">Tidak ada restaurant untuk ditampilkan</h2>
`

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  jumbotronHeroLarge,
  jumbotronHeroSmall,
  createEmptyFavoriteRestaurant
}
