"use strict";

function eventHandler() {
  $('.dd-head-js').on('click', function () {
    let clickedHead = this;
    $(this).parent().toggleClass('active');
    $(this)
      .next()
      .slideToggle(function () {
        $(this).toggleClass('active');
      });
  });
};

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}