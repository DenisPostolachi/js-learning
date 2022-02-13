const input = document.getElementById('date-input');
const btn = document.getElementById('btn');
const dataContainer = document.getElementById('data-container');


btn.addEventListener('click', () => {
    let currentDate = new Date();
    let pastDate = new Date(input.value);

    const calcDate = (date1,date2) => {
        let difference = Math.floor(date1.getTime() - date2.getTime());
        let day = 1000 * 60 * 60 * 24;

        let days = Math.floor(difference/day);
        let months = Math.floor(days/31);
        let years = Math.floor(months/12);

        let yearElement = document.createElement('p');
        yearElement.innerText = `${years} years`
        dataContainer.append(yearElement);

        let monthElement = document.createElement('p');
        monthElement.innerText = `${months} months`
        dataContainer.append(monthElement);

        let dayElement = document.createElement('p');
        dayElement.innerText = `${days} days`
        dataContainer.append(dayElement);
    }

    calcDate(currentDate, pastDate);

})
