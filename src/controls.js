class Controls {
  constructor(
    photos = [],
    controls = {
      //Maybe rework to include dom object?
      back: "fa fa-backward",
      pause: "fa fa-pause",
      reverse: "fa fa-exchange",
      expand: "fa fa-expand",
      compress: "fa fa-compress",
      shuffle: "fa fa-random",
      next: "fa fa-forward",
      play: "fa fa-play"
    }
  ) {
    this.photos = photos
    this.currentPhoto = photos[0]
    this.position = 0
    ;(this.photoQuantity = photos.length), (this.forwards = true)
    this.running = false
    this.controls = controls
    this.controlsSelector = document.querySelector(".controls")
    this.showOnHover()
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
  expand() {
    const expandButton = document.querySelector(
      `.${this.controls.expand}`.replace(" ", ".")
    )
    expandButton.className = this.controls.compress
    document.querySelector('.snappy').classList.add('big')
  }
  compress() {
    const compressButton = document.querySelector(
      `.${this.controls.compress}`.replace(" ", ".")
    )
    compressButton.className = this.controls.expand
    document.querySelector('.snappy.big').classList.remove('big')
  }
  pause() {
    if (!this.running) return "It is already paused dumbo"
    this.running = false
    const pauseButton = document.querySelector(
      `.${this.controls.pause}`.replace(" ", ".")
    )
    pauseButton.className = this.controls.play
  }

  play(callback) {
    if (this.running) return "It is already playing dumbo"
    this.running = true
    const playButton = document.querySelector(
      `.${this.controls.play}`.replace(" ", ".")
    )
    playButton.className = this.controls.pause
    this.tictoc(callback)
  }

  tictoc(callback) {
    setInterval(() => {
      if (!this.running) return
      if (this.forwards) {
        this.next(callback)
      } else {
        this.back(callback)
      }
    }, 2000)
  }

  clickHandler(update) {
    const clickEvent = event => {
      /** Find key that has been clicked  */
      const action = Object.keys(this.controls).find(
        el => this.controls[el] === event.target.className
      )
      console.log("doing action:" + action)
      this[action](update)
    }
    this.controlsSelector.addEventListener("click", clickEvent, false)
  }

  remoteHandler(update) {
    const socket = io("http://192.168.1.72:4200")
    socket.send("hi")

    socket.on("change", msg => {
      const action = msg.button
      console.log("doing action:" + action)
      this[action](update)
    })
  }

  showOnHover() {
    this.controlsSelector.addEventListener("mouseover", this.displayElement)
    this.controlsSelector.addEventListener("mouseleave", this.hideElement)

    setTimeout(() => {
      console.log("hiding")
      this.controlsSelector.classList.remove("visible")
    }, 6000)
  }

  displayElement(event) {
    console.log("showing")
    console.log(document.querySelector(".controls"))
    document.querySelector(".controls").classList.add("visible")
  }

  hideElement(event) {
    console.log("hiding")
    setTimeout(() => {
      document.querySelector(".controls").classList.remove("visible")
    }, 3000)
  }
}

export default Controls
