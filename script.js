const button = document.getElementById('TaskButton');
button.addEventListener('click',function(e){
    e.preventDefault();
    const taskText = document.getElementById('action').value;
    if(taskText.trim()===''){
        alert("Please Enter your Tasks!");
        return;
    }
    const newLi = document.createElement('li');
    newLi.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.style.marginLeft='10px';
    deleteBtn.addEventListener('click',function(){
        newLi.remove();
    });

    newLi.appendChild(newLi);

    
    const taskList=document.getElementById('taskList');
   taskList.appendChild(deleteBtn);
    
}); 
// 1. Create the container item (e.g., a list item)
const listItem = document.createElement("li");
listItem.textContent = "Buy groceries ";

// 2. Create the delete button
const deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";


deleteBtn.addEventListener("click", function() {
    listItem.remove(); // Removes the entire list item from the DOM
});

// 4. Append the button to the list item, and the item to your list
listItem.appendChild(deleteBtn);
document.getElementById("myList").appendChild(listItem);
  

    