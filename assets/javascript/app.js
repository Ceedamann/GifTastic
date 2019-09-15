var tvShows =['Chappelles Show','TWD','The Office','Hero Academia'];
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=2j1brct1vXBta8bqyeIKM7ERP2kia1nO"





function renderButtons(){
    $('#buttons-view').empty();

    for (var i =0; i < tvShows.length; i++){
        var a = $('<button>');
        a.addClass('gif-button m-2');
        a.attr('data-name', tvShows[i]);
        a.text(tvShows[i]);
        $('#buttons-view').append(a);
    }
}
    $('#add-gif').on('click',function(event){
        event.preventDefault();
        var tvShow = $('#gif-search').val().trim();
        tvShows.push(tvShow);
        renderButtons();
    })
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
        for (var a = 0; a < results.length; a++){
            var gifDiv =$('<div>');
            gifDiv.addClass('gifs');
            var p = $('<p>').text("Rating: " + results[a].rating);
            var gifImage = $('<img>');            
            gifImage.attr('src', results[a].images.fixed_height_still.url);
            gifDiv.append(p);
            gifDiv.append(gifImage);
            $('#gifsHere').prepend(gifDiv);
            
        }
        
    })
})
    renderButtons();
