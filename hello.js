const Hello = {
  hello: 'hello.',
  message: 'hello. my name is junwoo',
  greeting() {
    return this.hello + ' ' + this.getName();
  },
  getName() {
    return 'my name is junwoo';
  },
  getSimpleApiTest() {
    const req = new XMLHttpRequest();
    req.open('GET', 'http://name', true);
  },
  getData() {
    return fetch('https://koreanjson.com/posts/1')
    .then(response => response.json())
    .then(json => json)
  },
  getTest() {
    return new Promise(function(resolve, reject) {
      resolve({ myName: 'junwoo' });
    });
  }
};
