// cerner_2^5_2020

// Print name where id is equal to 7

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
            { id: 7, name: "Jane"}
        ]
    },
];

collection
    .map(({ list }) => list)                                                  // Extract array outside to create array of array
    .reduce((accumulator, currentValue) => accumulator.concat(currentValue))  // Flatten the array
    .filter(({ id }) => id === 7)                                             // Filter out the array to only include object where id matche
    .forEach(( { name }) => console.log(`id = 7, name = ${name}`))            // Iterate and print names
