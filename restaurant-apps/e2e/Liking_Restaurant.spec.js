const assert = require('assert')

Feature('Liking Restaurant')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#restaurants')
  I.see('Tidak ada restaurant untuk ditampilkan', '#emptyFavorite')
})

Scenario('liking and unliking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '#emptyFavorite')

  I.amOnPage('/')

  I.seeElement('#restaurants')

  const firstRestaurant = locate('.restaurant-item a').first()
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)
  I.click(firstRestaurant)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.seeElement('.restaurants')
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-title')

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle)

  I.click(firstRestaurant)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.seeElement('#emptyFavorite')

  const emptyFavorite = await I.grabTextFrom('#emptyFavorite h2')
  assert.strictEqual(emptyFavorite, 'Tidak ada restaurant untuk ditampilkan')
})
