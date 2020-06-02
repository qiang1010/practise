// 立即执行
// var P0 = new Promise(function (resolve, reject) {
//     console.log("create");
//     resolve("success");
// });

// console.log("next");

// P0.then(function (value) {
//     console.log(value);
// });

// 三种状态
var p1 = new Promise(function (resolve, reject) {
    resolve(1);
});
var p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(2);
    }, 500);
});
var p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject(3);
    }, 500);
});

console.log(p1);
console.log(p2);
console.log(p3);
setTimeout(function () {
    console.log(p2);
}, 1000);
setTimeout(function () {
    console.log(p3);
}, 1000);

p1.then(function (value) {
    console.log(value);
});
p2.then(function (value) {
    console.log(value);
});
p3.catch(function (err) {
    console.log(err);
});

// var p4 = new Promise(function (resolve, reject) {
//     resolve("success1");
//     resolve("success2");
// });

// var p5 = new Promise(function (resolve, reject) {
//     resolve("success");
//     reject("reject");
// });

// p4.then(function (value) {
//     console.log(value);
// });

// p5.then(function (value) {
//     console.log(value);
// });

// var p1 = new Promise( function(resolve,reject){
//     foo.bar();
//     resolve( 1 );	  
//   });
  
//   p1.then(
//     function(value){
//       console.log('p1 then value: ' + value);
//     },
//     function(err){
//       console.log('p1 then err: ' + err);
//     }
//   ).then(
//     function(value){
//       console.log('p1 then then value: '+value);
//     },
//     function(err){
//       console.log('p1 then then err: ' + err);
//     }
//   );
  
//   var p2 = new Promise(function(resolve,reject){
//     resolve( 2 );	
//   });
  
//   p2.then(
//     function(value){
//       console.log('p2 then value: ' + value);
//       foo.bar();
//     }, 
//     function(err){
//       console.log('p2 then err: ' + err);
//     }
//   ).then(
//     function(value){
//       console.log('p2 then then value: ' + value);
//     },
//     function(err){
//       console.log('p2 then then err: ' + err);
//       return 1;
//     }
//   ).then(
//     function(value){
//       console.log('p2 then then then value: ' + value);
//     },
//     function(err){
//       console.log('p2 then then then err: ' + err);
//     }
//   );