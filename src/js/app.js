const boardEl = document.getElementById('board');
const field = [
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', ''],
];

const elem = boardEl.children;
const face = document.createElement('img');
face.src = './images/goblin.png';

function renderBoard(board) {
  const fields = [];
  for (const [i, row] of board.entries()) {
    for (const [j, value] of row.entries()) {
      fields.push(`
          <div class="field ${value ? 'busy' : 'free'}" 
              data-row="${i}" 
              data-col="${j}"
              style="grid-row:${i + 1};grid-column:${j + 1};"
          >
            ${value || ''}
          </div>
        `);
    }
  }
  boardEl.innerHTML = fields.join('');
}

function getRandomInt(minimum, maximum) {
  const min = Math.ceil(minimum);
  const max = Math.floor(maximum);
  return Math.floor(Math.random() * (max - min)) + min;
}

renderBoard(field);

setInterval(() => {
  elem[getRandomInt(0, elem.length)].appendChild(face);
}, 1000);
