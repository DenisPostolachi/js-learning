const person = {
    first: 'Ion',
    last: 'Creanga',
    company: 'Amintiri din copilarie SRL'
}

const displayName = ({first, last, company}) => {
    console.log(`Name: ${first} ${last} Company: ${company}`);
}

displayName(person);