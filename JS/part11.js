// function one() {
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }

// three();
//waiting task for set timeout etc is done by browser not by js as js is single threaded

//executing line by line in sync is synchronous nature

//js follows an asynchronous nature of execution (not line by line)

//callback hell (nesting of callbacks)

h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed");
        }, delay);
    })

}

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("blue", 1000, () => {
//                 changeColor("pink", 1000);
//             });
//         });
//     });
// }
// );
changeColor("red", 1000)
    .then(() => {
    console.log("red done");
    return changeColor("orange", 1000);

    })
    .then(() => {
        console.log("orange done")
        return changeColor("green", 1000);
    })
    .then(() => {
        console.log("green done");
        return changeColor("blue", 1000);
    })
    .then(() => {
        console.log("blue done");
        return changeColor("pink", 1000)
    })
    .then(() => {
        console.log("pink done");
    })
    .catch(() => {
        console.log("error");
    })



//Promise is an object which represents success or failure and the resulting value
// promise contains RESOLVE & REJECT
//there are different states of a promise:PENDING,FULFILLED,REJECTED
//there are two important methods

// function saveToDB(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("success:data saved");
//         } else {
//             reject("failure:weak connection");
//         }

//     });
// }

// let request=saveToDB("apna college")    //request= promise object
// request.then(()=>{
//     console.log("promise resolved");
// })
// .catch(()=>{
//     console.log("promise was rejected");
// })
//OR
// saveToDB("apna college").then(() => {
//     console.log("promise resolved");
// })
//     .catch(() => {
//         console.log("promise was rejected");
//     })


//promise chaining is having multiple then's and single catch
// saveToDB("apna college").then(() => {
//     console.log("data1 saved. promise resolved");
//     return saveToDB("promises");
// })
// .then(()=>{
//     console.log("data2 saved");
//     return saveToDB("manvita");
// })
// .then(()=>{
//     console.log("data3 saved");
// })
// .catch(() => {
//         console.log("promise was rejected");
//     });



