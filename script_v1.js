var json = "tmp";
$("#convert").click(function(){
	json = $("#json").val();
  $("#output").val(convertToDraw(json));
});

$("#output").click(function(){
	$(this).select();
  document.execCommand("copy");
});

$('textarea').on('keyup',function(event) {
event.preventDefault();
event.stopPropagation();
});

$(".show-app-info").click(function(){
	toggleApp();
})

function toggleApp(){
	$("#app").toggle();
  $("#app-info").toggle();
}

$('[data-toggle="tooltip"]').tooltip({
	trigger: 'click',
});



alert("Hello! I am an alert box!!");

var template = `#
# <br><i style='color:gray;'>%name%</i><br><a href='%link%'>Go to taiga</a><br>
#
#
# identity: id
#
#
# namespace: csvimport-
#
#
# left:
#
#
# top:
#
#
# width: 150
#
#
# height: 100
#
#
# padding: -12
#
#
# ignore: id,image,fill,stroke
#
#
## link: url
#
#
# nodespacing: 40
#
#
# edgespacing: 40
#
#
# layout: auto
#`;



function convertToDraw(json) {
	if(!json) {
		throw "ERROR: no json provided";
	}
  json = jQuery.parseJSON(json);
  var stories = json.user_stories;
  var csv = "title,id,link";

  stories.forEach(function(x){
  	csv += "\n";
    csv += x.subject + "," + x.ref + "," + "https://taiga.internal.axoncollective.com/project/danielreaser-kalisda/us/" + x.ref;
  });

  csv = csv.replace('"','');
  csv = csv.toString().replace(/"/g, '')
return template + "\n" + csv;

}
