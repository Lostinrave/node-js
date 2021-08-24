const request = require('postman-request');


const forecast=(place, callback)=>{

    const url='https://api.meteo.lt/v1/places/'+place+'/forecasts/long-term';

    request({url:url}, (error, response)=>{
        const data=response.body;
        const weather=JSON.parse(data);
        // console.log(weather.place.name);
        let fc=[];
        weather.forecastTimestamps.forEach((d)=>{
            fc.push({
                time:d.forecastTimeUtc,
                temp:d.airTemperature
            });

        });
        callback(fc);
    });
};

module.exports=forecast;