function onReady () {
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  let id = 0;

  // Called when we create a new todo item and when onReady is called
  function renderTheUI(){
      const toDoList = document.getElementById('toDoList');

      toDoList.textContent = ''; // Clears the text input

      toDos.forEach(function(toDo){
        const newLi = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";

      // True/false depending on state of checkbox
      checkbox.addEventListener('click', function(){
        if (checkbox.checked){
          return true;
          } else {
            return false;
          }
      });

      //Creates the delete button
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = "Delete";

      deleteBtn.addEventListener('click', event => {
        toDos = toDos.filter(function(item){
          return item.id !== toDo.id;
      });
        renderTheUI();
      });

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteBtn);
  });
}

  // Pushes an object with 2 properties into an array
  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText')
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
  });

    id++;

    newToDoText.value = ''; // Empties the text input field

    renderTheUI();
}

  // localStorage
  function saveToDos(){
  localStorage.setItem('key', JSON.stringify(toDos));
}
  saveToDos();

  // This will prevent refreshing and call the createNewToDo function
  addToDoForm.addEventListener('submit', event => {
      event.preventDefault();
      createNewToDo();
});

  renderTheUI();
};

window.onload = function () {
  onReady();
};
