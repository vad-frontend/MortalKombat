const $divArenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');
let isGameOver = false;

const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['gun'],
    attack: function () {
        console.log(this.name + ' fight...')
    }
}

const player2 = {
    player: 2,
    name: 'Sub-zero',
    hp: 90,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['gun'],
    attack: function () {
        console.log(this.name + ' fight...')
    }
}

function createElement(tagName, className) {
    const $el = document.createElement(tagName)

    if (className) $el.classList.add(className);

    return $el;
}

function createPlayer(playerObject) {
    const $divPlayer = createElement('div', `player${playerObject.player}`),
        $divProgressBar = createElement('div', 'progressbar'),
        $divLife = createElement('div', 'life'),
        $divName = createElement('div', 'name'),
        $divCharacter = createElement('div', 'character'),
        $img = createElement('img');

    $divLife.style.width = `${playerObject.hp}%`;
    $divName.innerText = playerObject.name;
    $img.src = playerObject.img;

    $divCharacter.appendChild($img);
    $divProgressBar.appendChild($divLife);
    $divProgressBar.appendChild($divName);
    $divPlayer.appendChild($divProgressBar);
    $divPlayer.appendChild($divCharacter);
    return $divPlayer;
}

function gameOver(player) {
    $divArenas.appendChild(playerLose(player))
    isGameOver = true;
    $randomButton.disabled = true;
}

function changeHP(player) {
    if (isGameOver) return;
    const $playerLife = document.querySelector(`.player${player.player} .life`);
    const damage = Math.ceil(Math.random() * 10);
    player.hp = player.hp <= 0 ? 0 : player.hp -= damage;
    $playerLife.style.width = `${player.hp}%`;

    if (player.hp === 0) gameOver(player);
}

function playerLose(player) {
    const whoWin = player.player === 1 ? player2 : player1;
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = `${whoWin.name} win`;

    return $loseTitle;
}

$randomButton.addEventListener('click', function () {
    const whoAttack = Math.random() > 0.5 ? player1 : player2;
    changeHP(whoAttack);
})

$divArenas.appendChild(createPlayer(player1));
$divArenas.appendChild(createPlayer(player2));
