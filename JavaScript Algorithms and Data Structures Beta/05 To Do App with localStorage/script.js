const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

const taskData = [];
let currentTask = {};

openTaskFormBtn.addEventListener("click", () =>
  taskForm.classList.toggle("hidden")
);


// showModal() es un método especifico para el elemento HTML <dialog> que se utiliza para crear ventanas de diálogo 
closeTaskFormBtn.addEventListener("click", () =>confirmCloseDialog.showModal());
// para cerrar el dialogo usamos el metodo close().
cancelBtn.addEventListener("click", ()=>confirmCloseDialog.close());

// Cuando pulsemos el boton de discard cerramos el cuadro de dialogo 
// y hacemos que desaparezca el formulario activando la clase hidden con classList.toogle("hidden"),
discardBtn.addEventListener("click", ()=>{
    confirmCloseDialog.close();
    taskForm.classList.toggle("hidden");
    });

    taskForm.addEventListener("submit", (e) => {
        // En la arrow function usamos el parametro e que representa al evento
        // para poder evitar que se actualice la página, que es el comportamiento
        // por defecto que tiene un evento submit.
        e.preventDefault();
        
        // findIndex is an array method that lets find the index of the FIRST 
        // element in an array that satisfies a given testing function.
        const dataArrIndex = taskData.findIndex((item)=>item.id===currentTask.id);

      
      });

