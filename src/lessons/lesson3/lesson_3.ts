import {rejects} from "assert";

console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661


// just a plug
export default () => {
};

// let prom = new Promise((resolve, reject) => {
//     let a = 10
//     let b = 20
//     setTimeout((a,b)=>{
//         console.log('a', a, 'b', b)
//         console.log('setTimeout', a+b)
//     },50,a,b)
//     console.log('Promise', a+b)
// })

// let prom=new Promise((res,rej)=>{})
// console.log(prom)

// let prom = new Promise((resolve, reject) => {
//     let a = 10
//     let b = 20
//     setTimeout((response)=>{    // fake callout
//     if(response.status<400){
//             resolve(response.body)
//     } else {
//         reject(response.error)
//     }
//     },50,{status:200,body:10})
// })


// let prom = new Promise((resolve, reject) => {
//    resolve({a:10,b:20,c:NaN})
//     reject(500)
// })

// let prom = new Promise((resolve, reject) => {
//     reject(500)
//     resolve({a:10,b:20,c:NaN})
//     console.log('yo')
// })
// console.log(prom)


// let prom:Promise<number> = new Promise((resolve, reject) => {
//     resolve(10)
// })
// prom
//     .then(res=>{
//         console.log('Hello from callback')
//         res*=2
//         console.log(res)
//         return res
//     })
//     .then(res2=>{
//         console.log(res2)
//     })

//
// let prom:Promise<number> = new Promise((resolve, reject) => {
//     resolve(167855430)
// })
// prom
//     .then(res1=>{
//         console.log('res1',res1)
//        return new Promise((resolve,reject)=>{
//            resolve({name:'Ann', age:33})
//        })
//     })
//     .then(res2=>{
//         console.log('res2',res2)
//     })


// let prom:Promise<number> = new Promise((resolve, reject) => {
//     reject(0)
// })
// prom
//     .then(res1=>{
//         console.log('res1',res1)
//         },
//         err=>{
//             console.log('err',err)
//             return 500
//         })
//     .then(res2=>{
//         console.log('res2',res2)
//     })


// let prom: Promise<number> = new Promise((resolve, reject) => {
//     reject(0)
// })
// prom
//     .then(res1 => {
//             console.log('res1', res1)
//         },
//         err => {
//             console.log('err', err)
//             return new Promise((resolve, reject) => {
//                 resolve({name: 'Ann', age: 33})
//             })
//         })
//     .then(res2 => {
//         console.log('res2', res2)
//     })
//


// let prom: Promise<number> = new Promise((resolve, reject) => {
//     reject(0)
// })
// prom
//     .then(res1 => {
//         console.log('res1', res1)
//     })
//     .then(res2 => {
//         console.log('res2', res2)
//     })
//     .then(res3 => {
//         console.log('res3', res3)
//     })
    // .then(res4 => {
    //     console.log('res4', res4)
    // },
    //         err => {
    //             console.log('err', err)
    //             return new Promise((resolve, reject) => {
    //                 resolve({name: 'Ann', age: 33})
    //             })
    //         })
    //
    // .then(null,err=>{
    //     console.log('err', err)
    // })
    // .catch(err=>{
    //     console.log('err', err)
    // })
    //

let prom: Promise<number> = new Promise((resolve, reject) => {
    resolve(0)
})
prom
    .then(res1 => {
        console.log('res1', res1)
    })
    .then(res2 => {
        console.log('res2', res2)
    })
    .then(res3 => {
        console.log('res3', res3)
    })


