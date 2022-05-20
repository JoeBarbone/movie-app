var btnSubmitEl = document.querySelector("#submit");

var getMovie = function() {
    var requestUrl = 'http://www.omdbapi.com/?apikey=94f7ec29&t='
    var mt = document.getElementById("movie-title").value;
    requestUrl = requestUrl + mt;


    fetch(requestUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
            console.log(data);
            
            document.getElementById("title").innerHTML = data.Title;
            document.getElementById("year").innerHTML = data.Year;
            document.getElementById("rating").innerHTML = data.Rated;
            document.getElementById("actors").innerHTML = data.Actors;
            document.getElementById("poster").innerHTML = "<img class='img-fluid' src='" + data.Poster + "' />";
            document.getElementById("plot").innerHTML = data.Plot;

            document.getElementById("movie-info").style.display = "none";

            document.getElementById("movie-title").value = "";
            document.getElementById("movie-title").focus();

        
    })
  

}




btnSubmitEl.addEventListener("click", getMovie);