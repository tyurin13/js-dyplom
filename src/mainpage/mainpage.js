import {ROOT_NODE} from '../constants'
import './mpStyle.scss'

export function initMainPage() {
  let template = `<div class="greeting">Добро пожаловать! Вы выполнили вход с </div>`;

  if ((window.screen.height > window.screen.availHeight) || (window.screen.width > window.screen.availWidth)) {
    template = `<div class="greeting">Добро пожаловать! Вы выполнили вход с компьютера</div>`
  } else {getDeviceType()}
  
  ROOT_NODE.innerHTML = template;
  
  function getDeviceType() {
    const size = Math.min(window.innerWidth, window.innerHeight)
    if (size > 360) {
      template = `<div class="greeting">Добро пожаловать! Вы выполнили вход с планшета</div>` 
    } else {
      template = `<div class="greeting">Добро пожаловать! Вы выполнили вход с мобильного телефона</div>`
    }
  
  }
  
  ROOT_NODE.innerHTML = template
}

