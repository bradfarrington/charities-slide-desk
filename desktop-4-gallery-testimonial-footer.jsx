// ===========================================================
//  Desktop — Gallery + Testimonial + Newsletter + Footer
// ===========================================================

// --------------------------------------------------------
// GALLERY — magazine-style masonry
// --------------------------------------------------------
function DesktopGallery() {
  return (
    <section style={{ padding: "0 40px 100px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 48, marginBottom: 48 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>Our community, off‑duty</div>
            <h2 className="h-section" style={{ fontSize: 60 }}>
              Moments from the trail.
            </h2>
          </div>
          <p className="lede-lg" style={{ maxWidth: 420, justifySelf: "end", paddingBottom: 12 }}>
            Photos from real walks with real people. No filters, no staging — just the bit between the car park and the summit.
          </p>
        </div>

        {/* 12-col masonry */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gridAutoRows: "120px", gap: 18 }}>
          {/* (col, row, span x, span y, photo, caption?, big?) */}
          <GTile c="1 / span 5" r="1 / span 4" img="photo-mountain-group.jpg" caption="Group, Snowdonia · April 25" />
          <GTile c="6 / span 4" r="1 / span 3" img="photo-trail-hikers.jpg" caption="Pen y Fan · Feb 25" />
          <GTile c="10 / span 3" r="1 / span 2" img="photo-portrait-man.jpg" caption="Daniel, hike-lead" />
          <GTile c="10 / span 3" r="3 / span 3" img="photo-recovery-walk.jpg" />
          <GTile c="6 / span 4" r="4 / span 3" img="photo-people-hands.jpg" caption="Hands and hot tea, Mam Tor" />
          <GTile c="1 / span 5" r="5 / span 3" img="photo-bell-tent.jpg" caption="Bell-tent weekend, Dorset · Oct 24" />
        </div>

        <div style={{ marginTop: 36, display: "flex", justifyContent: "center" }}>
          <a className="btn btn-secondary" href="#">View the full gallery <Icons.ArrowRight size={15} weight={2.2} /></a>
        </div>
      </div>
    </section>
  );
}

function GTile({ c, r, img, caption }) {
  return (
    <a href="#" style={{ gridColumn: c, gridRow: r, position: "relative", borderRadius: 22, overflow: "hidden", display: "block", boxShadow: "0 6px 18px rgba(15,12,39,0.08)" }}>
      <img src={`assets/${img}`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      {caption && (
        <>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,12,39,0) 55%, rgba(15,12,39,0.72) 100%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: 14, left: 16, right: 16, color: "#fff", fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: 13, letterSpacing: 0.01, display: "inline-flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--h2h-pink)" }} />
            {caption}
          </div>
        </>
      )}
    </a>
  );
}

// --------------------------------------------------------
// TESTIMONIAL — layered quote card over warm photo
// --------------------------------------------------------
function DesktopTestimonial() {
  const slides = [
    { quote: "Great walk, great people, great organisers. Just done my fourth walk with Hike2Heal — I don't think I've felt this much like myself in years.", who: "Matthew M.", role: "Four-time hiker · Birmingham", avatar: "photo-portrait-man.jpg", bg: "photo-field-testimonial.png" },
    { quote: "I was terrified turning up alone. The team made me feel safe from the first step. I left lighter than I arrived, and signed up for the next one before I'd even got back to the car.", who: "Priya S.", role: "First hike · Brecon Beacons", avatar: "photo-recovery-walk.jpg", bg: "photo-trail-hikers.jpg" },
    { quote: "Walking with this community reminded me I'm not on this on my own. That's what kept me coming back. That's what kept me going.", who: "Daniel R.", role: "Volunteer hike-lead", avatar: "photo-mountain-group.jpg", bg: "photo-forest-bathing.jpg" },
  ];
  const [idx, setIdx] = React.useState(0);
  const s = slides[idx];

  return (
    <section style={{ padding: "60px 40px 100px", position: "relative" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="eyebrow" style={{ marginBottom: 18, justifyContent: "center" }}>Voices from our community</div>
          <h2 className="h-section" style={{ fontSize: 60 }}>What walking with us<br />actually feels like.</h2>
        </div>

        {/* layered card */}
        <div style={{ position: "relative", minHeight: 520 }}>
          {/* hero photo backdrop */}
          <div style={{
            position: "absolute", inset: "0 80px 80px 80px",
            borderRadius: 40, overflow: "hidden",
            boxShadow: "0 30px 70px rgba(15,12,39,0.22)",
          }}>
            <img src={`assets/${s.bg}`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(15,12,39,0.45) 0%, rgba(123,47,255,0.32) 60%, rgba(255,61,200,0.42) 100%)" }} />
          </div>

          {/* white quote card overlapping */}
          <div style={{
            position: "absolute",
            top: 80, left: 0, right: "auto",
            width: 580,
            background: "rgba(255,255,255,0.96)",
            backdropFilter: "blur(14px)",
            borderRadius: 32,
            padding: "44px 44px 36px",
            boxShadow: "0 30px 70px rgba(15,12,39,0.18)",
            border: "1px solid rgba(255,255,255,0.7)",
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 22 }}>
              <div style={{ width: 56, height: 56, borderRadius: 18, background: "var(--grad-brand)", color: "#fff", display: "grid", placeItems: "center", boxShadow: "0 8px 20px rgba(123,47,255,0.34)" }}>
                <Icons.Quote size={26} weight={2.2} />
              </div>
              <div style={{ display: "flex", gap: 3, color: "var(--h2h-violet)" }}>
                {[0,1,2,3,4].map(i => <Icons.Star key={i} size={18} />)}
              </div>
            </div>

            <p style={{
              fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 28,
              lineHeight: 1.35, color: "var(--h2h-ink)", margin: 0, letterSpacing: "-0.01em",
              textWrap: "pretty",
            }}>
              &ldquo;{s.quote}&rdquo;
            </p>

            <div style={{ marginTop: 32, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 52, height: 52, borderRadius: 999, backgroundImage: `url(assets/${s.avatar})`, backgroundSize: "cover", backgroundPosition: "center", border: "3px solid #fff", boxShadow: "var(--shadow-sm)" }} />
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16.5, color: "var(--h2h-ink)" }}>{s.who}</div>
                  <div style={{ fontSize: 13.5, color: "var(--h2h-slate)" }}>{s.role}</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <button onClick={() => setIdx((i) => (i - 1 + slides.length) % slides.length)} aria-label="prev" style={{ width: 44, height: 44, borderRadius: 999, border: "1px solid var(--h2h-line)", background: "#fff", color: "var(--h2h-ink)", cursor: "pointer", display: "grid", placeItems: "center" }}>
                  <Icons.ArrowLeft size={16} weight={2.2} />
                </button>
                <button onClick={() => setIdx((i) => (i + 1) % slides.length)} aria-label="next" style={{ width: 44, height: 44, borderRadius: 999, border: "none", background: "var(--grad-brand)", color: "#fff", cursor: "pointer", display: "grid", placeItems: "center", boxShadow: "var(--shadow-glow)" }}>
                  <Icons.ArrowRight size={16} weight={2.2} />
                </button>
              </div>
            </div>

            <div style={{ display: "flex", gap: 6, marginTop: 24 }}>
              {slides.map((_, i) => (
                <span key={i} onClick={() => setIdx(i)} style={{
                  display: "block", height: 5, width: i === idx ? 36 : 18, borderRadius: 999,
                  background: i === idx ? "var(--h2h-violet)" : "rgba(15,12,39,0.12)",
                  cursor: "pointer", transition: "all 220ms",
                }} />
              ))}
            </div>
          </div>

          {/* right side floating community pill */}
          <div style={{
            position: "absolute", top: 130, right: 60,
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(10px)",
            borderRadius: 999, padding: "12px 20px",
            border: "1px solid rgba(255,255,255,0.6)",
            display: "inline-flex", alignItems: "center", gap: 12,
            boxShadow: "0 14px 30px rgba(15,12,39,0.18)",
          }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              {["photo-portrait-man.jpg", "photo-recovery-walk.jpg", "photo-mountain-group.jpg"].map((p, i) => (
                <div key={p} style={{ width: 32, height: 32, borderRadius: 999, marginLeft: i === 0 ? 0 : -10, border: "2px solid #fff", backgroundImage: `url(assets/${p})`, backgroundSize: "cover", backgroundPosition: "center" }} />
              ))}
            </div>
            <span style={{ fontFamily: "var(--font-ui)", fontSize: 13, fontWeight: 500, color: "var(--h2h-ink)" }}>
              <strong style={{ color: "var(--h2h-violet)" }}>140+</strong> stories shared
            </span>
          </div>

          {/* spacer */}
          <div style={{ height: 600 }} />
        </div>
      </div>
    </section>
  );
}

// --------------------------------------------------------
// NEWSLETTER — calm full-width band
// --------------------------------------------------------
function DesktopNewsletter() {
  return (
    <section style={{ padding: "30px 40px 60px" }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        background: "linear-gradient(135deg, #1A1A31 0%, #2A1A4C 70%, #4E2BDF 100%)",
        borderRadius: 50,
        padding: "72px 80px",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, alignItems: "center",
      }}>
        <div style={{ position: "absolute", right: -60, bottom: -60, width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(closest-side, rgba(255,61,200,0.45), transparent)", filter: "blur(40px)", pointerEvents: "none" }} />
        <div style={{ position: "relative" }}>
          <div className="eyebrow" style={{ marginBottom: 20, color: "var(--h2h-violet-soft)" }}>
            <span style={{ background: "var(--h2h-violet-soft)" }} />
            Stay close to the community
          </div>
          <h2 className="h-display" style={{ fontSize: 54, color: "#fff" }}>
            One warm email a month.<br />
            <span style={{ color: "var(--h2h-violet-soft)" }}>No pressure, ever.</span>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,0.78)", margin: "20px 0 0", maxWidth: 460 }}>
            Upcoming hikes, stories from the trail, and gentle ways to take part. Unsubscribe with one click.
          </p>
        </div>
        <form onSubmit={(e) => e.preventDefault()} style={{ position: "relative", display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ display: "flex", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 999, padding: 6 }}>
            <input placeholder="you@email.com" style={{ flex: 1, background: "transparent", border: "none", outline: "none", padding: "14px 22px", fontFamily: "var(--font-body)", fontSize: 16, color: "#fff" }} />
            <button className="btn btn-primary" style={{ padding: "14px 26px" }}>Sign me up <Icons.ArrowRight size={16} weight={2.2} /></button>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 13, color: "rgba(255,255,255,0.66)", fontFamily: "var(--font-ui)" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Icons.Check size={14} weight={2.4} style={{ color: "var(--h2h-success)" }} /> One a month, no more</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Icons.Check size={14} weight={2.4} style={{ color: "var(--h2h-success)" }} /> No spam</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Icons.Check size={14} weight={2.4} style={{ color: "var(--h2h-success)" }} /> One click out</span>
          </div>
        </form>
      </div>
    </section>
  );
}

// --------------------------------------------------------
// FOOTER
// --------------------------------------------------------
function DesktopFooter() {
  return (
    <footer style={{ background: "var(--h2h-violet-tint)", padding: "80px 40px 28px", marginTop: 40, position: "relative", overflow: "hidden" }}>
      {/* huge mark watermark */}
      <img src="assets/logo-mark.png" alt="" style={{ position: "absolute", right: -120, bottom: -120, width: 500, opacity: 0.08, pointerEvents: "none" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
        {/* top row */}
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr 1.2fr", gap: 56 }}>
          <div>
            <a href="#" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", marginBottom: 20 }}>
              <img src="assets/logo-mark.png" alt="" style={{ height: 56 }} />
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 24, color: "var(--h2h-ink)", letterSpacing: "-0.01em" }}>Hike2Heal</span>
                <span style={{ fontFamily: "var(--font-ui)", fontSize: 11, color: "var(--h2h-slate)", letterSpacing: "0.22em", textTransform: "uppercase", marginTop: 4 }}>Recovery CIC</span>
              </div>
            </a>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--h2h-ink-2)", margin: 0, maxWidth: 340 }}>
              A Birmingham‑based charity using nature, movement, and community to support people in recovery from addiction, mental‑health challenges, and trauma.
            </p>
            <div style={{ display: "flex", gap: 8, marginTop: 24 }}>
              <span className="pill" style={{ background: "#fff", border: "1px solid var(--h2h-line)" }}>Registered charity</span>
              <span className="pill" style={{ background: "#fff", border: "1px solid var(--h2h-line)" }}>UK · 2019</span>
            </div>
          </div>

          <FCol title="Walk with us" links={["Upcoming hikes", "First-time walkers", "Bring a friend", "Volunteer hike‑lead"]} />
          <FCol title="About" links={["Our story", "Mission & values", "Stories from the trail", "Press & media", "Contact"]} />

          <div>
            <h6 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "var(--h2h-violet)", margin: "0 0 16px", letterSpacing: "0.02em" }}>Get in touch</h6>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              <li style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--h2h-ink)", fontSize: 15 }}>
                <span style={{ width: 32, height: 32, borderRadius: 999, background: "rgba(123,47,255,0.12)", color: "var(--h2h-violet)", display: "grid", placeItems: "center" }}><Icons.Mail size={15} weight={2.2} /></span>
                hello@hike2heal.org.uk
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--h2h-ink)", fontSize: 15 }}>
                <span style={{ width: 32, height: 32, borderRadius: 999, background: "rgba(123,47,255,0.12)", color: "var(--h2h-violet)", display: "grid", placeItems: "center" }}><Icons.Phone size={15} weight={2.2} /></span>
                +44 (0) 121 123 4567
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--h2h-ink)", fontSize: 15 }}>
                <span style={{ width: 32, height: 32, borderRadius: 999, background: "rgba(123,47,255,0.12)", color: "var(--h2h-violet)", display: "grid", placeItems: "center" }}><Icons.Pin size={15} weight={2.2} /></span>
                Birmingham, UK
              </li>
            </ul>
            <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
              {[
                { Ic: Icons.Facebook, label: "Facebook" },
                { Ic: Icons.Instagram, label: "Instagram" },
                { Ic: Icons.X, label: "X" },
              ].map(({ Ic, label }) => (
                <a key={label} href="#" aria-label={label} style={{ width: 40, height: 40, borderRadius: 999, background: "#fff", color: "var(--h2h-violet)", border: "1px solid rgba(123,47,255,0.18)", display: "grid", placeItems: "center", textDecoration: "none" }}>
                  <Ic size={16} weight={2.2} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div style={{ marginTop: 56, paddingTop: 24, borderTop: "1px solid rgba(123,47,255,0.18)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
          <div style={{ fontFamily: "var(--font-ui)", fontSize: 13, color: "var(--h2h-slate)" }}>
            © {new Date().getFullYear()} Hike2Heal Recovery CIC. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: 20, fontSize: 13 }}>
            {["Privacy", "Safeguarding", "Accessibility", "Cookies"].map((l) => (
              <a key={l} href="#" style={{ color: "var(--h2h-ink)", textDecoration: "none" }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FCol({ title, links }) {
  return (
    <div>
      <h6 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "var(--h2h-violet)", margin: "0 0 16px", letterSpacing: "0.02em" }}>{title}</h6>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
        {links.map((l) => (
          <li key={l}><a href="#" style={{ color: "var(--h2h-ink)", textDecoration: "none", fontSize: 15 }}>{l}</a></li>
        ))}
      </ul>
    </div>
  );
}

window.DesktopGallery = DesktopGallery;
window.DesktopTestimonial = DesktopTestimonial;
window.DesktopNewsletter = DesktopNewsletter;
window.DesktopFooter = DesktopFooter;
