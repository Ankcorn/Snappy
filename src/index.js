import mobileMenu from "./mobile";
import Controls from "./controls";
import Views from "./views"

window.onload = () => {
  mobileMenu();

  const view = new Views(['','','','',''])
  const controls = new Controls();
  controls.clickHandler(view);
};
