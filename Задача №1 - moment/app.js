const input = document.getElementById('date-input');
const btn = document.getElementById('btn');
const dataContainer = document.getElementById('data-container');


btn.addEventListener('click', (e) => {
    let now = moment(new Date());
    let end = moment(input.value);
    let duration = moment.duration(now.diff(end));
    let days = duration.asDays();
    let years = duration.asYears();
    let months = duration.asMonths();

    const yearElement = document.createElement('p');
    yearElement.innerText = `${Math.ceil(years)} years`
    const monthElement = document.createElement('p');
    monthElement.innerText = `${Math.ceil(months)} months`
    const dayElement = document.createElement('p');
    dayElement.innerText = `${Math.ceil(days)} days`
    dataContainer.append(yearElement, monthElement, dayElement);
})
