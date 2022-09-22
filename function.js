try {
  console.log(test); // Throws ReferenceError as expected
} catch(e) {
  console.log("Caught " + e.constructor + " error");
}

try {
  foo(); // Can we do this? foo is defined on line 20
} catch(e) {
  console.log("Caught " + e.constructor + " error");
}

try {
  bar(); // What about bar? bar is defined on line 24
} catch(e) {
  console.log("Caught " + e.constructor + " error");
}


function foo() {
  console.log("foo");
};

var bar = function() {
  console.log("bar");
}

// bWRuLmlvL2hvaXN0aW5nCm1kbi5pby9mdW5jdGlvbl9leHByZXNzaW9uCg==
