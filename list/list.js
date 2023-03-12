function trello() {
  fetch('https://api.trello.com/1/boards/0yEIn65R/cards')
    .then(response => response.json())
    .then(data => {
      const not = document.getElementById('not');
      const wip = document.getElementById('wip');
      const done = document.getElementById('done');
      const extranot = document.getElementById('extranot');
      const extradone = document.getElementById('extradone');
      const levelnot = document.getElementById('levelnot');
      const leveldone = document.getElementById('leveldone');
      not.innerHTML = '';
      wip.innerHTML = '';
      done.innerHTML = '';
      extranot.innerHTML = '';
      extradone.innerHTML = '';
      levelnot.innerHTML = '';
      leveldone.innerHTML = '';
      data.forEach(card => {
        const cardName = card.name;
        const isNOT = card.idList === '63f9cb252e9373a93c2dbba5';
        const isWIP = card.idList === '63f9cb46d4811ca511fcbb27';
        const isDONE = card.idList === '63f9d3eb8e5bda6dce9c197e';        
        const isExtra = card.idList === '640d2f5f3d07c4971aa16e0d';
        const isExtraDONE = card.idList === '640d30d4969094e2e2242758';
        const isLevel = card.idList === '640d2f6d65616c1a8a0143db';
        const isLevelDONE = card.idList === '640d30f31edf73176616ca0b';

        if (isNOT) {
          not.innerHTML += '<div class="card"><span class="circle red"></span>' + cardName + '</div>';
        }
        if (isWIP) {
          wip.innerHTML += '<div class="card"><span class="piw"></span>' + cardName + '</div>';
        }
        if (isDONE) {
          done.innerHTML += '<div class="card"><span class="circle green"></span>' + cardName + '</div>';
        }
        if (isExtra) {
          extranot.innerHTML += '<div class="card"><span class="circle red"></span>' + cardName + '</div>';
        }
        if (isExtraDONE) {
          extradone.innerHTML += '<div class="card"><span class="circle green"></span>' + cardName + '</div>';
        }
        if (isLevel) {
          levelnot.innerHTML += '<div class="card"><span class="circle red"></span>' + cardName + '</div>';
        }
        if (isLevelDONE) {
          leveldone.innerHTML += '<div class="card"><span class="circle green"></span>' + cardName + '</div>';
        }
      });
    });
}

trello();
