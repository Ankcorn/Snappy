export function menuSelector(callback) {
    document.querySelector("#layout-menu").addEventListener("click", event => {
      const current = document.querySelector(".open")
      current.classList.remove("open")
      const selected = document.querySelector(`#${event.srcElement.getAttribute("id")}`)
      selected.classList.add("open")
      callback(selected.innerText)
    })
}
