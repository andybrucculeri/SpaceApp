$(function(){
  console.log('scripts loaded!');
  function moveISS () {
    var latty;
    var longy;
    var url= 'http://api.open-notify.org/iss-now.json' ;
    var url2 = 'https://nominatim.openstreetmap.org/reverse?';
    var data= [];
    var html= '';

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
        url2 = url2 + 'format=jsonv2&lat=' + latty + '&lon=' + longy;
        $('#results').html(html);

        $.ajax({
          type:'GET',
          url: url2,
          dataType: 'json',
          async: true,
          data: data,
          error: function(url, html){ console.log('Your second ajax call failed.'); console.log(data)},
          success:function(data){
            console.log('TA DA!');
            if(data.address!=undefined && data.address.country!=underfined){
              html += 'The space station is currently over ' + data.address.state + ', ' + data.address.country + '.';
            } else {
              html += 'The space station is currently over the ocean.';
            }
            $('#results').html(html);
          } // success function 2
        }); // ajax lil
      } // success function 1
    }); // ajax big
  }
  moveISS();
  setInterval(function(){
    moveISS()
  }, 5000);
}); // close wrapper
