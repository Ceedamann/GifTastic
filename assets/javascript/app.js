var tvShows =['Chappelles Show','TWD','The Office','Hero Academia','This is America'];
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=2j1brct1vXBta8bqyeIKM7ERP2kia1nO"




// function to render the buttons on te page//
function renderButtons(){
    $('#buttons-view').empty();
// loop through the array 
    for (var i =0; i < tvShows.length; i++){
        // created variable to created button tag //
        var a = $('<button>');
        // add class to button tag //
        a.addClass('gif-button m-2');
        // add attribute to button tag//
        a.attr('data-name', tvShows[i]);
        //add text to button//
        a.text(tvShows[i]);
        // append buttons to id buttons-view
        $('#buttons-view').append(a);
    }
}
//on click funtion to add buttons
    $('#add-gif').on('click',function(event){
        //event to allow user to also use the enter button
        event.preventDefault();
        //variable to get text enter by user 
        var tvShow = $('#gif-search').val().trim();
        $("#gif-search").val("");
        //push show into tvshow array//
        tvShows.push(tvShow);
        renderButtons();
    })

    // on click function to created ajax req when clicking a button
$(document).on('click', '.gif-button',function(){
    console.log("hello");
    var gif = $(this).attr('data-name');
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ gif +"&api_key=2j1brct1vXBta8bqyeIKM7ERP2kia1nO&limit=10"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        // console.log(queryURL);
        console.log(response);
    
        var results = response.data;
        // loop thru results of ajax response//
        for (var a = 0; a < results.length; a++){
            // set variable to created div//
            var gifDiv =$('<div>');
            // adding class
            gifDiv.addClass('gif');
            //created variable to hold p tag for rating//
            var p = $('<p>').text("Rating: " + results[a].rating);
            // var for img tag//
            var gifImage = $('<img>');  
            gifImage.addClass('gifs')    
            // attributes to add animate and still images  //    
            gifImage.attr('src', results[a].images.fixed_height_still.url);
            gifImage.attr('data-still', results[a].images.fixed_height_still.url);
            gifImage.attr('data-animate', results[a].images.fixed_height.url);
            gifImage.attr('data-state', 'still');
            // append images to page
            gifDiv.append(p);
            gifDiv.append(gifImage);
            $('#gifsHere').prepend(gifDiv);          
        }


        
    });
});
        // on click funtion to switch src from animate to still ////
        $(document).on("click", ".gifs", function (){
            var state = $(this).attr("data-state");
            if (state === "still"){
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
            }else if (state === "animate"){
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            }
        });

    renderButtons();
