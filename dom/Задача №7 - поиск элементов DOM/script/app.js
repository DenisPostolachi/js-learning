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
   // container.append(elementsHttp);
    linksArray.push(elementsHttps, elementsHttp);
}


linksArray.forEach((item) => {

    //todo rename
    const attributes = item.getAttribute('href');

    if (attributes.startsWith('https')) {
        item.classList.add('red');
    }

})
