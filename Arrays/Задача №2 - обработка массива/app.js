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

    arr.forEach((studentItem, index) => {
        let nameItems = studentItem.name;
        let marksItemsNotesAverage = studentItem.marks.reduce((a, b) => (a + b), 0) / studentItem.marks.length;
        console.log(`${marksItemsNotesAverage} - ${nameItems}`);
    })

}

// averageCount(students);

let averageMarkLessFive = (arr) => {

    arr.forEach((studentItem, index) => {
        let nameItems = studentItem.name;
        let marksItemsNotesAverage = studentItem.marks.reduce((a, b) => (a + b), 0) / studentItem.marks.length;

        if (marksItemsNotesAverage < 5) {
            console.log(`${marksItemsNotesAverage} - ${nameItems}`);
        }

    })
}

// averageMarkLessFive(students);

let minMaxMarkFind = (arr) => {

    let studentNames = [];
    let averageNotes = [];

    arr.forEach((studentItem, index) => {
        studentNames.push(studentItem.name);
        let marksItemsNotes = studentItem.marks.reduce((a, b) => (a + b), 0) / studentItem.marks.length;
        averageNotes.push(marksItemsNotes);
    })

    let minimalNote = Math.min.apply(Math, averageNotes);
    let maximalNote = Math.max.apply(Math, averageNotes);

    averageNotes.forEach((noteItem, index) => {
        let nameItem = studentNames[index];
        if (noteItem == minimalNote) {
            console.log(`${nameItem} has the lowest note - ${noteItem}`);
        }
        if (noteItem == maximalNote) {
            console.log(`${nameItem} has the highest note - ${noteItem}`);
        }
    })

}

// minMaxMarkFind(students);

let studentDecreaseSort = (arr) => {

    let studentNames = [];
    let averageNotes = [];

    arr.forEach((studentItem, index) => {
        studentNames.push(studentItem.name);
        let marksItemsNotes = studentItem.marks.reduce((a, b) => (a + b), 0) / studentItem.marks.length;
        averageNotes.push(marksItemsNotes);
    })

    let list = [];
    studentNames.forEach((item, index) => {
        list.push({'name': studentNames[index], 'note': averageNotes[index]})
    })


    list.sort((a, b) => {
        return ((a.note < b.note) ? -1 : ((a.note == b.note) ? 0 : 1));
    })

    list.reverse();
    console.log(list);

}

// studentDecreaseSort(students);

let moreThenAverage = (arr) => {
    let studentNames = [];
    let averageNotes = [];

    arr.forEach((studentItem, index) => {
        studentNames.push(studentItem.name);
        let marksItemsNotes = studentItem.marks.reduce((a, b) => (a + b), 0) / studentItem.marks.length;
        averageNotes.push(marksItemsNotes);
    });

    let averageMarkAllStudents = averageNotes.reduce((a, b) => (a + b), 0) / averageNotes.length;

    averageNotes.forEach((noteItem, index) => {
        let nameItem = studentNames[index];

        if (noteItem > averageMarkAllStudents) {
            console.log(`${noteItem} of ${nameItem} are greatest then average - ${averageMarkAllStudents}`);
        }
    })
}

moreThenAverage(students);