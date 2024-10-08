"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var partiallyComplex = {
    nested: {
        date: new Date(),
    },
};
var capitalizedGreeting = "Hello world"; // конкретное значение типа Capitalized
// Пример DeepMutable
var mutableComplexObject = {
    simpleProp: "Editable",
    nested: {
        date: new Date(),
        func: function () { return console.log("Mutable function"); },
    },
};
// Изменяем функцию
mutableComplexObject.nested.func = function () { return console.log("Changed function"); };
// Пример ParseURLParams
var exampleUrl = "posts/123/comments/456";
// Вывод результатов
var combinedResult = "\nDeepPartial result: ".concat(JSON.stringify(partiallyComplex), ",\nMyCapitalize result: ").concat(capitalizedGreeting, ",\nDeepMutable initial function call (will run): ");
console.log(combinedResult);
mutableComplexObject.nested.func();
var params = 'id';
console.log(params);
