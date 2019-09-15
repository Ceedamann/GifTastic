var tvShows =['Chappelles Show','TWD','The Office','Hero Academia'];

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
    renderButtons();
