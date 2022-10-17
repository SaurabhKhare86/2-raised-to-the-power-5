// cerner_2tothe5th_2022
// Exception Handling in async functions

const foo = async () => {
    console.log(ressult); // Errors because of typo in variable name
}

try {
  foo();
} catch (e) {
  console.log(`Caught ${e.constructor.name}`);
}

// Why is the exception not getting caught in catch block?
