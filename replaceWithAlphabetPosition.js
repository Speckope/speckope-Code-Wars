function alphabetPosition(text) {
  text = text.toLowerCase().split('');
  const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
  text = text.filter((el) => alpha.includes(el));
  function letterNum(letter) {
    if (alpha.indexOf(letter) >= 0) return alpha.indexOf(letter) + 1;
  }
  text = text.map(letterNum(el));
  return text;
}

//SWEET <3
