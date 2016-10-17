
$(document).ready(function() {
  $('.hs-item-has-children').click(function() {
    $(this).toggleClass( "open" );
  });

  $('.flex-menu').Overly_menu({
    'speed': 0,
    'color': '#f8f8f8',
    'opacity': 0.8
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
        } else if (anchorLink == 3) {
          $(".arrow").show();
          $("footer h2").html('Data Management');
          $("footer #footer-nav-link").attr("href", "#data-management");
        } else if (anchorLink == 4) {
          $(".arrow").show();
          $("footer h2").html('Enterprise');
          $("footer #footer-nav-link").attr("href", "#enterprise");
        } else if (anchorLink == 5) {
          $("footer h2").html('Home');
          $("footer #footer-nav-link").attr("href", "#home");
          $(".arrow").hide();
        }
      },
      afterRender: function(index){

        //playing the video
        $('video').get(0).play();
      },
  });

  //function headlineRotate() {
  array = ["<a href='#collaboration'>Collaboration</a>","<a href='#sample-tracking'>Sample Tracking</a>","<a href='#data-management'>Data Management</a>","<a href='#enterprise'>Enterprise</a>"];



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


});
