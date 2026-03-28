(function () {
  "use strict";

  var STORAGE_KEY = "moss_lang";
  var warnedMissingNodes = false;

  function preferredDisplay(node) {
    var tag = node.tagName;
    if (tag === "SPAN" || tag === "A" || tag === "BUTTON" || tag === "STRONG" || tag === "EM") return "inline";
    if (tag === "LI") return "list-item";
    if (tag === "TR") return "table-row";
    if (tag === "TD" || tag === "TH") return "table-cell";
    return "block";
  }

  function resolveInitialLanguage(navigatorLanguage) {
    return (navigatorLanguage || "").toLowerCase().indexOf("zh") === 0 ? "zh" : "en";
  }

  function readStoredLanguage() {
    try {
      var value = localStorage.getItem(STORAGE_KEY);
      return value === "en" || value === "zh" ? value : null;
    } catch (e) {
      return null;
    }
  }

  function writeStoredLanguage(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      // Non-blocking storage failure.
    }
  }

  function hasNodes(lang) {
    return document.querySelectorAll('[data-lang="' + lang + '"]').length > 0;
  }

  function applyLanguage(lang) {
    var enNodes = document.querySelectorAll('[data-lang="en"]');
    var zhNodes = document.querySelectorAll('[data-lang="zh"]');
    var hasEn = enNodes.length > 0;
    var hasZh = zhNodes.length > 0;
    var target = lang === "zh" && hasZh ? "zh" : "en";

    if ((!hasEn || !hasZh) && !warnedMissingNodes) {
      warnedMissingNodes = true;
      console.warn("Moss landing: missing/misaligned language nodes, using available content.");
    }

    enNodes.forEach(function (node) {
      node.style.display = target === "en" ? preferredDisplay(node) : "none";
    });
    zhNodes.forEach(function (node) {
      node.style.display = target === "zh" ? preferredDisplay(node) : "none";
    });

    document.querySelectorAll("[data-lang-switch]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang-switch") === target));
    });
  }

  function initLanguageToggle() {
    var initial = readStoredLanguage() || resolveInitialLanguage(navigator.language);
    applyLanguage(initial);

    document.querySelectorAll("[data-lang-switch]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var lang = btn.getAttribute("data-lang-switch") === "zh" ? "zh" : "en";
        applyLanguage(lang);
        writeStoredLanguage(lang);
      });
    });
  }

  function initMobileStickyCTA() {
    var cta = document.querySelector("[data-mobile-cta]");
    var dismiss = document.querySelector("[data-mobile-cta-dismiss]");
    var hero = document.querySelector(".hero");
    if (!cta || !dismiss || !hero) return;

    var dismissed = false;
    function shouldEnable() {
      return window.innerWidth < 768;
    }

    function setVisibility(show) {
      cta.hidden = !show;
    }

    dismiss.addEventListener("click", function () {
      dismissed = true;
      setVisibility(false);
    });

    var observer = new IntersectionObserver(
      function (entries) {
        if (dismissed || !shouldEnable()) {
          setVisibility(false);
          return;
        }
        var entry = entries[0];
        var pastHero = !(entry.isIntersecting && entry.boundingClientRect.top >= 0);
        setVisibility(pastHero);
      },
      { root: null, rootMargin: "-64px 0px 0px 0px", threshold: 0 }
    );

    observer.observe(hero);
    window.addEventListener("resize", function () {
      if (!shouldEnable()) setVisibility(false);
    });
  }

  initLanguageToggle();
  initMobileStickyCTA();
})();

