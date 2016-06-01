// List of Elements to Work With
var resources = {
  //Presets
  breakpoint:       768,
  top_highlight:    260,

  //Target Elements
  $personal_links:  $('#intro .links a'),
  $personal_links:  $('#intro .links a'),
  $work_pieces:     $('#work .portfolio-wrap .piece')
}

// Page Updates (Mostly for Responsive)
var site = {
  boot_up: function() {
    site.responsive();

    $(window).resize(function() {
      site.responsive();
    });
  },

  responsive: function() {
    site_width = $(window).width();

    // Change button class on #intro
    if (site_width < resources.breakpoint) {
      resources.$personal_links.removeClass('secondary');
      site.highlight_scroll();
    } else {
      resources.$personal_links.addClass('secondary');
    }
  },

  highlight_scroll: function(){
    resources.$work_pieces.each(function(index, el) {
      var $self = $(this);
      var $target = $(this).children('a');
      var element_top = $self.offset().top - resources.top_highlight;

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
  site.boot_up();
});