const S = "M 0 100 V 0 Q 500 75 1000 0 V 0 H 0 z", v = "M 0 100 V 100 Q 500 100 1000 100 V 0 H 0 z", w = "M 0 100 V 100 Q 500 25 1000 100 V 100 z", T = "M 0 100 V 0 Q 500 0 1000 0 V 100 z", E = "M 0 100 V 100 Q 500 25 1000 100 V 0 H 0 z", b = "M 0 100 V 0 Q 500 0 1000 0 V 0 H 0 z", C = "M 0 100 V 0 Q 500 75 1000 0 V 100 z", x = "M 0 100 V 100 Q 500 100 1000 100 V 100 z";
window.addEventListener("DOMContentLoaded", (m) => {
  document.querySelectorAll(
    "[data-animate-hover=bg-section]"
  ).forEach((t) => {
    t.querySelectorAll("[data-animate-hover=bg]").forEach((e) => {
      const n = e.querySelector("[data-animate=bg-filler-path]");
      e.addEventListener("mouseenter", (l) => {
        const d = a(l, e), c = i(d);
        s(n, c.start, c.end);
      }), e.addEventListener("mouseleave", (l) => {
        const d = a(l, e), c = r(d);
        s(n, c.start, c.end);
      });
    });
  });
  function a(t, o) {
    const e = o.getBoundingClientRect(), n = t.clientX, l = t.clientY, d = Math.abs(e.top - l), c = Math.abs(e.bottom - l), g = Math.abs(e.left - n), p = Math.abs(e.right - n);
    var y = Math.min(
      d,
      c,
      g,
      p
    );
    switch (y) {
      case g:
        return "left";
      case p:
        return "right";
      case d:
        return "top";
      case c:
        return "bottom";
    }
  }
  function i(t, o) {
    let e, n;
    return t === "top" ? (e = S, n = v) : t === "bottom" ? (e = w, n = T) : (e = S, n = v), { start: e, end: n };
  }
  function r(t, o) {
    let e, n;
    return t === "top" ? (e = E, n = b) : t === "bottom" ? (e = C, n = x) : (e = E, n = b), { start: e, end: n };
  }
  function s(t, o, e) {
    if (o && e)
      return gsap.fromTo(
        t,
        { attr: { d: o } },
        {
          attr: { d: e },
          duration: 0.5,
          ease: "power3.out"
        }
      );
  }
});
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll("[data-video=video-wrapper]").forEach((u) => {
    const a = u.querySelector("[data-video=video]"), i = u.querySelector("[data-video=play-button]"), r = u.querySelector("[data-video=sound-button]");
    a.addEventListener("click", () => {
      i ? i.click() : a.paused ? a.play() : a.pause();
    }), i && i.addEventListener("click", () => {
      a.paused ? a.play() : a.pause();
    }), r && r.addEventListener("click", () => {
      a.muted ? a.muted = !1 : a.muted = !0;
    });
  });
});
window.addEventListener("DOMContentLoaded", (m) => {
  gsap.registerPlugin(ScrollTrigger);
  const u = "polygon(0% 0%, 100% 0%, 100% 115%, 0% 115%)", a = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";
  document.querySelectorAll(
    "[data-animate-scroll=text-section]"
  ).forEach((s) => {
    const t = s.querySelector("[data-animate-scroll=headline]"), o = s.querySelectorAll("[data-animate-scroll=text]"), e = gsap.timeline({
      scrollTrigger: {
        trigger: s,
        start: "top bottom",
        end: "top 80%",
        toggleActions: "none play none reset"
      }
    });
    if (t) {
      r(t);
      const n = new SplitType(t, {
        types: "lines",
        lineClass: "split-line"
        // !important .line is already taken
      }), l = t.dataset.delay || 0, d = t.dataset.duration || 2;
      let c = 150;
      gsap.matchMedia().add("(max-width: 991px)", () => {
        c = 75;
      }), e.fromTo(
        n.lines,
        { clipPath: a, y: c },
        {
          clipPath: u,
          y: 0,
          duration: d,
          delay: l,
          stagger: 0.25,
          ease: "expo.out"
        },
        0
      );
    }
    o && o.length > 0 && o.forEach((n) => {
      const l = n.dataset.delay || 0, d = n.dataset.duration || 2, c = new SplitType(n, {
        types: "lines",
        lineClass: "split-line"
        // !important .line is already taken
      });
      e.fromTo(
        c.lines,
        { clipPath: a, y: 150 },
        {
          clipPath: u,
          y: 0,
          duration: d,
          delay: l,
          stagger: 0.15,
          ease: "expo.out"
        },
        0
      );
    });
  });
  function r(s) {
    s.querySelectorAll("span").forEach((o) => {
      const e = o.className, n = document.createDocumentFragment();
      o.childNodes.forEach((l) => {
        if (l.nodeType === Node.TEXT_NODE) {
          const d = l.textContent.split(/\s+/);
          d.forEach((c, g) => {
            const p = document.createElement("span");
            p.textContent = c, e && (p.className = e), n.appendChild(p), g < d.length - 1 && n.appendChild(document.createTextNode(" "));
          });
        } else l.nodeType === Node.ELEMENT_NODE && l.tagName === "BR" && n.appendChild(l.cloneNode());
      }), o.replaceWith(n);
    });
  }
});
window.addEventListener("DOMContentLoaded", (m) => {
  gsap.matchMedia().add("(min-width: 992px)", () => {
    document.querySelectorAll("[data-cycle-container]").forEach((i) => {
      const r = i.querySelectorAll("[data-cycle-item]");
      let s = 0, t = !1, o;
      gsap.set(r, { autoAlpha: 0 }), r.length > 0 && gsap.set(r[0], { autoAlpha: 1 });
      function e() {
        t || (gsap.to(r[s], { autoAlpha: 0, duration: 0 }), s = (s + 1) % r.length, gsap.to(r[s], {
          autoAlpha: 1,
          duration: 0,
          onComplete: () => {
            o = gsap.delayedCall(0.5, e);
          }
        }));
      }
      i.addEventListener("mouseenter", () => {
        t = !1, (!o || !o.isActive()) && e();
      }), i.addEventListener("mouseleave", () => {
        t = !0, o && o.kill();
      });
    });
  });
});
window.addEventListener("DOMContentLoaded", (m) => {
  function u() {
    const a = "polygon(0% 0%, 100% 0%, 100% 115%, 0% 115%)", i = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", r = document.querySelector("[data-menu=wrapper]"), s = r.querySelector("[data-menu=trigger]"), t = r.querySelector("[data-menu=flyout]"), o = t.querySelector("[data-menu=bg]"), e = t.querySelectorAll("[data-menu=item]"), n = t.querySelectorAll("[data-menu=num]"), l = t.querySelector("[data-menu=divider]"), d = t.querySelectorAll("[data-menu=element]"), c = t.querySelector("[data-menu=split]");
    let g = new SplitType(c, {
      types: "lines",
      lineClass: "split-line"
    });
    const p = gsap.timeline({ paused: !0 });
    p.to(t, { display: "flex", duration: 0 }).from(o, { height: "0vh", duration: 1, ease: "power4.inOut" }, 0).to(
      s,
      { rotate: -45, duration: 0.5, ease: "power2.inOut" },
      "<"
    ).from(
      e,
      {
        yPercent: 110,
        duration: 1.5,
        ease: "expo.out",
        stagger: 0.1
      },
      ">-10%"
    ).fromTo(
      n,
      { clipPath: i, y: 50 },
      {
        clipPath: a,
        y: 0,
        ease: "expo.out",
        duration: 1.5,
        stagger: 0.1
      },
      "<-0.1"
    ).call(() => r.classList.toggle("is-active"), [], "<").from(l, { width: 0, duration: 2, ease: "power4.inOut" }, "<+0.5").fromTo(
      [g.lines, d],
      { clipPath: i, y: 50 },
      {
        clipPath: a,
        y: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.05
      },
      "<+0.25"
    ), s.addEventListener("click", () => {
      s.classList.toggle("is-active"), s.classList.contains("is-active") ? p.timeScale(1).play() : p.timeScale(2).reverse();
    });
  }
  u();
});
window.addEventListener("DOMContentLoaded", (m) => {
  function u(t, o) {
    const e = typeof t;
    return typeof o != "string" || o.trim() === "" ? t : o === "true" && e === "boolean" ? !0 : o === "false" && e === "boolean" ? !1 : isNaN(o) && e === "string" ? o : !isNaN(o) && e === "number" ? +o : t;
  }
  const a = [], i = getComputedStyle(document.documentElement), r = document.querySelector("#color-themes"), s = /--([^:\s]+):\s*var\(--([^)]+)\);/g;
  if (r) {
    const t = r.sheet.cssRules || r.sheet.rules;
    for (const g of t) {
      const p = {};
      let y;
      for (; (y = s.exec(g.cssText)) !== null; ) {
        const h = "--" + y[1], f = i.getPropertyValue("--" + y[2]);
        p[h] = f;
      }
      a.push(p);
    }
    const o = u(0.4, r.getAttribute("speed")), e = u("power1.out", r.getAttribute("ease")), n = u(
      50,
      r.getAttribute("percent-from-top")
    ), l = u(0, r.getAttribute("min-width"));
    gsap.registerPlugin(ScrollTrigger);
    const d = document.querySelectorAll("[animate-body-to]");
    d.forEach((g, p) => {
      const y = +g.getAttribute("animate-body-to");
      let h = `clamp(bottom ${n}%)`;
      p === d.length - 1 && (h = `bottom ${n}%`), gsap.matchMedia().add(`(min-width: ${l}px)`, () => {
        gsap.timeline({
          scrollTrigger: {
            trigger: g,
            start: `clamp(top ${n}%)`,
            end: h,
            toggleActions: "play complete none reverse"
          }
        }).to("body", {
          ...a[y - 1],
          duration: o,
          ease: e
        });
      });
    });
    const c = document.querySelectorAll("[set-body-to]");
    c.forEach((g, p) => {
      const y = +g.getAttribute("set-body-to");
      let h = `clamp(bottom ${n}%)`;
      p === c.length - 1 && (h = `bottom ${n}%`), gsap.matchMedia().add(`(min-width: ${l}px)`, () => {
        gsap.timeline({
          scrollTrigger: {
            trigger: g,
            start: "clamp(top 1%)",
            end: h,
            toggleActions: "play complete none reverse"
          }
        }).to("body", {
          ...a[y - 1],
          duration: 0
        });
      });
    });
  }
});
const q = Array.from(document.querySelectorAll("img[loading='lazy']"));
q.forEach(function(m) {
  m.addEventListener("load", function() {
    ScrollTrigger.refresh();
  });
});
function A() {
  const m = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", u = "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)", a = document.querySelector("[data-loader]");
  if (a) {
    const i = a.querySelector("[data-loader-bar]"), r = a.querySelector("[data-loader-percentage]"), s = a.querySelector("[data-loader-logo]"), t = a.querySelector("[data-loader-bg]");
    let o = a.dataset.loaderDuration;
    gsap.set(a, {
      opacity: 1,
      display: "block"
    }), gsap.set(i, {
      width: "0%"
    });
    const e = gsap.timeline({
      onComplete: () => {
        gsap.set(a, { display: "none" });
      }
    });
    e.to(i, {
      width: "100%",
      duration: o,
      // Use the dynamic duration
      ease: "power3.inOut"
    }).to(
      r,
      {
        duration: o,
        // Use the dynamic duration
        ease: "power2.inOut",
        onUpdate: () => {
          const n = Math.round(e.progress() * 100);
          r.textContent = `${n}%`;
        },
        onComplete: () => {
          e.to([r, s], {
            y: 110,
            duration: 1,
            // This duration remains the same
            stagger: 0.1,
            ease: "power2.inOut"
          }).fromTo(
            i,
            { clipPath: m },
            {
              clipPath: u,
              duration: 1,
              ease: "power2.inOut"
            },
            // This duration remains the same
            "<"
          ).to(
            t,
            {
              scaleY: 0,
              transformOrigin: "top",
              duration: 1,
              // This duration remains the same
              ease: "expo.inOut"
            },
            "<+0.5"
          );
        }
      },
      0
    );
  }
}
A();
