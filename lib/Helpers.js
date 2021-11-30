class Helpers {
  static removeTags(str) {
    if (typeof str !== 'string') {
      return str;
    }
    return str.replace(/<\/?b>/g, '');
  }
}

module.exports = Helpers;
