import axios from "axios";

export default class GetBase {
  url: (query?: string) => string;

  country: string;

  keyword: string;

  language: string;

  headers: object;

  formatter: (data: object) => object | Error;

  getData: (query: string) => object | Error;

  constructor(keyword, country = "us", language = "en") {
    this.keyword = keyword;
    this.country = country;
    this.language = language;
    this.url = () => "";
    this.headers = {};
    this.formatter = (i) => i;
    this.getData = async (query) => {
      try {
        const response = await axios.get(this.url(query), {
          headers: this.headers,
        });
        const { data } = response;

        return this.formatter(data);
      } catch (error) {
        throw error;
      }
    };
  }
}
