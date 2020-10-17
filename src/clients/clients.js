import { ROOT_NODE } from '../constants';
import './clients.scss';
import {clientsDataBase} from '../clients/clientsDataBase';

const template = `<table>
<tr>
  <th id="name">Имя</th>
  <th id="company">Компания</th>
  <th id="email">E-mail</th>
  <th id="number">Телефон</th>
  <th id="count">Баланс</th>
  <th id="btn">Удалить</th>
</tr>
</table>
<div id="empty"></div>`;

let staff = [{name: 'Alex', company: 'Google', email: 'alex@gmail.com', phone: '+375292929292', balance: 3323, isActive: false, gender: 'female'},
              {name: 'Peter', company: 'Facebook', email: 'peter@gmail.com', phone: '+375291111111', balance: 5723, isActive: true, gender: 'male'},
              {name: 'Rosa', company: 'Amazon', email: 'rosa@gmail.com', phone: '+375292222222', balance: 8343, isActive: false, gender: 'female'},
              {name: 'Britney', company: 'O2', email: 'brit@gmail.com', phone: '+375293535353', balance: 20309, isActive: true, gender: 'female'},
              {name: 'Bob', company: 'Wargaming', email: 'bob@gmail.com', phone: '+375299898989', balance: 43323, isActive: true, gender: 'male'}];

export function createClientsTable() {
  ROOT_NODE.innerHTML = template;
  clientsDataBase(staff);
  
}
