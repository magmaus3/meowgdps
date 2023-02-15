fetch(`https://e926.net/posts.json?tags=geometry_dash&limit=5`, {
  })
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('latest-post');
    for (let i = 0; i < data.posts.length; i++) {
      const img = document.createElement('img');
      img.src = data.posts[i].file.url;
      img.classList.add('gallery');
      container.appendChild(img);
    }
  })
