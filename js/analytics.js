/* ==========================================================================
   analytics.js — GoatCounter loader.
   Include on any page with: <script src="/js/analytics.js"></script>
   in <head>, right after the stylesheets.

   GoatCounter site: tavela.goatcounter.com, in the same GoatCounter account
   as Vidar's other sites (merged 2026-10-27). No cookies, nothing stored on
   the visitor's device, no IP addresses kept, so no consent banner.

   WHAT THIS SENDS MUST MATCH /integritet/. Change one, change the other.
   ========================================================================== */
(function () {
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter', 'https://tavela.goatcounter.com/count');
  document.head.appendChild(s);
})();
