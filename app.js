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
    newLi.textContent = title; // Creates a new li
    newLi.appendChild(checkbox); // Attach checkbox to li
    newLi.appendChild(deleteBtn);
    TODO_LIST.appendChild(newLi); //Attach the li to ul
    NEW_TODO_TEXT.value = ""; // Empty the input after submit
  });
};

window.onload = function () {
  onReady()
}
