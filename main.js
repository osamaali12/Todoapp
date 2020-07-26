var list = document.getElementById("list");

function addTodo(){
    var todo_item= document.getElementById("todo-item");
    
    //create li tag with textnode
    var li=document.createElement('li')
    // var liText=document.createTextNode("ghous")
    var liText=document.createTextNode(todo_item.value)

    li.appendChild(liText)
    list.appendChild(li)
    todo_item.value = ""

    //create delete button with element
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBtn.setAttribute("class","btn")
    delBtn.setAttribute("onClick","deleteItem(this)")
    delBtn.appendChild(delText)

    //create edit button with element
    var editBtn = document.createElement("button")
    var editText = document.createTextNode("EDIT")
    editBtn.setAttribute("class","btn")
    editBtn.setAttribute("onClick","editItem(this)")
    editBtn.appendChild(editText)

    li.appendChild(delBtn)
    li.appendChild(editBtn)

    

    // console.log(li)
}

function deleteItem(e){
    // console.log(e.parentNode)

    e.parentNode.remove();
}

function editItem(e){
    var editvalue = prompt("Enter Edit Value", e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = editvalue;
}

function deleteAll(){
    list.innerHtml = ""
}

