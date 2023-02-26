function trello() {
  fetch('https://api.trello.com/1/boards/0yEIn65R/cards')
    .then(response => response.json())
    .then(data => {
      const cardList = document.getElementById('list');
      cardList.innerHTML = '';
      data.forEach(card => {
        const cardName = card.name;
        const hasGreenLabel = card.labels.some(label => label.color === 'green');
        const hasRedLabel = card.labels.some(label => label.color === 'red');

        if (hasGreenLabel) {
          cardList.innerHTML += '<div class="card"><span class="circle green"></span>' + cardName + '</div>';
        } else if (hasRedLabel) {
          cardList.innerHTML += '<div class="card"><span class="circle red"></span>' + cardName + '</div>';
        }
      });
    });
}

trello();
window.onload = trello;
