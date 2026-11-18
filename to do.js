// To-Do List using Command Line

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tasks = [];

function addTask() {
    rl.question("Enter your task: ", function(task) {
        tasks.push(task);
        console.log("Task added successfully!");
        menu();
    });
}

function removeTask() {
    displayTasks();

    rl.question("Enter task number to remove: ", function(number) {
        let index = Number(number) - 1;

        if (index >= 0 && index < tasks.length) {
            tasks.splice(index, 1);
            console.log("Task removed successfully!");
        } else {
            console.log("Invalid task number!");
        }

        menu();
    });
}

function displayTasks() {
    if (tasks.length === 0) {
        console.log("No tasks available.");
    } else {
        console.log("Your Tasks:");

        for (let i = 0; i < tasks.length; i++) {
            console.log((i + 1) + ". " + tasks[i]);
        }
    }
}

function clearTasks() {
    tasks = [];
    console.log("All tasks cleared!");
    menu();
}

function menu() {
    console.log("\n1. Add");
    console.log("2. Remove");
    console.log("3. View");
    console.log("4. Clear");
    console.log("5. Exit");

    rl.question("Enter your choice: ", function(choice) {
        if (choice === "1") {
            addTask();
        } else if (choice === "2") {
            removeTask();
        } else if (choice === "3") {
            displayTasks();
            menu();
        } else if (choice === "4") {
            clearTasks();
        } else if (choice === "5") {
            console.log("Program ended.");
            rl.close();
        } else {
            console.log("Invalid choice!");
            menu();
        }
    });
}

menu();