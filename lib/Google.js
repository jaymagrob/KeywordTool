const GetBase = require('./GetBase');
const Helpers = require('./Helpers');

class GetGoogle extends GetBase {
  static url(query) {
    return `https://www.google.com/complete/search?q=${query}&cp=&client=gws-wiz&xssi=t&hl=en&authuser=&psi=&dpr=`;
  }

  static headers() {
    return {
      cookie: '1P_JAR=2021-09-10-17; NID=223=hTg1HTp-K2jqrJRKfzuaQ5_hjir2ApnNrbO5IwHIXVbNO7VndsqVmLNTVgE72UQLt-QepmGxw2LEGrFMhU8quuTlaQ8tqYXw2WE5FitEwNXqF69U4A5XMo7RY1OnUNpQqH6WKaNVHklw9emfQSfoB-Gt-pEGpX_uG9c1VUoHNPvNpnbGFy_BjY_pW6TWi55SUzs10hN6y4izd8D0DzLjhnDC_fb3NuR_8bqLWp7tjSvommJA7uf78iwc3tpFvjq2XCZq0oK2DS2lK3c-nshXHvIphcEjM8ADhKIUTjIthrSjiSYlkIoyEJRZ9Ff6YBdCj7QdjVn1; SIDCC=AJi4QfFjHncKr7zcbm_u9307_PSqg3FqFTuqPwL-cZtWUj-PD03NWv4d3XYodqALfm0ASJcLzFhc; __Secure-3PSIDCC=AJi4QfF52DThy7QCTIhdT28MHMxw_Vsyfab-VVx71uDLzvg083lybazJLw84-VA9mo8CrDyCDuo',
    };
  }

  static formatData(data) {
    const arr = JSON.parse(data.replace(/.+\n/, ''));
    if (!Array.isArray(arr)) {
      throw new Error('Data is wrong');
    }
    const dataArray = arr[0];

    if (!Array.isArray(dataArray)) {
      throw new Error('Data is wrong');
    }

    return dataArray.map((item) => Helpers.removeTags(item[0]));
  }

  static 
}

module.exports = GetGoogle;
