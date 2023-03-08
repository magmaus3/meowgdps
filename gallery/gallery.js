fetch(`https://e926.net/posts.json?tags=user:GDPS2point2`, {})
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('latest-post');
    if (data.posts.length === 0) {
      const text = document.createElement('p');
      text.innerText = "Looks like we haven't made anything";
      container.appendChild(text);
    } else {
    for (let i = 0; i < data.posts.length; i++) {
      const post = data.posts[i];
      const img = document.createElement('img');
      const link = document.createElement('a');
      link.href = `https://e926.net/posts/${post.id}`;
      img.src = post.file.url;
      img.classList.add('gallery');
      link.appendChild(img);
      container.appendChild(link);
    }
  }
  })
