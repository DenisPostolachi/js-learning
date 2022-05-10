const container = document.querySelector('.link-container');
let linksArray = [];


for (let i = 0; i <= 4; i++) {

    const elementsHttps = document.createElement('a');
    elementsHttps.href = 'https://stackoverflow.com'

    const elementsHttp = document.createElement('a');
    elementsHttp.href = 'http://orar.usarb.md/'

    elementsHttps.innerText = `Link hhtps `
    elementsHttp.innerText = `Link hhtp `

    container.append(elementsHttps, elementsHttp);
    linksArray.push(elementsHttps, elementsHttp);
}


linksArray.forEach((item) => {
    const linkNames = item.getAttribute('href');

    if (linkNames.startsWith('https')) {
        item.classList.add('red');
    }

})
