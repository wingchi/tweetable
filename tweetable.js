$(function() {
  //looks for stuff like <a href="#" class="tweetable">{your tweetable content}</a>
  $('a.tweetable').each(function(){
    var content = $(this).html();
    console.log(content);
    //TODO - Add a link to the current page to the tweet
    $(this).attr('href', 'http://twitter.com/home?status=' + content + ' via @wingchi'); //add your twitter handle here
    //feel free to remove any of the following stuff
    $(this).attr('target', '_blank'); //open 
    $(this).attr('style', 'border-bottom: 1px dotted #39cccc;') //a dotted underline for added emphasis
    $(this).html(content + ' <i class="fa fa-twitter"></i>'); //add a font-awesome twitter icon at the end of your tweetable content
  });
});
