function back() {
    const container = document.getElementById('back');
    container.innerText = "You'll never escape!";
}

function femboys() {
    fetch('https://api.catboys.com/img')
    .then(response => response.json())
    .then(data => {
    const container = document.getElementById('catboy');
    const img = document.createElement('img');
    img.src = data.url;
    container.appendChild(img);
    })
}
function notfemboys() {
    const url = 'https://nekos.moe/api/v1/random/image?nsfw=false&tags=cat_ears&count=1';
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('catgirl');
        const img = document.createElement('img');
        img.src = `https://nekos.moe/image/${data.images[0].id}`;
        container.appendChild(img);
    })
    .catch(error => console.error('An error has occurred', error));
}
