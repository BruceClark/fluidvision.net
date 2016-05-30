// List of Elements to Work With
var elements = {
  $personal_links: $('#intro .links a')
}

// Page Updates (Mostly for Responsive)
var site = {
  boot_up: function() {
    site.responsive();
  },

  responsive: function() {
    site_width = $(window).width();

    // Change button class on #intro
    if (site_width < 640) {
      elements.$personal_links.removeClass('secondary');
    }

    if (site_width > 640) {
      elements.$personal_links.addClass('secondary');
    }

    console.log(site_width);
  }
}

$(document).ready(function() {
  $(window).resize(function() {
    site.responsive();
  });
  site.boot_up();
});