// ===========================================================
//  Desktop — Join the Journey + Recent Adventures + Impact
// ===========================================================

// --------------------------------------------------------
// Join the Journey — bento with one feature photo card
// --------------------------------------------------------
function DesktopJourney({ onNav }) {
  return (
    <section style={{ padding: "40px 40px 100px" }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        background: "var(--h2h-violet-tint)",
        borderRadius: 50,
        padding: "72px 64px",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* decorative gradient blob */}
        <div className="blob" style={{ width: 360, height: 360, background: "radial-gradient(closest-side, rgba(255,61,200,0.22), transparent)", bottom: -120, left: -80 }} />
        <div className="blob" style={{ width: 320, height: 320, background: "radial-gradient(closest-side, rgba(123,47,255,0.24), transparent)", top: -100, right: -60 }} />

        <div style={{ position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "end", marginBottom: 48 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>Take part</div>
              <h2 className="h-section" style={{ fontSize: 60 }}>
                Join the journey<br />with us.
              </h2>
            </div>
            <p className="lede-lg" style={{ maxWidth: 460, justifySelf: "end" }}>
              The best way to support Hike2Heal is to take part. Every hike is a chance to connect, heal, and grow — whether you're in recovery yourself or walking in support of others.
            </p>
          </div>

          {/* 4-cell bento */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: 20,
            height: 540,
          }}>
            {/* Big photo card spanning two rows */}
            <a href="#" onClick={(e)=>{e.preventDefault(); onNav?.("booking");}} style={{
              gridRow: "span 2",
              borderRadius: 32, overflow: "hidden",
              position: "relative",
              textDecoration: "none",
              boxShadow: "0 20px 50px rgba(15,12,39,0.18)",
            }}>
              <img src="assets/photo-mountain-group.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,12,39,0) 35%, rgba(15,12,39,0.78) 100%)" }} />
              <div style={{ position: "absolute", top: 26, left: 26 }}>
                <span className="pill pill-light"><Icons.Sparkle size={13} weight={2.2} /> Most popular</span>
              </div>
              <div style={{ position: "absolute", bottom: 28, left: 28, right: 28, color: "#fff" }}>
                <div style={{ width: 56, height: 56, borderRadius: 18, background: "rgba(255,255,255,0.18)", backdropFilter: "blur(6px)", border: "1px solid rgba(255,255,255,0.3)", display: "grid", placeItems: "center", marginBottom: 18 }}>
                  <Icons.Heart size={26} weight={2} />
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 36, lineHeight: 1.1, marginBottom: 12, letterSpacing: "-0.01em" }}>
                  Join a group hike
                </div>
                <div style={{ fontSize: 16, lineHeight: 1.55, opacity: 0.88, marginBottom: 22, maxWidth: 380 }}>
                  Take part in our guided hikes across stunning landscapes — safe, supportive, and uplifting. All ages and abilities welcome.
                </div>
                <span className="btn btn-primary" style={{ background: "#fff", color: "var(--h2h-ink)", boxShadow: "none", border: "none" }}>
                  Book a place <Icons.ArrowRight size={15} weight={2.2} />
                </span>
              </div>
            </a>

            {/* Bring a friend */}
            <div style={{ background: "#fff", borderRadius: 28, padding: 30, display: "flex", flexDirection: "column", gap: 14, border: "1px solid rgba(15,12,39,0.05)" }}>
              <div style={{ width: 56, height: 56, borderRadius: 18, background: "#FFE9DC", color: "#C76B3C", display: "grid", placeItems: "center" }}>
                <Icons.Users size={26} weight={2} />
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "var(--h2h-ink)", lineHeight: 1.15 }}>
                Bring a friend
              </div>
              <div style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--h2h-slate)" }}>
                Recovery is stronger together. Invite someone you care about to share the walk and the talk.
              </div>
              <a href="#" style={{ marginTop: "auto", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, color: "var(--h2h-violet)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
                Send an invite <Icons.ArrowRight size={14} weight={2.4} />
              </a>
            </div>

            {/* Start your journey */}
            <div style={{ background: "var(--h2h-ink)", color: "#fff", borderRadius: 28, padding: 30, display: "flex", flexDirection: "column", gap: 14, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(120% 90% at 100% 100%, rgba(255,61,200,0.42), transparent 60%)", pointerEvents: "none" }} />
              <div style={{ width: 56, height: 56, borderRadius: 18, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)", color: "#fff", display: "grid", placeItems: "center", position: "relative" }}>
                <Icons.Compass size={26} weight={2} />
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, lineHeight: 1.15, position: "relative" }}>
                Start your journey
              </div>
              <div style={{ fontSize: 14.5, lineHeight: 1.55, opacity: 0.78, position: "relative" }}>
                New to Hike2Heal? Begin with a beginner-friendly walk. The first step is often the most powerful.
              </div>
              <a href="#" style={{ marginTop: "auto", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, color: "#fff", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6, position: "relative" }}>
                See first‑time hikes <Icons.ArrowRight size={14} weight={2.4} />
              </a>
            </div>

            {/* Bring a friend - stay connected */}
            <div style={{ background: "#fff", borderRadius: 28, padding: 30, display: "flex", flexDirection: "column", gap: 14, border: "1px solid rgba(15,12,39,0.05)" }}>
              <div style={{ width: 56, height: 56, borderRadius: 18, background: "#E7F1E5", color: "#3F5E3F", display: "grid", placeItems: "center" }}>
                <Icons.Message size={26} weight={2} />
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "var(--h2h-ink)", lineHeight: 1.15 }}>
                Stay connected
              </div>
              <div style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--h2h-slate)" }}>
                Updates on hikes, stories, and ways to stay close to the community — one warm email a month.
              </div>
              <form onSubmit={(e) => e.preventDefault()} style={{ marginTop: "auto", display: "flex", border: "1px solid var(--h2h-line)", borderRadius: 999, padding: 4, background: "#fff" }}>
                <input placeholder="Your email" style={{ flex: 1, border: "none", outline: "none", padding: "10px 16px", fontFamily: "var(--font-body)", fontSize: 14, background: "transparent", color: "var(--h2h-ink)" }} />
                <button style={{ background: "var(--grad-brand)", color: "#fff", border: "none", borderRadius: 999, padding: "10px 18px", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, cursor: "pointer" }}>Join</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --------------------------------------------------------
// Recent Adventures — magazine layout
// --------------------------------------------------------
function DesktopAdventures() {
  const featured = { title: "Ben Nevis at first light", img: "photo-mountain-group.jpg", location: "Highlands, Scotland", date: "28 Jan 2025", duration: "8h · 13km", read: "7 min read", blurb: "A small group, an early start, and a peak that humbles you. We woke at four, walked through cloud at six, and stood above it all by sunrise — the kind of morning that earns its quiet on the way back down." };
  const sidekicks = [
    { title: "Four Waterfalls, Brecon Beacons", img: "photo-trail-hikers.jpg", location: "Brecon Beacons", date: "05 Feb 2025", blurb: "A slow trek through mossy valleys, ending at the falls with thermos coffee and breath we'd earned." },
    { title: "Forest bathing in West Devon", img: "photo-forest-bathing.jpg", location: "Bickleigh, Devon", date: "14 Dec 2024", blurb: "Six hours under cedar canopy practicing breathwork. We left lighter than we arrived." },
  ];

  return (
    <section style={{ padding: "0 40px 100px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 48, marginBottom: 48 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>Stories from the trail</div>
            <h2 className="h-section" style={{ fontSize: 60 }}>
              Recent adventures.
            </h2>
            <p className="lede-lg" style={{ marginTop: 16, maxWidth: 520 }}>
              Real walks, real people, real weather. A few moments from this season on the trail.
            </p>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <a className="btn btn-ghost btn-sm" href="#" style={{ borderColor: "rgba(15,12,39,0.12)" }}>See all stories <Icons.ArrowRight size={14} weight={2.2} /></a>
            <button aria-label="prev" style={{ width: 48, height: 48, borderRadius: 999, border: "1px solid var(--h2h-line)", background: "#fff", color: "var(--h2h-ink)", cursor: "pointer", display: "grid", placeItems: "center" }}>
              <Icons.ArrowLeft size={17} weight={2.2} />
            </button>
            <button aria-label="next" style={{ width: 48, height: 48, borderRadius: 999, border: "none", background: "var(--grad-brand)", color: "#fff", cursor: "pointer", display: "grid", placeItems: "center", boxShadow: "var(--shadow-glow)" }}>
              <Icons.ArrowRight size={17} weight={2.2} />
            </button>
          </div>
        </div>

        {/* layout: feature 60% + 2 stacked sidekicks 40% */}
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 28 }}>
          {/* FEATURED */}
          <a href="#" style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={{ position: "relative", borderRadius: 32, overflow: "hidden", aspectRatio: "16/10", boxShadow: "var(--shadow-md)" }}>
              <img src={`assets/${featured.img}`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", top: 22, left: 22, display: "flex", gap: 8 }}>
                <span className="pill pill-light" style={{ background: "rgba(15,12,39,0.7)", color: "#fff" }}>Featured story</span>
                <span className="pill pill-light"><Icons.Pin size={13} weight={2.2} /> {featured.location}</span>
              </div>
              <div style={{ position: "absolute", top: 22, right: 22 }}>
                <span className="pill pill-light"><Icons.Clock size={13} weight={2.2} /> {featured.duration}</span>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 28, alignItems: "start" }}>
              <div style={{ borderLeft: "2px solid var(--h2h-violet)", paddingLeft: 18, paddingRight: 6, fontFamily: "var(--font-display)" }}>
                <div style={{ fontWeight: 700, fontSize: 28, color: "var(--h2h-ink)", lineHeight: 1, letterSpacing: "-0.02em" }}>28</div>
                <div style={{ fontWeight: 500, fontSize: 13, color: "var(--h2h-slate)", marginTop: 4, letterSpacing: "0.08em", textTransform: "uppercase" }}>Jan '25</div>
              </div>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 32, color: "var(--h2h-forest)", margin: 0, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
                  {featured.title}
                </h3>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--h2h-slate)", margin: "14px 0 18px", maxWidth: 540 }}>
                  {featured.blurb}
                </p>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14.5, color: "var(--h2h-violet)", display: "inline-flex", alignItems: "center", gap: 6 }}>
                  Read the story <Icons.ArrowRight size={14} weight={2.4} />
                </span>
              </div>
            </div>
          </a>

          {/* SIDEKICKS */}
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {sidekicks.map((a) => (
              <a key={a.title} href="#" style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 22, alignItems: "start", textDecoration: "none", color: "inherit" }}>
                <div style={{ borderRadius: 22, overflow: "hidden", aspectRatio: "4/5", boxShadow: "var(--shadow-sm)" }}>
                  <img src={`assets/${a.img}`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ paddingTop: 4 }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
                    <span className="pill" style={{ fontSize: 11.5, padding: "5px 12px" }}><Icons.Pin size={11} weight={2.4} /> {a.location}</span>
                    <span className="pill" style={{ fontSize: 11.5, padding: "5px 12px", background: "transparent", border: "1px solid var(--h2h-line)" }}>{a.date}</span>
                  </div>
                  <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "var(--h2h-forest)", margin: 0, lineHeight: 1.18, letterSpacing: "-0.01em" }}>
                    {a.title}
                  </h4>
                  <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--h2h-slate)", margin: "10px 0 14px" }}>
                    {a.blurb}
                  </p>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13.5, color: "var(--h2h-violet)", display: "inline-flex", alignItems: "center", gap: 6 }}>
                    Read the story <Icons.ArrowRight size={13} weight={2.4} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// --------------------------------------------------------
// IMPACT — big 1200+ with photo collage backing
// --------------------------------------------------------
function DesktopImpact({ onNav }) {
  return (
    <section style={{ padding: "60px 40px 100px" }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        background: "var(--h2h-ink)",
        borderRadius: 50,
        padding: "80px 64px",
        position: "relative",
        overflow: "hidden",
        color: "#fff",
      }}>
        {/* dramatic gradient wash */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(80% 80% at 80% 20%, rgba(255,61,200,0.32), transparent 60%), radial-gradient(70% 70% at 20% 100%, rgba(123,47,255,0.42), transparent 60%)", pointerEvents: "none" }} />

        <div style={{ position: "relative", display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 40, alignItems: "center" }}>
          {/* left collage */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {["photo-portrait-man.jpg", "photo-recovery-walk.jpg"].map((p, i) => (
              <div key={p} style={{
                width: 150, height: 200, borderRadius: 24, overflow: "hidden",
                border: "3px solid rgba(255,255,255,0.12)",
                transform: i === 0 ? "rotate(-3deg)" : "rotate(2deg)",
                boxShadow: "0 14px 40px rgba(0,0,0,0.35)",
              }}>
                <img src={`assets/${p}`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            ))}
          </div>

          {/* center number */}
          <div style={{ textAlign: "center" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 16px", borderRadius: 999, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.16)", marginBottom: 28 }}>
              <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--h2h-pink)", boxShadow: "0 0 0 4px rgba(255,61,200,0.22)" }} />
              <span style={{ fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: 13, color: "rgba(255,255,255,0.88)" }}>Our community impact, so far</span>
            </div>
            <div className="grad-text" style={{
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: 220, lineHeight: 0.9, letterSpacing: "-0.04em",
              background: "linear-gradient(110deg, #FFFFFF 0%, #CBA3FF 35%, #FF3DC8 100%)",
              WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              1,200<span style={{ fontSize: 140 }}>+</span>
            </div>
            <p style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 24, color: "#fff", margin: "10px 0 32px", textWrap: "balance", maxWidth: 520, marginLeft: "auto", marginRight: "auto" }}>
              people have already hiked with us — and the trail is just getting started.
            </p>
            <div style={{ display: "inline-flex", gap: 12 }}>
              <a className="btn btn-primary" href="#" onClick={(e)=>{e.preventDefault(); onNav?.("booking");}}>See upcoming events <Icons.ArrowRight size={16} weight={2.2} /></a>
              <a className="btn btn-secondary" href="#" onClick={(e)=>{e.preventDefault(); onNav?.("membership");}} style={{ background: "rgba(255,255,255,0.08)", color: "#fff", border: "1px solid rgba(255,255,255,0.22)", boxShadow: "none" }}>
                Become a member
              </a>
            </div>
          </div>

          {/* right collage */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {["photo-trail-hikers.jpg", "photo-bell-tent.jpg"].map((p, i) => (
              <div key={p} style={{
                width: 150, height: 200, borderRadius: 24, overflow: "hidden",
                border: "3px solid rgba(255,255,255,0.12)",
                transform: i === 0 ? "rotate(2deg)" : "rotate(-3deg)",
                boxShadow: "0 14px 40px rgba(0,0,0,0.35)",
              }}>
                <img src={`assets/${p}`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            ))}
          </div>
        </div>

        {/* secondary stats strip */}
        <div style={{
          position: "relative",
          marginTop: 64,
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 24,
          overflow: "hidden",
        }}>
          {[
            { v: "60+", l: "Guided group hikes hosted" },
            { v: "4,800+", l: "Trail miles walked together" },
            { v: "12", l: "Trails across 3 countries" },
            { v: "95%", l: "Would walk with us again" },
          ].map((s, i) => (
            <div key={s.l} style={{ padding: "28px 28px", borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 44, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1 }}>{s.v}</div>
              <div style={{ fontFamily: "var(--font-ui)", fontSize: 14, color: "rgba(255,255,255,0.7)", marginTop: 10 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.DesktopJourney = DesktopJourney;
window.DesktopAdventures = DesktopAdventures;
window.DesktopImpact = DesktopImpact;
