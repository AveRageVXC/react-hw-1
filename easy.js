var person = {
    name: "John Doe",
    age: 30
};
var arrayElement = { detail: "Detailed Info" };
var newArray = ["Hello", 100, true];
var filteredOptions = ["b", "d"]; // Creating the corresponding value.
var combinedResult = "\nMyPick result: ".concat(JSON.stringify(person), ",\nNOfArray result: ").concat(JSON.stringify(arrayElement), ",\nUnshift result: ").concat(JSON.stringify(newArray), ",\nMyExclude result: Available options after exclusion are ").concat(filteredOptions.join(", "), "\n");
console.log(combinedResult);
