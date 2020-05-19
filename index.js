// Support for "div data-include" to dynamically load HTML files
$(function() {
  var includes = $('[data-include]');
  jQuery.each(includes, function() {
    // var file = 'include/' + $(this).data('include') + '.html';
    var file = 'include/' + $(this).data('include') + '.html';
    $(this).load(file);
  });
});
