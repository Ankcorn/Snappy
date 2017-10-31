export default function mobileMenu() {
  const menuIcon = document.querySelector(".toggleNav")
  menuIcon.addEventListener("click", () => {
    document.querySelector(".flex-nav ul").classList.toggle("open")
    document.querySelectorAll(".menu-item").forEach(item => {
      item.classList.toggle("open")
    })
  })
}
