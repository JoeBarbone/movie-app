var formSubmitEl = document.querySelector("#input-form");


var formHandler = function(event) {
    event.preventDefault();

    getMovie();
}



var getMovie = function() {
    var requestUrl = 'https://www.omdbapi.com/?apikey=94f7ec29&t='
    var mt = document.getElementById("movie-title").value;
    requestUrl = requestUrl + mt;


    fetch(requestUrl)
        .then(function(response) {
        
        
        return response.json();
        
    })

    .then(function(data) {
            console.log(data);
            //console.log("data.error: " + data.Response);
            // if (data.Response === "False") {
                // document.getElementById("movie-info").textContent = mt + " not found";
            // } else {
                
            

            
            
            document.getElementById("title").innerHTML = data.Title;
            document.getElementById("year").innerHTML = data.Year;
            document.getElementById("rating").innerHTML = data.Rated;
            document.getElementById("actors").innerHTML = data.Actors;
            document.getElementById("poster").innerHTML = "<img class='img-fluid' src='" + data.Poster + "' />";
            document.getElementById("plot").innerHTML = data.Plot;

            document.getElementById("movie-info").style.display = "none";

            document.getElementById("movie-title").value = "";
            document.getElementById("movie-title").focus();
            // }

    })
  

}


formSubmitEl.addEventListener("submit", formHandler);