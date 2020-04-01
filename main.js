// Add todo

/*
  {
    text: `make doctor's appointment`,
    id: 1,
    complete: true,
    priority: 2,
  },
*/

document.querySelector(".add-todo").addEventListener("click", function() {
	let input = document.querySelector(".todo-input");
	let priority = document.querySelector(".priority");

	if(input.value == "") {
		alert("Must enter a value!");
		return;
	}

	// Build new entry
	const newEntry = {
		text: input.value,
		id: todos.length,
		complete: false,
		priority: Number(priority.value)
	};

	addTodo(newEntry);
	input.value = "";
	priority.value = 1;

	refreshTodos();
});


// Default is to not show priorities
let showPriorities = false;

// Show low priorities
let showLow = true;

// Show completes
let showComplete = true;

// Sort priorities (high first)?
let sortPriority = false;

// Sort by completion (incomplete first)?
let sortComplete = false;

// Show/hide priorities
document.querySelector(".toggle-priorities").addEventListener("click", function(event) {
	showPriorities = !showPriorities;

	if(event.target.innerText == "Show Priorities") {
		event.target.innerText = "Hide Priorities";
	} else {
		event.target.innerText = "Show Priorities";
	}

	refreshTodos();
});

// Hide/show low priority
document.querySelector(".hide-low-priority").addEventListener("click", function(event) {
	if(event.target.innerText == "Hide Low Priority") {
		event.target.innerText = "Show Low Priority";
		showLow = false;
	} else {
		event.target.innerText = "Hide Low Priority";
		showLow = true;
	}

	refreshTodos();
});

// Hide/show complete
document.querySelector(".hide-complete").addEventListener("click", function(event) {
	if(event.target.innerText == "Hide Complete") {
		event.target.innerText = "Show Complete";
		showComplete = false;
	} else {
		event.target.innerText = "Hide Complete";
		showComplete = true;
	}

	refreshTodos();
});

// High priority first
document.querySelector(".high-priority-first").addEventListener("click", function(event) {
	if(event.target.innerText == "High Priority First") {
		event.target.innerText = "Unsorted Priorities";
		sortPriority = true;
	} else {
		event.target.innerText = "High Priority First";
		sortPriority = false;
	}

	refreshTodos();
});

// Incomplete first
document.querySelector(".complete-last").addEventListener("click", function(event) {
	if(event.target.innerText == "Complete Last") {
		event.target.innerText = "Unsorted by Completeness";
		sortComplete = true;
	} else {
		event.target.innerText = "Complete Last";
		sortComplete = false;
	}

	refreshTodos();
});
