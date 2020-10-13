// cerner_2^5_2020

// Print the total number of keys in an object

const errorObject = {
    uniqueID: 100,
    type: "Joy",
    message: "Error Message",
    lineNumber: 734,
    function: "foo",
    stackTrace: "Stack Trace"
}

console.log(Object.keys(errorObject).length);
