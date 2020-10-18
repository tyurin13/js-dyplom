import { initLogin } from "./form/login";
import { initRegister } from "./form/register";
import { initForm } from "./form/form";
import {createClientsTable} from "./clients/clients"
import {initCalendar} from "./calendar/calendar"

export const initRouter =() => {
  window.addEventListener('hashchange', () =>{
    if (window.location.hash === "#/clients") {createClientsTable()}
    else if (window.location.hash === "#/form") {initForm(); initLogin(); initRegister()}
    else if (window.location.hash === "#/calendar") {initCalendar()}
    else if (window.location.hash === "#/start") {console.log('Hello!')}
  }
  )}