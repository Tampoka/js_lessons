import {log} from "util";

console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0

// *******************************************************************************************************************//
// *******************************************************************************************************************// LEXICAL ENVIRONMENT

//What creates its own lexical environments?
//anonymous block, conditions, functions/class,loops, try/catch/finally, switch
// {} for setting variables for global environment //anonymous block
//important! {} object literal NEVER creates lexical environments
//imagine l.env as "plain js object"

// let globalScope = {
//     outerScope: null,
//     f: "Function",
//     a: 20 //10 -> 20-> 30,
// }
//
// let a = 10
//
// function f(arg: number) {
//     let fScope = {
//         outerScope: globalScope,
//         arg:10,
//
//     }
//     a += 10
//     console.log(a)
//     a += arg
// }
//
// f(10)
// console.log(a)

//*******************************************

// let globalScope = {
//     outerScope: null,
//     b:10, //undefined => 10
//     f:"Function",
//     result: "Function" ,   //undefined -> "Function"
//    a:50,  //undefined ->50
//
// }
//
// let a: number;
// var b = 10
//
// function f(arg: number) {
//     let fScope={
//         outerScope: globalScope,
//         c:60,  //undefined -> 60
//         innerFunc:"Function",
//         arg:10, //null -> 10
//
//     }
//     a = 50
//     console.log(b) //10
//     var c = a + b
//
//     function innerFunc() {
//         let InnerScope={
//             outerScope: fScope,
//         }
//        // console.log(z)  //error in both modes
//         // z=80          //error in StrictMode, automatic declaration without StrictMode
//         console.log(c + arg) //1) 70 2) 70
//     }
//
//     return innerFunc
// }
//
// var result = f(10)
// result()
// result()
// // @ts-ignore
// console.log(a)  //50

//******************************************************************************************//

// let globalScope = {
//     outerScope: null,
//     c:10,
//     f:'Function',
//     a:50,
//     b:60,
//
// }
//
// let anonymousScope={
//     outerScope:globalScope,
//     param:10,
//
// }
//
// {
//     let param = 10  //f has access, but no acces from outside
//     var c = 10
//
//     // @ts-ignore
//     function f(arg: number) {
//         let fScope = {
//             outerScope: anonymousScope,
//                 args:undefined // undefined ->50
//         }
//         return arg + c
//     }
// }
//
// let a=50
// // @ts-ignore
// let b=f(a)
// if(b>50){
//     let trueScope={
//         outerScope:globalScope,
//         a:80,
//
//     }
//     let a =80
//     console.log(a) //80
// } else {
//     let a=100
// }
//
// console.log(a)
//

//**********************************************************************************//
// let globalScope = {
//     obj: "Object"
// }
// let obj = {
//     name: "Ann",
//     sayName() {  //short form of function declaration as object method
//         let sayNameScope = {
//             outerScope: globalScope
//         }
//         // console.log(this.name)  //no need to  go to globalScope
//         console.log(obj.name) //not correct, but it is working (as object doesnt create it's own lexical environment, will find it in globalScope)
//     }
// }
//
// obj.sayName()

//*********************************************************************************************************************//
//*********************************************************************************************************************// RECURSION

// -every recursion can be replaced by cycle
// -recursion built on cycle works faster than recursion built on function
// - why use functional recursion? for making developer life easier...(hard to read cycles inside cycles ...)
// -recursion resembles cycle "while", need to check thoroughly exit condition (else falling into endless cycle)
// - call stack has limits(about 10.000)  //"maximum call stack size exceeded"
// -"edge recursion"/xvostovaya -made to avoid ^, but it is not working/not implemented in JS (like reduce method with array...) -
// -next calculation-> removing previous from call stack

// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// function sumTo(n:number){
//    let result =0
//     for (let i = 0; i <= n; i++) result += i
//     return result
// }

// function sumTo(n:number):number{
//     if(n===1)return n
//     return n+sumTo(n-1)
// }
//
// console.log(sumTo(100))

// "edge recursion"
// function sumTo(n:number,acc:number):number{
//     if(n===1)return n+acc
//     return sumTo(n-1, n+acc)
// }
//
// console.log(sumTo(100,0))

// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
/*function sum(a:number,b:number){
    return (b:number)=>{
       return a+b
        }
    }
// @ts-ignore
console.log(sum(3)(6))*/

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

// function makeCounter(){
//     let result=1
//     return ()=>{
//         return console.log(result++)
//     }
// }
// const counter = makeCounter();
// counter();
// counter();
// const counter2 = makeCounter();
// counter2();
// counter();


// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

function makeCounter(n:number){
   return {
            increase(){
                return  n+1
            },
            decrease(){
                return  n-1
            },
            reset(){
                return  n=0
            },
            set(value:number){
                return n=value
            }
        }

}
const counter = makeCounter(1);
console.log(counter.reset())



// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

function superSum(num: number) {
    if (num <= 0) return 0
    if (num === 1) return (n: number) => n
    let _arguments: number[] = []

    function helper(...args: number[]) {
        _arguments = [..._arguments, ...args]
        if (_arguments.length >= num) {
            _arguments.length = num
            return _arguments.reduce((acc, number) => acc + number)
        } else {
            return helper
        }
    }

    return helper
}
//
// // @ts-ignore
// console.log(superSum(3)(2)(5)(3))
// // @ts-ignore
// console.log(superSum(3)(2, 5, 3))
// // @ts-ignore
// console.log(superSum(3)(2, 5)(3))
// // @ts-ignore
// console.log(superSum(3)(2, 5)(3, 9))

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export default () => {
};