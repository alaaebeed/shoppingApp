const axios = require('axios') ;

/**
 * Auther : Alaa Ebeed 
 * Date : 20/06/2022
 * Further Work : this class violate single responsibility principle
 * (SOLID princ) cause it get weather and activity at the same time as well the 
 * abstract level of the function should much smaller but once it small task we will leave it
 * like this for now
 */

module.exports = {

   getWeather: async (ctx) => {
    
    //get lat&long params from URL
    const { lat, lon } = ctx.request.query;

    //Call weather API to get Weather Data
    const weatherData = await axios.get(
      process.env.weatherAPI+"?lat=" +lat +"&lon="+lon +"&appid="+process.env.WeatherAPIAppid
    );

    //Get Something to do 
    const getActivity = await axios.get( process.env.ActivityApi);

    //Assign data to VM 
    const responseVM = {}
    responseVM.isItRain = weatherData.data.weather[0].main.valueOf().toLowerCase() == new String("rain").valueOf();
    responseVM.description = weatherData.data.weather[0].description ;
    responseVM.somThingToDo =   getActivity.data.activity ;

  return responseVM ;

   }
};
