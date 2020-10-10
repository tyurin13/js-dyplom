const tabActive = document.getElementById('tabActive');
const tab = document.getElementById('tab');
const signUp = document.getElementById('signup');
const logIn = document.getElementById('login');

tab.addEventListener('click', (event) => {

  logIn.style.display = 'block';
  tab.style.backgroundColor= 'darkgreen';
  tabActive.style.background = 'rgba(211, 211, 211, .25)';
  signUp.style.display = 'none';
})

tabActive.addEventListener('click', (event) => {

  signUp.style.display = 'block';
  tab.style.backgroundColor= 'rgba(211, 211, 211, .25)';
  tabActive.style.backgroundColor = 'darkgreen';
  logIn.style.display = 'none';
})


import {initLogin} from './login.js';

const fnLogin = initLogin();

import {initRegister} from './register.js';

const fnRegister = initRegister();