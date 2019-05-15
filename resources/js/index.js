const pElement = document.querySelector('p')

pElement.addEventListener('click', updateName)

function updateName() {
  let name = prompt('Ingresa un nuevo nombre')
  pElement.textContent = 'Player 1: ' + name
}
