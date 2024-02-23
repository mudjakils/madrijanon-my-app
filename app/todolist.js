document.getElementById('addTask').addEventListener('click', function() {
    var taskInput = document.getElementById('taskInput').value;
    if (taskInput.trim() !== '') {
        addTaskToList(taskInput);
        document.getElementById('taskInput').value = '';
    } else {
        alert('Please enter a task!');
    }
});

function addTaskToList(taskInput) {
    var listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.appendChild(document.createTextNode(taskInput));
    
    var deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm float-right';
    deleteButton.appendChild(document.createTextNode('X'));
    deleteButton.addEventListener('click', function() {
        listItem.remove();
    });
    listItem.appendChild(deleteButton);

    document.getElementById('taskList').appendChild(listItem);
}
