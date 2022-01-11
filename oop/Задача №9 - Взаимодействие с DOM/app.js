const container = document.querySelector('.container');
form = document.createElement('form');
form.style.display = 'flex';
form.style.flexDirection = 'column';


container.append(form)

class Form {
    constructor(type, id, placeholder, value, rules = []) {
        this.type = type;
        this.id = id;
        this.placeholder = placeholder;
        this.value = value;
        this.rules = rules;
    }

    create() {
        this.input = document.createElement('input');
        this.input.style.margin = '0 auto'
        this.input.style.marginTop = '10px'
        this.input.style.marginBottom = '10px'
        this.input.style.width = '400px'
        form.appendChild(this.input);
        return this
    }


    getValue() {
        this.input.setAttribute('type', `${this.type}`);
        this.input.setAttribute('id', `${this.id}`);
        this.input.setAttribute('placeholder', `${this.placeholder}`);
        this.input.setAttribute('value', `${this.value}`);
        this.input.setAttribute('rules', `${this.rules}`);
        return this
    }

    validate() {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // const valueName = document.getElementById('name').value;
            // const valueAge = Number(document.getElementById('age').value);
            //
            // if (!valueName) {
            //     alert('Incorrect Data');
            // } else if (!valueAge || valueAge < 10) {
            //     alert('Incorrect Data');
            // } else {
            //     alert('Data is saved')
            // }
            console.log(this.rules);
        })
        return this
    }

}


const formElementOne = new Form('text', 'name', 'Name', 'John', ['name'] );
const formElementTwo = new Form('text', 'email', 'Email', 'mail@mail.com', ['email']);
const formElementThree = new Form('text', 'age', 'Age', '62', ['min']);
const formElementFour = new Form('text', 'birthdate', 'Date', '01.12.1962', ['date']);
const formElementFive = new Form('submit', 'submit', '', 'Submit');
formElementOne.create().getValue();
formElementTwo.create().getValue();
formElementThree.create().getValue();
formElementFour.create().getValue();
formElementFive.create().getValue().validate();

