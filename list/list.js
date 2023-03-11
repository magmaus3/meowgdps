function trello() {
  fetch('https://api.trello.com/1/boards/0yEIn65R/cards')
    .then(response => response.json())
    .then(data => {
      const not = document.getElementById('not');
      const wip = document.getElementById('wip');
      const done = document.getElementById('done');
      not.innerHTML = '';
      wip.innerHTML = '';
      done.innerHTML = '';
      data.forEach(card => {
        const cardName = card.name;
        const isNOT = card.idList === '63f9cb252e9373a93c2dbba5';
        const isWIP = card.idList === '63f9cb46d4811ca511fcbb27';
        const isDONE = card.idList === '63f9d3eb8e5bda6dce9c197e';        

        if (isNOT) {
          not.innerHTML += '<div class="card"><span class="circle red"></span>' + cardName + '</div>';
        }
        if (isWIP) {
          wip.innerHTML += '<div class="card"><span class="piw"></span>' + cardName + '</div>';
        }
        if (isDONE) {
          done.innerHTML += '<div class="card"><span class="circle green"></span>' + cardName + '</div>';
        }
      });
    });
}

trello();
