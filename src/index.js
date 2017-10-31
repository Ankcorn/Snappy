import mobileMenu from "./mobile"
import Controls from "./controls"
import View from "./views"
import { loadPhoto } from "./services/loadPhoto"
import { menuSelector } from "./menu"

window.onload = () => {
  loadPhoto(0, 500, 300).then(photo => {
    //Load Initial photo fast
    document.querySelector("img").src = photo
    menuSelector()
    mobileMenu()
    //const photos = ['https://i.redd.it/8cj1h4jyblsz.jpg','https://i.redd.it/th2qjd0zrhsz.jpg','https://i.redd.it/9pwsn1yhkksz.jpg','https://i.redd.it/92zfjj82jmsz.jpg','https://c2.staticflickr.com/6/5654/30550383625_d9b12ef7d0_k.jpg'];

    loadPhotoMetadata(photos => {
      const view = new View(photos)
      const controls = new Controls(photos)
      controls.clickHandler(view.updateGallery)
      controls.remoteHandler(view.updateGallery)
    })
  })
}

function loadPhotoMetadata(callback) {
  fetch("http://localhost:3000/photos")
    .then(res => res.json())
    .then(json => {
      callback(json)
    })
}
