const player1 = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['gun'],
    attack: function () {
        console.log(this.name + ' fight...')
    }
}

const player2 = {
    name: 'Sub-zero',
    hp: 90,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['gun'],
    attack: function () {
        console.log(this.name + ' fight...')
    }
}
const $divArenas = document.querySelector('.arenas');
function createPlayer(playerClass, playerObject) {
    const $divPlayer = document.createElement('div'),
        $divProgressBar = document.createElement('div'),
        $divLife = document.createElement('div'),
        $divName = document.createElement('div'),
        $divCharacter = document.createElement('div'),
        $img = document.createElement('img');

    $divPlayer.classList.add(playerClass);
    $divProgressBar.classList.add('progressbar');
    $divLife.classList.add('life');
    $divName.classList.add('name');
    $divCharacter.classList.add('character')

    $divLife.style.width = `${playerObject.hp}%`;
    $divName.innerText = playerObject.name;
    $img.src = playerObject.img;

    $divCharacter.appendChild($img);
    $divProgressBar.appendChild($divLife);
    $divProgressBar.appendChild($divName);
    $divPlayer.appendChild($divProgressBar);
    $divPlayer.appendChild($divCharacter);
    $divArenas.appendChild($divPlayer);
}

createPlayer('player1', player1);
createPlayer('player2', player2);
