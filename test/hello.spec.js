describe('Hello모듈의', () => {
  describe('hello는', () => {
    it('인사 문자열을 반환한다', () => {
      expect(Hello.hello).toBe('hello.');
    })
  })
  describe('greeting함수는', () => {
    it('getName함수를 호출한다', () => {
      // const expectedStr = Hello.message;
      // const actualStr = Hello.greeting();

      // expect(actualStr).toBe(expectedStr);
      spyOn(Hello, 'getName');
      Hello.greeting();
      expect(Hello.getName).toHaveBeenCalled();
    })
  })
});