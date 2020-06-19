const Hello = {
  hello: 'hello.',
  message: 'hello. my name is junwoo',
  greeting() {
    return this.hello + ' ' + this.getName();
  },
  getName() {
    return 'my name is junwoo';
  }
};
