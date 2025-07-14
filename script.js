const card = document.querySelector('.tilt-card');
document.querySelector('.card-container').addEventListener('mousemove', (e) => {
  const { width, height } = card.getBoundingClientRect();
  const x = e.offsetX;
  const y = e.offsetY;
  const rotateX = ((y / height) - 0.5) * 30;
  const rotateY = ((x / width) - 0.5) * 30;
  card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
});

document.querySelector('.card-container').addEventListener('mouseleave', () => {
  card.style.transform = `rotateX(0deg) rotateY(0deg)`;
});
