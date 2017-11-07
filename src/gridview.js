import View from "./views"
export default class GridView extends View {
  constructor(photos) {
    super(photos)
  }
  updateGallery(n) {
    console.log("lol" + n)
  }
  setup() {
    const hero = document.querySelector(".hero")
    hero.classList.add("grid")
    hero.innerHTML = "hi"
    let htmlString = ""
    this.photos.forEach((el, index) => {
      if (index === 3) {
        htmlString +=
          "<div class='grid element big'><img src='https://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg'/></div>"
      } else {
        htmlString +=
          "<div class='grid element'><img src='https://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg'/></div>"
      }
    })
    console.log(htmlString)
    hero.innerHTML = htmlString
    console.log("grid view selected")
  }
}
