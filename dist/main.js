const S = "M 0 100 V 0 Q 500 75 1000 0 V 0 H 0 z", v = "M 0 100 V 100 Q 500 100 1000 100 V 0 H 0 z", w = "M 0 100 V 100 Q 500 25 1000 100 V 100 z", C = "M 0 100 V 0 Q 500 0 1000 0 V 100 z", E = "M 0 100 V 100 Q 500 25 1000 100 V 0 H 0 z", b = "M 0 100 V 0 Q 500 0 1000 0 V 0 H 0 z", q = "M 0 100 V 0 Q 500 75 1000 0 V 100 z", T = "M 0 100 V 100 Q 500 100 1000 100 V 100 z";
window.addEventListener("DOMContentLoaded", (m) => {
  document.querySelectorAll(
    "[data-animate-hover=bg-section]"
  ).forEach((t) => {
    t.querySelectorAll("[data-animate-hover=bg]").forEach((e) => {
      const n = e.querySelector("[data-animate=bg-filler-path]");
      e.addEventListener("mouseenter", (c) => {
        const u = o(c, e), d = i(u);
        s(n, d.start, d.end);
      }), e.addEventListener("mouseleave", (c) => {
        const u = o(c, e), d = r(u);
        s(n, d.start, d.end);
      });
    });
  });
  function o(t, a) {
    const e = a.getBoundingClientRect(), n = t.clientX, c = t.clientY, u = Math.abs(e.top - c), d = Math.abs(e.bottom - c), g = Math.abs(e.left - n), p = Math.abs(e.right - n);
    var h = Math.min(
      u,
      d,
      g,
      p
    );
    switch (h) {
      case g:
        return "left";
      case p:
        return "right";
      case u:
        return "top";
      case d:
        return "bottom";
    }
  }
  function i(t, a) {
    let e, n;
    return t === "top" ? (e = S, n = v) : t === "bottom" ? (e = w, n = C) : (e = S, n = v), { start: e, end: n };
  }
  function r(t, a) {
    let e, n;
    return t === "top" ? (e = E, n = b) : t === "bottom" ? (e = q, n = T) : (e = E, n = b), { start: e, end: n };
  }
  function s(t, a, e) {
    if (a && e)
      return gsap.fromTo(
        t,
        { attr: { d: a } },
        {
          attr: { d: e },
          duration: 0.5,
          ease: "power3.out"
        }
      );
  }
});
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll("[data-video=video-wrapper]").forEach((l) => {
    const o = l.querySelector("[data-video=video]"), i = l.querySelector("[data-video=play-button]"), r = l.querySelector("[data-video=sound-button]");
    o.addEventListener("click", () => {
      i ? i.click() : o.paused ? o.play() : o.pause();
    }), i && i.addEventListener("click", () => {
      o.paused ? o.play() : o.pause();
    }), r && r.addEventListener("click", () => {
      o.muted ? o.muted = !1 : o.muted = !0;
    });
  });
});
window.addEventListener("DOMContentLoaded", (m) => {
  const l = "polygon(0% 0%, 100% 0%, 100% 115%, 0% 115%)", o = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)";
  document.querySelectorAll(
    "[data-animate-scroll=text-section]"
  ).forEach((s) => {
    const t = s.querySelector("[data-animate-scroll=headline]"), a = s.querySelectorAll("[data-animate-scroll=text]"), e = gsap.timeline({
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
      }), c = t.dataset.delay || 0, u = t.dataset.duration || 2;
      let d = 150;
      gsap.matchMedia().add("(max-width: 991px)", () => {
        d = 75;
      }), e.set(t, { clipPath: l }), e.fromTo(
        n.lines,
        { clipPath: o, y: d },
        {
          clipPath: l,
          y: 0,
          duration: u,
          delay: c,
          stagger: 0.25,
          ease: "expo.out"
        },
        0
      );
    }
    a && a.length > 0 && a.forEach((n) => {
      const c = n.dataset.delay || 0, u = n.dataset.duration || 2, d = new SplitType(n, {
        types: "lines",
        lineClass: "split-line"
        // !important .line is already taken
      });
      e.set(n, { clipPath: l }), e.fromTo(
        d.lines,
        { clipPath: o, y: 150 },
        {
          clipPath: l,
          y: 0,
          duration: u,
          delay: c,
          stagger: 0.15,
          ease: "expo.out"
        },
        0
      );
    });
  });
  function r(s) {
    s.querySelectorAll("span").forEach((a) => {
      const e = a.className, n = document.createDocumentFragment();
      a.childNodes.forEach((c) => {
        if (c.nodeType === Node.TEXT_NODE) {
          const u = c.textContent.split(/\s+/);
          u.forEach((d, g) => {
            const p = document.createElement("span");
            p.textContent = d, e && (p.className = e), n.appendChild(p), g < u.length - 1 && n.appendChild(document.createTextNode(" "));
          });
        } else c.nodeType === Node.ELEMENT_NODE && c.tagName === "BR" && n.appendChild(c.cloneNode());
      }), a.replaceWith(n);
    });
  }
});
window.addEventListener("DOMContentLoaded", () => {
  const m = document.querySelectorAll("[data-scroll-image=section]");
  !m || m.length === 0 || m.forEach((l) => {
    const o = l.querySelectorAll("[data-scroll-image=wrap]");
    !o || o.length === 0 || o.forEach((i) => {
      const r = i.querySelector("[data-scroll-image=image]"), s = r.dataset.scale || 1.17;
      r.style.willChange = "transform", gsap.timeline({
        scrollTrigger: {
          trigger: i,
          start: "top bottom",
          end: "bottom center",
          scrub: !0
        },
        defaults: {
          duration: 1
        }
      }).from(r, {
        scale: s,
        force3D: !0,
        ease: "none"
      });
    });
  });
});
window.addEventListener("DOMContentLoaded", (m) => {
  gsap.matchMedia().add("(min-width: 992px)", () => {
    document.querySelectorAll("[data-cycle-container]").forEach((r) => {
      const s = r.querySelectorAll("[data-cycle-item]");
      let t = 0, a = !1, e;
      gsap.set(s, { autoAlpha: 0 }), s.length > 0 && gsap.set(s[0], { autoAlpha: 1 });
      function n() {
        a || (gsap.to(s[t], { autoAlpha: 0, duration: 0 }), t = (t + 1) % s.length, gsap.to(s[t], {
          autoAlpha: 1,
          duration: 0,
          onComplete: () => {
            e = gsap.delayedCall(0.5, n);
          }
        }));
      }
      r.addEventListener("mouseenter", () => {
        a = !1, (!e || !e.isActive()) && n();
      }), r.addEventListener("mouseleave", () => {
        a = !0, e && e.kill();
      });
    });
  });
  function o() {
    document.querySelectorAll("[data-cycle-container]").forEach((r) => {
      const s = r.querySelectorAll("[data-cycle-item]");
      for (let t = 1; t < s.length; t++)
        s[t].remove();
    });
  }
  window.innerWidth < 992 && o(), window.addEventListener("resize", () => {
    window.innerWidth < 992 ? o() : location.reload();
  });
});
window.addEventListener("DOMContentLoaded", (m) => {
  function l() {
    const o = "polygon(0% 0%, 100% 0%, 100% 115%, 0% 115%)", i = "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", r = document.querySelector("[data-menu=wrapper]"), s = r.querySelector("[data-menu=trigger]"), t = r.querySelector("[data-menu=flyout]"), a = t.querySelector("[data-menu=bg]"), e = t.querySelectorAll("[data-menu=item]"), n = t.querySelectorAll("[data-menu=num]"), c = t.querySelector("[data-menu=divider]"), u = t.querySelectorAll("[data-menu=element]"), d = t.querySelector("[data-menu=split]");
    let g = new SplitType(d, {
      types: "lines",
      lineClass: "split-line"
    });
    const p = gsap.timeline({ paused: !0 });
    p.to(t, { display: "flex", duration: 0 }).from(a, { height: "0vh", duration: 1, ease: "power4.inOut" }, 0).to(
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
        clipPath: o,
        y: 0,
        ease: "expo.out",
        duration: 1.5,
        stagger: 0.1
      },
      "<-0.1"
    ).call(() => r.classList.toggle("is-active"), [], "<").from(c, { width: 0, duration: 2, ease: "power4.inOut" }, "<+0.5").fromTo(
      [g.lines, u],
      { clipPath: i, y: 50 },
      {
        clipPath: o,
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
  l();
});
window.addEventListener("DOMContentLoaded", (m) => {
  function l(t, a) {
    const e = typeof t;
    return typeof a != "string" || a.trim() === "" ? t : a === "true" && e === "boolean" ? !0 : a === "false" && e === "boolean" ? !1 : isNaN(a) && e === "string" ? a : !isNaN(a) && e === "number" ? +a : t;
  }
  const o = [], i = getComputedStyle(document.documentElement), r = document.querySelector("#color-themes"), s = /--([^:\s]+):\s*var\(--([^)]+)\);/g;
  if (r) {
    const t = r.sheet.cssRules || r.sheet.rules;
    for (const g of t) {
      const p = {};
      let h;
      for (; (h = s.exec(g.cssText)) !== null; ) {
        const y = "--" + h[1], f = i.getPropertyValue("--" + h[2]);
        p[y] = f;
      }
      o.push(p);
    }
    const a = l(0.4, r.getAttribute("speed")), e = l("power1.out", r.getAttribute("ease")), n = l(
      50,
      r.getAttribute("percent-from-top")
    ), c = l(0, r.getAttribute("min-width")), u = document.querySelectorAll("[animate-body-to]");
    u.forEach((g, p) => {
      const h = +g.getAttribute("animate-body-to");
      let y = `clamp(bottom ${n}%)`;
      p === u.length - 1 && (y = `bottom ${n}%`), gsap.matchMedia().add(`(min-width: ${c}px)`, () => {
        gsap.timeline({
          scrollTrigger: {
            trigger: g,
            start: `clamp(top ${n}%)`,
            end: y,
            toggleActions: "play complete none reverse"
          }
        }).to("body", {
          ...o[h - 1],
          duration: a,
          ease: e
        });
      });
    });
    const d = document.querySelectorAll("[set-body-to]");
    d.forEach((g, p) => {
      const h = +g.getAttribute("set-body-to");
      d.length - 1, gsap.matchMedia().add(`(min-width: ${c}px)`, () => {
        gsap.timeline({
          scrollTrigger: {
            trigger: g,
            start: "top top",
            end: "center top",
            toggleActions: "play complete none reverse"
          }
        }).to("body", {
          ...o[h - 1],
          duration: 0
        });
      });
    });
  }
});
function x() {
  const m = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", l = "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)", o = document.querySelector("[data-loader]");
  if (o) {
    const i = o.querySelector("[data-loader-bar]"), r = o.querySelector("[data-loader-percentage]"), s = o.querySelector("[data-loader-logo]"), t = o.querySelector("[data-loader-bg]");
    let a = o.dataset.loaderDuration;
    gsap.set(o, {
      opacity: 1,
      display: "block"
    }), gsap.set(i, {
      width: "0%"
    });
    const e = gsap.timeline({
      onComplete: () => {
        gsap.set(o, { display: "none" });
      }
    });
    e.to(i, {
      width: "100%",
      duration: a,
      // Use the dynamic duration
      ease: "power3.inOut"
    }).to(
      r,
      {
        duration: a,
        // Use the dynamic duration
        ease: "power2.inOut",
        onUpdate: () => {
          const n = Math.round(e.progress() * 100);
          r.textContent = `${n}%`;
        },
        onComplete: () => {
          e.to([r, s], {
            y: 150,
            duration: 1,
            // This duration remains the same
            stagger: 0.1,
            ease: "power2.inOut"
          }).fromTo(
            i,
            { clipPath: m },
            {
              clipPath: l,
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
x();
