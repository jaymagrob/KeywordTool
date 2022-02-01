const GetBase = require('./GetBase');

/* // TODO
 - Add country codes
*/

class GetGoogle extends GetBase {
  constructor(keyword, country) {
    super(keyword, country);

    this.url = (query) => `http://suggestqueries.google.com/complete/search?output=firefox&gl=${this.country}&q=${encodeURI(query.trim())}`;
    this.headers = { 'user-agent': 'Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/20.0' };
    this.formatter = (data) => {
      if (!Array.isArray(data)) {
        throw new Error('Data is wrong');
      }
      const dataArray = data[1];

      if (!Array.isArray(dataArray)) {
        throw new Error('Data is wrong');
      }
      return dataArray;
    };
  }
}

module.exports = GetGoogle;
