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

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchValue + "&api_key=p18dA5Q1Xvc80bSdVEBrgSxQu6v3Rlmy&limit=10";

    teamArray.push(searchValue);
   
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {

        console.log(response);


    });

    createButtons();

});

// $(document).on("click", ".team", event);


createButtons();