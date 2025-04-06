// let num=Math.floor(Math.random()*100)+1;
// console.log(num)

const max=prompt("Enter the maximum number");
const random=Math.floor(Math.random()*max)+1;
let guess=prompt("guess the number");
while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;

    }
    if(guess==random){
        console.log("Your are right");
        break;
    }
    else if(guess<random){
        prompt("your guess is small. try again");
    }
    else {
        prompt("your guess is large. try again");
    }

    

}
