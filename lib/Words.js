class Words {
  static async getWords(word, promise) {
    const dataAfter = [''];
    const alphaAfter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const questionsBefore = ['when', 'will', 'what', 'how', 'where', 'why', 'are', 'who', 'which', 'can'];
    const prepositionsAfter = ['can', 'for', 'to', 'near', 'is', 'without', 'with'];
    const comparisonsAfter = ['like', 'or', 'versus', 'vs', 'and'];
    const priceBefore = ['cheapest', 'cheap', 'best'];
    const topBefore = ['top 10', 'top 5', 'top 3', 'top'];

    const dataPromise = promiseLooper(dataAfter, word, promise);
    const alphaAfterPromise = promiseLooper(alphaAfter, word, promise);
    const questionsBeforePromise = promiseLooper(questionsBefore, word, promise, true);
    const prepositionsAfterPromise = promiseLooper(prepositionsAfter, word, promise, true);
    const comparisonsAfterPromise = promiseLooper(comparisonsAfter, word, promise);
    const priceBeforePromise = promiseLooper(priceBefore, word, promise, true);
    const topBeforePromise = promiseLooper(topBefore, word, promise, true);

    const dataResolve = await Promise.all(dataPromise);
    const alphaAfterResolve = await Promise.all(alphaAfterPromise);
    const questionsBeforeResolve = await Promise.all(questionsBeforePromise);
    const prepositionsAfterResolve = await Promise.all(prepositionsAfterPromise);
    const comparisonsAfterResolve = await Promise.all(comparisonsAfterPromise);
    const priceBeforeResolve = await Promise.all(priceBeforePromise);
    const topBeforeResolve = await Promise.all(topBeforePromise);

    const data = {
      data: dataResolve,
      alpha: alphaAfterResolve,
      questions: questionsBeforeResolve,
      prepositions: prepositionsAfterResolve,
      comparisons: comparisonsAfterResolve,
      price: priceBeforeResolve,
      top: topBeforeResolve,
    };

    return data;
  }
}

module.exports = Words;

function promiseLooper(array, word, promise, before = false) {
  return array.map(async (i) => ({
    key: i,
    data: await promise(`${before ? `${i} ` : ''}${word}${!before ? ` ${i}` : ''}`),
  }));
}