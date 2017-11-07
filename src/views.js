import { loadPhoto } from "./services/loadPhoto"
import Controls from "./controls"

class View {
  constructor(photos = []) {
    if (photos.length === 0) return
    this.photos = photos.map((photo, index) => ({ number: index }))
    this.currentPhoto = photos[0]
    //this.position = startpoint For later (for cool shit)
    this.updateGallery = this.updateGallery.bind(this)
    //this._render(0)
    this.width = 1000
    this.height = 600
    this.controls = new Controls(photos)
    this.controls.clickHandler(this.updateGallery)
  }

  updateGallery(photoNumber) {
    /**To Update the current picture call this */
    console.log("calling update", photoNumber)
    this.currentPhoto = this.photos[photoNumber]
    this._render(photoNumber, this.width, this.height)
  }

  setup() {
    this._render(0)
  }

  async _render(number, width, height) {
    if (typeof this.photos[number].photo === "undefined") {
      console.log("Loading new photo")
      const photo = await loadPhoto(number, width)
      document.querySelector(".snappy").src = photo
      this.photos[number]["photo"] = photo
    } else {
      document.querySelector(".snappy").src = this.photos[number].photo
    }
  }
}

export default View
