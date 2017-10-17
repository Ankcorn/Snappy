export default class Views{
    constructor(photos = [],startpoint = 0){
        if(photos.length===0&&startpoint<0) return
        this.photos = photos
        this.currentPhoto = photos[startpoint]
        this.position = startpoint
        this.photoQuantity = photos.length,
        this.forwards = true
        this.pause = false
    }

    next(){
        if(this.position === this.photoQuantity -1){
            this.position = 0
        }else{
            this.position = this.position + 1
        }

        this._updateGallary()
    }

    back(){
        if(this.position === 0){
            this.position = this.photoQuantity -1
        }else{
            this.position = this.position -1
        }
        this._updateGallary()
    }

    shuffle(){
        const next = Math.floor(Math.random * this.photoQuantity)
        this.position = next

        this._updateGallary();
    }
    
    reverse(){
        this.forwards = !this.forwards
    }

    pause(){
        if(this.pause) return 'It is already paused dumbo'
        this.pause = true
    }

    play(){
        if(!this.pause) return 'It is already playing dumbo'
        this.pause = false
        tictoc()
    }

    tictoc(){
        setInterval(()=>{
            if(this.pause) return
            if(this.forwards){
                next()
            }else{
                back()
            }
        },1000)
        
    }

    _updateGallary(){
        /**To Update the current picture call this */
        console.log(this.position)
        this.currentPhoto = this.photos[this.position]
        this._render()
    }

    _render(){
        console.log("calling render")
    }   
}