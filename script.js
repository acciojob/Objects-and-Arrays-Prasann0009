const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Create a reference to the 'players' array
const team = players;

// Create a shallow copy of the 'players' array
const team1 = players.slice();

// Create a shallow copy of the 'person' object
const cap1 = Object.assign({}, person);

// Test if they are references or copies
players.push("Eve"); // This will also add "Eve" to 'team'
person.name = "Jane"; // This will also change 'cap1.name'


// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
