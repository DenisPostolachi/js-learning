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

            // todo find all inputs and validate they

            const inputs = document.getElementsByTagName('input');

            const errors = {}
            const emailRegex = /\S+@\S+\.\S+/

            for (const input of inputs) {
                const rules = input.getAttribute('rules')

                if (!rules) {
                    return;
                }

                // todo make for all rules
                // {
                //      name: [ 'required' ],
                //      email: ['invalid email']
                // ]


                if (rules.split('|').includes('required') && !input.value) {
                    // todo if exists extents errors
                    errors[input.id] = ['required field']
                } else if (rules.split('|').includes('min:10') && input.value <= 10) {
                    errors[input.id] = ['should be more than 10']
                } else if (rules.split('|').includes('email') && !emailRegex.test(input.value)) {
                    errors[input.id] = ['invalid email']
                }

                // if (rules.split('|').includes('min:10') && input.value <= 10) {
                //     // todo if exists extents errors
                //     if (Object.keys(errors).find(key => errors[key] !== 'required field')) {
                //         errors[input.id] = ['should be more than 10']
                //     }
                // }
                //
                // if (rules.split('|').includes('email') && !emailRegex.test(input.value)) {
                //     // todo if exists extents errors
                //     errors[input.id] = ['invalid email']
                // }
            }

            console.log(errors)
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





