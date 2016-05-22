/*! Lazy Load XT v1.0.6 2014-11-19
 * http://ressio.github.io/lazy-load-xt
 * (C) 2014 RESS.io
 * Licensed under MIT */
!function(t){var o=t.lazyLoadXT,a=o.bgAttr||"data-bg";o.selector+=",["+a+"]",t(document).on("lazyshow",function(o){var r=t(o.target);r.css("background-image","url('"+r.attr(a)+"')").removeAttr(a)})}(window.jQuery||window.Zepto||window.$);