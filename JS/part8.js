//forEach
// arr=[1,2,3,4,5]
// arr.forEach(function (er){
//     console.log(er)
// })
// arr=[1,2,3,4,5]
// arr.forEach( (er) => {   //using foEach with arrow function
//     console.log(er)
// })


//using MAP
// let num=[1,2,3,4]
// let double=num.map((el)=>{
//     return el*2;
// })


//FILTER
// let nums=[1,2,3,4,5,7,8,2,10,12]
// let ans=nums.filter((el)=>{
//     return el%2==0;//prints if true 
// })


//EVERY(if every element in array returns true "every" will return the final answer as true)
// let arr=[3,4,6];
// console.log(arr.every((el)=> el%2==0));
//SOME(it is like "or")



//REDUCE: arr.reduce(accumulator,element)
// console.log([1,2,3,4].reduce((res,el)=>(res+el)));
//max in array
// console.log([1,2,3,4,5].reduce((res,el)=>{
//     if(res<el){
//         return el;}
//     else{
//         return res;
//     }
    
// }));
//min in array
// console.log([1,2,3,4,5].reduce((res,el)=>{
//     if(res>el){
//         return el;}
//     else{
//         return res;
//     }
    
// }));

//all elements are multiples of 10 or no
// let arr=[10,40,60];
//  console.log(arr.every((el)=> el%10==0));


//SPREAD(...arr)
arr=[25,80,99,76]
console.log(Math.min(...arr));

let odd=[1,3,5,7,9];
let even=[2,4,6,8,10]
let nums=[...even,...odd];
console.log(nums)


let data={
    name:"me",
    pass:"abcd",
};
let dataCopu={...data,id:123};
console.log(dataCopu)

//arr to obj using spread
let arr1=[1,2,3,4];
let obj1={...arr1};//uses indexes as keys
console.log(obj1)



//REST:combines single elements
function sum(...args){
    console.log(args)
}

function min(){
    console.log(arguments);//arguments is a collection but cannot be modified
}


//DESTRUCTURING
let names=['Tony','bruce','peter','steve'];
let [winner,runner,...others]=names;

//destructuring for objects
let student={
    username:'karan@123',
    pass:'abcd',
}
let {username,pass}=student;//searches for the keys directly
let {username:name,pass:key}=student;//searches for key and stores in a diff variable
// let {username;new,pass:passkey,city="mumbai"}=student;//can also define new key if not in object but if key already exists its value will only be preferred