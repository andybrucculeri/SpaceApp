$(function(){
  console.log('scripts loaded!');
  //var myKey = config.MY_KEY;
  var url= 'http://api.open-notify.org/iss-now.json' ;
  var url2= 'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=-34.44076&lon=-58.70521';
  var data= [];
  var html= '';
  var urlArray=[url, url2];
  var i='';
console.log('hi');
  // for(i=0; i<urlArray.length; i++){

    $.ajax({
      type:'GET',
      url: url,
      dataType: 'json',
      async: true,
      data: data,
      error: function(url, html){ console.log('Your ajax call failed. Sorry fam.'); console.log(data)},
      success:function(data){
        console.log('it worked!');
        var lat=data.iss_position.latitude;
        var lon=data.iss_position.longitude;
        html += 'The space station is at ' + data.iss_position.latitude;
        $('#results').html(html);

      } // success function

    }); // ajax

  //  setTimeout(moveISS, 5000);
//  }; // close forloop

}); // close wrapper
