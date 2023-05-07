module.exports = {
  routes: [
     {
      method: 'GET',
      path: '/v1/isitraining',
      handler: 'weather.getWeather',
      config: {
        policies: [],
        middlewares: [],
      },
     },
  ],
};
