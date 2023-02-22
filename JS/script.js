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

    const  render = () => {
        let htmlString = "";

        for(const task of tasks) {
            htmlString += `<li>
                ${task.content}
            </li>`;
        }

        document.querySelector(".js-list").innerHTML = htmlString;
    }

    render();
}

