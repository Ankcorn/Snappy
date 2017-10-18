class Controls {
    constructor(photos = [], controls = {
        back: "fa fa-backward",
        pause: "fa fa-pause",
        reverse: "fa fa-exchange",
        shuffle: "fa fa-random",
        next: "fa fa-forward",
        play: "fa fa-play"
    }) {
        this.photos = photos
        this.currentPhoto = photos[0]
        this.position = 0
        this.photoQuantity = photos.length,
        this.forwards = true
        this.running = false
        this.controls = controls;
    }

    next(callback) {
        if (this.position === this.photoQuantity - 1) {
            this.position = 0
        } else {
            this.position = this.position + 1
        }
        callback(this.position)
    }

    back(callback) {
        if (this.position === 0) {
            this.position = this.photoQuantity - 1
        } else {
            this.position = this.position - 1
        }
        callback(this.position)
    }

    shuffle(callback) {
        const next = Math.floor(Math.random() * this.photoQuantity)
        this.position = next
        callback(this.position)
    }

    reverse() {
        this.forwards = !this.forwards
    }

    pause() {
        if (!this.running) return 'It is already paused dumbo'
        this.running = false
        const pauseButton = document.querySelector(`.${this.controls.pause}`.replace(" ", "."))
        pauseButton.className = this.controls.play
    }

    play(callback) {
        if (this.running) return 'It is already playing dumbo'
        this.running = true
        const playButton = document.querySelector(`.${this.controls.play}`.replace(" ", "."))
        playButton.className = this.controls.pause
        this.tictoc(callback)
    }

    tictoc(callback) {
        setInterval(() => {
            if (!this.running) 
                return
            if (this.forwards) {
                this.next(callback)
            } else {
                this.back(callback)
            }
        }, 2000)

    }

    clickHandler(update) {
        document
            .querySelector(".controls")
            .addEventListener("click", event => {
                /** Find key that has been clicked  */
                const action = Object
                    .keys(this.controls)
                    .find(el => this.controls[el] === event.target.className)
                console.log('doing action:' + action);
                this[action](update)
            });
    };

    updated() {};
}

export default Controls;
