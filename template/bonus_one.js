// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

(function() {
	// Magic!
	console.log('Keepin\'n it clean with an external script!');
	$.getJSON("http://www.mattbowytz.com/simple_api.xml?data=all", function(data) {
		console.log(data);
	});

	$.ajax({
		url: "http://www.mattbowytz.com/simple_api.json",
		data: {
			data: "all"
		},
		method: 'GET',
	}).done(function(data) {
		console.log(data);
	});
	console.log();
})();

function find(searchText)
{
  //console.log("Search was called");
  //document.getElementById('something').innerHTML = "changed";
  if(searchText.length >= 1)
  {
  	$.ajax({
      url: "http://www.mattbowytz.com/simple_api.json",
      data: {
        data: "all"
      },
      method: 'GET',
    }).done(function(data) {
      var output = '<ul>';
      var result = [];
     $.each(data["data"]["interests"], function(key, val){
        result.push(val);
      });
      $.each(data["data"]["programming"], function(key, val){
        result.push(val);
      });
      result.sort();
      //console.log(result);
      $.each(result, function(key, val){
        if(val.search(searchText) != -1)
        {
          output+='<p><a  href=\'https://www.google.com/?gws_rd=ssl#q='+ val+'\'>'+val+'<a></p>';
        }
      });

      /*for(var thing in data["data"]["interests"]){
        output+= '<li>' + thing + '</li>';
      }*/
      output += '</ul>';
      document.getElementById('suggestions').innerHTML = output;
      $("p").hover(function(){
          $(this).css("background-color", "grey");
          }, function(){
          $(this).css("background-color", "white");
      });
    });
  }else
  {
    document.getElementById('suggestions').innerHTML = '';
  }
}

function visit(targetLink)
{
  window.location.assign()
}


$('.flexsearch-input').keyup(function(){
  var searchText = $('.flexsearch-input').val();
  console.log(searchText);
  find(searchText);
});

$("p").hover(function(){
    $(this).css("background-color", "grey");
    }, function(){
    $(this).css("background-color", "white");
});