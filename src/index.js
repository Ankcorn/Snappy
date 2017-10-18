import mobileMenu from "./mobile";
import Controls from "./controls";
import Views from "./views"

window.onload = () => {
  mobileMenu();
  const photos = ['https://i.redd.it/8cj1h4jyblsz.jpg','https://i.redd.it/th2qjd0zrhsz.jpg','https://i.redd.it/9pwsn1yhkksz.jpg','https://i.redd.it/92zfjj82jmsz.jpg','https://c2.staticflickr.com/6/5654/30550383625_d9b12ef7d0_k.jpg'];
  const view = new Views(photos)
  const controls = new Controls(photos);
  controls.clickHandler(view.updateGallery);
};
