"use strict";

// HTML Elements //
const inputEl = document.querySelector("input")
const orderedListEl = document.querySelector("ol")
const buttonEl = document.querySelector("button");
const finishEl = document.querySelector(".finish-btn")

function storeTasks() {
	localStorage.setItem("Tasks", orderedListEl.innerHTML)
}

function addTask() {
	const input_val = inputEl.value
	if (input_val === "") return

	const li_task = `
		<li>
			${input_val}
			<button class="finish-btn">Finish ✔</button>
		</li>
	`
	
	orderedListEl.insertAdjacentHTML("beforeend", li_task);
	storeTasks()

	inputEl.value = ""
}

function removeTask(task) {
	orderedListEl.removeChild(task);
	storeTasks()
}

// Event Listeners //
buttonEl.addEventListener("click", addTask)

inputEl.addEventListener("keydown", function(e) {
	if (e.keyCode === 13) addTask();
});

orderedListEl.addEventListener("click", function(e) {
	let task = e.target.parentElement;
	if (task.tagName !== "LI") return;

	removeTask(task)
})

window.addEventListener("load", function(e) {
	const tasks = localStorage.getItem("Tasks")
	if (!tasks) return

	orderedListEl.insertAdjacentHTML("afterbegin", tasks)
})
