document.addEventListener('DOMContentLoaded', ()=>{
  // Smooth scroll للأزرار
  document.querySelectorAll('.button-card').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const target = btn.dataset.target;
      if(document.getElementById(target)){
        document.getElementById(target).scrollIntoView({behavior:'smooth', block:'center'});
      }
    });
  });

  // Fade-in عند النزول
  const fadeElems = document.querySelectorAll('.fade-in');
  const reveal = ()=>{
    fadeElems.forEach(el=>{
      const rect = el.getBoundingClientRect();
      if(rect.top < window.innerHeight - 100){
        el.classList.add('show');
      }
    });
  };
  window.addEventListener('scroll', reveal);
  reveal();

  // روابط السوشيال (غيّرها لحساباتك)
  document.getElementById('wa').href = 'https://wa.me/YOUR_NUMBER';
  document.getElementById('fb').href = 'https://facebook.com/YOUR_PAGE';
  document.getElementById('tg').href = 'https://t.me/YOUR_HANDLE';
  document.getElementById('ig').href = 'https://instagram.com/YOUR_HANDLE';
});