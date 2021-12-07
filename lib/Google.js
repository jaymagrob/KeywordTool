const GetBase = require('./GetBase');
const Helpers = require('./Helpers');

/* // TODO
 - Replace url with http://suggestqueries.google.com/complete/search?&output=toolbar&hl=LANG&q=EXAMPLE_QUERY&gl=COUNTRY_CODE
 - Add country codes
*/

class GetGoogle extends GetBase {
  constructor() {
    super();

    this.url = (query) => `https://www.google.com/complete/search?q=${query}&cp=&client=gws-wiz&xssi=t&hl=en&authuser=&psi=&dpr=`;
    this.headers = {
      // cookie: '; NID=223=hTg1HTp-K2jqrJRKfzuaQ5_hjir2ApnNrbO5IwHIXVbNO7VndsqVmLNTVgE72UQLt-QepmGxw2LEGrFMhU8quuTlaQ8tqYXw2WE5FitEwNXqF69U4A5XMo7RY1OnUNpQqH6WKaNVHklw9emfQSfoB-Gt-pEGpX_uG9c1VUoHNPvNpnbGFy_BjY_pW6TWi55SUzs10hN6y4izd8D0DzLjhnDC_fb3NuR_8bqLWp7tjSvommJA7uf78iwc3tpFvjq2XCZq0oK2DS2lK3c-nshXHvIphcEjM8ADhKIUTjIthrSjiSYlkIoyEJRZ9Ff6YBdCj7QdjVn1; SIDCC=AJi4QfFjHncKr7zcbm_u9307_PSqg3FqFTuqPwL-cZtWUj-PD03NWv4d3XYodqALfm0ASJcLzFhc; __Secure-3PSIDCC=AJi4QfF52DThy7QCTIhdT28MHMxw_Vsyfab-VVx71uDLzvg083lybazJLw84-VA9mo8CrDyCDuo',
      cookie: '1P_JAR=2021-12-07-20; NID=511=Qaok5V6iBmnywKWDcTDEDyPmdM7vl8JDCTImAOkn25FveZjLS5WMUUyr74aSrHhlFOANhjMBQO5rymO8r9rCPOlZnmZdJ0G6MWOXYjxIfNrCY3x50TkC_ZBtNnWBVxzkWc9MHyzAaF7xVCAWu0AgO7nle5tsq9UR-OT0rRKo47ANhGnMzJRAgNqlL_K9c5PTEl6-Hv05Wm7JrOc89LDPQ6tHCUk79dzwaUDoKcAGq5AmfKH2qfWACQDx3qoYMpOg8rdDAkzhCzwbIK_bZ-Y3QGrI',
    };
    this.formatter = (data) => {
      const arr = JSON.parse(data.replace(/.+\n/, ''));
      if (!Array.isArray(arr)) {
        throw new Error('Data is wrong');
      }
      const dataArray = arr[0];

      if (!Array.isArray(dataArray)) {
        throw new Error('Data is wrong');
      }

      return dataArray.map((item) => Helpers.removeTags(item[0]));
    };
  }
}

module.exports = GetGoogle;
