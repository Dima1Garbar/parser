const request = require("request")

request('https://www.shazam.com/shazam/v2/ru/UA/web/-/tracks/world-chart-world?pageSize=200&startFrom=0', (error, response, html) => { 
    let obj_html = JSON.parse(html);
    
    for (let i = 0; i < 100; i++){
        console.log(i+1 + ": " + obj_html["chart"][i]["share"]["subject"] + ", силка: " + obj_html["chart"][i]["share"]["href"] + ", фото: " + obj_html["chart"][i]["share"]["image"]);};
    
    
})