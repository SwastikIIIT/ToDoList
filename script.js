const inputBox=document.querySelector(".inputBox input");
const btn=document.querySelector(".btn");
const list=document.querySelector(".tasks");

console.log("Script Start");


btn.addEventListener("click",(e)=>{
    const inputCommand=inputBox.value;
    if(inputCommand==="")
        alert("Give yourself a task");
    else{
        const task=document.createElement("li");
        task.innerHTML=inputCommand;
        list.append(task);

        const cross=document.createElement("span");
        cross.innerHTML="\u00d7";
        task.append(cross);
    }
    inputBox.value="";

    // console.log(document.querySelector("li"));
})

list.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI")
        e.target.classList.toggle("check");
    else if(e.target.tagName==="SPAN")
        e.target.parentElement.remove();
    savedata();
},true)

const savedata=()=>{
    localStorage.setItem("data",list.innerHTML);
}

const getdata=()=>{
    list.innerHTML=localStorage.getItem("data");
}

getdata();