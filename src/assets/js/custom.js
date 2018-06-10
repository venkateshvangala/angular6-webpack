jQuery(document).ready(function() {
  /**
   * Functions to be ran on resize event
   */
  initResize();

  /**
   * Columns show/hide dropdown fix
   * Prevent closing on click inside dropdown
   */
  initDropdownFix();
});

function initResize() {
  jQuery(window).on('resize', function() {
  })
}

function initDropdownFix() {
  jQuery(document).on('click', '.dropdown-columns .dropdown-menu', function (e) {
    e.stopPropagation();
  });
}
