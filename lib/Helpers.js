class Helpers {
  static removeTags(str) {
    if (typeof str !== 'string') {
      return str;
    }
    return str.replace(/<\/?b>/g, '');
  }

  static formatGoogleData(data) {
    if (!Array.isArray(data)) {
      throw new Error('Data is wrong');
    }
    const dataArray = data[0];

    if (!Array.isArray(dataArray)) {
      throw new Error('Data is wrong');
    }

    return dataArray.map((item) => Helpers.removeTags(item[0]));
  }
}

module.exports = Helpers;
