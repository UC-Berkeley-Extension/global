// Moves utility menu below the main nav for Berkeley main menu in mobile.
"use strict";
(function($) {

  Drupal.behaviors.mobileOrder = {
    attach: function(context) {
      let berkeleySchool = document.querySelector('.berkeley-school');
      if (berkeleySchool) {
        let windowsize = $(window).width();
        if (windowsize < 768) {
          $(".secondary-navbar").appendTo(".mobile-collapse");
        }

        $(window).resize(function() {
          windowsize = $(window).width();
          if (windowsize < 768) {
            $(".secondary-navbar").appendTo(".mobile-collapse");
          } else {
            $(".secondary-navbar").prependTo(".mobile-collapse");
          }
        });
      }
    }
  };
})(jQuery);
