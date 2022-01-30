const axios = require('axios');

class GetBase {
  constructor(keyword) {
    this.keyword = keyword;
    this.url = () => ({});
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

module.exports = GetBase;
