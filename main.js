fetch(`https://e926.net/posts.json?tags=user:GDPS2point2&limit=5`)
  .then(response => {
    if (!response.ok) {
      throw new Error('oh no.');
    }
    return response.json();
  })
  .then(data => {
    const container = document.getElementById('latest-post');
    for (let i = 0; i < data.posts.length; i++) {
      const img = document.createElement('img');
      img.src = data.posts[i].file.url;
      img.classList.add('gallery');
      img.addEventListener('load', () => img.classList.add('loaded'));
      container.appendChild(img);
    }
  })
  .catch(error => {
    const container = document.getElementById('latest-post');
    const text = document.createElement('p');
    text.innerText = "Whoops!, looks like e621 is down";
    container.appendChild(text);
  });

function joke() {
  const speechBubble = document.getElementById('joke');
  if (speechBubble.classList.contains('visible')) {
    speechBubble.classList.remove('visible');
    speechBubble.innerText = "";
    return;
  }

  fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious,political,racist,sexist')
    .then(response => response.json())
    .then(data => {
      if (data.joke) {
        speechBubble.innerText = data.joke;
      } else {
        speechBubble.innerText = data.setup + "\n" + data.delivery;
      }
      
      const textLength = speechBubble.innerText.length;
      switch (true) {
        case (textLength > 95):
          speechBubble.style.fontSize = '18px';
          break;
        case (textLength > 40):
          speechBubble.style.fontSize = '22px';
      }
      
      speechBubble.classList.add('visible');
      
      document.addEventListener('click', function(event) {
        if (!speechBubble.contains(event.target)) {
          speechBubble.classList.remove('visible');
          speechBubble.innerText = "";
        }
      });
    });
}

function openPopup() {
  document.getElementById("creditsp").style.display = "block";
}
function closePopup() {
  document.getElementById("creditsp").style.display = "none";
}
