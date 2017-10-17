class Controls {
    constructor(controls = {
        back: "fa fa-backward",
        pause: "fa fa-pause",
        reverse: "fa fa-exchange",
        shuffle: "fa fa-random",
        next: "fa fa-forward",
        play:"fa fa-play"
    }) {
        this.controls = controls;
    }

    clickHandler(view) {
        document
            .querySelector(".controls")
            .addEventListener("click", event => {
                /** Find key that has been clicked  */
               const action =  Object.keys(this.controls).find(el=>this.controls[el]===event.target.className)
               console.log(action)

               if(action==="pause")
               view[action]()
            });
    };

    updated() {};
}

export default Controls;
