//function given as a parameter in another function it is called as callback

//arrow function: let var=()=>{};

//setTimeout(func,time);

//setInterval(func,time); repeats the action for that time repeatedly



const student={
    name: "a",
    marks: 95,
    prop: "this",  //makes this global scope that is for window
    getName: function(){
        return this.name;    //calling object scope

    },
    getMarks: () =>{
        return this.marks; //lexical scope or scope of parent object as it is an arrow function
    },
    getInfo1: function (){
        setTimeout(() =>{
            console.log(this);  //it is the child of function() whose this is student object's this
        },2000);
        
    },
    getInfo2:function (){
        setTimeout(function (){
            console.log(this);  //windows this
        },3000);
    }

}