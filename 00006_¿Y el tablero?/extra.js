function funcionMisteriosa(n, m) {
  return 'w' + repeatChar('o', n) + repeatChar('w', m) + '!';
}

function repeatChar(c, n) {
  return new Array(n).fill(c).join('');
}