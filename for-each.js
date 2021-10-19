// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Input:
*/
const pets =
[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
];

pets.forEach(pet => {
    
});

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    const nameArr = [];
    arr.forEach(element => {
        nameArr.push(element.name);
    });
    return nameArr;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    const revTypeArr = [];
    arr.reverse().forEach(element => {
        revTypeArr.push(element.type);
    });
    return revTypeArr;
}

/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {
    const spanishArr = [];
    arr.forEach((element) =>
        spanishArr.push({
            nombre: `${element.name}`,
            tipo: `${element.type}`,
        })
    );
    return spanishArr;
}

