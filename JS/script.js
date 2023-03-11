{
    let tasks = [];
    let hideDoneTask = false;

    const removeTasks = (index) => {
        tasks = [
            ...tasks.slice(0, index),
            ...tasks.slice(index + 1),
        ]
        render();
    }

    const toogleTaskDone = (index) => {
        tasks = [
            ...tasks.slice(0, index),
            {
                ...tasks[index],
                done: !tasks[index].done,
            },
            ...tasks.slice(index + 1),
        ]
        render();
    }

    const bindDeleteTaskButtons = () => {
        const deleteButtons = document.querySelectorAll(".js-delete");
        deleteButtons.forEach((deleteButton, index) => {
            deleteButton.addEventListener("click", () => {
                removeTasks(index);
            });
        })
    }

    const bindToogleTaskDoneButtons = () => {
        const doneButtons = document.querySelectorAll(".js-done");
        doneButtons.forEach((doneButton, index) => {
            doneButton.addEventListener("click", () => {
                toogleTaskDone(index);
            });
        })
    }

    const renderTasks = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class="list__item ${task.done && hideDoneTask ? "list__item--hidden" : ""}">

            <button class="list__button list__button--done js-done">${task.done ? "✔" : ""}</button>
                <span class="${task.done ? " list__item--done" : ""}">${task.content}</span>
            <button class="list__button js-delete">✗</button>

            </li>
            `;
        }

        document.querySelector(".js-list").innerHTML = htmlString;
    }

    const toogleHiddeDoneTask = () => {
        hideDoneTask = !hideDoneTask;
        render();
    }

    const doneAllTasks = () => {
        tasks = tasks.map(
            (task) => ({
                ...task,
                done: true,
            })
        );

        render();
    }

    const bindButtonEvents = () => {
        const hiddenDoneTaskButton = document.querySelector(".js-hiddenDoneTaskButton");
        const finishedAllTasks = document.querySelector(".js-finishedAllTasks");

        if (hiddenDoneTaskButton) {
            hiddenDoneTaskButton.addEventListener("click", toogleHiddeDoneTask);
        }

        if (finishedAllTasks) {
            finishedAllTasks.addEventListener("click", doneAllTasks);
        }
    }

    const renderButtons = () => {
        let heading = "";

        if (!tasks.length) {
            heading = "";
        } else {
            heading += `
            <button class="section__button js-hiddenDoneTaskButton">

            ${hideDoneTask ? "Pokaż" : "Ukryj"} ukończone</button>

            <button class="section__button js-finishedAllTasks"

            ${tasks.every(({ done }) => done) ? "disabled" : ""}

            >
            Ukończ wszystkie</button>
        `;
        }

        document.querySelector(".js-headingButtons").innerHTML = heading;
    }

    const render = () => {
        renderTasks();
        renderButtons();
        bindButtonEvents();
        bindDeleteTaskButtons();
        bindToogleTaskDoneButtons();
    }

    const cleanInput = () => {
        document.querySelector(".js-field").value = "";
    }

    const focusInput = () => {
        document.querySelector(".js-field").focus();
    }

    const addNewTask = (newTask) => {
        if (!newTask) {
            focusInput();
            return;
        }

        tasks = [
            ...tasks,
            { content: newTask },
        ]

        render();
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTask = document.querySelector(".js-field").value.trim();

        if (newTask) {
            addNewTask(newTask);
        }

        focusInput();
        cleanInput();
    }


    const init = () => {
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
    }

    init();
}

