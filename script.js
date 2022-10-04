const checkbox = document.querySelector('#toggle');
const monthly = document.querySelectorAll('.price-monthly');
const anually = document.querySelectorAll('.price-anually');

checkbox.addEventListener('change', function(){
  if(checkbox.checked){
    anually.forEach(price => price.style.display = 'none');
    monthly.forEach(price => price.style.display = 'flex');
  } else {
    anually.forEach(price => price.style.display = 'flex');
    monthly.forEach(price => price.style.display = 'none');
  }
})