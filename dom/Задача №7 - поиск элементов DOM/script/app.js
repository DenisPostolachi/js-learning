const container = document.querySelector('.link-container');
let elementsHttp;
let elementsHttps;
let linksArray = [];


for (let i = 0; i <= 4; i++) {

    elementsHttps = document.createElement('a');
    elementsHttps.href = 'https://stackoverflow.com'

    elementsHttp = document.createElement('a');
    elementsHttp.href = 'http://orar.usarb.md/'

    elementsHttps.textContent = `Link hhtps `
    elementsHttp.textContent = `Link hhtp `
    container.appendChild(elementsHttps);
    container.appendChild(elementsHttp);
    linksArray.push(elementsHttps, elementsHttp);
}


linksArray.forEach((item) => {

    let attributes = item.getAttribute('href');

    if (attributes.startsWith('https')) {
        item.classList.add('red');
    }

})