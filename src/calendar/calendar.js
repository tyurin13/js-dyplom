import {ROOT_NODE} from '../constants';
import './calendStyle.scss';

const template = `<div class="container">
<div class="calendar">
  <div class="month">
    <i class="fas fa-angle-left prev"></i>
    <div class="date">
      <h1></h1>
      <p></p>
    </div>
    <i class="fas fa-angle-right next"></i>
  </div>
  <div class="weekdays">
    <div>Пн</div>
    <div>Вт</div>
    <div>Ср</div>
    <div>Чт</div>
    <div>Пт</div>
    <div>Сб</div>
    <div>Вс</div>
  </div>
  <div class="days">

  </div>
</div>
</div>
`;

export function initCalendar() {
  
  ROOT_NODE.innerHTML = template;
  const date = new Date();

  const renderCalendar = () => {
    
    date.setDate(1);
  
    const monthDays = document.querySelector('.days')
    
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    
    const firstDayIndex = date.getDay();
    
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    
    const nextDays = 7 - lastDayIndex;
    
    const months = [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ];
    
    document.querySelector('.date h1').innerHTML = months[date.getMonth()];
    document.querySelector('.date p').innerHTML = new Date().toDateString();
    
    let days = "";
    
    for (let x = firstDayIndex; x > 1; x--) {
      days += `<div class="prev-date">${prevLastDay - x + 1}</div>`
    }
    
    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
          days += `<div class="today">${i}</div>`
        } else {
          days += `<div>${i}</div>`
        }
    }
    
    for (let j = 1; j <= nextDays; j++) {
      days += `<div class="next-date">${j}</div>`;
      monthDays.innerHTML = days;
    }
  }
  
  document.querySelector('.prev').addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
  })
  
  document.querySelector('.next').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar()
  })
  
  renderCalendar();
}

