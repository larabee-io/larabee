((s) => {
  const {
    screen: { width: M, height: T },
    navigator: { language: g },
    location: p,
    localStorage: U,
    document: a,
    history: W
  } = s, { hostname: o, pathname: h, search: O } = p, { currentScript: r } = a;
  if (!r)
    return;
  const w = r.getAttribute("data-api") ? r.getAttribute("data-api") + "/api" : "https://app.wanalytics.io/api", v = r.getAttribute("allow-localhost") == "true", l = r.getAttribute("website-id");
  if (!l)
    return;
  Cookies.get("token");
  const c = (e, t) => (Object.keys(t).forEach((i) => {
    t[i] !== void 0 && (e[i] = t[i]);
  }), e), m = `${h}${O}`;
  let b = a.referrer || null, x;
  a.querySelectorAll("[data-wanalytics-event]").forEach((e) => {
    e.addEventListener("click", (t) => {
      let i = {};
      Object.keys(e.dataset).forEach((n) => {
        if (n != "wanalyticsEvent") {
          const L = n.replace("wanalyticsEvent", "");
          i[L] = e.dataset[n];
        }
      });
      const d = e.dataset.wanalyticsEvent;
      C(d, Object.keys(i).length >= 1 ? i : null);
    });
  });
  const E = () => {
    const e = navigator.userAgent;
    let t = {
      name: "Unknown",
      version: "Unknown"
    };
    return e.indexOf("Firefox") > -1 ? t = {
      name: "Firefox",
      version: e.split("Firefox/")[1].split(" ")[0]
    } : e.indexOf("Opera") > -1 || e.indexOf("OPR") > -1 ? t = {
      name: "Opera",
      version: e.split("OPR/")[1]
    } : e.indexOf("Trident") > -1 ? t = "Internet Explorer" : e.indexOf("Edge") > -1 ? t = {
      name: "Edge",
      version: e.split("Edge/")[1].split(" ")[0]
    } : e.indexOf("Chrome") > -1 ? t = {
      name: "Chrome",
      version: e.split("Chrome/")[1].split(" ")[0]
    } : e.indexOf("Safari") > -1 && (t = {
      name: "Safari",
      version: e.split("Version/")[1].split(" ")[0]
    }), t;
  }, k = () => {
    let e = s.navigator.userAgent, t = s.navigator.platform, i = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"], u = ["Win32", "Win64", "Windows", "WinCE"], d = ["iPhone", "iPad", "iPod"], n = null;
    return i.indexOf(t) !== -1 ? n = "MacOS" : d.indexOf(t) !== -1 ? n = "iOS" : u.indexOf(t) !== -1 ? n = "Windows" : /Android/.test(e) ? n = "Android" : !n && /Linux/.test(t) ? n = "GNU/Linux" : !n && /X11/.test(t) ? n = "Unix" : n = "Unknown", n;
  }, A = () => {
    const e = navigator.userAgent;
    return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(e) ? "tablet" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      e
    ) ? "mobile" : "desktop";
  }, y = () => ({
    hostname: o,
    website_id: l
  }), S = () => ({
    hostname: o,
    screen: `${screen.width}x${screen.height}`,
    referrer: b,
    url: {
      path: m,
      title: a.title
    },
    language: g,
    website_id: l,
    os: k(),
    browser: E(),
    device: A(),
    user_agent: navigator.userAgent
  }), f = (e, t) => {
    if (!(o == "localhost" && !v))
      return fetch(`${w}/${t}`, {
        method: "POST",
        body: JSON.stringify(e),
        redirect: "follow",
        headers: c(
          { "Content-Type": "application/json" },
          { ["x-cache"]: x }
        )
      });
  }, P = () => f(
    c(S(), {}),
    "collect"
  ), C = (e, t) => {
    f(
      c(y(), {
        name: e,
        data: t
      }),
      "event"
    );
  };
  P();
})(window);
