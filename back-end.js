

/********************
 * HELPER FUNCTIONS *
 ********************/

const getTodoName = function(todo) {
  return todo.text
}

const getCompleteness = function (todo) {
  return todo.complete
}

const getPriority = function (todo) {
  return todo.priority
}

const isComplete = function(todo) {
  return todo.complete
}

const isNotComplete = function(todo) {
  return !isComplete(todo)
}

const isHighPriority = function(todo) {
  return todo.priority === 2
}

const isLowPriority = function(todo) {
  return todo.priority === 1
}



/***********************
 * ITERATION FUNCTIONS *
 ***********************/

const names = function (todos) {
  return todos.map(getTodoName)
}

const namesAndPriorities = (todos) => todos.map((todo) => {
    const priority = todo.priority === 2 ? 'High' : 'Low';

    return `${todo.text} - ${priority}`
})

const justNotComplete = function (todos) {
  return todos.filter(isNotComplete)
}

const justComplete = function (todos) {
  return todos.filter(isComplete)
}

const priority2Only = function (todos) {
  return todos.filter(isHighPriority)
}

const priority1Only = function (todos) {
  return todos.filter(isLowPriority)
}

const notCompleteFirst = function(todo) {
  const sorted = [...todo];

  return sorted.sort(function(a, b) {
    // Sort by completeness
    out = a.complete - b.complete;
    if(out != 0) {
      return out;
    }

    // Subsort by id
    return a.id - b.id;
  });
}

const priority2First = function(todo) {
  const sorted = [...todo];

  return sorted.sort(function(a, b) {
    // Sort by priority
    out = b.priority - a.priority;
    if(out != 0) {
      return out;
    }
  
    // Subsort by id
    return a.id - b.id;
  });
}

const notCthenPri2First = function(todo) {
  const sorted = [...todo];

  return sorted.sort(function(a, b) {
    // Sort by completeness
    let out = a.complete - b.complete;
    if(out != 0) {
      return out;
    }

    // Subsort by priority
    out = b.priority - a.priority;
    if(out != 0) {
      return out;
    }

    // SubSubsort by id
    return a.id - b.id;
  });
}

if (typeof notCompleteFirst === 'undefined') {
  notCompleteFirst = undefined;
}

if (typeof priority2First === 'undefined') {
  priority2First = undefined;
}

/*
module.exports = {
  getTodoName,
  getCompleteness,
  getPriority,
  isComplete,
  isHighPriority,
  names,
  namesAndPriorities,
  justNotComplete,
  justComplete,
  priority2Only,
  priority1Only,
  notCompleteFirst,
  priority2First,
}
*/