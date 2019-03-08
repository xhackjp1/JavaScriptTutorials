(function(d, b, w) {
  if (/actyway\.com/.test(location.href) !== true) {
    location.href = "http://actyway.com/";
  }
  var getPostid = (function() {
    var s = location.href.replace("http://actyway.com/demo/", ""),
      queries = s.split("."),
      i = 0;
    if (!s) return null;
    return queries[1];
  })();
  d.getElementById('backto').href = "http://actyway.com/" + getPostid;
})(window.document, window.document.body, window);
(function(i, s, o, g, r, a, m) {
  i['GoogleAnalyticsObject'] = r;
  i[r] = i[r] || function() {
    (i[r].q = i[r].q || []).push(arguments)
  }, i[r].l = 1 * new Date();
  a = s.createElement(o),
    m = s.getElementsByTagName(o)[0];
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-17998555-4', 'actyway.com');
ga('send', 'pageview');