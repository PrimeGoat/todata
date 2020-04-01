const printTodos = function(todos) {
  for (const todo of todos) {
    let show = true;
    if(!(!showLow && todo.priority == 1 || !showComplete && todo.complete)) {
      printTodo(todo);
    }
  }
}

printTodos(todos);