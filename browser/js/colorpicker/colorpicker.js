var thingToChange = "color"

var changeContent = function(){
  thingToChange = "color"
}

var changeBackground =function(){
  thingToChange="background-color"
}

var changeBorder = function(){
  thingToChange = "border-color"
}

var setWallpaper = function (selectedWallpaper){
  var beforeHtml = $('#skeleton').contents().find("body").html();
  var undoHtml = "<body>\n" + beforeHtml + "</body>";

  undoArray.push(undoHtml);

  $("iframe").contents().find(".changeThis").css("background-image","url("+$(selectedWallpaper).parent().children()[0].currentSrc+")").css("background-size", "100% 100%")

}

$(document).ready(function () {

  $("#colorpicker").spectrum({
    flat:true,
    showInput:true,
    showAlpha:true,
    showPalette: true,
    palette: [],
    color: "#000",
    move:function(color){
      $("iframe").contents().find(".changeThis").css(thingToChange, color.toRgbString());
      $("iframe").contents().find(".changeThis").val(color.toRgbString())
    }
  });

  $("iframe").on('load').each(function () {
    //Using closures to capture each one
    var iframe = $(this);
    iframe.on("load", function () { //Make sure it is fully loaded
      iframe.contents().click(function (event) {
        var counter = $("iframe").contents().find(".changeThis").length;

        if(counter >= 1) {

          $("iframe").contents().find(".changeThis").css("border", "");
          $("iframe").contents().find(".ui-resizable").resizable().resizable("destroy")
          $("iframe").contents().find("*").removeClass("changeThis")
          $(event.target).addClass("changeThis").resizable();
        }

        $(event.target).addClass("changeThis").resizable();

        iframe.contents().mousedown(function(event)  {
          $(event.target).attr('draggable', 'true');
        });

        iframe.contents().mouseup(function(event)  {
          $(event.target).attr('draggable', 'false');
        });
      });

    });
  });
});
