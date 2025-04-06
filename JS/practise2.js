let arr=[1,2,3,4,5,6,2,3];
let num=2;
for(let i=0;i<arr.length;i++){
    if(arr[i]==num){
        arr.splice(i,1);
    }
}
console.log(arr);

let number=287152;
let count=0;
let copy=number;
while(number!=0){
    count++;
    copy=Math.floor(copy/10);

}
console.log(count);

let nuber=287152;
let sum=0;
while(nuber!=0){
    let last=nuber%10;
    sum=sum+last;
    nuber=Math.floor(nuber/10);

}
console.log(sum);


let numb=5;
let fact=1;
for(let i=1;i<=numb;i++){
    fact=fact*i;
}
if(numb==0 || numb==1){
    console.log(1);
}
console.log(fact);

array=[1,2,3,4,5,6,2,3];
let greatest=arr[0];
for(let i=0;i<array.length;i++ ){
    if(arr[i]<arr[i+1]){
        greatest=arr[i+1];
    }
}
console.log(greatest);


