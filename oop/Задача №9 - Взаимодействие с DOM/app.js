const container = document.querySelector('.container');
form = document.createElement('form');
form.style.display = 'flex';
form.style.flexDirection = 'column';
container.append(form)

class Form {
    constructor(type, id, placeholder, value, rules = {}) {
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

        this.input.setAttribute('type', `${this.type}`);
        this.input.setAttribute('id', `${this.id}`);
        this.input.setAttribute('placeholder', `${this.placeholder}`);
        this.input.setAttribute('value', `${this.value}`);
        this.input.setAttribute('rules', `${Object.keys(this.rules)}`);
        return this
    }

    createErrorMessage(name) {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Not valid data';
        errorMessage.setAttribute('id', `${name}-error`);
        errorMessage.classList.add('hide');
        this.input.parentNode.insertBefore(errorMessage, this.input.nextSibling);
        return this
    }

    validate() {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const age = document.getElementById('age');
            const birthdate = document.getElementById('birthdate');

            if ( name.hasAttribute('rules') && name.value) {
                name.classList.remove('error');
                name.classList.add('success');
                document.getElementById('name-error').style.display = 'none'
            } else {
                name.classList.remove('success');
                name.classList.add('error');
                document.getElementById('name-error').style.display = 'block'
            }

            if ( email.hasAttribute('rules') && email.value) {
                email.classList.remove('error');
                email.classList.add('success');
                document.getElementById('email-error').style.display = 'none'
            } else {
                email.classList.remove('success');
                email.classList.add('error');
                document.getElementById('email-error').style.display = 'block'
            }

            if ( age.hasAttribute('rules') && Number(age.value) > 10) {
                age.classList.remove('error');
                age.classList.add('success');
                document.getElementById('age-error').style.display = 'none'
            } else {
                age.classList.remove('success');
                age.classList.add('error');
                document.getElementById('age-error').style.display = 'block'
            }

            if ( birthdate.hasAttribute('rules') && birthdate.value) {
                birthdate.classList.remove('error');
                birthdate.classList.add('success');
                document.getElementById('birthdate-error').style.display = 'none'
            } else {
                birthdate.classList.remove('success');
                birthdate.classList.add('error');
                document.getElementById('birthdate-error').style.display = 'block'
            }

        })
        return this
    }


}


const formElementOne = new Form('text', 'name', 'Name', 'John', {required: true});
const formElementTwo = new Form('text', 'email', 'Email', 'mail@mail.com', {required: true});
const formElementThree = new Form('text', 'age', 'Age', '62', {min: true});
const formElementFour = new Form('text', 'birthdate', 'Date', '01.12.1962', {required: true});
const formElementFive = new Form('submit', 'submit', '', 'Submit');
formElementOne.create().createErrorMessage('name');
formElementTwo.create().createErrorMessage('email');
formElementThree.create().createErrorMessage('age');
formElementFour.create().createErrorMessage('birthdate');
formElementFive.create().validate();

