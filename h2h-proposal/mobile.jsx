// ===========================================================
//  Mobile homepage — 390px wide, single column, reflowed
// ===========================================================

function MobileHomepage() {
  return (
    <div style={{ background: "var(--h2h-paper)", color: "var(--fg-default)", overflow: "hidden", position: "relative", isolation: "isolate" }}>
      <MobileChrome />
      <MobileHeader />
      <MobileHero />
      <MobileMarquee />
      <MobileAbout />
      <MobileMission />
      <MobileJourney />
      <MobileAdventures />
      <MobileImpact />
      <MobileGallery />
      <MobileTestimonial />
      <MobileNewsletter />
      <MobileFooter />
    </div>
  );
}

// thin status bar look on top
function MobileChrome() {
  return (
    <div style={{
      height: 44,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 22px",
      fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: 14, color: "var(--h2h-ink)",
    }}>
      <span>9:41</span>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
        <svg width="18" height="11" viewBox="0 0 18 11" fill="currentColor"><rect x="0" y="6" width="3" height="5" rx="0.6"/><rect x="5" y="4" width="3" height="7" rx="0.6"/><rect x="10" y="2" width="3" height="9" rx="0.6"/><rect x="15" y="0" width="3" height="11" rx="0.6"/></svg>
        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M1 7a8 8 0 0 1 14 0M3.5 9a5 5 0 0 1 9 0M6 11a2.2 2.2 0 0 1 4 0"/></svg>
        <svg width="26" height="12" viewBox="0 0 26 12" fill="none" stroke="currentColor" strokeWidth="1"><rect x="0.5" y="0.5" width="22" height="11" rx="2.5"/><rect x="2" y="2" width="18" height="8" rx="1" fill="currentColor"/><rect x="23" y="4" width="2" height="4" rx="0.6" fill="currentColor"/></svg>
      </span>
    </div>
  );
}

function MobileHeader() {
  const [open, setOpen] = React.useState(false);
  return (
    <header style={{ padding: "10px 16px 6px", position: "relative", zIndex: 20 }}>
      <div style={{
        background: "rgba(255,255,255,0.78)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(255,255,255,0.7)",
        boxShadow: "0 4px 14px rgba(15,12,39,0.06)",
        borderRadius: 999,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "8px 8px 8px 14px",
      }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <img src="assets/logo-mark.png" alt="" style={{ height: 34 }} />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: "var(--h2h-ink)", letterSpacing: "-0.01em" }}>Hike2Heal</span>
            <span style={{ fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: 8.5, color: "var(--h2h-slate)", letterSpacing: "0.22em", textTransform: "uppercase", marginTop: 3 }}>Recovery CIC</span>
          </div>
        </a>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          <a className="btn btn-primary btn-sm" href="#" style={{ padding: "9px 16px", fontSize: 13 }}>Join</a>
          <button onClick={() => setOpen(!open)} aria-label="menu" style={{ width: 38, height: 38, borderRadius: 999, background: "#fff", border: "1px solid var(--h2h-line)", color: "var(--h2h-ink)", display: "grid", placeItems: "center", cursor: "pointer" }}>
            <Icons.Menu size={18} weight={2.2} />
          </button>
        </div>
      </div>
    </header>
  );
}

function MobileHero() {
  return (
    <section style={{ padding: "16px 16px 0", position: "relative" }}>
      <div className="blob" style={{ width: 260, height: 260, background: "radial-gradient(closest-side, rgba(123,47,255,0.22), transparent)", top: -80, left: -60 }} />

      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 12px 6px 6px", borderRadius: 999, background: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.9)", boxShadow: "0 2px 10px rgba(15,12,39,0.06)", marginTop: 12, marginBottom: 18 }}>
        <span style={{ width: 22, height: 22, borderRadius: 999, background: "var(--h2h-success-tint)", color: "var(--h2h-sage-deep)", display: "grid", placeItems: "center" }}>
          <Icons.Leaf size={12} weight={2.4} />
        </span>
        <span style={{ fontFamily: "var(--font-ui)", fontSize: 11.5, fontWeight: 500, color: "var(--h2h-ink)" }}>Birmingham community charity · est. 2019</span>
      </div>

      <h1 className="h-display" style={{ fontSize: 50, letterSpacing: "-0.03em" }}>
        Healing<br />through nature,<br />
        <span style={{ fontStyle: "italic", fontWeight: 600, background: "linear-gradient(110deg, #7B2FFF, #D72ADF 60%, #FF3DC8)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" }}>together.</span>
      </h1>
      <p className="lede-lg" style={{ fontSize: 16, marginTop: 18 }}>
        A Birmingham charity walking alongside people in recovery from addiction, mental‑health challenges, and trauma — through guided hikes, fresh air, and community.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 24 }}>
        <a className="btn btn-primary" href="#" style={{ justifyContent: "center", padding: "16px 22px" }}>Join a hike <Icons.ArrowRight size={16} weight={2.2} /></a>
        <a className="btn btn-secondary" href="#" style={{ justifyContent: "center", padding: "16px 22px" }}>
          <span style={{ width: 22, height: 22, borderRadius: 999, background: "var(--h2h-violet)", color: "#fff", display: "grid", placeItems: "center" }}><Icons.Play size={10} /></span>
          Learn about us
        </a>
      </div>

      {/* image + floating card */}
      <div style={{ position: "relative", marginTop: 32, height: 420 }}>
        <div style={{
          position: "absolute", inset: 0,
          borderRadius: 32, overflow: "hidden",
          boxShadow: "0 20px 50px rgba(15,12,39,0.18)",
        }}>
          <img src="assets/photo-hero-banner.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,12,39,0) 50%, rgba(15,12,39,0.45) 100%)" }} />
        </div>
        <div style={{
          position: "absolute", top: 14, left: 14,
          background: "rgba(255,255,255,0.92)", padding: "6px 12px",
          borderRadius: 999, display: "inline-flex", alignItems: "center", gap: 8,
          fontFamily: "var(--font-ui)", fontSize: 11.5, fontWeight: 500, color: "var(--h2h-ink)",
          boxShadow: "0 4px 12px rgba(15,12,39,0.12)",
        }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--h2h-success)" }} />
          This Sat · 8 spots
        </div>

        <div style={{
          position: "absolute", bottom: -28, left: 12, right: 12,
          background: "#fff", borderRadius: 18, padding: 12,
          display: "flex", alignItems: "center", gap: 12,
          boxShadow: "0 18px 40px rgba(15,12,39,0.18)",
          border: "1px solid rgba(15,12,39,0.05)",
        }}>
          <div style={{ width: 56, height: 56, borderRadius: 14, overflow: "hidden", flexShrink: 0 }}>
            <img src="assets/photo-forest-bathing.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <span className="pill pill-violet" style={{ fontSize: 10, padding: "3px 8px" }}>Next hike</span>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14.5, color: "var(--h2h-ink)", marginTop: 4, lineHeight: 1.2 }}>
              Sunrise · Lickey Hills
            </div>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: 11, color: "var(--h2h-slate)", marginTop: 2 }}>
              Sat 24 May · Worcestershire
            </div>
          </div>
          <a href="#" style={{ width: 36, height: 36, borderRadius: 999, background: "var(--grad-brand)", color: "#fff", display: "grid", placeItems: "center", textDecoration: "none", flexShrink: 0 }}>
            <Icons.ArrowUpRight size={14} weight={2.4} />
          </a>
        </div>
      </div>

      {/* trust strip */}
      <div style={{ marginTop: 50, display: "flex", alignItems: "center", gap: 14, justifyContent: "center" }}>
        <div style={{ display: "flex" }}>
          {["photo-portrait-man.jpg", "photo-recovery-walk.jpg", "photo-mountain-group.jpg"].map((p, i) => (
            <div key={p} style={{ width: 34, height: 34, borderRadius: 999, marginLeft: i === 0 ? 0 : -10, border: "2.5px solid #fff", backgroundImage: `url(assets/${p})`, backgroundSize: "cover", boxShadow: "0 2px 6px rgba(15,12,39,0.12)" }} />
          ))}
        </div>
        <div style={{ fontFamily: "var(--font-ui)", fontSize: 12.5, color: "var(--h2h-slate)" }}>
          <span style={{ color: "var(--h2h-ink)", fontWeight: 600 }}>1,200+</span> hikers walked with us
        </div>
      </div>
    </section>
  );
}

function MobileMarquee() {
  const items = ["Walk with us", "Heal together", "Find your people", "Breathe", "Connection"];
  const Row = () => (
    <div style={{ display: "flex", gap: 32, alignItems: "center", padding: "0 16px", flexShrink: 0 }} aria-hidden>
      {items.map((t, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap" }}>
          <img src="assets/logo-mark.png" alt="" style={{ height: 20, opacity: 0.85 }} />
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, letterSpacing: "-0.01em", color: "var(--h2h-ink)" }}>{t}</span>
        </div>
      ))}
    </div>
  );
  return (
    <section style={{ background: "var(--h2h-violet-tint)", padding: "20px 0", overflow: "hidden", marginTop: 40 }}>
      <div className="marquee" style={{ gap: 32 }}>
        <Row /><Row />
      </div>
    </section>
  );
}

function MobileAbout() {
  return (
    <section style={{ padding: "60px 16px" }}>
      <div className="eyebrow" style={{ marginBottom: 14 }}>Our story</div>
      <h2 className="h-section" style={{ fontSize: 40, color: "var(--h2h-forest)" }}>
        We walk with purpose,<br />
        <span style={{ color: "var(--h2h-ink)" }}>at the pace of</span><br />
        <em style={{ fontWeight: 600, color: "var(--h2h-violet)" }}>the person next to us.</em>
      </h2>
      <p style={{ marginTop: 20, fontSize: 16.5, lineHeight: 1.6, color: "var(--h2h-ink-2)" }}>
        Hike2Heal began on a muddy footpath outside Birmingham — a handful of people in recovery, finding it easier to talk shoulder‑to‑shoulder.
      </p>
      <p style={{ marginTop: 12, fontSize: 16.5, lineHeight: 1.6, color: "var(--h2h-ink-2)" }}>
        Today we're <strong style={{ color: "var(--h2h-ink)" }}>1,200+ walkers</strong>, hosting guided hikes across the Midlands for anyone navigating addiction, mental‑health challenges, or trauma.
      </p>

      {/* photo collage */}
      <div style={{ marginTop: 28, position: "relative", height: 360 }}>
        <div style={{ position: "absolute", left: 0, top: 0, width: "62%", height: 280, borderRadius: 22, overflow: "hidden", boxShadow: "0 18px 40px rgba(15,12,39,0.14)" }}>
          <img src="assets/photo-mountain-group.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ position: "absolute", right: 0, bottom: 0, width: "55%", height: 220, borderRadius: 22, overflow: "hidden", border: "5px solid #fff", boxShadow: "0 18px 40px rgba(15,12,39,0.14)" }}>
          <img src="assets/photo-trail-hikers.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{
          position: "absolute", top: 130, right: 8,
          background: "#fff", borderRadius: 16, padding: "10px 12px",
          display: "flex", alignItems: "center", gap: 10,
          boxShadow: "0 14px 30px rgba(15,12,39,0.16)",
          border: "1px solid rgba(15,12,39,0.06)",
          zIndex: 3,
        }}>
          <span style={{ width: 32, height: 32, borderRadius: 999, background: "var(--grad-brand)", color: "#fff", display: "grid", placeItems: "center" }}>
            <Icons.Heart2 size={15} />
          </span>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12.5, color: "var(--h2h-ink)" }}>Pay-what-you-can</div>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: 10.5, color: "var(--h2h-slate)" }}>Bursary places held year-round.</div>
          </div>
        </div>
      </div>

      {/* stats */}
      <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", border: "1px solid var(--h2h-line)", borderRadius: 18, overflow: "hidden", background: "#fff" }}>
        {[{v:"2019",l:"Founded"},{v:"60+",l:"Hikes hosted"},{v:"£12+",l:"Per hike"}].map((s,i)=>(
          <div key={s.l} style={{ padding: 16, borderLeft: i===0?"none":"1px solid var(--h2h-line)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "var(--h2h-ink)", letterSpacing: "-0.02em" }}>{s.v}</div>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: 11.5, color: "var(--h2h-slate)", marginTop: 4 }}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MobileMission() {
  const values = [
    { Ic: Icons.Leaf, title: "Nature therapy", body: "Open skies, soft trails, time to think.", tone: { bg: "#E7F1E5", fg: "#3F5E3F" } },
    { Ic: Icons.Users, title: "Community & belonging", body: "Friendships that last past the car park.", tone: { bg: "var(--h2h-violet-tint)", fg: "var(--h2h-violet)" } },
    { Ic: Icons.Hand, title: "Recovery without judgement", body: "We walk at your pace. No questions.", tone: { bg: "#F7ECE0", fg: "#8C5A36" } },
    { Ic: Icons.Sun, title: "Hope & growth", body: "Small steps. Real ground covered.", tone: { bg: "#FFF4C8", fg: "#8A6E14" } },
  ];
  return (
    <section style={{ padding: "60px 16px" }}>
      <div className="eyebrow" style={{ marginBottom: 14 }}>Our mission</div>
      <h2 className="h-section" style={{ fontSize: 40, color: "var(--h2h-forest)" }}>
        Four ideas that keep us walking forward.
      </h2>
      <p className="lede-lg" style={{ marginTop: 16, fontSize: 16 }}>
        Recovery isn't a journey to walk alone — every step is stronger taken together.
      </p>
      <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 14 }}>
        {values.map((v) => (
          <div key={v.title} style={{ background: "#fff", border: "1px solid rgba(15,12,39,0.06)", borderRadius: 22, padding: 18, display: "flex", gap: 14, boxShadow: "0 2px 8px rgba(15,12,39,0.03)" }}>
            <div style={{ width: 52, height: 52, borderRadius: 16, background: v.tone.bg, color: v.tone.fg, display: "grid", placeItems: "center", flexShrink: 0 }}>
              <v.Ic size={24} weight={2} />
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, color: "var(--h2h-ink)", lineHeight: 1.2 }}>{v.title}</div>
              <div style={{ fontSize: 14.5, lineHeight: 1.5, color: "var(--h2h-slate)", marginTop: 6 }}>{v.body}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MobileJourney() {
  return (
    <section style={{ padding: "12px 12px 40px" }}>
      <div style={{ background: "var(--h2h-violet-tint)", borderRadius: 32, padding: "32px 18px", position: "relative", overflow: "hidden" }}>
        <div className="blob" style={{ width: 200, height: 200, background: "radial-gradient(closest-side, rgba(255,61,200,0.22), transparent)", bottom: -60, left: -50 }} />
        <div style={{ position: "relative" }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>Take part</div>
          <h2 className="h-section" style={{ fontSize: 38 }}>Join the journey<br/>with us.</h2>
          <p className="lede-lg" style={{ marginTop: 14, fontSize: 15.5 }}>
            Every hike is a chance to connect, heal, and grow — whether you're in recovery yourself or walking in support of others.
          </p>

          {/* feature photo card */}
          <a href="#" style={{ marginTop: 22, display: "block", position: "relative", borderRadius: 24, overflow: "hidden", textDecoration: "none", boxShadow: "0 16px 40px rgba(15,12,39,0.18)" }}>
            <div style={{ aspectRatio: "4/5" }}>
              <img src="assets/photo-mountain-group.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,12,39,0) 40%, rgba(15,12,39,0.78) 100%)" }} />
            </div>
            <div style={{ position: "absolute", top: 14, left: 14 }}>
              <span className="pill pill-light"><Icons.Sparkle size={12} weight={2.4} /> Most popular</span>
            </div>
            <div style={{ position: "absolute", bottom: 18, left: 18, right: 18, color: "#fff" }}>
              <div style={{ width: 46, height: 46, borderRadius: 14, background: "rgba(255,255,255,0.18)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.3)", display: "grid", placeItems: "center", marginBottom: 14 }}>
                <Icons.Heart size={22} weight={2} />
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28, lineHeight: 1.1, letterSpacing: "-0.01em" }}>Join a group hike</div>
              <div style={{ fontSize: 14, lineHeight: 1.5, opacity: 0.88, marginTop: 8, marginBottom: 14 }}>Guided hikes across stunning landscapes — safe, supportive, and uplifting.</div>
              <span className="btn btn-sm" style={{ background: "#fff", color: "var(--h2h-ink)", padding: "10px 16px", fontSize: 13 }}>Book a place <Icons.ArrowRight size={13} weight={2.4} /></span>
            </div>
          </a>

          {/* 3 stacked smaller */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 14 }}>
            {[
              { Ic: Icons.Users, title: "Bring a friend", body: "Recovery is stronger together. Invite someone to share the walk.", tone: "#FFE9DC", fg: "#C76B3C", cta: "Send an invite" },
              { Ic: Icons.Compass, title: "Start your journey", body: "New to Hike2Heal? Begin with a beginner-friendly walk.", tone: "#1A1A31", fg: "#fff", dark: true, cta: "First‑time hikes" },
              { Ic: Icons.Message, title: "Stay connected", body: "One warm email a month — stories, hikes, ways to take part.", tone: "#E7F1E5", fg: "#3F5E3F", cta: "Stay in the loop" },
            ].map((c) => (
              <div key={c.title} style={{ background: c.dark ? "var(--h2h-ink)" : "#fff", color: c.dark ? "#fff" : "var(--h2h-ink)", borderRadius: 20, padding: 18, display: "flex", gap: 14, alignItems: "center", border: c.dark ? "none" : "1px solid rgba(15,12,39,0.05)" }}>
                <div style={{ width: 46, height: 46, borderRadius: 14, background: c.tone, color: c.fg, display: "grid", placeItems: "center", flexShrink: 0 }}>
                  <c.Ic size={22} weight={2} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, lineHeight: 1.2 }}>{c.title}</div>
                  <div style={{ fontSize: 13, lineHeight: 1.5, color: c.dark ? "rgba(255,255,255,0.7)" : "var(--h2h-slate)", marginTop: 4 }}>{c.body}</div>
                </div>
                <Icons.ArrowRight size={18} weight={2.2} style={{ color: c.dark ? "#fff" : "var(--h2h-violet)", flexShrink: 0 }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileAdventures() {
  const items = [
    { title: "Ben Nevis at first light", img: "photo-mountain-group.jpg", location: "Scotland", date: "28 Jan", read: "7 min" },
    { title: "Four Waterfalls", img: "photo-trail-hikers.jpg", location: "Brecon Beacons", date: "05 Feb", read: "5 min" },
    { title: "Forest bathing", img: "photo-forest-bathing.jpg", location: "West Devon", date: "14 Dec", read: "4 min" },
    { title: "Bell-tent weekend", img: "photo-bell-tent.jpg", location: "Dorset", date: "18 Oct", read: "6 min" },
  ];
  return (
    <section style={{ padding: "60px 0" }}>
      <div style={{ padding: "0 16px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 16, marginBottom: 20 }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Stories from the trail</div>
          <h2 className="h-section" style={{ fontSize: 36 }}>Recent adventures.</h2>
        </div>
        <a href="#" style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, color: "var(--h2h-violet)", whiteSpace: "nowrap", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4 }}>
          See all <Icons.ArrowRight size={13} weight={2.4} />
        </a>
      </div>

      {/* horizontal scroller */}
      <div style={{ display: "flex", gap: 14, overflowX: "auto", padding: "8px 16px 16px", scrollSnapType: "x mandatory" }}>
        {items.map((a, i) => (
          <a key={a.title} href="#" style={{ flexShrink: 0, width: 256, scrollSnapAlign: "start", textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ position: "relative", borderRadius: 22, overflow: "hidden", aspectRatio: "4/5", boxShadow: "0 8px 24px rgba(15,12,39,0.12)" }}>
              <img src={`assets/${a.img}`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", top: 12, left: 12 }}>
                <span className="pill pill-light" style={{ fontSize: 11, padding: "5px 10px" }}><Icons.Pin size={10} weight={2.4} /> {a.location}</span>
              </div>
              <div style={{ position: "absolute", top: 12, right: 12 }}>
                <span className="pill pill-light" style={{ fontSize: 11, padding: "5px 10px", background: "rgba(15,12,39,0.55)", color: "#fff", backdropFilter: "blur(8px)" }}>{a.read}</span>
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-ui)", fontSize: 11.5, color: "var(--h2h-slate)", letterSpacing: "0.04em", textTransform: "uppercase", fontWeight: 600 }}>{a.date} '25</div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 19, color: "var(--h2h-forest)", marginTop: 4, lineHeight: 1.2, letterSpacing: "-0.01em" }}>{a.title}</div>
              <div style={{ marginTop: 6, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12.5, color: "var(--h2h-violet)", display: "inline-flex", alignItems: "center", gap: 4 }}>Read story <Icons.ArrowRight size={12} weight={2.4} /></div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function MobileImpact() {
  return (
    <section style={{ padding: "8px 12px 40px" }}>
      <div style={{ background: "var(--h2h-ink)", borderRadius: 32, padding: "40px 22px", position: "relative", overflow: "hidden", color: "#fff" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(70% 70% at 80% 20%, rgba(255,61,200,0.36), transparent 60%), radial-gradient(60% 60% at 20% 100%, rgba(123,47,255,0.44), transparent 60%)" }} />
        <div style={{ position: "relative", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 12px", borderRadius: 999, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.16)", marginBottom: 22 }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--h2h-pink)" }} />
            <span style={{ fontFamily: "var(--font-ui)", fontSize: 11.5, color: "rgba(255,255,255,0.88)" }}>Community impact</span>
          </div>
          <div style={{
            fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: 110, lineHeight: 0.9, letterSpacing: "-0.04em",
            background: "linear-gradient(110deg, #FFFFFF, #CBA3FF 50%, #FF3DC8)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            1,200<span style={{ fontSize: 72 }}>+</span>
          </div>
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 18, margin: "10px 0 22px", textWrap: "balance" }}>
            people have already hiked with us — and the trail is just getting started.
          </p>
          <a className="btn btn-primary" href="#" style={{ padding: "14px 22px" }}>See upcoming events <Icons.ArrowRight size={15} weight={2.2} /></a>
        </div>

        <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(255,255,255,0.1)", borderRadius: 18, overflow: "hidden" }}>
          {[
            { v: "60+", l: "Guided hikes" },
            { v: "4,800+", l: "Trail miles" },
            { v: "12", l: "Trails · 3 countries" },
            { v: "95%", l: "Would walk again" },
          ].map((s) => (
            <div key={s.l} style={{ padding: 18, background: "rgba(255,255,255,0.04)" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28, letterSpacing: "-0.02em", color: "#fff" }}>{s.v}</div>
              <div style={{ fontFamily: "var(--font-ui)", fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MobileGallery() {
  const photos = [
    { img: "photo-mountain-group.jpg", h: 220, caption: "Snowdonia · April 25" },
    { img: "photo-trail-hikers.jpg", h: 160 },
    { img: "photo-people-hands.jpg", h: 200, caption: "Mam Tor" },
    { img: "photo-portrait-man.jpg", h: 240 },
    { img: "photo-recovery-walk.jpg", h: 180 },
    { img: "photo-bell-tent.jpg", h: 220, caption: "Bell‑tent, Dorset" },
  ];
  return (
    <section style={{ padding: "40px 16px" }}>
      <div className="eyebrow" style={{ marginBottom: 12 }}>Our community, off‑duty</div>
      <h2 className="h-section" style={{ fontSize: 36 }}>Moments from the trail.</h2>
      <p className="lede-lg" style={{ marginTop: 14, fontSize: 15.5, marginBottom: 24 }}>
        Real walks, real people, no filters.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {photos.map((p, i) => (
          <a key={i} href="#" style={{ position: "relative", borderRadius: 18, overflow: "hidden", display: "block", height: p.h, boxShadow: "0 6px 16px rgba(15,12,39,0.08)" }}>
            <img src={`assets/${p.img}`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            {p.caption && (
              <>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,12,39,0) 55%, rgba(15,12,39,0.72) 100%)" }} />
                <div style={{ position: "absolute", bottom: 10, left: 10, right: 10, color: "#fff", fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: 11.5 }}>{p.caption}</div>
              </>
            )}
          </a>
        ))}
      </div>
      <a className="btn btn-secondary" href="#" style={{ marginTop: 20, width: "100%", justifyContent: "center", padding: "14px 22px" }}>
        View the full gallery <Icons.ArrowRight size={14} weight={2.2} />
      </a>
    </section>
  );
}

function MobileTestimonial() {
  return (
    <section style={{ padding: "40px 12px" }}>
      <div className="eyebrow" style={{ marginBottom: 14, marginLeft: 4 }}>Voices from our community</div>
      <h2 className="h-section" style={{ fontSize: 32, marginLeft: 4 }}>What walking with us actually feels like.</h2>

      <div style={{ marginTop: 22, position: "relative", borderRadius: 28, overflow: "hidden", padding: 14, background: "linear-gradient(135deg, rgba(123,47,255,0.45), rgba(255,61,200,0.36)), url(assets/photo-field-testimonial.png) center/cover no-repeat", boxShadow: "0 20px 50px rgba(15,12,39,0.2)" }}>
        <div style={{ background: "rgba(255,255,255,0.96)", backdropFilter: "blur(12px)", borderRadius: 22, padding: 22 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
            <div style={{ width: 44, height: 44, borderRadius: 14, background: "var(--grad-brand)", color: "#fff", display: "grid", placeItems: "center", boxShadow: "0 8px 18px rgba(123,47,255,0.34)" }}>
              <Icons.Quote size={20} weight={2.2} />
            </div>
            <div style={{ display: "flex", gap: 3, color: "var(--h2h-violet)" }}>
              {[0,1,2,3,4].map(i => <Icons.Star key={i} size={14} />)}
            </div>
          </div>
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 19, lineHeight: 1.4, color: "var(--h2h-ink)", margin: 0, letterSpacing: "-0.01em" }}>
            &ldquo;I was terrified turning up alone. The team made me feel safe from the first step. I left lighter than I arrived.&rdquo;
          </p>
          <div style={{ marginTop: 22, display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 42, height: 42, borderRadius: 999, backgroundImage: "url(assets/photo-recovery-walk.jpg)", backgroundSize: "cover", border: "2.5px solid #fff", boxShadow: "var(--shadow-sm)" }} />
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, color: "var(--h2h-ink)" }}>Priya S.</div>
              <div style={{ fontSize: 12.5, color: "var(--h2h-slate)" }}>First hike · Brecon Beacons</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 6, marginTop: 18, justifyContent: "center" }}>
        {[0,1,2].map(i => <span key={i} style={{ display: "block", width: i === 1 ? 24 : 8, height: 5, borderRadius: 999, background: i === 1 ? "var(--h2h-violet)" : "rgba(15,12,39,0.16)" }} />)}
      </div>
    </section>
  );
}

function MobileNewsletter() {
  return (
    <section style={{ padding: "20px 12px 40px" }}>
      <div style={{ background: "linear-gradient(135deg, #1A1A31 0%, #2A1A4C 70%, #4E2BDF 100%)", borderRadius: 28, padding: 26, color: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -40, bottom: -40, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(closest-side, rgba(255,61,200,0.45), transparent)", filter: "blur(30px)" }} />
        <div style={{ position: "relative" }}>
          <div className="eyebrow" style={{ marginBottom: 14, color: "var(--h2h-violet-soft)" }}><span style={{ background: "var(--h2h-violet-soft)" }} />Stay close</div>
          <h2 className="h-display" style={{ fontSize: 32, color: "#fff" }}>
            One warm email<br />a month.
          </h2>
          <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "rgba(255,255,255,0.78)", margin: "12px 0 18px" }}>
            Upcoming hikes, stories, and ways to take part. Unsubscribe with one click.
          </p>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <input placeholder="you@email.com" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 999, padding: "14px 18px", outline: "none", fontFamily: "var(--font-body)", fontSize: 15, color: "#fff" }} />
            <button className="btn btn-primary" style={{ padding: "14px 22px", justifyContent: "center" }}>Sign me up <Icons.ArrowRight size={15} weight={2.2} /></button>
          </form>
        </div>
      </div>
    </section>
  );
}

function MobileFooter() {
  return (
    <footer style={{ background: "var(--h2h-violet-tint)", padding: "44px 18px 24px", position: "relative", overflow: "hidden" }}>
      <img src="assets/logo-mark.png" alt="" style={{ position: "absolute", right: -60, bottom: -60, width: 240, opacity: 0.08 }} />
      <div style={{ position: "relative" }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 14 }}>
          <img src="assets/logo-mark.png" alt="" style={{ height: 44 }} />
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "var(--h2h-ink)" }}>Hike2Heal</div>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: 10, color: "var(--h2h-slate)", letterSpacing: "0.22em", textTransform: "uppercase", marginTop: 2 }}>Recovery CIC</div>
          </div>
        </a>
        <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--h2h-ink-2)", margin: "0 0 22px" }}>
          A Birmingham charity using nature, movement, and community to support people in recovery.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
          <div>
            <h6 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, color: "var(--h2h-violet)", margin: "0 0 12px" }}>Walk with us</h6>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {["Upcoming hikes", "First‑timers", "Bring a friend", "Volunteer"].map(l => <li key={l}><a href="#" style={{ color: "var(--h2h-ink)", textDecoration: "none", fontSize: 13.5 }}>{l}</a></li>)}
            </ul>
          </div>
          <div>
            <h6 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, color: "var(--h2h-violet)", margin: "0 0 12px" }}>About</h6>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
              {["Our story", "Mission", "Stories", "Contact"].map(l => <li key={l}><a href="#" style={{ color: "var(--h2h-ink)", textDecoration: "none", fontSize: 13.5 }}>{l}</a></li>)}
            </ul>
          </div>
        </div>

        <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--h2h-ink)", fontSize: 14 }}>
            <span style={{ width: 28, height: 28, borderRadius: 999, background: "rgba(123,47,255,0.12)", color: "var(--h2h-violet)", display: "grid", placeItems: "center" }}><Icons.Mail size={14} weight={2.2} /></span>
            hello@hike2heal.org.uk
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--h2h-ink)", fontSize: 14 }}>
            <span style={{ width: 28, height: 28, borderRadius: 999, background: "rgba(123,47,255,0.12)", color: "var(--h2h-violet)", display: "grid", placeItems: "center" }}><Icons.Pin size={14} weight={2.2} /></span>
            Birmingham, UK
          </div>
        </div>

        <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
          {[Icons.Facebook, Icons.Instagram, Icons.X].map((Ic, i) => (
            <a key={i} href="#" style={{ width: 38, height: 38, borderRadius: 999, background: "#fff", color: "var(--h2h-violet)", border: "1px solid rgba(123,47,255,0.18)", display: "grid", placeItems: "center" }}>
              <Ic size={15} weight={2.2} />
            </a>
          ))}
        </div>

        <div style={{ marginTop: 28, paddingTop: 18, borderTop: "1px solid rgba(123,47,255,0.18)", fontFamily: "var(--font-ui)", fontSize: 11.5, color: "var(--h2h-slate)", textAlign: "center" }}>
          © {new Date().getFullYear()} Hike2Heal Recovery CIC.
        </div>
      </div>
    </footer>
  );
}

window.MobileHomepage = MobileHomepage;
