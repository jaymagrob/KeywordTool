class Words {
  static async getWords(word, promise) {
    const alphaAfter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // const questionsBefore = ['when', 'will', 'what', 'how', 'where', 'why', 'are', 'who', 'which', 'can'];
    // const prepositionsAfter = ['can', 'for', 'to', 'near', 'is', 'without', 'with'];
    // const comparisonsAfter = ['like', 'or', 'versus', 'vs', 'and'];
    // const priceBefore = ['cheapest', 'cheap', 'best'];
    // const topBefore = ['top 10', 'top 5', 'top 3', 'top'];

    // const obj = {};

    const promises = alphaAfter.map(async (i) => {
      const data = await promise(`${word} ${i}`);
      return data;
    });

    const data = await Promise.all(promises);

    console.log('herea', data);
  }
}

module.exports = Words;
