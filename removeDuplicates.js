// cerner_2tothe5th_2022

/**
 * Removes duplicates from an array. Works only on array of numbers / strings
 * @returns {Array} new array without duplicates
 */
Array.prototype.removeDuplicates = function() {
  const notValidType = this.some(element => 
    typeof element !== "number" && typeof element !== "string"
  );

  if (notValidType) {
    throw new Error("This function works only on array of numbers or array of strings");
  }

  // Remove duplicates and return the array
  return this.reduce(
    (arrayWithoutDuplicates, element) => {
      const alreadyPresent = arrayWithoutDuplicates.some(item => item === element);

      return alreadyPresent 
        ? arrayWithoutDuplicates
        : [...arrayWithoutDuplicates, element];
    },
    []
  );
};

// bWRuLmlvL0FycmF5L3NvbWUKbWRuLmlvL0FycmF5L3JlZHVjZQ==
