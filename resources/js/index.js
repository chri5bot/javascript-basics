const para = document.querySelector('p')

para.addEventListener('click', updateName)

function updateName() {
  let name = prompt('Ingresa un nuevo nombre')
  para.textContent = 'Player 1: ' + name
}
