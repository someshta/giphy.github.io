//User will search for a certain type of gif
var giphys = ["Airplanes", "Avatar the Last Airbender", "Drake", "Michael Jordan", "Beer", "Dwight Schrute", "Scooby Doo"];

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



$.ajax ({
	url: queryURL,
	method: 'GET',
}).then(function(result) {
	console.log(result);

	var results = result.data;

	for (var gifResults = 0; gifResults < results.length; gifResults++) {

		console.log(results[gifResults]);

		var gifStill = results[gifResults].images["480w_still"].url;
		var gifAnimate = results[gifResults].images.downsized.url;

		$("#gifBox").append("<img src='" + gifAnimate + "'>");
	}



})

// $("#gifBox").prepend(results.response);
}




$("body").on('click', ".buttons", getGiphys);