const input = document.getElementById('input');
const addButton = document.getElementById('add');
const list = document.getElementById('list');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function createTaskItem(task) {

    const listItem = document.createElement('li');
    listItem.textContent = task.text;

    if (task.done) {
        listItem.classList.add('done');
    }

    const button = document.createElement('button');
    button.textContent = "X";
    button.style.marginLeft = "10px";

    listItem.appendChild(button);
    list.appendChild(listItem);

    button.addEventListener('click', (event) => {
        event.stopPropagation();
        listItem.remove();
        tasks = tasks.filter(t => t !== task);
        saveTasks();
    });

    listItem.addEventListener('click', () => {

        task.done = !task.done;
        listItem.classList.toggle('done');
        saveTasks();
    });
}

tasks.forEach(task => {
    createTaskItem(task);
});

addButton.addEventListener('click', () => {

    const taskText = input.value.trim();

    if (taskText) {

        const task = {
            text: taskText,
            done: false
        };

        tasks.push(task);
        saveTasks();
        createTaskItem(task);
        input.value = '';
    }
});

