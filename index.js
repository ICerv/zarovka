console.log('funguju!');

const bulb = document.querySelector('.bulb')

document.addEventListener('keydown', () => {
  bulb.classList.toggle('bulb--on');
})

