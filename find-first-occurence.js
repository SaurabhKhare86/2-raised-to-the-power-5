// cerner_2^5_2020

// Find first occurrence where id is equal to 6 and print the name

const collection = [
    {
        list: [
            { id: 4, name: "Joe"},
            { id: 7, name: "Tony"},
            { id: 3, name: "Joy"}
        ]
    },
    {
        list: [
            { id: 2, name: "Dan"},
            { id: 7, name: "Bill"},
            { id: 6, name: "Adam"}
        ]
    },
    {
        list: [
            { id: 2, name: "George"},
            { id: 8, name: "Kyle"},
            { id: 6, name: "Jane"}
        ]
    },
];


// Filter out individual lists first and then concatenate for better performance
const [firstMatch] = collection
    .map(({ list }) => list.filter(({ id }) => id === 6))
    .reduce((accumulator, currentValue) => accumulator.concat(currentValue));

// Check for object existence first and then access name key
console.log(firstMatch && firstMatch.name);
