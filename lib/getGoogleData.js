const axios = require('axios')

function getGoogleData(a) {
  return new Promise(async(resolve, reject) => {
    try {
      const response = await axios.get(`https://www.google.com/complete/search?q=skateboard%20${a}&cp=14&client=psy-ab&xssi=t&gs_ri=gws-wiz&hl=en-GB&authuser=0&psi=DIiEX5aBBKuTlwTd6qFw.1602521100500&dpr=2`)
      const { data } = response
      resolve(JSON.parse(data.replace(/.+\n/,'')))
    } catch(error) {
      reject(error)
    }
  })
}

module.exports = { getGoogleData }