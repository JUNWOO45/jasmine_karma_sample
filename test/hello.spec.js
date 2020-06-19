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

  describe('getSimpleApiTest 함수를 호출하고', () => {
    let request;

    beforeEach(() => {
      jasmine.Ajax.install();
      Hello.getSimpleApiTest();
      request = jasmine.Ajax.requests.mostRecent();
    });

    afterEach(() => {
      jasmine.Ajax.uninstall();
    });

    it('HTTP 요청을 보낸다.', () => {
      const targetUrl = 'http://name';
      expect(request.url).toBe(targetUrl)
    })
  })

  describe('getData함수는 응답값', () => {
    const responseJSON = {
      "id": 1,
      "title": "정당의 목적이나 활동이 민주적 기본질서에 위배될 때에는 정부는 헌법재판소에 그 해산을 제소할 수 있고, 정당은 헌법재판소의 심판에 의하여 해산된다.",
      "content": "모든 국민은 인간으로서의 존엄과 가치를 가지며, 행복을 추구할 권리를 가진다. 모든 국민은 종교의 자유를 가진다. 국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다. 모든 국민은 양심의 자유를 가진다. 누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의 조력을 받을 권리를 가진다.",
      "createdAt": "2019-02-24T16:17:47.000Z",
      "updatedAt": "2019-02-24T16:17:47.000Z",
      "UserId": 1
    };

    it('id는 1이다', () => {
      return Hello.getData().then(({ id }) => {
        expect(id).toEqual(responseJSON.id);
      })
    });

    it('title값 테스트', () => {
      return Hello.getData().then(({ title }) => {
        expect(title).toEqual(responseJSON.title);
      })
    });

    it('id는 1이다', () => {
      return Hello.getData().then(({ content }) => {
        expect(content).toEqual(responseJSON.content);
      })
    });
  });

  describe('프로미스를 반환한다면', () => {
    it('해당 프로미스가 해결될 때까지 기다린다', () => {
      return Hello.getTest().then(result => {
        expect(result).toEqual({
          myName: 'junwoo'
        })
      })
    })
  })
});

describe('구현 테스트 :: ', () => {
  describe('spy 구현', () => {
    it('구현', () => {
      const foo = {
        getBar() {
          return 'bar';
        }
      };

      spyOn(foo, 'getBar');
      foo.getBar();
      expect(foo.getBar).toHaveBeenCalled();
    })
  });

  describe('stub구현', () => {
    it('구현', () => {
      const foo = {
        getBar() {
          return bar;
        }
      };

      spyOn(foo, 'getBar').and.returnValue(123123);
      var bat = foo.getBar();
      expect(bat).toEqual(123123);
    })
  });

  describe('setTimeout 구현', () => {
    let timerCallback;

    beforeEach(() => {
      timerCallback = jasmine.createSpy();
      jasmine.clock().install();
    });

    afterEach(() => {
      jasmine.clock().uninstall();
    });

    it('11..', () => {
      setTimeout(() => {
        timerCallback();
      }, 0);

      expect(timerCallback).not.toHaveBeenCalled();
    })
  })
})