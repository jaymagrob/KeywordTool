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
        "http://suggestqueries.google.com/complete/search?output=firefox&gl=country&q=QUERY"
      );
    });
  });
  describe("headers", () => {
    it("should return object with cookie key", () => {
      expect(instance.headers).toEqual({
        "user-agent": expect.any(String),
      });
    });
  });
  describe("formatter", () => {
    it("should throw error when not array", () => {
      expect.assertions(1);
      try {
        instance.formatter({});
      } catch (e) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(e).toEqual(new Error("Data is wrong"));
      }
    });

    it("should throw error when second item is not array", () => {
      expect.assertions(1);
      try {
        instance.formatter([1, 2]);
      } catch (e) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(e).toEqual(new Error("Data is wrong"));
      }
    });

    it("should return array", () => {
      expect.assertions(1);
      const arr = [1, 2, 3, 4, 5];
      expect(instance.formatter([1, arr])).toEqual(arr);
    });
  });
});
