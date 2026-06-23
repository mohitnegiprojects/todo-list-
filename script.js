const button = document.getElementById('TaskButton');
button.addEventListener('click',function(e){
    e.preventDefault();
    const taskText = button.value;
    const newLi = document.createElement('li');
    newLi.textContent = taskText;
    document.getElementById('taskList').appendChild('newLi');
});