

document.querySelector('shelterForm');
const input = document.querySelector('#input');
const list = document.querySelector('#list');
document.querySelector('#shelterForm').addEventListener('submit', function(e){
    e.preventDefault();
    const newTodo = input.value;
    const newLi = document.createElement('li')
    newLi.classList = 'newLi'
    newLi.innerText = newTodo;
    list.append(newLi);
    input.value = "";
});








