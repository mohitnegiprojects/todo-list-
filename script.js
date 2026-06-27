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