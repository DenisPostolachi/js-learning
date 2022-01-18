class Validator {
    static isEmail(email) {
        let result = /\S+@\S+\.\S+/;
        return result.test(email);
    }

    static isNumber(num) {
        return typeof num === 'number';
    }

    static isPhone(phone) {
        let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

        return regex.test(phone)
    }

}


const validator = Validator.isEmail('deny@mail.kz');
const anotherValidator = Validator.isEmail('vk.com');
const dateValidator = Validator.isNumber(10);
const anotherDateValidator = Validator.isNumber('some text');
const isPhone = Validator.isPhone(89000000000);


console.log(validator);
console.log(anotherValidator);
console.log(dateValidator);
console.log(anotherDateValidator);
console.log(isPhone);

