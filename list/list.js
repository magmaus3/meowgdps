  function meow() {
  fetch('https://api.catboys.com/img')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('catboy-image');
      const img = document.createElement('img');
      img.src = data.url;
      img.classList.add('cat');
      container.appendChild(img);
    });
    const myButton = document.getElementById('boop');
    const myHeading = document.getElementById('count');
    
    let isClicked = false;
    
    myButton.addEventListener('click', function() {
      if (isClicked) {
        myHeading.textContent = '';
      } else {
        myHeading.textContent = 'Whoops, didnt mean that to happen';
      }
      
      isClicked = !isClicked;
    });
    
}