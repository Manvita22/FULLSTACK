// let size='M';
// if(size == 'XL'){
//     console.log("price is Rs.250");
// }
// else if(size =='L'){
//     console.log("price is Rs.200");
// }
// else if(size=='M'){
//     console.log("price is Rs.100");

// }
// else{
//     console.log("price is Rs.50");
// }



// let str='shan';
// if(str[0]=='a' && str.length >3){
//     console.log("good string")

// }
// else{
//     console.log("not a good string");
// }

// let color='pink';
// switch(color){
//     case 'red':
//         console.log('stop');
//         break;
//     case 'yellow':
//         console.log('slow down');
//         break;
//     case 'green':
//         console.log('go');
//         break;
//     default:
//         console.log('broken light');
// }

// let day=8;
// switch(day){
//     case 1:
//         console.log('Monday');
//         break;
//     case 2:
//         console.log('Tuesday');
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log('Thursday');
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("sat");
//         break;
//     case 7:
//         console.log('sun');
//         break;
//     default:
//         console.log('broken ');
// }


// // alert("something is wrong");    shows output

// // console.error("this is an error");
// // console.warn("this is an error");

// let firstname=prompt("please neter your roll no:");    //can ask user to give input
// console.log(firstname);



//assignment questions
// let num=15;
// if(num%10==0){
//     console.log('good');
// }
// else{
//     console.log('bad');
// }


// let user_name=prompt("enter your name:");
// let age=prompt("enter your age:");
// alert(`Welcome ${user_name},your age is ${age} right?`);



// let num1='72';
// let num2='32';
// if(num1[num1.length-1]===num2[num2.length-1]){
//     console.log('true');
// }




let str="      am studyin fullstack     ";
let newstr=str.trim().toUpperCase().replace('a','0').repeat(2);
console.log(newstr);


const person={
    name: "Manvita",
    age:19,
    clg:"hITM"
};
for(let key in person){
    console.log(`${key}:${person[key]}`);
}