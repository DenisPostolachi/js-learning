let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};


function createTree(container, data) {
    const ul = container.appendChild(document.createElement('ul'));
    for (const [key, val] of Object.entries(data)) {
        const li = ul.appendChild(document.createElement('li'));
        li.innerText = key;
        if (Object.keys(val).length) {
            createTree(li, val);
        }
    }
}

createTree(document.getElementById('container'), data);