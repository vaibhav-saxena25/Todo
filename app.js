let btn = document.querySelector("button");
let ul  = document.querySelector("ul");
let inp = document.querySelector("input");
btn.addEventListener("click",()=>{
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);

    ul.appendChild(item);
    console.log(inp.value);
    inp.value ="";
})

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
})

// ============= problem in deletion ==================

// let delBtns = document.querySelectorAll(".delete")
// for(delbtn of delBtns){
//     delbtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         par.remove();
//         console.log("deleted");
//     })
// }

// ====================================================
