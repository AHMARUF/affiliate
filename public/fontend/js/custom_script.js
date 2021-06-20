// alert('ok1');

// https://digwp.com/2011/09/using-instead-of-jquery-in-wordpress/
(function($) {
  // $("#frmLogin").submit(function(e) {
  //   alert('ok2');
  //   return;
  //   // var url = "http://www.ositracker.com/users/osiafflogin";
  //   var url = "https://www.ositracker.com/users/osiafflogin";

  //   document.getElementById("btn_goto_login").disabled = true;

  //   $.ajax({
  //     type: "POST",
  //     url: url,
  //     data: $("#frmLogin").serialize(), // serializes the form's elements.
  //     success: function(data) {  
  //       var obj = JSON.parse(data);
  //       alert(window.location.protocol);
  //       if (obj.error) {
  //         // alert(obj.message);
  //         $('#errormsg2').html('<b>'+obj.message+'</b>');
  //         $('#errormsg2').slideDown('slow');
  //       }
  //       else {
  //         alert('if obj no error');
  //         // window.location.replace(window.location.protocol+'//'+obj.redirect_url);
  //         // window.location.href = window.location.protocol+'//'+obj.redirect_url;
  //         return;
  //       }
  //       document.getElementById("btn_goto_login").disabled = false;
  //     }
  //   });
  //   e.preventDefault(); // avoid to execute the actual submit of the form.
  // });

  jQuery(window).scroll(function() {    
    var scroll = jQuery(window).scrollTop();
    if (scroll >=250) {
        jQuery("header").attr("class","fix");
    } 
    else {
        jQuery("header").attr("class","");
    }
  });

  $(".pricing-monthly").on("click", function () {
    $(".pricing-annual-wrap").fadeOut(0);
    $(".pricing-monthly-wrap").fadeIn(0);
    $(".pricing-monthly").addClass("active");
    $(".pricing-annual").removeClass("active");
  }); 
  $(".pricing-annual").on("click", function () {
    $(".pricing-monthly-wrap").fadeOut(0);
    $(".pricing-annual-wrap").fadeIn(0);
    $(".pricing-annual").addClass("active");
    $(".pricing-monthly").removeClass("active");
  });

  function toggleIcon(e) {
    $(e.target)
      .prev('.panel-heading')
      .find(".more-less")
      .toggleClass('glyphicon-plus glyphicon-minus');
  }
  $('.faq-accordion').on('hidden.bs.collapse', toggleIcon);
  $('.faq-accordion').on('shown.bs.collapse', toggleIcon);


  $(document).ready(function(){
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
          $('#back-to-top').fadeIn();
      } else {
          $('#back-to-top').fadeOut();
      }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 1200);
        return false;
    });
        
    $('#back-to-top').tooltip('show');
  });
})( jQuery );

// jQuery(document).ready(function( $ ) {
  // $ Works! You can test it with next line if you like
  // console.log($);
// });