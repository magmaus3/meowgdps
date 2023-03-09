fetch(`https://e926.net/posts.json?tags=user:GDPS2point2&limit=5`, {
  })
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('latest-post');
    if (data.posts.length === 0) {
      const text = document.createElement('p');
      text.innerText = "Looks like we haven't made anything";
      container.appendChild(text);
    } else {
    for (let i = 0; i < data.posts.length; i++) {
      const img = document.createElement('img');
      img.src = data.posts[i].file.url;
      img.classList.add('gallery');
      container.appendChild(img);
    }
  }
  })
  function joke() {
    fetch ('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious,political,racist,sexist')
    .then(response => response.json())
    .then(data => {
      if (data.joke) {
      const text = document.getElementById('joke')
      text.innerText = data.joke;
      } else {
        const text = document.getElementById('joke')
        text.innerText = data.setup + "\n" + data.delivery;
      }
    })
  }
