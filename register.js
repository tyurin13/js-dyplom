export function initRegister() {

const signUpForm = document.forms.signup;
const btn = document.getElementById('btn');

const newUser = {
  firstName: {
    value: '',
    valid: false,
    checkValidation() {
      this.firstName.valid = this.firstName.value !== '';
    }
  },

  lastName: {
    value: '',
    valid: false,
    checkValidation() {
      this.lastName.valid = this.lastName.value !== '';
    }
  },

  email: {
    value: '',
    valid: false,
    checkValidation() {
      this.email.valid = this.email.value !== '' && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(this.email.value);
    }
  },

  pw: {
    value: '',
    valid: false,
    checkValidation() {
      this.pw.valid = this.pw.value !== '';
    }
  },

  checkFormValidation() {
    for (const key in this) {
      if (typeof this[key] !== 'function' && this[key].valid === false) {
        return false
      } 
    }
  },

  getValue() {
    return {

      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      pw: this.pw.value
    }
  }
  
}

signUpForm.addEventListener('input', (event) => {
  
  event.preventDefault();
  const signupValue = event.target.value;
  const signupName = event.target.name;
  newUser[signupName].value = signupValue;
  const bindedValidator = newUser[signupName].checkValidation.bind(newUser);
  bindedValidator();

  btn.disabled = !newUser.checkFormValidation();

  handleClassAdding(event.target, newUser[signupName].valid);
})

function handleClassAdding(domNode, isValid) {

  if (!isValid) {
    domNode.classList.add(invalidClass)
  } else {
    domNode.classList.remove(invalidClass)
  }
}
}

import {invalidClass} from './constants.js';
