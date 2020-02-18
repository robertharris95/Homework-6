// Global Variables
var searchBtn = $(".searchBtn");
var newLocation = $(".newLocation");
var resultsArea = $(".resultsArea")
// on clicking the search button 
searchBtn.on("click", function(e){
    e.preventDefault();
    // create a new button 
    var cityButton = $("<button>");
    // button text becomes search query 
    cityButton.text($("#searchBar").val());
    // give button class of citybutton 
    cityButton.addClass("citybutton btn btn-primary col align-self-end border border-white");
    //append citybutton to searchbar
    newLocation.append(cityButton);
});


$(".citybutton").on("click",function(event){
    event.preventDefault();
    var city = $(".citybutton").text;
    var date = moment().format("MMM Do YYYY");
    var queryurlCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=2d91d7d9be19dd3bb1c0b154fb2ca123";
    var queryurl5Day = "https://api.openweathermap.org/data/2.5/forecast?q="+ city + "&appid=2d91d7d9be19dd3bb1c0b154fb2ca123";

    // search the api for the info we need for current day 
    $.ajax({
        url: queryurlCurrent,
        method: "GET"
    }).then(function(response){
        console.log(response);
    // then 

    //create new row for card
    var newRow = $("<div>").addClass("row");
    // create a card 
    var newCard = $("<div>").addClass("card");
    // create a h4 tag 
    var title = $("<h4>");
        // display the location and current date in the h4
        title.text(city + " (" + date + ")");
        // create img tag for the Symbol
        var weathersymbol = $("<img>");
            //populate symbol with appropriate weather image based on data
                weathersymbol.attr("src", response.weather.icon);
                weathersymbol.attr("alt", "a symbol for today's weather");
            // append image into h4
            title.append(weathersymbol);
    //create a p tag for temp
    var temp = $("<p>");
        //fill text with temp data
        temp.text(((((response.main.temp)-273.15)*1.8)+32)+ " F");
    //create a p tag for humidity
    var humidity = $("<p>")
        //fill text with humidity data
        humidity.text("Humidity: " + response.main.humidity);
    //create a p tag for wind speed
    var wind = $("<p>");
        //fill text with wind speed data
        wind.text(response.wind.speed);
    //create a p tag for UV index  
    var UV = $("<p>");
    
        //fill text with UV index data
        var lon = response.city.coord.lon;
        var lat = response.city.coord.lat;
        var uvurl = "http://api.openweathermap.org/data/2.5/uvi/forecast?appid=2d91d7d9be19dd3bb1c0b154fb2ca123&lat="+lat+"&lon="+lon+"&cnt=1";
        $.ajax({
            url: uvurl,
            method:"GET"
        }).then(function(response){
            UV.text(response.value);
        })

    //append h4 tag to card
    newCard.append(title);
    //append temp tag to card
    newCard.append(temp);
    //append humid tag to card
    newCard.append(humidity);
    //append wind tag to card
    newCard.append(wind);
    //append UV tag to card
    newCard.append(UV);
    //append card to new row
    newRow.append(newCard);
});

    // search the api for the info we need for 5 day 
    $.ajax({
        url: queryurl5Day,
        method: "GET"
    }).then(function(response){
        console.log(response);        
    // then 

    // create second row for 5 day forecast
    var newRow2 = $("<div>").addClass("row"); 
    //create 5 day forecast h4
    var fiveday = $("<h4>");
        //h4 text is 5 Day Forecast
        fiveday.text("5 Day Forecast");
    //append h4 to row 
        newRow2.append(fiveday);
    // create div for day 1
    var dayone = $("<div>");
        // create day 1 card 
        var dayonecard= $("<div>").addClass("card bg-primary text-white");
            // populate card with content 
                // p of that day's date
                var dateone= $("<p>").text(moment().add(1, 'days'));
                // img of the weather symbol
                var symbolone = $("<img>").attr("src",response.weather.icon);
                weathersymbol.attr("alt", "a symbol for today's weather");
                // p of temp
                var tempone= $("<p>").text(((((list[1].main.temp)-273.15)*1.8)+32)+ " F");
                // p of humidity
                var humidone= $("<p>").text("Humidity: " + list[1].main.humidity);
            // append date to card
            dayonecard.append(dateone);
            // append img to card
            dayonecard.append(symbolone);
            // append temp to card
            dayonecard.append(tempone);
            // append humidity to card
            dayonecard.append(humidone);
        // append card to div
        dayone.append(dayonecard);
        // append div to row 
        newRow2.append(dayone);

    // create div for day 2
    var daytwo = $("<div>");
        // create day 2 card 
        var daytwocard= $("<div>").addClass("card bg-primary text-white");
            // populate card with content 
              // p of that day's date
              var datetwo= $("<p>").text(moment().add(2, 'days'));
              // img of the weather symbol
              var symboltwo = $("<img>").attr("src",response.weather.icon);
              weathersymbol.attr("alt", "a symbol for today's weather");
              // p of temp
              var temptwo= $("<p>").text(((((list[2].main.temp)-273.15)*1.8)+32)+ " F");
              // p of humidity
              var humidtwo= $("<p>").text("Humidity: " + list[2].main.humidity);
          // append date to card
          daytwocard.append(datetwo);
          // append img to card
          daytwocard.append(symboltwo);
          // append temp to card
          daytwocard.append(temptwo);
          // append humidity to card
          daytwocard.append(humidtwo);
        // append card to div
        daytwo.append(daytwocard);
        // append div to row
        newRow2.append(daytwo);

    // create div for day 3
    var daythree = $("<div>");
        // create day 3 card 
        var daythreecard= $("<div>").addClass("card bg-primary text-white");
            // populate card with content 
                // p of that day's date
                var datethree= $("<p>").text(moment().add(3, 'days'));
                // img of the weather symbol
                var symbolthree = $("<img>").attr("src",response.weather.icon);
                weathersymbol.attr("alt", "a symbol for today's weather");
                // p of temp
                var tempthree= $("<p>").text(((((list[3].main.temp)-273.15)*1.8)+32)+ " F");
                // p of humidity
                var humidthree= $("<p>").text("Humidity: " + list[3].main.humidity);
            // append date to card
            daythreecard.append(datethree);
            // append img to card
            daythreecard.append(symbolthree);
            // append temp to card
            daythreecard.append(tempthree);
            // append humidity to card
            daythreecard.append(humidthree);
        // append card to div
        daythree.append(daythreecard);
        // append div to row 
        newRow2.append(daythree);

    // create div for day 4
    var dayfour = $("<div>");
        // create day 4 card 
        var dayfourcard= $("<div>").addClass("card bg-primary text-white");
            // populate card with content 
                // p of that day's date
                var datefour= $("<p>").text(moment().add(4, 'days'));
                // img of the weather symbol
                var symbolfour = $("<img>").attr("src",response.weather.icon);
                weathersymbol.attr("alt", "a symbol for today's weather");
                // p of temp
                var tempfour= $("<p>").text(((((list[4].main.temp)-273.15)*1.8)+32)+ " F");
                // p of humidity
                var humidfour= $("<p>").text("Humidity: " + list[4].main.humidity);
            // append date to card
            dayfourcard.append(datefour);
            // append img to card
            dayfourcard.append(symbolfour);
            // append temp to card
            dayfourcard.append(tempfour);
            // append humidity to card
            dayfourcard.append(humidfour);
        // append card to div
        dayfour.append(dayfourcard);
        // append div to row 
        newRow2.append(dayfour);

    // create div for day 5
    var dayfive = $("<div>");
        // create day 5 card 
        var dayfivecard= $("<div>").addClass("card bg-primary text-white");
            // populate card with content 
                // p of that day's date
                var datefive= $("<p>").text(moment().add(5, 'days'));
                // img of the weather symbol
                var symbolfive = $("<img>").attr("src" ,response.weather.icon);
                weathersymbol.attr("alt", "a symbol for today's weather");
                // p of temp
                var tempfive= $("<p>").text(((((list[5].main.temp)-273.15)*1.8)+32)+ " F");
                // p of humidity
                var humidfive= $("<p>").text("Humidity: " + list[5].main.humidity);
            // append date to card
            dayfivecard.append(datefive);
            // append img to card
            dayfivecard.append(symbolfive);
            // append temp to card
            dayfivecard.append(tempfive);
            // append humidity to card
            dayfivecard.append(humidfive); 
        // append card to div
        dayfive.append(dayfivecard);
        // append div to row 
        newRow2.append(dayfive);

    // append row 1 to resultsArea div 
    resultsArea.append(newRow);
    // append row 2 to resultsArea div 
    resultsArea.append(newRow2);
    });
});