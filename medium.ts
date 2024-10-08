export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type MyCapitalize<T extends string> = T extends `${infer First}${infer Rest}`
    ? `${Uppercase<First>}${Rest}`
    : T;

export type DeepMutable<T> = {
    -readonly [P in keyof T]: T[P] extends object ? DeepMutable<T[P]> : T[P];
};

export type ParseURLParams<StringElem extends string> =
    StringElem extends `${infer _Start}:${infer Param}/${infer Etc}`
        ? Param | ParseURLParams<`/${Etc}`>
        : StringElem extends `${infer _Start}:${infer Param}`
            ? Param
            : never;

// Примеры для демонстрации
type ComplexObject = {
    simpleProp: string;
    nested: {
        date: Date;
        func: () => void;
    };
};

const partiallyComplex: DeepPartial<ComplexObject> = {
    nested: {
        date: new Date(),
    },
};

// Пример MyCapitalize
type CapitalizedGreetingType = MyCapitalize<"hello world">;
const capitalizedGreeting: CapitalizedGreetingType = "Hello world"; // конкретное значение типа Capitalized

// Пример DeepMutable
const mutableComplexObject: DeepMutable<ComplexObject> = {
    simpleProp: "Editable",
    nested: {
        date: new Date(),
        func: () => console.log("Mutable function"),
    },
};
// Изменяем функцию
mutableComplexObject.nested.func = () => console.log("Changed function");

// Пример ParseURLParams
const exampleUrl = "posts/123/comments/456";
type UrlParameters = ParseURLParams<typeof exampleUrl>;


// Вывод результатов
const combinedResult = `
DeepPartial result: ${JSON.stringify(partiallyComplex)},
MyCapitalize result: ${capitalizedGreeting},
DeepMutable initial function call (will run): `;
console.log(combinedResult);
mutableComplexObject.nested.func();
type Params = ParseURLParams<'posts/:id/53445/:user'>; // 'id' | 'user'
const params: Params = 'id';
console.log(params);