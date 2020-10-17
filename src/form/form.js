const template =`<div class="form">
      
<ul class="tab-group">
  <li class="tabActive"><a href="#signup" id="tabActive">Sign Up</a></li>
  <li class="tab"><a href="#login" id="tab">Log In</a></li>
</ul>

<div class="tab-content">
  <div id="signup">   
    <h1>Sign Up for Free</h1>
    
    <form name="signup" novalidate>
    
    <div class="top-row">
      <div class="field-wrap">
        <input type="text" placeholder="First Name" name="firstName"> 
      </div>
  
      <div class="field-wrap">
        <input type="text" placeholder="Last Name" name="lastName">
      </div>
    </div>

    <div class="field-wrap">
      <input type="email" placeholder="Email Adress" name="email">
    </div>
    
    <div class="field-wrap">
      <input type="password" placeholder="Set A Password" name="pw">
    </div>

    <div class="field-wrap">
      <input type="password" placeholder="Repeat Your Password" name="repeatPw">
    </div>
    
    <button type="submit" class="button button-block" id="btn">Get Started</button>
    
    </form>

  </div>
  
  <div id="login">   
    <h1>Welcome Back!</h1>
    
    <form action="/" method="post" name="login">
    
    <div class="field-wrap">
      <input type="email"required autocomplete="off" placeholder="Email Adress" name="email2">
    </div>
    
    <div class="field-wrap">
      <input type="password"required autocomplete="off" placeholder="Password" name="pw2">
    </div>
    
    <p class="forgot"><a href="#">Forgot Password?</a></p>
    
    <button class="button button-block" id="btn2">Log In</button>
    
    </form>

  </div>
  
</div>

</div> `;

import {ROOT_NODE} from '../constants'

export const initForm =() => {
ROOT_NODE.innerHTML = template;
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
}