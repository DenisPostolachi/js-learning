const input = document.getElementById('date-input');
const btn = document.getElementById('btn');
const dataContainer = document.getElementById('data-container');


btn.addEventListener('click', () => {
    const now = moment();
    const end = moment(input.value);
    const duration = moment.duration(now.diff(end));
    const days = duration.asDays();
    const years = duration.asYears();
    const months = duration.asMonths();

    const yearElement = document.createElement('p');
    yearElement.innerText = `${Math.ceil(years)} years`
    const monthElement = document.createElement('p');
    monthElement.innerText = `${Math.ceil(months)} months`
    const dayElement = document.createElement('p');
    dayElement.innerText = `${Math.ceil(days)} days`
    dataContainer.append(yearElement, monthElement, dayElement);
})
