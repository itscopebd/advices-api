const loadData=async()=>{
const url =`https://api.adviceslip.com/advice`;

try{
    const res= await fetch(url);
    const data= await res.json();
    showData(data)
}catch(err){
    console.log(err)
}
}

const showData=(data)=>{
    document.getElementById("showAdvices").innerText=data.slip.advice;
}

loadData();