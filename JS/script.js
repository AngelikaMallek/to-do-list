{
    const tasks = [
        {
            content: "Ugotować obiad",
            done: false,
        },
        {
            content: "Odkurzyć",
            done: true,
        }
    ]

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `<li class="section__listItem"><button class="section__listButton"></button>
                ${task.content}
            <button class="section__listButton section__listButton--delete">✗</button></li>`;
        }

        document.querySelector(".js-list").innerHTML = htmlString;
    }

    render();
}

