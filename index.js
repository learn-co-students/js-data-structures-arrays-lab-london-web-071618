// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name) {
  console.log(drivers.push(name));
  console.log(drivers);

}

function destructivelyPrependDriver(name) {
  console.log(drivers.unshift(name));
  console.log(drivers);
}

function destructivelyRemoveLastDriver() {
  console.log(drivers.pop());
  console.log(drivers);
}

function destructivelyRemoveFirstDriver() {
  console.log(drivers.shift());
  console.log(drivers);
}

function appendDriver(name) {
  return [...drivers, name];
}

function prependDriver(name) {
  return [name, ...drivers];
}

function removeLastDriver() {
  return drivers.slice(0, drivers.length - 1);
}

function removeFirstDriver() {
  return drivers.slice(1);
}
