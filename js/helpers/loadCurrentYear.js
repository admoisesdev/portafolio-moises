export default function loadCurrentDate(){
  let  year = new Date().getFullYear();
  const $currentYear = document.querySelector('#current-year');
  $currentYear.style.fontWeight = 'bold';
  $currentYear.textContent = year;
}