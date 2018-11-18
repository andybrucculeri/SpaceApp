$(function(){
  console.log('scripts loaded!');
  //var myKey = config.MY_KEY;
  var latty;
  var longy;
  var url= 'http://api.open-notify.org/iss-now.json' ;
  var url2 = 'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=-34.44076&lon=-58.70521';
  var data= [];
  var data2= [];
  var html= '';
  var urlArray=[url, url2];
  var i='';
  // for(i=0; i<urlArray.length; i++){

    $.ajax({
      type:'GET',
      url: url,
      dataType: 'json',
      async: true,
      data: data,
      error: function(url, html){ console.log('Your ajax call failed.'); console.log(data)},
      success:function(data){
        console.log('it worked!');
        latty = data.iss_position.latitude;
        longy = data.iss_position.longitude;

        html += 'The space station is at ' + data.iss_position.latitude + ' ' + data.iss_position.longitude ;
        $('#results').html(html);


        $.ajax({
          type:'GET',
          url: url2,
          dataType: 'json',
          async: true,
          data: data2,
          error: function(url, html){ console.log('Your second ajax call failed.'); console.log(data)},
          success:function(data){
            console.log('TA DA!');
            url2 = 'https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=' + latty + '&lon=' + longy;
            lat = latty;
            lon = longy;
            html += 'The space station is at ' + lat + ' ' + data.address.country;


            $('#results').html(html);

          } // success function 2

      }); // ajax lil

      } // success function 1

  }); // ajax big

  //  setTimeout(moveISS, 5000);
//  }; // close forloop

}); // close wrapper
