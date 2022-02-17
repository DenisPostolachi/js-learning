const textArea = document.getElementById('area')

textArea.value = localStorage.getItem('area');
textArea.addEventListener('input', () => {
    localStorage.setItem('area', textArea.value)
})