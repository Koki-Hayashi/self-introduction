const isProd = process.env.NODE_ENV === 'production';

const config = {
  endpoints: {
	host: (isProd) ? "https://self-introduction-front.herokuapp.com" : "http://localhost:3000",
	url_base: '/api',
	fetchTitle: {
	  method: 'get',
	  path: '/title'
	},
	saveTitle: {
	  method: 'post',
	  path: '/title'
	}
  },
  devTool: isProd

};

module.exports = config;
