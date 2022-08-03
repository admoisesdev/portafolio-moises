import contactForm from "./components/contactForm.js";
import hamburguerMenu from "./components/hamburguerMenu.js";
import { loadCurrentDate } from "./helpers/loadCurrentYear.js";


document.addEventListener('DOMContentLoaded', () => {
  loadCurrentDate()
  hamburguerMenu();
  contactForm();
});



