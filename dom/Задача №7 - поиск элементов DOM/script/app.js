const container = document.querySelector('.link-container');
//todo нельзя объявлять пустые переменные
let linksArray = [];


for (let i = 0; i <= 4; i++) {

    const elementsHttps = document.createElement('a');
    elementsHttps.href = 'https://stackoverflow.com'

    const elementsHttp = document.createElement('a');
    elementsHttp.href = 'http://orar.usarb.md/'

    //todo use innerText
    elementsHttps.innerText = `Link hhtps `
    elementsHttp.innerText = `Link hhtp `

    //todo use .append(...,...)
    container.appendChild(elementsHttps);
    container.appendChild(elementsHttp);
    linksArray.push(elementsHttps, elementsHttp);
}


linksArray.forEach((item) => {

    //todo const
    const attributes = item.getAttribute('href');

    if (attributes.startsWith('https')) {
        item.classList.add('red');
    }

})
