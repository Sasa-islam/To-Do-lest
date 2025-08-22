function add() {
   let task_input= document.getElementById("tasks").value.trim();

    if (task_input==="") {
       alert("no valul")
       return;
 }

let li= document.createElement("li");

li.innerText=task_input;

li.innerHTML=`<span>${task_input} </span> <button id="bm" onclick="this.parentElement.remove()">❌</button>`

document.getElementById("ul").appendChild(li);

document.getElementById("tasks").value=""


}