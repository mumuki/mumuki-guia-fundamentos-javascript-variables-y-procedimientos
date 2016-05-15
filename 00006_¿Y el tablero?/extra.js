function funcionMisteriosa(n, m) {
  return 'w' + repeatChar('o', n) + repeatChat('w', m) + '!';
}

function repeatChar(c, n) {
  return new Array(n).fill(c).join('');
}