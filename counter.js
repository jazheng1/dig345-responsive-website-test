function counter() {
    const elem = document.getElementById('count');
    textContent = elem.textContent;

    var num = parseInt(textContent);
    elem.textContent = toString(num + 1);
  }