const container = document.querySelector('.link-container');
//todo нельзя объявлять пустые переменные
let elementsHttp;
let elementsHttps;
let linksArray = [];


for (let i = 0; i <= 4; i++) {

    elementsHttps = document.createElement('a');
    elementsHttps.href = 'https://stackoverflow.com'

    elementsHttp = document.createElement('a');
    elementsHttp.href = 'http://orar.usarb.md/'

    //todo use innerText
    elementsHttps.textContent = `Link hhtps `
    elementsHttp.textContent = `Link hhtp `

    //todo use .append(...,...)
    container.appendChild(elementsHttps);
    container.appendChild(elementsHttp);
    linksArray.push(elementsHttps, elementsHttp);
}


linksArray.forEach((item) => {

    //todo const
    let attributes = item.getAttribute('href');

    if (attributes.startsWith('https')) {
        item.classList.add('red');
    }

})
