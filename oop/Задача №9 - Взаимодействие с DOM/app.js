const container = document.querySelector('.container');
form = document.createElement('form');
form.style.display = 'flex';
form.style.flexDirection = 'column';
container.append(form);

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
        this.input.setAttribute('rules', this.rules);
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

            const inputs = document.getElementsByTagName('input');

            const errors = {}
            const emailRegex = /\S+@\S+\.\S+/

            for (const input of inputs) {
                const rules = input.getAttribute('rules')

                if (!rules) {
                    return;
                }

                const validationRules =  rules.split('|');
                errors[input.id] = [];

                for (const rule of validationRules)  {
                    if (rule === 'required' && !input.value) {
                        errors[input.id].push('required field')
                    }

                    if (rule.startsWith('min:')) {
                        if (input.value) {
                            if (isNaN(input.value)) {
                                errors[input.id] = [`should be a valid number`]
                                break
                            }

                            const [,minLength]= rule.split(':');

                            if (Number(input.value) < Number(minLength)) {
                                errors[input.id] = [`should be more than ${minLength}`]
                            }
                        }

                    }

                    if (rule === 'email' && !emailRegex.test(input.value)) {
                        errors[input.id].push('invalid email')
                    }
                }


                for (const key in errors) {
                    if (errors[key] && !errors[key]?.length) {
                        delete errors[key]
                    }
                }
            }

            return !!errors.length

        })
        return this
    }

    //  todo add method get value
    get getValue() {
        console.log(this.value)
        return this.value
        return this
    }
}

const formElementOne = new Form('text', 'name', 'Name', 'John', 'required');
const formElementTwo = new Form('text', 'email', 'Email', 'mail@mail.com', 'required|email');
const formElementThree = new Form('text', 'age', 'Age', '62', 'required|min:10');
const formElementFour = new Form('text', 'birthdate', 'Date', '01.12.1962', 'required|date');
const formElementFive = new Form('submit', 'submit', '', 'Submit');

formElementOne.create().createErrorMessage('name').getValue;
formElementTwo.create().createErrorMessage('email').getValue;
formElementThree.create().createErrorMessage('age');
formElementFour.create().createErrorMessage('birthdate');
formElementFive.create().validate();





