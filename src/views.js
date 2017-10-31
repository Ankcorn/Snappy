import { loadPhoto } from "./services/loadPhoto"

export default class Views {
  constructor(photos = []) {
    if (photos.length === 0) return
    this.photos = photos.map((photo, index) => ({ number: index }))
    this.currentPhoto = photos[0]
    //this.position = startpoint For later (for cool shit)
    this.updateGallery = this.updateGallery.bind(this)
    this._render(0)
    this.width = 1000
    this.height = 600
  }

  updateGallery(photoNumber) {
    /**To Update the current picture call this */
    console.log("calling update", photoNumber)
    this.currentPhoto = this.photos[photoNumber]
    this._render(photoNumber, this.width, this.height)
  }

  async _render(number, width, height) {
    if (typeof this.photos[number].photo === "undefined") {
      console.log("Loading new photo")
      const photo = await loadPhoto(number, width)
      document.querySelector("img").src = photo
      this.photos[number]["photo"] = photo
    } else {
      document.querySelector("img").src = this.photos[number].photo
    }
  }
}
