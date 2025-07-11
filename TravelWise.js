const langs = document.querySelectorAll('.lang');

langs.forEach(el => {
  el.addEventListener('click', function() {
    langs.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
  });
});
