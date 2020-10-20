import { initLogin } from "./form/login";
import { initRegister } from "./form/register";
import { initForm } from "./form/form";
import {createClientsTable} from "./clients/clients";
import {initCalendar} from "./calendar/calendar";
import {initMainPage} from "./mainpage/mainpage"

export const initRouter =() => {
  window.addEventListener('hashchange', () =>{
    if (window.location.hash === "#/clients") {protector(createClientsTable)}
    else if (window.location.hash === "#/form") {initForm(); initLogin(); initRegister()}
    else if (window.location.hash === "#/calendar") {protector(initCalendar)}
    else if (window.location.hash === "#/mainpage") {protector(initMainPage)}
  }
)}

export const protector = (initFn) => {
  const user = {};
  if (user) {initFn()}
  else {window.location.hash = "/form"}
}