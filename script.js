
const revealElements = document.querySelectorAll('.reveal','.revs');

const revealOptions = {
    threshold: 0.5
};

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

revealElements.forEach(element => {
    revealObserver.observe(element);
});


const toggleBtnIcon = document.querySelector('#menu-icon i')
const dropdown = document.querySelector('.dropdown')
const toggleBtn = document.querySelector('#menu-icon')

toggleBtn.onclick = function (){

  dropdown.classList.toggle('open')
  const isOpen = dropdown.classList.contains('open')

toggleBtnIcon.classList = isOpen
? 'fa-solid fa-xmark'
: 'fa-solid fa-bars'

}
const scriptURL = 'https://script.google.com/macros/s/AKfycbyf7m66Ghe6weZAJayZzrU8JcnqlMNZl0XSZla3mqR9PeYNLIrHCvDweGI-W8liSRJD/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
});





ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });






let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};
