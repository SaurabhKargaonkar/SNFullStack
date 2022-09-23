var request= require('request')
var APIurl= 'http://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=cc36edf3233e4ab0c952d0dd311896a3&units=metric'


request({
    url :APIurl,
    json:true
},function(error,response,body) {
    if(error){
        console.log('unable to get weather');
        
    }else{
        console.log('its ' +body.main.temp + " " + body.name);
        
    }
})