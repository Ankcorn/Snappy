import mobileMenu from "./mobile"
import Controls from "./controls"
import View from "./views"
import GridView from "./gridview"
import {loadPhoto} from "./services/loadPhoto"
import {menuSelector} from "./menu"

window.onload = async function () {
  const photo = await loadPhoto(0, 500, 300)
  document
    .querySelector("img")
    .src = photo
  mobileMenu()

  menuSelector(async(choice) => {
    console.log(choice)
    const photos = await loadPhotoMetadata()
    const view = ViewSelector(choice,photos)
    view.setup()
    const controls = new Controls(photos)
    controls.clickHandler(view.updateGallery)
    //controls.remoteHandler(view.updateGallery)
  })

}

function loadPhotoMetadata() {
  return new Promise((resolve, reject) => {
    fetch("http://localhost:3000/photos")
      .then(res => res.json())
      .then(json => resolve(json))
      .catch(err => console.err)
  })
}

function ViewSelector(option, photos) {
  switch (option) {
    case "Item 1":
      return new View(photos);
    case "Item 2":
      return new GridView(photos);
    default:
      break;
  }
}
