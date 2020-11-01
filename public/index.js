$(document).ready(function() {
    $("#exibir").click(function() {
        $.getJSON("http://localhost:5000/getData", function(result){
            var data = result.data;
            var html = "";
            data.forEach(element => {
                html += "<a>Nome:</a> " + element.username + "<br><a>Idade:</a> " + element.age + "<br><br>";
            });
            $("#infos").html(html);
        });
    });
});