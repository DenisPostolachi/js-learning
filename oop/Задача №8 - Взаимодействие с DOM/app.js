class Element {
    constructor(selector) {
        this.selector = selector;
        this.element = document.createElement(`${selector}`);
    }

    html(text) {
        this.element.innerText = text;
        return this
    }

    append(value) {
        this.element.prepend(`${value}`);
        return this
    }

    prepend(value) {
        this.element.append(`${value}`);
        return this
    }

    attr(name, value) {
        this.element.setAttribute(name, value)
        return this
    }
}

let component = new Element('div');
component.html('hello').append('!').prepend('1').attr('class', 'www');


const container = document.querySelector('.container');
container.appendChild(component.element);
