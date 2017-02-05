function addReadMore(content){
            $.each(content,function(key,val){
               var element = $(val);
               if(element.text().length > 190 && (element.attr("data-shortened") === "false" || element.attr("data-shortened") == null)){
                  var short_content 	= element.text().substr(0,185); /* split the content in two parts */
          			  var long_content	= element.text().substr(185);
          			
            			element.html(short_content+'<a href="#" class="read_more"><br/>Read More</a>');			 
            			element.find('a.read_more').click(function(event){ /* find the a.read_more element within the new html and bind the following code to it */
             
            				event.preventDefault(); /* prevent the a from changing the url */
            				$(this).hide(); /* hide the read more button */
            				element.html(short_content+'<span class="more_text">'+long_content+'</span>')
            				$(this).parents('.item').find('.more_text').slideDown(200); /* show the .more_text span */
          		      element.attr("data-shortened","false");
        			  });
                element.attr("data-shortened","true");
               }
           });
        }

$(document).ready(function(){
    var content = $(".testi-content p");
    addReadMore(content)
    $('.carouselClient').carousel({
      interval: 4000
  });
  $(".carouselClient").on('slide.bs.carousel', function () {
      var content = $(".testi-content p");
      addReadMore(content);
    });
});