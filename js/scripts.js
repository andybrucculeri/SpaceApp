$(function(){
  console.log('scripts loaded');
  var myKey = config.MY_KEY;

  var url= 'https://newsapi.org/v2/everything?q=MIT+graduate&from=2018-10-14&sortBy=publishedAt&apiKey=' + myKey;
  //you put your API key at the end of the thing which means you have to delete the one that is there
  //delete the topic and put your own uses a plus as spaces
  var url2= 'https://newsapi.org/v2/everything?q=horse+care&from=2018-10-14&sortBy=publishedAt&apiKey=' + myKey;
  var data= [];
  var html= '';
  var articles= [];
  var urlArray=[url, url2];
  var i='';

  for(i=0; i<urlArray.length; i++){

    $.ajax({
      type:'GET',
      url: urlArray[i],
      dataType: 'json',
      async: true,
      data: data,
      success:function(data){
        console.log(data.articles);
        articles=data.articles;

        articles.forEach(function(article){
          console.log(article.title);
          html += '<div class="latest-news flex">';
            html += '<img class="thumbnail" src="' + article.urlToImage + '">';
            html += '<div class="text">';
            html += '<a href="' + article.url + '" target="blank">';
            html += '<h2 class="headline">' + article.title + '</h2>';
            html += '<h4 class="byline"> by ' + article.author + ', <em>' + article.source.name + '</em></h4>';
            html += '</a></div>';
          html += '</div>';

        }); // foreach
        $('#results').html(html);

      } // success function

    }); // ajax

  } //close loop

}); //wraper
