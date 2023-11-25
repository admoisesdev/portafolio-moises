document.addEventListener('DOMContentLoaded', () => {
  loadCurrentDate()
  hamburguerMenu();
  contactForm();
});

function hamburguerMenu() {
  const $menuBtn = document.querySelector('.menu-btn');
  const $menu = document.querySelector('.menu');

  $menuBtn.addEventListener('click', e => {

    $menuBtn.firstElementChild.classList.toggle('none');
    $menuBtn.lastElementChild.classList.toggle('none');
    $menu.classList.toggle('is-active');
  });

  document.addEventListener('click', e => {
    if (e.target.matches('.menu a')) {
      $menuBtn.firstElementChild.classList.remove('none');
      $menuBtn.lastElementChild.classList.add('none');
      $menu.classList.remove('is-active');
    }
  });

}

function contactForm() {
  const $form = document.querySelector('.contact-form'),
    $loader = document.querySelector('.loader'),
    $response = document.querySelector('.contact-form-response');

  $form.addEventListener("submit", e => {
    e.preventDefault();
    $loader.classList.remove('none');

    fetch("https://formsubmit.co/ajax/moi.prado20@gmail.com", {
      method: "POST",
      body: new FormData(e.target)
    })
      .then(res => res.ok ? res.json : Promise.reject(res))
      .then(json => {
        console.log(json);
        $loader.classList.add('none');
        location.hash = "#gracias";
        $form.reset();
      })
      .catch(err => {
        console.log(err);
        let message = err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
        $response.querySelector('h3').innerHTML = `Error ${err.status}: ${message}`;
      })
      .finally(() => {
        $loader.classList.add('none');

        setTimeout(() => {
          location.hash = "#close";
        }, 3000);
      });
  });
}

function loadCurrentDate() {
  let year = new Date().getFullYear();
  const $currentYear = document.querySelector('#current-year');
  $currentYear.style.fontWeight = 'bold';
  $currentYear.textContent = year;
}




