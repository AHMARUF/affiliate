function verify_url(url) {
    window.open(url);
} 

$(document).ready(function() {	  
     // $('[data-toggle="tooltip"]').tooltip();     
// THIS IS FOR FOOTER --- EXPANDING TEXTAREA AND SHOIWING BUTTON ON FOCUS 
	/*$('div.hide').hide();
	$('#feedback').focus(function() {
		$('div.hide').show();
		$(this).html('');
	});
	$('#feedback').focusout(function() {
		$('div.hide').hide();
		$(this).html('How can we make this page better for you?');
	});*/
	// THIS IS FOR LINK TEXT-SHOULD BE TYPED AFTER HTTP://  
	$("#landing_http").focus(function () {
		if($(this).val() == ''){
			$(this).val('http://');
		}
	 });
	 $("#landing_http").focusout(function () {
		if($(this).val() != ''){
			$(this).val('');
		}
	 });
	//  HIDE AND SHOW OBJECTS ON CLICK RADIO BUTTON 	 
	$(".captionShow").click(function(){
			 $("#captionRaw").css('display','block');
	});	
	
	$(".captionHide").click(function(){
			 $("#captionRaw").css('display','none');
	});	
	
	
	 $(".captionShow2").click(function(){
			 $("#captionRaw2").css('display','block');
	});	
	$(".captionHide2").click(function(){
			 $("#captionRaw2").css('display','none');
	});	

	/* hide image if not found */

	$("img").error(function () { 
	    //$(this).hide();
	    $(this).css({visibility:"hidden"}); 
	});	 	 
  $(".lower").on('blur',function () {  
      var lowerval = $(this).val();
      $(this).val(lowerval.toLowerCase()); 
  });    
	
});	
/*function changetolower(input) {
  input.value = input.value.toLowerCase();
}*/
function strip_tags(input, allowed) {
  //  discuss at: http://phpjs.org/functions/strip_tags/
  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Luke Godfrey
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //    input by: Pul
  //    input by: Alex
  //    input by: Marc Palau
  //    input by: Brett Zamir (http://brett-zamir.me)
  //    input by: Bobby Drake
  //    input by: Evertjan Garretsen
  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // bugfixed by: Onno Marsman
  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // bugfixed by: Eric Nagel
  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // bugfixed by: Tomasz Wesolowski
  //  revised by: Rafał Kukawski (http://blog.kukawski.pl/)
  //   example 1: strip_tags('<p>Kevin</p> <br /><b>van</b> <i>Zonneveld</i>', '<i><b>');
  //   returns 1: 'Kevin <b>van</b> <i>Zonneveld</i>'
  //   example 2: strip_tags('<p>Kevin <img src="someimage.png" onmouseover="someFunction()">van <i>Zonneveld</i></p>', '<p>');
  //   returns 2: '<p>Kevin van Zonneveld</p>'
  //   example 3: strip_tags("<a href='http://kevin.vanzonneveld.net'>Kevin van Zonneveld</a>", "<a>");
  //   returns 3: "<a href='http://kevin.vanzonneveld.net'>Kevin van Zonneveld</a>"
  //   example 4: strip_tags('1 < 5 5 > 1');
  //   returns 4: '1 < 5 5 > 1'
  //   example 5: strip_tags('1 <br/> 1');
  //   returns 5: '1  1'
  //   example 6: strip_tags('1 <br/> 1', '<br>');
  //   returns 6: '1 <br/> 1'
  //   example 7: strip_tags('1 <br/> 1', '<br><br/>');
  //   returns 7: '1 <br/> 1'

  allowed = (((allowed || '') + '')
    .toLowerCase()
    .match(/<[a-z][a-z0-9]*>/g) || [])
    .join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
  var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
    commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
  return input.replace(commentsAndPhpTags, '')
    .replace(tags, function($0, $1) {
      return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
    });
}
/*
 * function to toggle checkboxes by a single checkbox
 * class of other checkboxes to be toggelled should be same
 * class of to be toggelled checkbox is required as "toggle" attribure of main checkbox
 * any selector of the main checkbox can be used to call the function
 * this function can be initiated using below
 * $('.main_checkbox_class').init_check_all();
 */
$.fn.init_check_all = function(){
  var el = $(this);
  var check_me = $(el).attr('toggle');
  if(!(!$(el)) && !(!check_me)){
    // to initialize with status
    $(el).prop('checked',($('input.' + check_me).length > 0 && $('input.' + check_me).length == $('input.'+ check_me +':checked').length));
    
    $(document).on('click','input.'+check_me,function(){
      $(el).prop('checked',($('input.' + check_me).length == $('input.'+ check_me +':checked').length));
    });
    $(el).on('click',function(){
      $('input.'+check_me).prop('checked',$(this).prop('checked'));
    });
  }
}

/*
 * function to get list of checked checkboxes
 * it returns values in (,) separated string or in array as per return type defined by user in parameter typ
 * @param el is the selector of checkbox to identify it
 * @param typ is the return type which should be "string" for (,) separated values in string else it returns an array 
 */
function getCheckboxes(el,typ){
  var s = [];
  if(el == ''){
    el = 'input.check_me:checked';
  }
  $(el).each(function(i){
    s[i++] = $(this).val();
  });
  if(typ == 'string'){
    s = s.join(",");
  }
  return s;
}