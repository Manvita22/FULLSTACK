

// console.dir(btn);
// btn.onclick=function(){
//     console.log("button was clicked");
// }

//multiple eventlisteners can be added to a single element
//callbacks are functions which are given as arguments
// let btn=document.querySelector('button');
// btn.addEventListener("click",function(){
//     let h3=document.querySelector('h3');
//     let randomColor=getRandomColor();
//     h3.innerText=randomColor;

//     let div=document.querySelector('div');
//     div.style.backgroundColor=randomColor;
//     console.log("color updated");
// });

// function getRandomColor(){
//     let red=Math.floor(Math.random()*255);
//     let green=Math.floor(Math.random()*255);
//     let blue=Math.floor(Math.random()*255);
//     let color=`rgb(${red},${green},${blue})`;
//     return color;
// }




//eventlistener for elements
// let p=document.querySelector('p');
// p.addEventListener("click",function(){
//     console.log("para was clicked");
// })
// let box=document.querySelector('.box');
// box.addEventListener("mouseenter",function (){
//     console.log("mouse inside box");
// });


// btn.addEventListener("click",function(){
//     console.log(this);//refers to the object btn
// })

// btn.addEventListener("dblclick",function(event){
//     console.log(event);
//     console.log("button clicked");
// })
// let inp=document.querySelector('input');
// inp.addEventListener("keydown",function(event){
//     console.log(event.key);
//     console.log(event.code);
//     console.log("key pressed");
// })



//event.preventDefault():prevents any default action of an event
//to extract data in input we need to check for the value property


//change event when initial and final states change
//input event for every small change(non character keys do not effect)

//assignment

let btn=document.querySelector("button");
btn.addEventListener("click",function(){
    btn.style.backgroundColor="green";
});

let inp=document.querySelector("input");
let head=document.querySelector("h1");
inp.addEventListener("input", function(){
    console.log(inp.value);
    head.innerText=inp.value;

})
//when there are nested elements and have different eventlisteners, when children are clicked their parents are also clicked, it is called eventbubbling.
//to prevent it we use event.stopPropagation()

