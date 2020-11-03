const { getGoogleData } = require('./lib/getGoogleData.js')

async function getStuff() {
  const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", 'z', 0,1,2,3,4,5,6,7,8,9]

  let results = []
  for(const item of alpha) {
    const r = await getGoogleData(item)
    results.push({
      [item]: r[0][0],
    })
  }
  return results
}

getStuff().then(i => console.log('here', i))
