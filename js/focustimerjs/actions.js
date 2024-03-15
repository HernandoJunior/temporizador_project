import state from './state.js'
import * as timer from './timer.js'
import * as element from './elements.js'
import * as audio from './sounds.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')
  timer.countDown()
  audio.buttonPressAudio.play()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  
  timer.uptadeDisplay()
  audio.buttonPressAudio.play()

}

export function set () {
  element.minutes.setAttribute('contenteditable', true)
  element.minutes.focus()
}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle('music-on')
  if(state.isMute){
    audio.bgAudio.play()
    return
  }

  audio.bgAudio.pause()
}