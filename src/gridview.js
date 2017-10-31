import View from "./views"
export default class GridView extends View{
    constructor(photos){
        super(photos)
        
    }
    setup(){
        document.querySelector(".hero").innerHTML = "hi";
        console.log("grid view selected")
    }
}