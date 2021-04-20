document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('ul').addEventListener('click', function(e) {
    e.target.classList.toggle('checked')
  })

  document.tgetElemenById('close').addEventListener('click', function(e) {
    e.target.remove('li')
  })




})
