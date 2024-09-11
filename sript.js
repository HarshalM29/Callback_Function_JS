// callBack Function data load in 2sec
// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }
// getData(1, () => {
//   getData(2, () => {
//     getData(3);
//   });
// });

//Promises

// function getData(dataId,getNextData) {
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//         // console.log("data",dataId);
//         // resolve("success");
//         reject("error"); 
//         if(getNextData) {
//             getNextData();
//         }
//         }, 5000);
//     });
// }


//  function  getPromise() {
//     return new Promise((resolve,reject) => {
//     console.log("I am a promise");
//     //resolve("success..");//then
//     //reject("errorr..");//catch
//     });
//  }

//  let promise = getPromise();
//  promise.then((res) =>{
//     console.log("promise fulfilled...");
//  })

//  promise.catch((err)=>{
//     console.log("rejected...",err);

//  })


//asyncr function

// function asyncFunc1() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("data-1");
//             resolve("sucess");  
//         },4000)
//       });
// }

// function asyncFun2() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("data-2");
//             resolve("sucess");  
//         },4000)
//       });
// }

//      //promise channing
//   console.log("fetching data 1.");
//   asyncFunc1().then((res) =>{
//     console.log("fetching data2.");
//     asyncFun2().then((res) =>{});
// })


// console.log("fetching data 1.");
// let p1 =asyncFunc1();
// p1.then((res)=> {
//     console.log(res);
// });

// console.log("fetching data 2.");
// let p2 =asyncFun2();
// p2.then((res)=> {
//     console.log(res);
// });



//promise channing  
 function getData(dataId) {
    return new Promise((resolve,reject) => {

      setTimeout(() => {
        console.log("data", dataId);
        resolve("sucess");
      },3000);
    });
}
    getData(1)
    .then((res) =>{
       // console.log(res);
        return getData(2);
    }).then((res) =>{
        // console.log(res);
         return getData(3);
     })
     .then((res)=>{
        console.log(res);
    })
