// https://jsoneditoronline.org/#left=cloud.38addc7d396141c0b53193b6e27264fa

let workers = {
    "worker_one": {
        "personal": {
            "name": "Deny",
            "date": "10.02.1999",
            "phone": "068228228",
            "adress": "groove str.",
            "email": "deny@mail.kz",
            "sex": "M"
        },
        "work": {
            "postion": "uborshik",
            "start_date": "06.06.16",
            "IDNP": "77777777",
            "salary": 1000,
            "exp": "1",
            "department": "clear",
            "extra_info": {
                "home_phone": "0231-77777",
                "schedule": "from 8:00 to 9:00"
            }
        }
    },
    "worker_two": {
        "personal": {
            "name": "Abdul",
            "date": "11.02.1999",
            "phone": "068228228",
            "adress": "groove str.",
            "email": "abdul@mail.kz",
            "sex": "M"
        },
        "work": {
            "postion": "html developer",
            "start_date": "06.06.16",
            "IDNP": "77777777",
            "salary": 1500,
            "exp": "1",
            "department": "clear",
            "extra_info": {
                "home_phone": "0231-77777",
                "schedule": "from 8:00 to 9:00"
            }
        }
    },
    "worker_three": {
        "personal": {
            "name": "Bogdan",
            "date": "11.02.1999",
            "phone": "068228228",
            "adress": "groove str.",
            "email": "abdul@mail.kz",
            "sex": "M"
        },
        "work": {
            "postion": "pahan na stroike",
            "start_date": "06.06.16",
            "IDNP": "77777777",
            "salary": 3500,
            "exp": "1",
            "department": "clear",
            "extra_info": {
                "home_phone": "0231-77777",
                "schedule": "from 8:00 to 9:00"
            }
        }
    },
    "worker_four": {
        "personal": {
            "name": "Alex",
            "date": "11.02.1999",
            "phone": "068228228",
            "adress": "groove str.",
            "email": "abdul@mail.kz",
            "sex": "M"
        },
        "work": {
            "postion": "la nenea in italie",
            "start_date": "06.06.16",
            "IDNP": "77777777",
            "salary": 100,
            "exp": "1",
            "department": "clear",
            "extra_info": {
                "home_phone": "0231-77777",
                "schedule": "from 8:00 to 9:00"
            }
        }
    }
}
// todo нужно создать интерфэйс для вывода данных
let formattedJson = JSON.stringify(workers, null, 4);
document.body.innerHTML += `<pre>${formattedJson}</pre>`;

const salaries = [];
Object.keys(workers).forEach((item) => {
    salaries.push(workers[item].work.salary);
})

const average = nums => {
    const averageNum = nums.reduce((previousValue, currentValue) => (previousValue + currentValue), 0) / nums.length;
    console.log(`average num is ${averageNum}`)
}
average(salaries);

const minAndMax = nums => {
    nums.sort((previousValue, currentValue) => previousValue - currentValue)
    let min = nums[0];
    let max = nums[nums.length - 1]
    console.log(`minimal value is ${min}`)
    console.log(`max value is ${max}`)
}
minAndMax(salaries)

const sum = nums => {
    const sumSalaries = nums.reduce((previousValue, currentValue) => (previousValue + currentValue), 0);
    console.log(`sum of salaries is ${sumSalaries}`)
}
sum(salaries);