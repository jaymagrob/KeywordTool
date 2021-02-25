const axios = require('axios');

async function getGoogleData(query, placement) {
  try {
    const response = await axios.get('https://www.google.com/complete/search?q=skateboard&cp=10&client=psy-ab&xssi=t&gs_ri=gws-wiz&hl=en-FR&authuser=0&psi=WWn7X8-vJoPClwTb4KjoDg.1610312026024&dpr=2', {
      headers: {
        cookie: 'ANID=AHWqTUmY0pYijpBYxMLwoyVmdq-MLHnYoNdC9F2XWypKg8ev3hxSNRiXWaXvr8J7; DV=E8gvBz97EtdDYDWOpqAb4t0yHCXhblfvuV7H4kDC4gUAAGChCJJvL1S2t5gEALSaaWtMca0xbiYBAA; OGPC=4061130-1:; NID=206=FOKCA_COr_8jVeKd7UoxpsygemPFbw1Oh-MvoD89MxRUYp8b5eYXyZMyQuAMEbD4ysD3mPulIukMasm0qA6VZE9b5PKXdv_EZONd0JRALSFZxLaXNYUJjtXiIAqcJeS0NUKC9Mbj8vUfB03IsEUQeLwbDV7-wFX7vfOwe_Jj8jeNOwBGr_mycA_PzsrM_tfdeaRxL6FrSJqGNmU8NfWER7Ay0a368AjdYz4cwx8PoqhAmWMzGm03lan63dGCDkWQp-PNJXfCoGzS5w',
      },
    });
    const { data } = response;
    return (JSON.parse(data.replace(/.*\n/, '')));
  } catch (error) {
    return (error);
  }
}

module.exports = { getGoogleData };
