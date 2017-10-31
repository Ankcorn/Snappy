export function menuSelector() {
  return new Promise((resolve, reject) => {
    document.querySelector("#layout-menu").addEventListener("click", event => {
      console.log(event)
      const current = document.querySelector(".open")
      current.classList.remove("open")
      const selected = document.querySelector(`#${event.srcElement.getAttribute("id")}`)
      selected.classList.add("open")
      resolve(selected.innerText)
    })
  })
}
