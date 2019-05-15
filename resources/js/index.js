// updates text of p element
const pElement = document.querySelector('p')

pElement.addEventListener('click', updateName)

function updateName() {
  let name = prompt('Ingresa un nuevo nombre')
  pElement.textContent = 'Player 1: ' + name
}

// creates a Developer class and retrieves name with hello method
class Developer {
  constructor(name) {
    this.name = name
  }

  hello() {
    return 'Hello I am ' + this.name + ' and I am a web developer'
  }
}

// Use of const or let
const name = 'David'
let age = 28

// arrow function
const testFunction = function() {
  return 'test function'
}

const testArrowFunction = () => {
  return 'test arrow function'
}

// destructuring
const developer = {
  firstName: 'Nathan',
  lastName: 'Sebhastian',
  developer: true,
  age: 25
}

// destructure developer object
const { firstName, lastName } = developer

// map and filter
const users = [
  { name: 'Nathan', age: 25 },
  { name: 'Jack', age: 30 },
  { name: 'Joe', age: 28 }
]
