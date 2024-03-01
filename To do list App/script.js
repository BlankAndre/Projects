const inputbox = document.getElementById('inputbox');
const listContainer = document.getElementById('list-container');

function addTask(){
    if(inputbox.value === ''){
        alert("You have to write something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value
        listContainer.appendChild(li);

        let spawn = document.createElement("img");
        spawn.src = "images/trash.svg" 
        spawn.id = "delete-button"

        li.appendChild(spawn)
    } 
    inputbox.value = '';
    saveData();
}
listContainer.addEventListener('click', function(arg){
        if (arg.target.tagName === "LI"){
            arg.target.classList.toggle("checked");
            saveData();
        }else if (arg.target.tagName === "IMG"){ 
            arg.target.parentElement.remove();
            saveData();
        }/*this is because of let spawn = document.createElement("img");*/
    },false);
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function loadData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
loadData();
