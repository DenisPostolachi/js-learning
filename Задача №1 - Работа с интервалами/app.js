const input = document.getElementById('date-input');
const btn = document.getElementById('btn');
const dataContainer = document.getElementById('data-container');


btn.addEventListener('click', () => {
    const currentDate = new Date();
    const pastDate = new Date(input.value);

    const calcDate = (date1, date2) => {
        let difference = Math.floor(date1.getTime() - date2.getTime());
        let day = 1000 * 60 * 60 * 24;

        const days = Math.floor(difference / day);
        const months = Math.floor(days / 31);
        const years = Math.floor(months / 12);

        const yearElement = document.createElement('p');
        yearElement.innerText = `${years} years`
        const monthElement = document.createElement('p');
        monthElement.innerText = `${months} months`
        const dayElement = document.createElement('p');
        dayElement.innerText = `${days} days`
        dataContainer.append(yearElement, monthElement, dayElement);
    }

    calcDate(currentDate, pastDate);

})
