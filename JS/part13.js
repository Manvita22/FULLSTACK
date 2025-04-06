
let url="https://catfact.ninja/fact";


async function getFacts(){
    try{
        let res=await axios.get(url);
        console.log(res.data.fact);

    }catch(e){
        console.log("error-",e);
    }
}



const url1="https://icanhazdadjoke.com/";

async function getJokes(){
    try{
        const config={headers:{Accept:"application/json"}};
        let res=await axios.get(url,config);
        console.log(res.data);
    }catch(e){
        console.log(e);
    }
}