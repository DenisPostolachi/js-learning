const saveButton = document.getElementById('store')
const clearButton = document.getElementById('clear')
const name = document.getElementById('name')
const locations = document.getElementById('locations')
const languageCheckboxes = document.getElementById('language-container');


const store = () => {
    localStorage.setItem("name", name.value);
    localStorage.setItem("location", locations.value);

    for (let i = 0; i < languageCheckboxes.children.length; i++) {
        console.log(languageCheckboxes.children[i].checked)
        localStorage.setItem("languages", languageCheckboxes.children[i].checked)
    }


}



name.value = localStorage.getItem('name')
locations.value = localStorage.getItem('location')



saveButton.addEventListener('click', store)

clearButton.addEventListener('click', () => {
    localStorage.clear()
})
