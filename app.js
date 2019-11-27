function onReady() {
  const ADD_TODO_FORM = document.getElementById('addToDoForm');
  const NEW_TODO_TEXT = document.getElementById('newToDoText');
  const TODO_LIST = document.getElementById('toDoList');

  ADD_TODO_FORM.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get the text
    let title = NEW_TODO_TEXT.value;

    // Create a new <li> </li>
    let newLi = document.createElement('li');

    // Creates an input in the form of a checkbox
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener('click', function(event){
      // this.parentElement represents the button's <li> parent
      TODO_LIST.removeChild(this.parentElement);
    }
  )
    // Creates a new li
    newLi.textContent = title;
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteBtn);
    TODO_LIST.appendChild(newLi);
    NEW_TODO_TEXT.value = "";
  });
};

window.onload = function () {
  onReady()
}
