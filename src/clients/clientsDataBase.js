import {staff} from './clients';

export function clientsDataBase(staff) {

  let femaleNumber = 0;
  let maleNumber = 0;
  let arrBalance = [];
  let maxBalance = 0;
  const empty = document.getElementById('empty');
  
  staff.forEach(function(element) {
    let row = document.createElement('tr');
    if (!element.isActive) {
      row.style.backgroundColor = 'grey';
    }
    empty.append(row);
  
    if (element.gender === 'female') {
      femaleNumber = femaleNumber++
    } else if (element.gender === 'male') {
      maleNumber = maleNumber++
    }
  
    let cellName = document.createElement('td');
    cellName.innerText = element.name;
    row.append(cellName);
  
  
    let cellCompany = document.createElement('td');
    cellCompany.innerText = element.company;
    row.append(cellCompany);
  
    let cellEmail = document.createElement('td');
    cellEmail.innerText = element.email;
    row.append(cellEmail);
  
    let cellPhone = document.createElement('td');
    cellPhone.innerText = element.phone;
    row.append(cellPhone);
  
    let cellBalance = document.createElement('td');
    cellBalance.innerText = element.balance;
    row.append(cellBalance);
    arrBalance.push(element.balance);
      
    let cellDelete = document.createElement('td');
    row.append(cellDelete);
    const cellBtn = document.createElement('button');
    cellBtn.innerText = 'Удалить';
    cellDelete.append(cellBtn);
  
    cellBtn.addEventListener('click', (event) => {
  
      row.remove();
      let newStaff = staff.splice(staff.indexOf(this) - staff.length, 1);
    })
  })
  
  const genderNumbers = document.createElement('div');
  genderNumbers.innerText = `В базе данных сотрудников ${femaleNumber} мужчин и ${maleNumber} женщин`;
  empty.prepend(genderNumbers);
  
  arrBalance.forEach(function(sum) {
    if (sum > maxBalance) {
      maxBalance = sum
    }
  })
  
  const maxBalanceBlock = document.createElement('div');
  maxBalanceBlock.innerText = `Максимальный баланс среди пользователей составляет ${maxBalance} доллара`;
  genderNumbers.append(maxBalanceBlock)
  }