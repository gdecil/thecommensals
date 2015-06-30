var appendData =function(data){
  $("#container").append(data);
}

$(document).ready(function(){ 
  var ricetta = window.location.href.split('&')[0].split('=')[1];
  if(ricetta==undefined){
    return
  }
//  alert(ricetta)
  if(ricetta=="capesante"){
    $.get("../app/partials/ricette/navbar.html", null, function(data) {
        $("#container").append(data);
    }, "html");
    $.get("app/partials/ricette/2.html", null, function(data) {
        $("#container").append(data);
    }, "html");
  }
  else if(ricetta=="cheesecake"){
    $.get("../app/partials/ricette/navbar.html", null, function(data) {
        $("#container").append(data);
    }, "html");
    $.get("app/partials/ricette/1.html", null, function(data) {
        $("#container").append(data);
    }, "html");
  }
  else {
    $("#list").html("")
    html = html + "<h1>Il tuo menù è pronto</h1>"
    $.each($.session.get('cartNomi').split(','), function( index, value ) {
      html = html + '<li><a ng-click="scrollTo(\'' + value + '\')">'+ value +'</a></li>'
    });
    html = html + "</ul>"
    $("#list").append(html)

    $.get("../app/partials/ricette/navbar.html", function(data){ 
      $(data).appendTo("#containerNav");
    });
//    $("#container").load("../app/partials/ricette/navbar.html");
    var html="<ul>"
    $.each(ricetta.split(','), function( index, value ) {
      if(value!="")
      {
        $.get("app/partials/ricette/" + value + ".html", function(data){ 
          $(data).appendTo("#container");
        });
      }
    });
  }
});

