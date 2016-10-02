
$(document).ready(function() {
  $('.flex-menu').Overly_menu({
    'speed': 0,
    'color': '#f8f8f8',
    'opacity': 0.8
  });


  $('#fullpage').fullpage({
      //Navigation
      menu: '#menu',
      lockAnchors: false,
      anchors:['home', 'collaboration', 'sample-tracking', 'data-management'],
      navigation: true,
      navigationPosition: 'right',
      navigationTooltips: ['Home', 'Collaboration', 'Sample Tracking', 'Data Management'],
      showActiveTooltip: false,
      slidesNavigation: true,
      loopBottom: true,
      onLeave: function(nextIndex, anchorLink, navigation){
        if (anchorLink == 1) {
          $("footer h2").html('Collaboration');
          $("footer #footer-nav-link").attr("href", "#collaboration");
        } else if (anchorLink == 2) {
          $("footer h2").html('Sample Tracking');
          $("footer #footer-nav-link").attr("href", "#sample-tracking");
        } else if (anchorLink == 3) {
          $("footer h2").html('Data Management');
          $("footer #footer-nav-link").attr("href", "#data-management");
        } else if (anchorLink == 4) {
          $("footer h2").html('Home');
          $("footer #footer-nav-link").attr("href", "#home");
        }
      },
      afterRender: function(index){

        //playing the video
        $('video').get(0).play();
      },
  });

  function headlineRotate() {
    setTimeout(function(){
      var listOne = $('#list-1').html();
      var listTwo = $('#list-2').html();
      var listThree = $('#list-3').html();
      var listFour = $('#list-4').html();

      $('#cycle-list li').fadeOut('slow', function() {
        $('#list-4').html(listThree);
        $('#list-3').html(listTwo);
        $('#list-2').html(listOne);
        $('#list-1').html(listFour);
      });



      $('#cycle-list li').fadeIn('slow');

      return headlineRotate();
    }, 5000);
  }

  headlineRotate()


});
