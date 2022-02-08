import GetBase from "./GetBase";

export default class GetGoogle extends GetBase {
  url: (query: string) => string;

  country: string;

  keyword: string;

  language: string;

  headers: object;

  formatter: (data: object) => object | Error;

  constructor(keyword: string, country: string, language: string) {
    super(keyword, country, language);

    this.url = (query: string) =>
      `http://suggestqueries.google.com/complete/search?output=firefox&hl=${
        this.language
      }&gl=${this.country}&q=${encodeURI(query.trim())}`;
    this.headers = {
      "user-agent":
        "Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0",
    };
    this.formatter = (data) => {
      if (!Array.isArray(data)) {
        throw new Error("Data is wrong");
      }
      const dataArray = data[1];

      if (!Array.isArray(dataArray)) {
        throw new Error("Data is wrong");
      }
      return dataArray;
    };
  }
}
