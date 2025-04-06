/*let smallImages=document.getElementsByClassName("oldImg");
for(let i=0;i<smallImages.length;i++){
    smallImages[i].src = "spiderman_img.png";

    console.dir(smallImages[i]);
}

let links=document.querySelectorAll('.box a');
for(let i=0;i<links.length;i++){
    links[i].style.color='yellow';

}*/
/*for(link of links){
links.style.color='purple';
}*/
//style visible in the collection is the one inline css


let btn=document.createElement('button');
btn.innerText='Click me';
console.log(btn.innerText);
let body=document.querySelector('body');
body.append(btn);


btn.setAttribute('placeholder','username');
btn.setAttribute('id','btn');


let buttonn=document.querySelector('button');
buttonn.classList.add('styling');

let h1=document.createElement('h1');
h1.classList.add("h1");
h1.innerText='DOM Practice';
body.append(h1);


let para1=document.createElement('p');
para1.innerHTML='Apna College <b>Delta</b> Practice';
body.append(para1);


