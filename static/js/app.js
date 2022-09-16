function onPageLoad(){
    console.log("document loaded");
    var url = "http://127.0.0.1:5000/get_movie_names";
    $.get(url,function(data,status){
        console.log("got response from get_movie_names request");
        if(data){
            var movies = data;
            var selected_movie = document.getElementById("selected_movie");
            $('#selected_movie').empty();
            for(var i in data){
                var opt = new Option(data[i]);
                $('#selected_movie').append(opt);
            }
        }
    });
    }

    window.onload = onPageLoad;
