const axios = require('axios');

class GetBase {
  static async getBaseData(query, url, headers, formatter) {
    try {
      const response = await axios.get(url(query), {
        headers: headers(),
      });
      const { data } = response;

      return formatter(data);
    } catch (error) {
      return (error);
    }
  }
}

module.exports = GetBase;
