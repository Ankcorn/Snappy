export default class Views{
    constructor(photos = []){
        if(photos.length===0) return
        this.photos = photos
        this.currentPhoto = photos[0]
        //this.position = startpoint For later (for cool shit)
        this.updateGallery = this.updateGallery.bind(this)
    }

    updateGallery(photoNumber){
        /**To Update the current picture call this */
        console.log('calling update',photoNumber)
        this.currentPhoto = this.photos[photoNumber]
        this._render()
    }

    _render(){
        console.log("calling render")
        document.querySelector("img").src=this.currentPhoto
    }   
}