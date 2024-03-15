let darkMode = true

const buttonToggle = document.getElementById('toggleMode')

buttonToggle.addEventListener('click', (event) => {
  document.documentElement.classList.toggle('light')

  // IF
  const mode = darkMode ? 'light' : 'dark'

  event.currentTarget.querySelector('span').textContent = `${mode} mode ativado`

  darkMode = !darkMode
})