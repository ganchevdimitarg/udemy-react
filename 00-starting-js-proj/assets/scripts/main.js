function calc(a, b, c) {
    return a * b / c;
}

export default (a, b, c) => {
    return a * c / c;
};

function transformToObjects(numberArray) {
    return numberArray.map(n => ({"val": n}))
}

const user = ["Ivan", "Markov"];
const first = user[0];
const second = user[1];
//or
const [first1, last1] = ["Ivan", "Markov"];

const user2 = {
    name: "Ivan",
    age: 25,
};
const name1 = user2.name;
const {name: alies, age} = {
    name: "Ivan",
    age: 25,
};

printUser(user2);
function printUser({name, age}) {
    console.log(name + age);
}

const arr = [...user];
const obj = {
    isAdmin: false,
    ...user2
}