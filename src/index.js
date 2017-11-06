import mobileMenu from "./mobile"
import View from "./views"
import GridView from "./gridview"
import {loadPhoto} from "./services/loadPhoto"
import {menuSelector} from "./menu"

window.onload = async function () {
  const photo = await loadPhoto(0, 500, 300)
  document
    .querySelector(".snappy")
    .src = photo
  mobileMenu()

  const photos = await loadPhotoMetadata()
  const view = new View(photos)
  view.setup()
}

function loadPhotoMetadata() {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3000/photos")
      .then(res => res.json())
      .then(json => resolve(json))
      .catch(err => console.err)
  })
}
