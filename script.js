const input = document.querySelector('.todo-input');
const list = document.querySelector('.todo-list');


const state = [];
const todo = {
    text: 'test',
};

input.addEventListener("keydown", heandler);

function heandler(event){
    if(event.key === "Enter"){
        const newTodoText = event.target.value;
        state.push({text:newTodoText});
        state.forEach((todo) =>{
            const li = document.createElement('li');
           
            li.classList.add('todo-item');
            li.innerText = todo.text;
            input.value = '';
            list.appendChild(li);
        }); 
        
       
        localStorage.setItem("test", "testTest"); 
        console.log(state);
    }

}