
export default function hamburguerMenu(){
  const $menuBtn = document.querySelector('.menu-btn'); 
  const $menu = document.querySelector('.menu');
  
  $menuBtn.addEventListener('click',e => {
  
    $menuBtn.firstElementChild.classList.toggle('none');
    $menuBtn.lastElementChild.classList.toggle('none');
    $menu.classList.toggle('is-active');
  });

  document.addEventListener('click',e => {
    if (e.target.matches('.menu a')) {
      $menuBtn.firstElementChild.classList.remove('none');
      $menuBtn.lastElementChild.classList.add('none');
      $menu.classList.remove('is-active');
    }
  });


}
