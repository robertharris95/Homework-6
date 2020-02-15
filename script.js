// Global Variables
var searchBtn = $(".searchBtn")
var newLocation = $(".newLocation")

// on clicking the search button 
searchBtn.on("click", function(e){
    e.preventDefault()
    // create a new button 
    var cityButton = $("<button>")
    // button text becomes search query 
    cityButton.text($("#searchBar").val());
    // give button class of citybutton 
    cityButton.addClass("citybutton btn btn-primary col align-self-end border border-white")
    //append citybutton to searchbar
    newLocation.append(cityButton);
});


$(".citybutton").on("click",function(e){
    e.preventDefault();
    var city = this.text
    var queryurlCurrent = "api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=2d91d7d9be19dd3bb1c0b154fb2ca123"
    var queryurl5Day = "api.openweathermap.org/data/2.5/forecast?q="+ city + "&appid=2d91d7d9be19dd3bb1c0b154fb2ca123"
    
    // search the api for the info we need for current day 
    $.ajax({
        url: queryurlCurrent,
        method: "GET"
    }).then(function(e){
    // then 
    console.log(response)
    //create new row for card
    // create a card 
    // create a h4 tag 
        // display the location and current date in the h4
        // create img tag for the Symbol
            //populate symbol with appropriate weather image based on data
            // append image into h4
    //create a p tag for temp
        //fill text with temp data
    //create a p tag for humidity
        //fill text with humidity data
    //create a p tag for wind speed
        //fill text with wind speed data
    //create a p tag for UV index  
        //fill text with UV index data
    //append h4 tag to card
    //append temp tag to card
    //append humid tag to card
    //append wind tag to card
    //append UV tag to card
    //append card to new row

})

    // search the api for the info we need for 5 day 
    $.ajax({
        url: queryurl5Day,
        method: "GET"
    }).then({

    // then 

    // create second row for 5 day forecast

    //create 5 day forecast h4
        //h4 text is 5 Day Forecast
    //append h4 to row 

    // create div for day 1
        // create day 1 card 
            // populate card with content 
                // p of that day's date
                // img of the weather symbol
                // p of temp
                // p of humidity
            // append date to card
            // append img to card
            // append temp to card
            // append humidity to card
        // append card to div
        // append div to row 

    // create div for day 2
        // create day 2 card 
            // populate card with content 
                // p of that day's date
                // img of the weather symbol
                // p of temp
                // p of humidity
            // append date to card
            // append img to card
            // append temp to card
            // append humidity to card
        // append card to div
        // append div to row

    // create div for day 3
        // create day 3 card 
            // populate card with content 
                // p of that day's date
                // img of the weather symbol
                // p of temp
                // p of humidity
            // append date to card
            // append img to card
            // append temp to card
            // append humidity to card
        // append card to div
        // append div to row 

    // create div for day 4
        // create day 4 card 
            // populate card with content 
                // p of that day's date
                // img of the weather symbol
                // p of temp
                // p of humidity
            // append date to card
            // append img to card
            // append temp to card
            // append humidity to card
        // append card to div
        // append div to row 

    // create div for day 5
        // create day 5 card 
            // populate card with content 
                // p of that day's date
                // img of the weather symbol
                // p of temp
                // p of humidity
            // append date to card
            // append img to card
            // append temp to card
            // append humidity to card  
        // append card to div
        // append div to row 


    
    // append row 1 to newLocation div 
    // append row 2 to newLocation div 

    })
});