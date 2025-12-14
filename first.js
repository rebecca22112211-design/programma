let input = document.getElementById("testo");
let bottone = document.getElementById("btn");
let lista = document.getElementById("lista");

bottone.addEventListener("click", function(){
    let testo = input.value;
    if(testo===""){
        alert("scrivi !");
        return;
    }

let li = document.createElement("li");
li.innerText=testo;
li.addEventListener("click", function(){
    if(!li.classList.contains("completato")){
        li.classList.add("completato");
        li.style.backgroundColor="lightgreen";
    }
    else{
        li.classList.remove("completato");
        li.style.backgroundColor="white";
    }
});
lista.appendChild(li);
input.value="";
});
