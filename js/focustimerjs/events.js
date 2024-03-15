import { controls } from "./elements.js";
import * as actions from './actions.js';
import * as elements from './elements.js'
import state from "./state.js";
import { uptadeDisplay } from "./timer.js";

export function registrerControls() {
  controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    
    if (typeof actions[action] != "function"){
      return
    }

    actions[action]()
  })
}

export function setMinutes() {
  elements.minutes.addEventListener('focus', () => {
    elements.minutes.textContent = ""
  })

  elements.minutes.addEventListener('keypress', (event) => {
    // Testa se o caractere digitado não é um dígito
    if (/\D/.test(event.key)) {
        event.preventDefault(); // Impede a inserção do caractere
    }
  });

  elements.minutes.addEventListener('blur', (event) => {
    let time = event.currentTarget.textContent
    //ternário IF
    time = time > 60 ? 60 : time

    state.minutes = time
    state.seconds = 0
    uptadeDisplay()
  })
  } 
