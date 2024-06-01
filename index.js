const input = document.getElementById("input-box")
const btn = document.querySelector(".btn")
const tasklist = document.querySelector(".task-list")

btn.addEventListener("click",()=>{
    adtask()
})
function adtask(){
    if(input.value === "")
        {
             alert("Write Something")
        }
    else{
        const li = document.createElement("li")
        li.innerHTML = input.value
        tasklist.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
       

    }
    input.value = ""
    savedata()
}
tasklist.addEventListener("click",(e) =>{
    if(e.target.tagName === "LI")
        {
            e.target.classList.toggle("checked")
            savedata()
        }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
        savedata()
    }
},false)
function savedata(){
    localStorage.setItem("data",tasklist.innerHTML)
}
function showTask(){
    tasklist.innerHTML = localStorage.getItem("data")
}
showTask()
