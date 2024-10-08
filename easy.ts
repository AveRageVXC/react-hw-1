type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
};

type NOfArray<ArrayObj extends any[], N extends number> = ArrayObj[N];

type Unshift<ArrayType extends any[], Elem> = [Elem, ...ArrayType];

type MyExclude<T, U> = T extends U ? never : T;

// Примеры использования:
type Person = {
    name: string;
    age: number;
    location: string;
};
const person: MyPick<Person, 'name' | 'age'> = {
    name: "John Doe",
    age: 30
};

type ValueTypes = [string, number, boolean, { detail: string }];
const arrayElement: NOfArray<ValueTypes, 3> = { detail: "Detailed Info" };

type OriginalArray = [number, boolean];
const newArray: Unshift<OriginalArray, string> = ["Hello", 100, true];

type Options = "a" | "b" | "c" | "d";
type FilteredOptions = MyExclude<Options, "a" | "c">; // This is a type, not a value.
const filteredOptions: FilteredOptions[] = ["b", "d"]; // Creating the corresponding value.

const combinedResult = `
MyPick result: ${JSON.stringify(person)},
NOfArray result: ${JSON.stringify(arrayElement)},
Unshift result: ${JSON.stringify(newArray)},
MyExclude result: Available options after exclusion are ${filteredOptions.join(", ")}
`;

console.log(combinedResult);