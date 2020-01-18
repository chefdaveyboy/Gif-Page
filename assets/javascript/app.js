var teamArray = ["Green Bay Packers", "Chicago Bears", "Minnesota Vikings", "Detroit Lions", "New England Patriots", "Dallas Cowboys", "Miami Dolphins", "Cincinnati Bengals", "Tennesee Titans", "San Fransisco 49ers", "Kansas City Chiefs"];

function createButtons() {

    $("#favorites").empty();

    for (i = 0; i< teamArray.length; i++) {

    var teamButton = $("<button>");

    teamButton.addClass("team");

    teamButton.attr("data-team", teamArray[i]);

    teamButton.text(teamArray[i]);

    $("#favorites").append(teamButton);
    
    
    }

}

    
$("#search-button").on("click", function(event) {
    event.preventDefault();

    var searchValue = $("#search-form").val().trim();

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchValue + "&api_key=p18dA5Q1Xvc80bSdVEBrgSxQu6v3Rlmy&limit=15";
    
    
    teamArray.push(searchValue);

    $("#gif-display").empty();
   
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        console.log(response);

        
    

    var results = response.data;

    for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");
        gifDiv.addClass("gif-div");
        var ratingP = $("<p>").text("Rating: " + results[i].rating);
            if (results[i].rating === "g") {
                ratingP.css("background-color", "green");
                ratingP.css("color", "white");
            }
            else if (results[i].rating === "pg") {
                ratingP.css("background-color", "yellow");
                ratingP.css("color", "black");
            }
            else if (results[i].rating === "pg-13") {
                ratingP.css("background-color", "orange");
                ratingP.css("color", "black");
            }
            else if (results[i].rating === "r") {
                ratingP.css("background-color", "red");
                ratingP.css("color", "white");
            }
        var gifImage = $("<img>");
        gifImage.attr("src", results[i].images.fixed_height.url);
        gifDiv.append(ratingP);
        gifDiv.append(gifImage);
        $("#gif-display").prepend(gifDiv);
    }



    });
    createButtons();

});

$("#favorites").on("click", ".team", function(event) {
    event.preventDefault();

    var buttonValue = $(this).data("team");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + buttonValue + "&api_key=p18dA5Q1Xvc80bSdVEBrgSxQu6v3Rlmy&limit=15";

    $("#gif-display").empty();

    $.ajax({
        url:queryURL,
        method: "GET"
    })
    .then(function(response) {
        console.log(response);

        var results = response.data;

    for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");
        gifDiv.addClass("gif-div");
        var ratingP = $("<p>").text("Rating: " + results[i].rating);
        if (results[i].rating === "g") {
            ratingP.css("background-color", "green");
            ratingP.css("color", "white");
        }
        else if (results[i].rating === "pg") {
            ratingP.css("background-color", "yellow");
            ratingP.css("color", "black");
        }
        else if (results[i].rating === "pg-13") {
            ratingP.css("background-color", "orange");
            ratingP.css("color", "black");
        }
        else if (results[i].rating === "r") {
            ratingP.css("background-color", "red");
            ratingP.css("color", "white");
        }
        var gifImage = $("<img>");
        gifImage.attr("src", results[i].images.fixed_height.url);
        gifDiv.append(ratingP);
        gifDiv.append(gifImage);
        $("#gif-display").prepend(gifDiv);
        
        $("#gif-display").on("click", function() {
            $(src).attr(results[i].images.fixed_height.url);

        })

    }
    });


    console.log(buttonValue);
});

createButtons();
