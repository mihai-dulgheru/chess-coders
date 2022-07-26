function main () {
  const info = document.getElementById('info')
  const account = document.getElementById('account')
  const title = document.getElementById('title')

  info.addEventListener('click', () => alert('Coming soon'))
  account.addEventListener('click', () => alert('Coming soon'))
  title.addEventListener('click', () => location.reload())
}

document.addEventListener('DOMContentLoaded', main)
