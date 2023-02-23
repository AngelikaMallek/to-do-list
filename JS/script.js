{
    const tasks = [];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `<li class="section__listItem"><button class="section__listButton"></button>
                ${task.content}
            <button class="section__listButton section__listButton--delete">✗</button></li>`;
        }

        document.querySelector(".js-list").innerHTML = htmlString;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTask = document.querySelector(".js-field").value;

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

