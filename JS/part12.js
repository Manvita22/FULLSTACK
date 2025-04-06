//ASYNC KEYWORD
// async function greet(){
//      //throw "some random error";  //to randomly throw errors
//     return "hello";           //returns a promise always
// }
// greet()
// .then((result)=>{
//     console.log("done",result);
// })
// .catch((error)=>{
//     console.log("error",error);
// })

//AWAIT:pauses all async function until promise in current function is completed
//one after other call
// function getNum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*10)+1;
//              console.log(num);
//              resolve();
//         },1000);
//     });
// }

// async function demo(){
//       await getNum();
//        await getNum();
//      getNum();
// }

h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num=Math.floor(Math.random()*5)+1;
            if (num>4){
                reject();
            }
            h1.style.color = color;
            resolve("color changed");
        }, delay);
    })

}
async function demo(){
    try{
        await changeColor("red",1000);
    await changeColor("orange",1000);        //incase promise is rejected
    await changeColor("green",1000);
    await changeColor("blue",1000);
    await changeColor("pink",1000);

    }
    catch(e){
        console.log(e);

    }

    console.log("hellow");


    
}

//API Application Programming Interface (json)
//JSON: JavaScript object notation
//undefined is not valid in json and we need to write keys and values in quotes as we need to have strings
//json.parse(data) to convert to js object
//JSON.stringify(js object name) to convert from js object to json