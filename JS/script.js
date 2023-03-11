{
    let tasks = [];

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
            <li class="list__item">

            <button class="list__button list__button--done js-done">${task.done ? "✔" : ""}</button>
                <span class="${task.done ? " list__item--done" : ""}">${task.content}</span>
            <button class="list__button js-delete">✗</button>

            </li>
            `;
        }

        document.querySelector(".js-list").innerHTML = htmlString;
    }

    const renderButtons = () => {
        let heading = "";

        heading += `
            <button class="section__button">Ukryj ukończone</button>
            <button class="section__button">Ukończ wszystkie</button>
        `;

        document.querySelector(".js-headingButtons").innerHTML = heading;
    }

    const render = () => {
        renderTasks();
        renderButtons();
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

