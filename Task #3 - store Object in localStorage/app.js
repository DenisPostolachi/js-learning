const saveButton = document.getElementById('store')
const clearButton = document.getElementById('clear')
const name = document.getElementById('name')
const locations = document.getElementById('locations')
const languageCheckboxes = document.getElementById('language-container');
const motivationMessage = document.getElementById('motivation-text');


const store = () => {
    const storedObject = {
        "name": name.value,
        "location": locations.value,
        "motivation_message": motivationMessage.value,
        "languages": []
    }

    for (let i = 0; i < languageCheckboxes.children.length; i++) {
        if (languageCheckboxes.children[i].checked === true) {
            storedObject['languages'].push(languageCheckboxes.children[i].value)
        }
    }

    window.localStorage.setItem("storedObject", JSON.stringify(storedObject));
}


const retrievedObject = localStorage.getItem('storedObject');


if (retrievedObject) {
    name.value = JSON.parse(retrievedObject).name
    locations.value = JSON.parse(retrievedObject).location
    motivationMessage.value = JSON.parse(retrievedObject).motivation_message

    for (let i = 0; i < languageCheckboxes.children.length; i++) {
        JSON.parse(retrievedObject).languages.map(language => {
            if (languageCheckboxes.children[i].value === language) {
                languageCheckboxes.children[i].setAttribute('checked', '')
            }
        })


    }
}


saveButton.addEventListener('click', store)
clearButton.addEventListener('click', () => {
    localStorage.clear()
})
