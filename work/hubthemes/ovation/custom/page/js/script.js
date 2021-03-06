
$(document).ready(function() {
  $('.hs-item-has-children').click(function() {
    $('.hs-item-has-children').not(this).removeClass('open');

    $(this).toggleClass( "open" );
  });

  $('.flex-menu').Overly_menu({
    'speed': 0,
    'color': '#f8f8f8',
    'opacity': 0.9
  });




  $('#fullpage').fullpage({
      //Navigation
      menu: '#menu',
      //lockAnchors: false,
      verticalCentered: true,
      anchors:['home', 'collaboration', 'sample-tracking', 'data-management', 'enterprise'],
      navigation: true,
      navigationPosition: 'right',
      navigationTooltips: ['Home', 'Collaboration', 'Sample Tracking', 'Data Management', 'Enterprise'],
      showActiveTooltip: false,
      autoScrolling: true,
      //slidesNavigation: true,
      loopBottom: true,
      onLeave: function(nextIndex, anchorLink, navigation){

        if (anchorLink == 1 ) {
          $('body .header-container-wrapper').addClass('transparent');
        } else {
          $('body .header-container-wrapper').removeClass('transparent');
        }
        if (anchorLink == 1) {
          $(".arrow").show();
          $("footer h2").html('Collaboration');
          $("footer #footer-nav-link").attr("href", "#collaboration");
        } else if (anchorLink == 2) {
          $(".arrow").show();
          $("footer h2").html('Sample Tracking');
          $("footer #footer-nav-link").attr("href", "#sample-tracking");
          if ($(window).width() > 768) {
            $('.left-column-image img').prop('src', 'http://cdn2.hubspot.net/hubfs/730505/collab-anim-v2.gif');
          }
        } else if (anchorLink == 3) {
          $(".arrow").show();
          $("footer h2").html('Data Management');
          $("footer #footer-nav-link").attr("href", "#data-management");
          if ($(window).width() > 768) {
            $('.main-image img').prop('src', 'http://cdn2.hubspot.net/hubfs/730505/sample-tracking-v1.gif');
          }
        } else if (anchorLink == 4) {
          http://cdn2.hubspot.net/hubfs/730505/new-website-assets/provenance-anim.gif
          $(".arrow").show();
          $("footer h2").html('Enterprise');
          $("footer #footer-nav-link").attr("href", "#enterprise");
          if ($(window).width() > 768) {
            $('.left-column-image img').prop('src', 'http://cdn2.hubspot.net/hubfs/730505/provenance-anim-v1.gif');
          }
        } else if (anchorLink == 5) {
          $("footer h2").html('Home');
          $("footer #footer-nav-link").attr("href", "#home");
          if ($(window).width() > 768) {
            $('.main-image img').prop('src', 'http://cdn2.hubspot.net/hubfs/730505/enterprise-anim.gif');
          }
          $(".arrow").hide();
        }
      },
      afterRender: function(index){

        //playing the video
        $('video').get(0).play();
      },
  });

  //function headlineRotate() {
  array = ["<a href='#collaboration'>Collaboration.</a>","<a href='#sample-tracking'>Sample Tracking.</a>","<a href='#data-management'>Data Management.</a>","<a href='#enterprise'>Enterprise.</a>"];



    var curNewsIndex = -1;

    var intervalID = setInterval(function() {
        ++curNewsIndex;
        if (curNewsIndex >= array.length) {
            curNewsIndex = 0;
        }

        $('#change').fadeOut('slow', function() {
            $('#change').html(array[curNewsIndex]);
        });

        $('#change').fadeIn('slow');

    }, 5000);


  var inView = false;

  function isScrolledIntoView(elem)
  {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();

      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();

      return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
  }


  // Changing the defaults
  window.sr = ScrollReveal({ reset: false });

  if ($(window).width() > 768) {
    // Customizing a reveal set
    sr.reveal('#venn .left', {
      origin: 'left',
      duration: 2000,
      distance: '500px' });

    sr.reveal('#venn .right', {
      origin: 'right',
      duration: 2000,
      distance: '500px',
      afterReveal: function (domEl) {
        sr.reveal('.inner', {
          duration:1000
        });
        sr.reveal('.vertical-line', {
          duration:1000
        });
        sr.reveal('#center-text', {
          duration:1000
        });
      }
    });
  };

  function animation() {
    $('#dlnotbroken_hype_container').toggleClass('hide', $(window).width() < 769);
    $('#dltabletfast_hype_container').toggleClass('hide', $(window).width() >= 768 || $(window).width() < 401);
    $('#dlmobilefast_hype_container').toggleClass('hide', $(window).width() > 400);
  }

  function homepagePosition() {
    if ($(window).width() > 768) {
      $('.homepage .internal').css('margin-top', 50 + $(window).height()*.1);
    }
  }

  homepagePosition();

  animation();

  $(window).on('resize', function () {
      animation();
      homepagePosition();
  });


});
