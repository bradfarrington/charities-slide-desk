// ===========================================================
//  Desktop — Header + Hero + Marquee
// ===========================================================
const dPx = (n) => `${n}px`;

function DesktopHeader() {
  return (
    <header style={{ padding: "20px 32px 0", position: "relative", zIndex: 20 }}>
      <div style={{
        background: "rgba(255,255,255,0.62)",
        backdropFilter: "blur(18px) saturate(150%)",
        WebkitBackdropFilter: "blur(18px) saturate(150%)",
        border: "1px solid rgba(255,255,255,0.7)",
        boxShadow: "0 6px 20px rgba(15,12,39,0.06)",
        borderRadius: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "10px 14px 10px 22px",
      }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <img src="assets/logo-mark.png" alt="" style={{ height: 44, width: "auto" }} />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "var(--h2h-ink)", letterSpacing: "-0.01em" }}>Hike2Heal</span>
            <span style={{ fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: 10, color: "var(--h2h-slate)", letterSpacing: "0.22em", textTransform: "uppercase", marginTop: 3 }}>Recovery CIC</span>
          </div>
        </a>
        <nav style={{ display: "flex", gap: 4, alignItems: "center" }}>
          <a className="nav-link is-active" href="#">Home</a>
          <a className="nav-link" href="#">About us <Icons.Chevron size={14} weight={2.2} /></a>
          <a className="nav-link" href="#">Hikes & events <Icons.Chevron size={14} weight={2.2} /></a>
          <a className="nav-link" href="#">Stories</a>
          <a className="nav-link" href="#">Contact</a>
        </nav>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <a className="btn btn-ghost btn-sm" href="#" style={{ background: "transparent", borderColor: "rgba(15,12,39,0.14)" }}>
            <Icons.Heart size={15} weight={2.1} /> Donate
          </a>
          <a className="btn btn-primary btn-sm" href="#">Join a hike <Icons.ArrowRight size={15} weight={2.2} /></a>
        </div>
      </div>
    </header>
  );
}

// --------------------------------------------------------
// HERO — editorial split. Headline left, tall photo right.
// "Next Saturday" event card floats over bottom of the photo.
// --------------------------------------------------------
function DesktopHero({ onNav }) {
  return (
    <section style={{ padding: "36px 40px 80px", position: "relative", overflow: "hidden" }}>
      {/* soft gradient wash behind */}
      <div className="blob" style={{ width: 520, height: 520, background: "radial-gradient(closest-side, rgba(123,47,255,0.22), transparent)", top: -120, left: -120 }} />
      <div className="blob" style={{ width: 460, height: 460, background: "radial-gradient(closest-side, rgba(255,61,200,0.18), transparent)", top: 260, right: -100 }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 56, alignItems: "center", position: "relative" }}>
        {/* LEFT — text */}
        <div style={{ paddingTop: 24, paddingBottom: 24 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 14px 8px 8px", borderRadius: 999, background: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.9)", boxShadow: "0 2px 12px rgba(15,12,39,0.05)", marginBottom: 28 }}>
            <span style={{ width: 28, height: 28, borderRadius: 999, background: "var(--h2h-success-tint)", color: "var(--h2h-sage-deep)", display: "grid", placeItems: "center" }}>
              <Icons.Leaf size={15} weight={2.2} />
            </span>
            <span style={{ fontFamily: "var(--font-ui)", fontSize: 13, fontWeight: 500, color: "var(--h2h-ink)" }}>
              A Birmingham community charity — est. 2019
            </span>
          </div>

          <h1 className="h-display" style={{ fontSize: 88, letterSpacing: "-0.03em" }}>
            Healing<br/>
            through nature,<br/>
            <span style={{ fontStyle: "italic", fontWeight: 600, background: "linear-gradient(110deg, #7B2FFF, #D72ADF 60%, #FF3DC8)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" }}>together.</span>
          </h1>

          <p className="lede-lg" style={{ marginTop: 28, maxWidth: 520, fontSize: 19 }}>
            Hike2Heal is a Birmingham‑based charity walking alongside people in recovery from addiction, mental‑health challenges, and trauma — through guided hikes, fresh air, and the kind of community where every step matters.
          </p>

          <div style={{ display: "flex", gap: 14, marginTop: 36, alignItems: "center" }}>
            <a className="btn btn-primary" href="#" onClick={(e)=>{e.preventDefault(); onNav?.("booking");}}>Join a hike <Icons.ArrowRight size={17} weight={2.2} /></a>
            <a className="btn btn-secondary" href="#">
              <span style={{ width: 26, height: 26, borderRadius: 999, background: "var(--h2h-violet)", color: "#fff", display: "grid", placeItems: "center", marginRight: 2 }}><Icons.Play size={11} /></span>
              Learn about us
            </a>
          </div>

          {/* Trust strip */}
          <div style={{ marginTop: 48, display: "flex", alignItems: "center", gap: 24 }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              {["photo-portrait-man.jpg", "photo-recovery-walk.jpg", "photo-mountain-group.jpg", "photo-trail-hikers.jpg"].map((p, i) => (
                <div key={p} style={{
                  width: 42, height: 42, borderRadius: 999, marginLeft: i === 0 ? 0 : -14,
                  border: "3px solid #fff", boxShadow: "0 2px 8px rgba(15,12,39,0.12)",
                  backgroundImage: `url(assets/${p})`, backgroundSize: "cover", backgroundPosition: "center",
                }} />
              ))}
              <div style={{ width: 42, height: 42, borderRadius: 999, marginLeft: -14, border: "3px solid #fff", background: "var(--h2h-violet-tint)", color: "var(--h2h-violet)", display: "grid", placeItems: "center", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 12 }}>1.2k+</div>
            </div>
            <div>
              <div style={{ display: "flex", gap: 2, color: "var(--h2h-violet)", marginBottom: 2 }}>
                {[0,1,2,3,4].map(i => <Icons.Star key={i} size={15} />)}
              </div>
              <div style={{ fontSize: 13, color: "var(--h2h-slate)", fontFamily: "var(--font-ui)" }}>
                <span style={{ color: "var(--h2h-ink)", fontWeight: 600 }}>1,200+</span> hikers · <span style={{ color: "var(--h2h-ink)", fontWeight: 600 }}>60+</span> guided walks
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — tall rounded image with floating event card */}
        <div style={{ position: "relative", height: 720 }}>
          {/* decorative chip top-right */}
          <div style={{
            position: "absolute", top: 22, right: 22, zIndex: 4,
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(10px)",
            borderRadius: 999,
            padding: "10px 16px",
            display: "inline-flex", alignItems: "center", gap: 10,
            border: "1px solid rgba(255,255,255,0.6)",
            boxShadow: "0 8px 24px rgba(15,12,39,0.12)",
          }}>
            <span style={{ width: 10, height: 10, borderRadius: 999, background: "var(--h2h-success)", boxShadow: "0 0 0 4px rgba(82,219,130,0.22)" }} />
            <span style={{ fontFamily: "var(--font-ui)", fontSize: 13, fontWeight: 500, color: "var(--h2h-ink)" }}>This Saturday · 8 spots left</span>
          </div>

          {/* small portrait — peeks behind the main photo at top-left */}
          <div style={{
            position: "absolute", top: 0, left: -28, zIndex: 1,
            width: 210, height: 270,
            borderRadius: 24, overflow: "hidden",
            boxShadow: "0 14px 40px rgba(15,12,39,0.18)",
            transform: "rotate(-5deg)",
            border: "8px solid #fff",
          }}>
            <img src="assets/photo-people-hands.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>

          {/* main image */}
          <div style={{
            position: "absolute", inset: 0,
            borderRadius: 50,
            overflow: "hidden",
            boxShadow: "0 30px 80px rgba(15,12,39,0.18)",
            zIndex: 2,
          }}>
            <img src="assets/photo-hero-banner.jpg" alt="Hikers on a sunset ridge" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,12,39,0) 50%, rgba(15,12,39,0.45) 100%)" }} />
          </div>

          {/* floating "Next hike" event card */}
          <div style={{
            position: "absolute", bottom: -38, left: -36, zIndex: 5,
            background: "#fff", borderRadius: 24,
            padding: 18,
            display: "flex", alignItems: "center", gap: 16,
            boxShadow: "0 24px 60px rgba(15,12,39,0.16)",
            border: "1px solid rgba(15,12,39,0.05)",
            maxWidth: 360,
          }}>
            <div style={{ width: 76, height: 76, borderRadius: 16, overflow: "hidden", flexShrink: 0 }}>
              <img src="assets/photo-forest-bathing.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                <span className="pill pill-violet" style={{ fontSize: 11, padding: "4px 10px" }}>Next hike</span>
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, color: "var(--h2h-ink)", lineHeight: 1.15, marginBottom: 4 }}>
                Sunrise walk · Lickey Hills
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "var(--font-ui)", fontSize: 12.5, color: "var(--h2h-slate)" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><Icons.Calendar size={13} weight={2.2} />Sat 24 May</span>
                <span className="dot-sep" />
                <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><Icons.Pin size={13} weight={2.2} />Worcestershire</span>
              </div>
            </div>
            <a href="#" onClick={(e)=>{e.preventDefault(); onNav?.("event");}} style={{ width: 40, height: 40, borderRadius: 999, background: "var(--grad-brand)", color: "#fff", display: "grid", placeItems: "center", textDecoration: "none", boxShadow: "0 8px 18px rgba(123,47,255,0.32)", flexShrink: 0 }}>
              <Icons.ArrowUpRight size={16} weight={2.4} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// --------------------------------------------------------
// Marquee strip
// --------------------------------------------------------
function DesktopMarquee() {
  const items = ["Walk with us", "Heal together", "Find your people", "Breathe", "Connection", "Take the first step", "You belong here"];
  const Row = () => (
    <div style={{ display: "flex", gap: 56, alignItems: "center", padding: "0 28px", flexShrink: 0 }} aria-hidden>
      {items.map((t, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 24, whiteSpace: "nowrap" }}>
          <img src="assets/logo-mark.png" alt="" style={{ height: 28, width: "auto", opacity: 0.85 }} />
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 32, letterSpacing: "-0.01em", color: "var(--h2h-ink)" }}>{t}</span>
        </div>
      ))}
    </div>
  );
  return (
    <section style={{ background: "var(--h2h-violet-tint)", padding: "28px 0", overflow: "hidden", marginTop: 24 }}>
      <div className="marquee">
        <Row /><Row />
      </div>
    </section>
  );
}

window.DesktopHeader = DesktopHeader;
window.DesktopHero = DesktopHero;
window.DesktopMarquee = DesktopMarquee;
