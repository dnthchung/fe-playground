interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  return "Hello " + person.name;
}

let user1: Person = {
  name: "Chung",
  age: 20,
};

console.log(greet(user1));
