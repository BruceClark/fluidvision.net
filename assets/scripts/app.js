// List of Elements to Work With
var elements = {
  $personal_links:  $('#intro .links a'),
  $work_pieces:     $('#work .portfolio-wrap .piece')
}

// Page Updates (Mostly for Responsive)
var site = {
  boot_up: function() {
    site.responsive();
  },

  responsive: function() {
    site_width = $(window).width();

    // Change button class on #intro
    if (site_width < 668) {
      elements.$personal_links.removeClass('secondary');
      site.highlight_scroll();
    } else {
      elements.$personal_links.addClass('secondary');
    }
  },

  highlight_scroll: function(){
    elements.$work_pieces.each(function(index, el) {
      var $self = $(this);
      var $target = $(this).children('a');
      var element_top = $self.offset().top - 260;

      $(window).scroll(function(event) {
        var scrolled = $(window).scrollTop();

        if (scrolled > element_top) {
          $target.addClass('scrolled');
        } else {
          $target.removeClass('scrolled');
        }
      });
    });
  }
}

$(document).ready(function() {
  $(window).resize(function() {
    site.responsive();
  });

  site.boot_up();
});