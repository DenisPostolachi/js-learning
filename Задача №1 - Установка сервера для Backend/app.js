const container = document.querySelector('.container');

const getResponse = async () => {
    try {
        const response = await fetch('http://localhost:3000/posts');
        const content = await response.json()  // то же самое что и JSON.parse

        for (let item of content) {
            container.innerHTML += `<p>${item.title}</p><p>${item.description}</p><p>${item.execution_time}</p><br>`;
        }

    } catch (e) {
        console.log('pentru si a stins jsonserver, boule')
    }
}

getResponse()

