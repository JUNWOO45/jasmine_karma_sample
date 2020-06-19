describe('Hello모듈의', () => {
  describe('hello는', () => {
    it('인사 문자열을 반환한다', () => {
      expect(Hello.hello).toBe('hello.');
    });
  });

  describe('greeting함수는', () => {
    it('getName함수를 호출한다', () => {
      spyOn(Hello, 'getName');
      Hello.greeting();
      expect(Hello.getName).toHaveBeenCalled();
    });

    it('message와 값이 같아야 한다', () => {
      expect(Hello.greeting()).toBe(Hello.message)
    })
  });
});