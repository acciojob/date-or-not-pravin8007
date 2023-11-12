function isDate(input) {
  // Check if the input is a Date object
  if (input instanceof Date) {
    return true;
  }

  // Check if the input is a valid date string
  if (typeof input === 'string') {
    const dateObject = new Date(input);
    return !isNaN(dateObject.getTime()) && dateObject.toISOString().slice(0, 10) === input;
  }

  // Return false for other types of input
  return false;
}

// Examples
console.log(isDate(new Date()));       // true
console.log(isDate("2023-08-11"));      // true
console.log(isDate("not a date"));      // false
