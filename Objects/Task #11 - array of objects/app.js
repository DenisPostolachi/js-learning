let students = [
    {
        name: 'Leroy',
        marks: [8, 10, 7, 5, 4]
    },
    {
        name: 'Artur',
        marks: [5, 1, 4, 2, 3]
    },
    {
        name: 'Deny',
        marks: [8, 7, 7, 8, 9]
    },
    {
        name: 'Martin',
        marks: [9, 10, 9, 9, 9]
    },
    {
        name: 'Abdul',
        marks: [1, 1, 1, 1, 2]
    },
    {
        name: 'Adolf',
        marks: [10, 10, 10, 10, 10]
    },
]

let averageCount = (arr) => {
    arr.forEach((student, index) => {
        const marksItemsNotesAverage = student.marks.reduce((a, b) => (a + b), 0) / student.marks.length;
        console.log(`${marksItemsNotesAverage} - ${student.name}`);
    })
}

// averageCount(students);

let averageMarkLessFive = (arr) => {
    arr.forEach((student, index) => {
        let nameItems = student.name;
        let marksItemsNotesAverage = student.marks.reduce((a, b) => (a + b), 0) / studentItem.marks.length;

        if (marksItemsNotesAverage < 5) {
            console.log(`${marksItemsNotesAverage} - ${nameItems}`);
        }

    })
}

// averageMarkLessFive(students);

// todo
const minMaxMark = (arr) => {
    const newArray = arr.map(item => {
        item.average = item.marks.reduce((acc, value) => (acc + value), 0) / item.marks.length
        return item;
    } )

    const [min] = newArray.sort((a, b) => a.average - b.average)
    const [max] = newArray.sort((a, b) => b.average - a.average)
    console.log(min, max)
}

// minMaxMarkFind(students);

// todo
let studentDecreaseSort2 = (arr) => {
    const newArray = arr.map(item => {
        item.average = item.marks.reduce((acc, value) => (acc + value), 0) / item.marks.length
        return item;
    })

    console.log(newArray.sort((a, b) => a.average - b.average));
}

// studentDecreaseSort(students);

// todo
let moreThenAverage2 = (arr) => {
    const newArray = arr.map(item => {
        item.average = item.marks.reduce((acc, value) => (acc + value), 0) / item.marks.length
        return item;
    })

    const defaultAverage = newArray.reduce((acc, value) => (acc + value.average), 0) / newArray.marks.length
    console.log(newArray.filter((item) => item.average > defaultAverage));
}



moreThenAverage2(students);