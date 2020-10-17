export function initLogin() {

const loginForm = document.forms.login;
const btn2 = document.getElementById('btn2');

const authUser = {
  email2: {
    value: '',
    valid: false,
    checkValidation() {
      this.email2.valid = this.email2.value !== '' && /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(this.email2.value)
    }
  },
  
  pw2: {
    value: '',
    valid: false,
    checkValidation() {
      this.pw2.valid = this.pw2.value !== ''
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

      email2: this.email2.value,
      pw2: this.pw2.value
    }
  }
}

loginForm.addEventListener('input', (event) => {
  
  event.preventDefault();
  const loginValue = event.target.value;
  const loginName = event.target.name;
  authUser[loginName].value = loginValue;
  const bindedValidator2 = authUser[loginName].checkValidation.bind(authUser);
  bindedValidator2();

  // btn2.disabled = !authUser.checkFormValidation();

  handleClassAdding(event.target, authUser[loginName].valid);
})

function handleClassAdding(domNode, isValid) {

  if (!isValid) {
    domNode.classList.add(invalidClass)
  } else {
    domNode.classList.remove(invalidClass)
  }
}

btn2.addEventListener('click', (event) => {

  event.preventDefault();
  for (let i = 1; i < users.length; i++) {
  if (users[i].email.value !== authUser.email2.value) {
      alert('Пользователь не зарегистрирован!')
    } else if (users[i].email.value === authUser.email2.value && users[i].pw.value !== authUser.pw2.value) {
      alert('Пароль введён неверно!')
    } else {
      localStorage.setItem("E-mail", authUser.email2.value)
    }    
  }
})
}

import {invalidClass} from '../constants';

import {users} from '../constants';



