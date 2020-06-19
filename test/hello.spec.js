describe('Hello', () => {
  describe('greeting', () => {
    it('인사를 한다.', () => {
      const expectedStr = Hello.message;
      const actualStr = Hello.greeting();

      expect(actualStr).toBe(expectedStr);
    })
  })
});