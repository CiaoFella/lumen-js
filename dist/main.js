const v = "M 0 100 V 0 Q 500 75 1000 0 V 0 H 0 z", E = "M 0 100 V 100 Q 500 100 1000 100 V 0 H 0 z", x = "M 0 100 V 100 Q 500 25 1000 100 V 100 z", C = "M 0 100 V 0 Q 500 0 1000 0 V 100 z", T = "M 0 100 V 100 Q 500 25 1000 100 V 0 H 0 z", w = "M 0 100 V 0 Q 500 0 1000 0 V 0 H 0 z", q = "M 0 100 V 0 Q 500 75 1000 0 V 100 z", M = "M 0 100 V 100 Q 500 100 1000 100 V 100 z";
window.addEventListener("DOMContentLoaded", (f) => {
  document.querySelectorAll(
    "[data-animate-hover=bg-section]"
  ).forEach((t) => {
    t.querySelectorAll("[data-animate-hover=bg]").forEach((e) => {
      const n = e.querySelector("[data-animate=bg-filler-path]");
      e.addEventListener("mouseenter", (a) => {
        const c = s(a, e), r = p(c);
        l(n, r.start, r.end);
      }), e.addEventListener("mouseleave", (a) => {
        const c = s(a, e), r = i(c);
        l(n, r.start, r.end);
      });
    });
  });
  function s(t, o) {
    const e = o.getBoundingClientRect(), n = t.clientX, a = t.clientY, c = Math.abs(e.top - a), r = Math.abs(e.bottom - a), d = Math.abs(e.left - n), g = Math.abs(e.right - n);
    var m = Math.min(
      c,
      r,
      d,
      g
    );
    switch (m) {
      case d:
        return "left";
      case g:
        return "right";
      case c:
        return "top";
      case r:
        return "bottom";
    }
  }
  function p(t, o) {
    let e, n;
    return t === "top" ? (e = v, n = E) : t === "bottom" ? (e = x, n = C) : (e = v, n = E), { start: e, end: n };
  }
  function i(t, o) {
    let e, n;
    return t === "top" ? (e = T, n = w) : t === "bottom" ? (e = q, n = M) : (e = T, n = w), { start: e, end: n };
  }
  function l(t, o, e) {
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
window.addEventListener("DOMContentLoaded", (f) => {
  gsap.registerPlugin(ScrollTrigger);
  const u = "polygon(0% 0%, 100% 0%, 100% 115%, 0% 115%)", s = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";
  document.querySelectorAll(
    "[data-animate-scroll=text-section]"
  ).forEach((l) => {
    const t = l.querySelectorAll("[data-animate-scroll=headline]");
    t.forEach((c) => {
      i(c);
    });
    const o = new SplitType(t, {
      types: "words",
      lineClass: "split-line"
      // !important .line is already taken
    }), e = l.querySelectorAll("[data-animate-scroll=text]"), n = new SplitType(e, {
      types: "lines",
      lineClass: "split-line"
      // !important .line is already taken
    }), a = gsap.timeline({
      scrollTrigger: {
        trigger: l,
        start: "top bottom",
        end: "top center",
        toggleActions: "none play none reset"
      }
    });
    t && t.length > 0 && a.fromTo(
      o.words,
      { clipPath: s, y: 150 },
      {
        clipPath: u,
        y: 0,
        duration: 1,
        stagger: 0.025,
        ease: "expo.out"
      },
      0
    ), e && e.length > 0 && a.fromTo(
      n.lines,
      { clipPath: s, y: 150 },
      {
        clipPath: u,
        y: 0,
        duration: 1,
        stagger: 0.025,
        ease: "expo.out"
      },
      0
    );
  });
  function i(l) {
    l.querySelectorAll("span").forEach((o) => {
      const e = o.className, n = document.createDocumentFragment();
      o.childNodes.forEach((a) => {
        if (a.nodeType === Node.TEXT_NODE) {
          const c = a.textContent.split(/\s+/);
          c.forEach((r, d) => {
            const g = document.createElement("span");
            g.textContent = r, e && (g.className = e), n.appendChild(g), d < c.length - 1 && n.appendChild(document.createTextNode(" "));
          });
        } else a.nodeType === Node.ELEMENT_NODE && a.tagName === "BR" && n.appendChild(a.cloneNode());
      }), o.replaceWith(n);
    });
  }
});
window.addEventListener("DOMContentLoaded", (f) => {
  function u() {
    const s = "polygon(0% 0%, 100% 0%, 100% 115%, 0% 115%)", p = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", i = document.querySelector("[data-menu=wrapper]"), l = i.querySelector("[data-menu=trigger]"), t = i.querySelector("[data-menu=flyout]"), o = t.querySelector("[data-menu=bg]"), e = t.querySelectorAll("[data-menu=item]"), n = t.querySelectorAll("[data-menu=num]"), a = t.querySelector("[data-menu=divider]"), c = t.querySelectorAll("[data-menu=element]"), r = t.querySelector("[data-menu=split]");
    let d = new SplitType(r, {
      types: "lines",
      lineClass: "split-line"
    });
    const g = gsap.timeline({ paused: !0 });
    g.to(t, { display: "flex", duration: 0 }).from(o, { height: "0vh", duration: 1, ease: "power4.inOut" }, 0).to(
      l,
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
      { clipPath: p, y: 50 },
      {
        clipPath: s,
        y: 0,
        ease: "expo.out",
        duration: 1.5,
        stagger: 0.1
      },
      "<-0.1"
    ).call(() => i.classList.toggle("is-active"), [], "<").from(a, { width: 0, duration: 2, ease: "power4.inOut" }, "<+0.5").fromTo(
      [d.lines, c],
      { clipPath: p, y: 50 },
      {
        clipPath: s,
        y: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.05
      },
      "<+0.25"
    ), l.addEventListener("click", () => {
      l.classList.toggle("is-active"), l.classList.contains("is-active") ? g.timeScale(1).play() : g.timeScale(2).reverse();
    });
  }
  u();
});
window.addEventListener("DOMContentLoaded", (f) => {
  function u(t, o) {
    const e = typeof t;
    return typeof o != "string" || o.trim() === "" ? t : o === "true" && e === "boolean" ? !0 : o === "false" && e === "boolean" ? !1 : isNaN(o) && e === "string" ? o : !isNaN(o) && e === "number" ? +o : t;
  }
  const s = [], p = getComputedStyle(document.documentElement), i = document.querySelector("#color-themes"), l = /--([^:\s]+):\s*var\(--([^)]+)\);/g;
  if (i) {
    const t = i.sheet.cssRules || i.sheet.rules;
    for (const m of t) {
      const h = {};
      let y;
      for (; (y = l.exec(m.cssText)) !== null; ) {
        const S = "--" + y[1], b = p.getPropertyValue("--" + y[2]);
        h[S] = b;
      }
      s.push(h);
    }
    const o = u(0.4, i.getAttribute("speed")), e = u("power1.out", i.getAttribute("ease")), n = u(
      50,
      i.getAttribute("percent-from-top")
    ), a = u(0, i.getAttribute("min-width"));
    gsap.registerPlugin(ScrollTrigger);
    const c = document.querySelectorAll("[animate-body-to]");
    let r = 0, d = 0;
    c.forEach((m, h) => {
      const y = +m.getAttribute("animate-body-to");
      let S = `clamp(bottom ${n}%)`;
      h === c.length - 1 && (S = `bottom ${n}%`), gsap.matchMedia().add(`(min-width: ${a}px)`, () => {
        gsap.timeline({
          scrollTrigger: {
            trigger: m,
            start: `clamp(top ${n}%)`,
            end: S,
            toggleActions: "play complete none reverse",
            onEnter: () => {
              d = r, r = y - 1;
            },
            onLeaveBack: () => {
              gsap.to("body", {
                ...s[d],
                duration: o,
                ease: e
              }), r = d;
            }
          }
        }).to("body", {
          ...s[y - 1],
          duration: o,
          ease: e
        });
      });
    }), document.querySelectorAll("[set-body-to]").forEach((m) => {
      const h = +m.getAttribute("set-body-to");
      gsap.matchMedia().add(`(min-width: ${a}px)`, () => {
        ScrollTrigger.create({
          trigger: m,
          start: "top top",
          end: `bottom ${n}%`,
          onEnter: () => {
            d = r, r = h - 1, gsap.set("body", s[r]);
          },
          onEnterBack: () => {
            d = r, r = h - 1, gsap.set("body", s[r]);
          },
          onLeave: () => {
            gsap.to("body", {
              ...s[d],
              duration: o,
              ease: e
            }), r = d;
          },
          onLeaveBack: () => {
            gsap.to("body", {
              ...s[d],
              duration: o,
              ease: e
            }), r = d;
          }
        });
      });
    });
  }
});
function P() {
  const f = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", u = "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)", s = document.querySelector("[data-loader]"), p = s.querySelector("[data-loader-bar]"), i = s.querySelector("[data-loader-percentage]"), l = s.querySelector("[data-loader-logo]"), t = s.querySelector("[data-loader-bg]");
  gsap.set(s, {
    opacity: 1,
    display: "block"
  }), gsap.set(p, {
    width: "0%"
  });
  const o = sessionStorage.getItem("pageLoaded") ? 0.5 : 4, e = gsap.timeline({
    onComplete: () => {
      gsap.set(s, { display: "none" });
    }
  });
  e.to(p, {
    width: "100%",
    duration: o,
    // Use the dynamic duration
    ease: "power3.inOut"
  }).to(
    i,
    {
      duration: o,
      // Use the dynamic duration
      ease: "power2.inOut",
      onUpdate: () => {
        const n = Math.round(e.progress() * 100);
        console.log(`Progress: ${n}%`), i.textContent = `${n}%`;
      },
      onComplete: () => {
        e.to([i, l], {
          y: 110,
          duration: 1,
          // This duration remains the same
          stagger: 0.1,
          ease: "power2.inOut"
        }).fromTo(
          p,
          { clipPath: f },
          { clipPath: u, duration: 1, ease: "power2.inOut" },
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
P();
