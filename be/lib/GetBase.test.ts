import axios from "axios";
import GetBase from "./GetBase";

describe("GetBase", () => {
  const keyword = "keyword";
  const instance = new GetBase(keyword);
  describe("keyword", () => {
    it('should return "keyword"', () => {
      expect(instance.keyword).toBe(keyword);
    });
  });
  describe("url", () => {
    it("should return ''", () => {
      expect(instance.url()).toEqual("");
    });
  });
  describe("headers", () => {
    it("should return {}", () => {
      expect(instance.headers).toEqual({});
    });
  });
  describe("formatter", () => {
    it("should return parameter", () => {
      const parameter = "parameter";
      expect(instance.formatter(parameter as never)).toBe(parameter);
    });
  });
  describe("getData", () => {
    jest
      .spyOn(axios, "get")
      .mockImplementation(() => Promise.resolve({ data: "data" }));

    it("should call axios.get", async () => {
      await instance.getData("query");

      expect(axios.get).toBeCalledTimes(1);
    });
    it('should return "keyword"', async () => {
      const getData = await instance.getData("query");

      expect(getData).toEqual("data");
    });
  });
});
