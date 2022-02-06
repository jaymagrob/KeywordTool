/* eslint-disable no-useless-escape */
import Google from "./Google";

describe("Google", () => {
  const keyword = "keyword";
  const country = "country";
  const instance = new Google(keyword, country);
  describe("keyword", () => {
    it('should return "keyword"', () => {
      expect(instance.keyword).toBe(keyword);
    });
  });
  describe("url", () => {
    it("should return string", () => {
      expect(instance.url("QUERY")).toBe(
        "https://www.google.com/complete/search?q=QUERY&cp=&client=gws-wiz&xssi=t&hl=en&authuser=&psi=&dpr="
      );
    });
  });
  describe("headers", () => {
    it("should return object with cookie key", () => {
      expect(instance.headers).toEqual({
        cookie: expect.any(String),
      });
    });
  });
  describe("formatter", () => {
    const parameter = `)]}'
[[["test",0,[512,433]],["test\u003cb\u003eed\u003c\/b\u003e",0,[512]],["test\u003cb\u003eosterone\u003c\/b\u003e",0,[512,433]],["test\u003cb\u003e and protect\u003c\/b\u003e",0,[512]],["testing for all",46,[512,433,199,465],{"zh":"Testing for All","zi":"","zp":{"gs_ssp":"eJzj4tVP1zc0zCiqSEsySspSYDRgdGDw4i9JLS7JzEtXSMsvUkjMyQEAwaMLAA"},"zs":"https://encrypted-tbn0.gstatic.com/images?q\u003dtbn:ANd9GcTKFXxQ0J9_sigicA5aB6i2Bskq_-OOjmsgGBgwJ3-o\u0026s\u003d10"}],["test\u003cb\u003eed edinburgh\u003c\/b\u003e",0,[512]],["test\u003cb\u003e internet speed\u003c\/b\u003e",0,[512,433]],["test\u003cb\u003e my internet speed\u003c\/b\u003e",0,[512]],["test\u003cb\u003eing for schools\u003c\/b\u003e",0,[512]],["test\u003cb\u003ebase\u003c\/b\u003e",0,[433,131]]],{"q":"4uyqbcMC9AblGESO7jiH3-y2QD0"}]`;
    it("should return parameter", () => {
      expect(instance.formatter(parameter as never)).toEqual([
        "test",
        "tested",
        "testosterone",
        "test and protect",
        "testing for all",
        "tested edinburgh",
        "test internet speed",
        "test my internet speed",
        "testing for schools",
        "testbase",
      ]);
    });
  });
});
