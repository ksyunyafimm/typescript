//concat('Hello ', 'World') // -> Hello World;
type Str= string;
const String1 : Str = 'Hello';
const String2: Str = 'World';
const concat = String1 + String2;
console.log(concat);


type MyHometask = {
    howIDoIt: string,
    simeArray: string | number [],
    withData :  [string, []],
}

const myHometask = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{howIDoIt: "I Do It Wel", simeArray: ["string one", 23]}],

}

// @ts-ignore
// @ts-ignore
interface MyArray<T> {
    [N: number]: T;

    reduce (fn: (a: number, b: number) => T): T[];
}
const tsArr: number[] = [1,2,3,4];

tsArr.reduce(function (a, b) {
    return a+b;
})