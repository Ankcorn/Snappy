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

  const photos = await loadPhotoMetadata()
  const view = new View(photos)
  const gridview = new GridView(photos)
  function ViewSelector(option) {
    switch (option) {
      case "Item 1":
        return view;
      case "Item 2":
        return gridview;
      default:
        break;
    }
  }

  let controls = new Controls(photos)
  document.querySelector(".controls").addEventListener("click", controls.clickHandler(event,view.updateGallery))
  //controls.remoteHandler(view.updateGallery)

  menuSelector((choice) => {
    console.log(choice)
    const currentview = ViewSelector(choice)
    currentview.setup()
    console.log(currentview)

    controls.clickHandler(currentview.updateGallery)
    document.querySelector(".controls").addEventListener("click", controls.clickHandler(event,currentview.updateGallery))
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
