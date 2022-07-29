const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const birinciKard =document.querySelectorAll(".card-body")[0];
const ikinciKard= document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");



ekle();



function ekle(){
    form.addEventListener("submit",ekleTodo);
    document.addEventListener("DOMContentLoaded",tümTodolariyükle);
    ikinciKard.addEventListener("click",siltodo);
    filter.addEventListener("keyup",filterTodos);
    

}
function filterTodos(e){
    const filterValue= e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");
    listItems.forEach(function(listItem){
        const text = listItem.textContent.toLocaleLowerCase();
        if(text.indexOf(filterValue)=== -1){
            //bulamadıgı durum
            listItem.setAttribute("style","display:none !important");
        }else{
            listItem.setAttribute("style","display : block");
        }
    })
}
 function siltodo(e){
 
     if(e.target.className === "fa fa-remove"){
         e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
         uyariMesaji("success", "listeden kaldırıldı..")
        
     }
 }
function deleteTodoFromStorage(deletetodo){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo , index){
        if (todo === deletetodo){
            todos.splice(index,1);
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos));
}


function tümTodolariyükle(){
    let todos = getTodosFromStorage();
    todos.forEach(function(todo){
        ekleTodoToUI(todo);
    })

    }



function ekleTodo(e){
    const newTodo =  todoInput.value.trim();    
    if(newTodo == ""){
        uyariMesaji("warning", "Bu alan boş bırakılamaz.");
        uyariMesaji("danger", "Lütfen yapılacak işinizi giriniz.")
    }else{
        ekleTodoToUI(newTodo);
        addTodoToStorage(newTodo);
        uyariMesaji("success" , "Listeye eklendi...")
    }
     

    e.preventDefault();
}

//todolarımızı storageye ekleme fonksiyonları 
function getTodosFromStorage(){
    let todos;
    if(localStorage.getItem("todos")== null){
        todos=[];
    }else{
        todos= JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function addTodoToStorage(newTodo){
    let todos = getTodosFromStorage();

    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));

}



function uyariMesaji(type,message){
    const alert =document.createElement("div");
    alert.className= `alert alert-${type}`;
    alert.textContent=message;
    birinciKard.appendChild(alert);

    //uyari mesajını 1 saniye gösterip kaldıran fonksiyon
    setTimeout(function(){
        alert.remove();
    },1000);
}


 function ekleTodoToUI(newTodo){ // Aldıgımız değeri arayüzümüze ekleyecegiz.
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    const güncelle = document.createElement("a");
    const tamamlandi = document.createElement("a");
    tamamlandi.href="#";
    güncelle.href="#"
    link.href="#";
    link.className= "delete-item";
    link.innerHTML= "<i class = 'fa fa-remove'></i>";
    güncelle.className="update-item"
    güncelle.innerHTML="<i class='fa-solid fa-pen'></i>";
    tamamlandi.className="ok-item";
    tamamlandi.innerHTML="<i class='fa fa-check'></i>"

     listItem.className= "list-group-item d-flex justify-content-between";
     
    
    
     listItem.appendChild(document.createTextNode(newTodo));
     listItem.appendChild(link);
     listItem.appendChild(güncelle);
     listItem.appendChild(tamamlandi);

     //yapılacaklar listesine madde ekleme
    todoList.appendChild(listItem);
    todoInput.value="";

}
