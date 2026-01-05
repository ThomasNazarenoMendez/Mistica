const track = document.querySelector('.carousel-track');
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');

const gap = 20; // igual al gap del CSS

nextBtn.addEventListener('click', () => {
  track.scrollBy({
    left: track.querySelector('.card').offsetWidth + gap,
    behavior: 'smooth'
  });
});

prevBtn.addEventListener('click', () => {
  track.scrollBy({
    left: -(track.querySelector('.card').offsetWidth + gap),
    behavior: 'smooth'
  });
});