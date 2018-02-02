
let first = { name: "Bob" };
let last = { lastName: "Smith" };
let last2 = { lastName: "Smith2" };
let last3 = { age: "20" };

let person = Object.assign({}, first, last2, last, last3);
console.log(person);


let aaa = ()=>
{
    return {
        onIncrement: () =>  'a' ,
        onDecrement: () =>  'b'
    };
}


console.log(aaa().onDecrement());