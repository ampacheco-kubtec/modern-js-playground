const person = {
    name: 'Asunción',
    age: 46,
    professions: ['CFO']
};

// Deconstructing
const printName = ({name}) => {
    console.log(name);
}
printName(person);

// Deconstructing
const {name, age} = person;
console.log(name);


// Deconstructing arrays
hobbies = ['Reading', 'Writing', 'Hiking'];

const [hobby1, hobby2] = hobbies;
console.log(hobby1);
console.log(hobby2);

