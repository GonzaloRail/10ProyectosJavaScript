const input=document.querySelector('#input')
const form=document.querySelector('#form')
const submit=document.querySelector('#submit')
const tareas=document.querySelector('tareas')

submit.addEventListener('click',añadirTarea())

function añadirTarea(){
    tareas.innerHTML='<h1>dad</h1>';
}