let input = document.getElementById("input");

let addbutton = document.getElementById("addbutton");

let list = document.getElementById("list")

addbutton.addEventListener("click" , () =>{
    if (input.value !== "")
     {
        const tasktext = input.value;
        let listitem = document.createElement("li")
        listitem.innerHTML =`${tasktext}
         <button class ="deletebutton">Delete</button>`
         list.appendChild(listitem)   
    }
    else{
        alert("You must write Something")
    }
    input.value= "";
    save();
})

list.addEventListener("click" ,(event) => {
     if(event.target.classList.contains("deletebutton")){
        const listb = event.target.parentElement;
        list.removeChild(listb)
     }
     save();
})


function save(){
    localStorage.setItem("data" , list.innerHTML);
}

function show(){
    list.innerHTML = localStorage.getItem("data");
}
show();