{
    const tasks = [];

    const removeTasks = (index) => {
        tasks.splice(index, 1);
        render();
    }

    const toogleTaskDone = (index) => {
        tasks[index].done = !tasks[index].done;
        render();
    }

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `<li class="section__listItem${task.done ? " section__listItem--done" : ""}">

            <button class="section__listButton js-done"></button>
                ${task.content}
            <button class="section__listButton section__listButton--delete js-delete">✗</button>

            </li>`;
        }

        document.querySelector(".js-list").innerHTML = htmlString;

        const deleteButtons = document.querySelectorAll(".js-delete");
        deleteButtons.forEach((deleteButton, index) => {
            deleteButton.addEventListener("click", () => {
                removeTasks(index);
            });
        })

        const doneButtons = document.querySelectorAll(".js-done");
        doneButtons.forEach((doneButton, index) => {
            doneButton.addEventListener("click", () => {
                toogleTaskDone(index);
            });
        })
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTask = document.querySelector(".js-field").value.trim();

        if (!newTask) {
            return;
        }

        tasks.push({
            content: newTask,
        })

        render();
    }


    const init = () => {
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
    }

    init();
}

