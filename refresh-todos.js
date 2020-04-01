const refreshTodos = function() {
  clearTodos();

  currentTodos = [...todos];

  if(sortPriority && !sortComplete) {
    currentTodos = priority2First(currentTodos);
  } else if(sortComplete && !sortPriority) {
    currentTodos = notCompleteFirst(currentTodos);
  } else if(sortComplete && sortPriority) {
    currentTodos = notCthenPri2First(currentTodos);
  }

  printTodos(currentTodos);
}