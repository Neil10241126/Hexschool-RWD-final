$(document).ready(function() {
  $('.burger-link').on('click', function(e) {
    e.preventDefault();
    $('.menu').toggleClass('open');
  })
  
})


const unLink = document.querySelectorAll('.unlink');
console.log(unLink);
unLink.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
  })
})
