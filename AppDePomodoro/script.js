const tasks = []; //Arreglo de Tareas 
let time = 0;
let timer = null;
let timerBreak = null;
let current = null;
//Boton de enviar
const bAdd = document.querySelector("#bAdd");
//cuadro de texto
const itTask = document.querySelector("#itTask");
const form = document.querySelector("#form");


form.addEventListener('submit', e=>{
    e.preventDefault();
    if(itTask. value !='')
        createTask(itTask.value);
        itTask. value = '';
        renderTasks();
});

function createTask(value){

}

function createTask(value) {
    const newTask ={
        id: (Math.random()* 100).toString(36).slice(3),
        title: value,
        completed: false,
  
    };
    
    tasks.unshift(newTask);
}

function renderTasks(){
    const html = tasks.map(task => {
        return `
            <div class="task"> ´´
            <!-- Contenido de la tarea -->
            </div>;
        `;

    });
    
} 
