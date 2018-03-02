//User will search for a certain type of gif
var giphys = ["Spongebob", "Avatar the Last Airbender", "Drake", "Michael Jordan", "Pizza", "Dwight Schrute", "Scooby Doo"];

//keyword searched for will produce a button, with a corresponding data-attr
function createGiphyButtons() {

    $("#giphyList").empty();


    for (var giphyIndex = 0; giphyIndex < giphys.length; giphyIndex++) {

        
        var buttons = $("<button>");

        buttons.addClass("buttons");
        buttons.attr("dataName", giphys[giphyIndex]);
        buttons.text(giphys[giphyIndex]);

        $("#giphyList").prepend(buttons);

        console.log(giphys);
    }
}

$("#submitBtn").on('click', function(event) {
    event.preventDefault();

    var addedGiphy = $("#searchGiphys").val().trim();

    giphys.push(addedGiphy);

    createGiphyButtons();

});

createGiphyButtons();


//when said button is pressed, 10 gifs will be produced
//when gif is clicked on, it animates. when clicked again, it pauses

function getGiphys(whatever) {
    var search = whatever.target.innerHTML;

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=ISuos4oHv9pcxKjOyYMqefNSwXypQrIK&q=" + search + "&limit=10&offset=0&rating=G&lang=en";

    console.log(whatever.target.innerHTML);


    var gifStill;
    var gifAnimate;

    $.ajax({
        url: queryURL,
        method: 'GET',
    }).then(function(result) {
        console.log(result);

        var results = result.data;

        for (var gifResults = 0; gifResults < results.length; gifResults++) {

            console.log(results[gifResults]);

            var gifStill = results[gifResults].images["480w_still"].url;
            var gifAnimate = results[gifResults].images.downsized.url;


            $("#gifBox").prepend("<img src='" + gifAnimate + "'>");
        }


    });

}

//here I wanted to start a function that allows the user to pause and unpause the gifs
//I know I need a temporary variable to store the animated/still gifs in, and switch them around on a click event.
// I was thinking of the bubble sort exercise we did
//I wasn't sure what parameter I would put into the if statement...
//I was able to atleast make it console log something when you click on a gif
//so I know I was off to a start, I want to revisit this part of my hw and make this work

function gifAnimation() {



    $("body").on('click', "img", function(event) {

        console.log("you clicked a gif");

        // if ()
        //     var temp = gifStill;
        // gifStill = gifAnimate;
        // gifAnimate = temp;

    });
}

gifAnimation();

$("body").on('click', ".buttons", getGiphys);