import contactForm from "./components/contactForm.js";
import hamburguerMenu from "./components/hamburguerMenu.js";
import loadCurrentDate  from "./helpers/loadCurrentYear.js";
import typedEffect from "./helpers/typed.js";


document.addEventListener('DOMContentLoaded', () => {
  typedEffect();
  loadCurrentDate()
  hamburguerMenu();
  contactForm();
});



