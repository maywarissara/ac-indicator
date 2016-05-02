var AI = {
  show: function(style){
  	var styleTest = style;
  	if (styleTest === "apple") {
    var mu = "<div class='fadeBox'> <div class='apple'> </div> </div>";
   } else if (styleTest === "circle") {
    var mu = "<div class='fadeBox'> <div class='circle'> </div> </div>";
	 } else {
    var mu = "<div class='fadeBox'> <div class='spinner'> </div> </div>";
  }
    document.body.innerHTML += mu;
  },
  hide: function(){
    $(".fadeBox").remove();
  }
}
