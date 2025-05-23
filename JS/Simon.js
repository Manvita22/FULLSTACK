let gameSeq=[];
let userSeq=[];

let buttons=["red","yellow","green","purple"];

let started=false;
let level=0;
let highestscore=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelUp();
    }
     
});

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=buttons[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    buttonFlash(randBtn);

};


function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },250);

};

function buttonFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);

};

function btnPress(){
    let btn=this;
    userFlash(btn);   
    
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
};

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
};


function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
       
    }
    else{
        if(level>highestscore){
            highestscore=level;
        }
    
        h2.innerHTML=`Game over! <b>Your score is ${level}</b>.The highest score is ${highestscore} , Press any key to start.`
        document.querySelector("body").style.backgroundColor="red";

        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";

        },150);
        reset();
    };

      
};

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
};