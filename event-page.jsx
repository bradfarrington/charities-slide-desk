// ===========================================================
//  Event Detail page — Pen y Fan at first light, 17 May 2025
// ===========================================================

function EventPage({ onNav }) {
  return (
    <div style={{ background: "var(--h2h-paper)", color: "var(--fg-default)", minHeight: 100, position: "relative", overflow: "hidden", isolation: "isolate" }}>
      <div style={{ position: "absolute", inset: "0 0 auto 0", height: 700, background: "linear-gradient(180deg, #FBF5FF 0%, #FFFFFF 100%)", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <SubHeader active="events" onNav={onNav} />

        {/* Hero — large rounded image + overlay title */}
        <section style={{ padding: "32px 40px 0" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-ui)", fontSize: 13, color: "var(--h2h-slate)", marginBottom: 18 }}>
              <a href="#" onClick={(e)=>{e.preventDefault(); onNav?.("home");}} style={{ color: "var(--h2h-slate)", textDecoration: "none" }}>Home</a>
              <Icons.Chevron size={14} weight={2.2} style={{ transform: "rotate(-90deg)" }} />
              <a href="#" style={{ color: "var(--h2h-slate)", textDecoration: "none" }}>Hikes & events</a>
              <Icons.Chevron size={14} weight={2.2} style={{ transform: "rotate(-90deg)" }} />
              <span style={{ color: "var(--h2h-ink)" }}>Pen y Fan at first light</span>
            </div>

            <div style={{ position: "relative", borderRadius: 50, overflow: "hidden", height: 580, boxShadow: "0 30px 70px rgba(15,12,39,0.22)" }}>
              <img src="assets/photo-mountain-group.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,12,39,0.15) 0%, rgba(15,12,39,0) 30%, rgba(15,12,39,0.55) 70%, rgba(15,12,39,0.82) 100%)" }} />

              {/* top chips */}
              <div style={{ position: "absolute", top: 26, left: 26, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <span className="pill pill-light" style={{ background: "rgba(15,12,39,0.55)", color: "#fff", backdropFilter: "blur(10px)" }}>
                  <span style={{ width: 8, height: 8, borderRadius: 999, background: "#F59E0B" }} /> Filling up · 2 spots left
                </span>
                <span className="pill pill-light"><Icons.Mountain size={13} weight={2.2} /> Hard hike</span>
                <span className="pill pill-light"><Icons.Clock size={13} weight={2.2} /> 8 hours</span>
              </div>

              {/* bottom title */}
              <div style={{ position: "absolute", bottom: 36, left: 36, right: 36, color: "#fff", display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "end" }}>
                <div>
                  <div style={{ fontFamily: "var(--font-ui)", fontWeight: 600, fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.78)", marginBottom: 16 }}>
                    Saturday 17 May 2025 · 06:00 GMT
                  </div>
                  <h1 style={{
                    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 84,
                    lineHeight: 0.98, letterSpacing: "-0.03em", margin: 0,
                    textWrap: "balance", maxWidth: 780,
                    color: "#fff",
                    textShadow: "0 2px 24px rgba(15,12,39,0.45), 0 1px 2px rgba(15,12,39,0.35)",
                  }}>
                    Pen y Fan,<br /><em style={{ fontStyle: "italic", fontWeight: 600 }}>at first light.</em>
                  </h1>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ display: "flex" }}>
                    {["photo-portrait-man.jpg", "photo-recovery-walk.jpg", "photo-mountain-group.jpg", "photo-trail-hikers.jpg"].map((p, i) => (
                      <div key={p} style={{ width: 36, height: 36, borderRadius: 999, marginLeft: i === 0 ? 0 : -10, border: "2px solid #fff", backgroundImage: `url(assets/${p})`, backgroundSize: "cover" }} />
                    ))}
                  </div>
                  <div style={{ fontFamily: "var(--font-ui)", fontSize: 12.5, color: "rgba(255,255,255,0.88)" }}>
                    <strong style={{ color: "#fff", fontWeight: 600 }}>10 hikers</strong> already going<br />incl. 4 first-timers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main two-column */}
        <section style={{ maxWidth: 1280, margin: "0 auto", padding: "60px 40px 80px", display: "grid", gridTemplateColumns: "1.55fr 1fr", gap: 56, alignItems: "flex-start" }}>
          {/* LEFT */}
          <div>
            {/* fact strip */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, background: "#fff", border: "1px solid var(--h2h-line)", borderRadius: 22, overflow: "hidden", marginBottom: 48 }}>
              {[
                { Ic: Icons.Pin, label: "Where", v: "Brecon Beacons", sub: "Storey Arms · Wales" },
                { Ic: Icons.Mountain, label: "Distance", v: "13 km", sub: "886 m elevation" },
                { Ic: Icons.Clock, label: "Duration", v: "About 8h", sub: "06:00 → 14:00" },
                { Ic: Icons.Users, label: "Group", v: "Up to 12", sub: "2 hike-leads" },
              ].map((f, i) => (
                <div key={f.label} style={{ padding: "22px 22px", borderLeft: i === 0 ? "none" : "1px solid var(--h2h-line)" }}>
                  <span style={{ width: 36, height: 36, borderRadius: 12, background: "var(--h2h-violet-tint)", color: "var(--h2h-violet)", display: "grid", placeItems: "center", marginBottom: 14 }}>
                    <f.Ic size={18} weight={2.2} />
                  </span>
                  <div style={{ fontFamily: "var(--font-ui)", fontSize: 11.5, fontWeight: 600, color: "var(--h2h-slate)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{f.label}</div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "var(--h2h-ink)", marginTop: 4 }}>{f.v}</div>
                  <div style={{ fontFamily: "var(--font-ui)", fontSize: 12.5, color: "var(--h2h-slate)", marginTop: 2 }}>{f.sub}</div>
                </div>
              ))}
            </div>

            {/* About this hike */}
            <div style={{ marginBottom: 56 }}>
              <div className="eyebrow" style={{ marginBottom: 14 }}>About this hike</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 36, color: "var(--h2h-forest)", margin: 0, letterSpacing: "-0.02em" }}>
                A small group, an early start, and a peak that humbles you.
              </h2>
              <div style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 14, fontSize: 17, lineHeight: 1.65, color: "var(--h2h-ink-2)", maxWidth: 720 }}>
                <p style={{ margin: 0 }}>
                  We meet in the dark at the Storey Arms car park with thermoses and head-torches, and walk in silence for the first half hour. The cloud is usually still in the valleys at this point — by the time it lifts, we're above it.
                </p>
                <p style={{ margin: 0 }}>
                  Pen y Fan isn't a technical climb, but it's a real one. Eight hours, thirteen kilometres, and just enough up to feel it the next day. We go at the pace of the slowest walker and stop often. Whatever you're carrying, you don't have to carry it alone up there.
                </p>
              </div>

              {/* what to bring chips */}
              <div style={{ marginTop: 28, padding: 22, borderRadius: 22, background: "var(--h2h-violet-tint)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "var(--h2h-violet)", letterSpacing: 0.02, marginBottom: 12 }}>WHAT TO BRING</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {["Waterproof jacket", "Walking boots (broken in)", "2 L water", "Snacks", "Layers", "Head torch", "Hat & gloves", "Phone — fully charged"].map((c) => (
                    <span key={c} className="pill" style={{ background: "#fff", border: "1px solid rgba(15,12,39,0.06)" }}><Icons.Check size={12} weight={2.4} style={{ color: "var(--h2h-sage-deep)" }} /> {c}</span>
                  ))}
                </div>
                <div style={{ marginTop: 16, fontFamily: "var(--font-ui)", fontSize: 13, color: "var(--h2h-slate)" }}>
                  Don't have any of this? Tell us when you book — we have spare kit you can borrow.
                </div>
              </div>
            </div>

            {/* THE TRAIL — custom timeline */}
            <div style={{ marginBottom: 56 }}>
              <div className="eyebrow" style={{ marginBottom: 14 }}>The trail</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 36, color: "var(--h2h-ink)", margin: 0, letterSpacing: "-0.02em" }}>
                Your day, hour by hour.
              </h2>
              <TrailTimeline />
            </div>

            {/* Your hike-lead */}
            <div style={{ marginBottom: 56 }}>
              <div className="eyebrow" style={{ marginBottom: 14 }}>Your hike‑lead</div>
              <div style={{ background: "#fff", borderRadius: 28, border: "1px solid rgba(15,12,39,0.06)", padding: 28, display: "grid", gridTemplateColumns: "160px 1fr", gap: 28, alignItems: "center" }}>
                <div style={{ width: 160, height: 200, borderRadius: 22, overflow: "hidden", boxShadow: "var(--shadow-sm)" }}>
                  <img src="assets/photo-portrait-man.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div>
                  <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                    <span className="pill pill-violet" style={{ fontSize: 11.5 }}>Mountain leader · ML</span>
                    <span className="pill" style={{ background: "var(--h2h-success-tint)", color: "var(--h2h-sage-deep)", fontSize: 11.5 }}>Mental Health First Aider</span>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28, color: "var(--h2h-ink)", margin: 0, letterSpacing: "-0.02em" }}>Daniel R.</h3>
                  <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "var(--h2h-slate)", margin: "10px 0 0", maxWidth: 520 }}>
                    Six years in recovery, three years leading walks for Hike2Heal. Daniel knows Pen y Fan in every weather — and brings the kind of calm that makes the steep bits feel doable.
                  </p>
                  <div style={{ marginTop: 16, display: "flex", gap: 14, alignItems: "center", fontFamily: "var(--font-ui)", fontSize: 13, color: "var(--h2h-slate)" }}>
                    <span><strong style={{ color: "var(--h2h-ink)", fontWeight: 600 }}>42</strong> hikes led</span>
                    <span style={{ width: 4, height: 4, borderRadius: 999, background: "currentColor", opacity: 0.4 }} />
                    <span><strong style={{ color: "var(--h2h-ink)", fontWeight: 600 }}>5.0</strong> avg rating · 38 reviews</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews of past hikes */}
            <div style={{ marginBottom: 16 }}>
              <div className="eyebrow" style={{ marginBottom: 14 }}>What past walkers said</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                {[
                  { who: "Sarah J.", role: "First-timer · April 2025", text: "I cried at the top, not because it was hard but because it was beautiful. Daniel just handed me a tissue and a chocolate bar like it was the most normal thing in the world." },
                  { who: "Matthew M.", role: "4th hike · March 2025", text: "Tough, honest, and totally welcoming. Nobody pretends it's easy and nobody pretends to be okay when they're not. That's why I keep coming back." },
                ].map((r) => (
                  <div key={r.who} style={{ background: "#fff", borderRadius: 22, padding: 22, border: "1px solid rgba(15,12,39,0.06)" }}>
                    <div style={{ display: "flex", gap: 3, color: "var(--h2h-violet)", marginBottom: 10 }}>{[0,1,2,3,4].map(i => <Icons.Star key={i} size={14} />)}</div>
                    <p style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 16, lineHeight: 1.5, color: "var(--h2h-ink)", margin: 0, letterSpacing: "-0.005em" }}>
                      &ldquo;{r.text}&rdquo;
                    </p>
                    <div style={{ marginTop: 14, fontFamily: "var(--font-ui)", fontSize: 13, color: "var(--h2h-slate)" }}>
                      <strong style={{ color: "var(--h2h-ink)", fontFamily: "var(--font-display)", fontWeight: 700 }}>{r.who}</strong> · {r.role}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Sticky booking card */}
          <div style={{ position: "sticky", top: 24 }}>
            <BookingSidebar onNav={onNav} />
          </div>
        </section>

        {/* Related hikes */}
        <RelatedHikes onNav={onNav} />

        <DesktopFooter />
      </div>
    </div>
  );
}

// --------------------------------------------------------
// Trail timeline — custom horizontal "elevation" timeline
// --------------------------------------------------------
function TrailTimeline() {
  const stops = [
    { time: "05:45", elev: 360, title: "Meet · Storey Arms",     body: "Head torches on, thermoses out. Quick briefing, intros, and we set off.",      Ic: Icons.Calendar },
    { time: "06:30", elev: 540, title: "First ridge, in silence", body: "We walk without talking for 30 minutes. Just breath and footfalls.",             Ic: Icons.Wind },
    { time: "07:40", elev: 720, title: "Above the cloud",        body: "Cloud usually breaks below us here. Photos, a snack, breathing exercise.",        Ic: Icons.Sun },
    { time: "08:30", elev: 886, title: "Summit · Pen y Fan",     body: "Time at the top is unstructured. Stay quiet, talk, just sit. Up to you.",         Ic: Icons.Mountain },
    { time: "11:30", elev: 540, title: "Lunch by the lake",      body: "Long stop. Real food, real talk if you want it.",                                  Ic: Icons.Leaf },
    { time: "14:00", elev: 360, title: "Back at the cars",       body: "Quick check-in, contact details swapped, optional pub stop in Brecon.",            Ic: Icons.Heart },
  ];
  const maxElev = 1000;
  const minElev = 200;

  return (
    <div style={{ background: "#fff", borderRadius: 28, padding: 28, border: "1px solid rgba(15,12,39,0.06)", boxShadow: "var(--shadow-sm)", marginTop: 22 }}>
      {/* elevation profile SVG */}
      <div style={{ position: "relative", height: 200, marginBottom: 28 }}>
        <svg viewBox="0 0 700 200" preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block" }}>
          <defs>
            <linearGradient id="elevFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7B2FFF" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#7B2FFF" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="elevStroke" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#4E2BDF" />
              <stop offset="50%" stopColor="#7B2FFF" />
              <stop offset="100%" stopColor="#D72ADF" />
            </linearGradient>
          </defs>
          {/* horizontal lines */}
          {[0, 1, 2, 3].map(i => (
            <line key={i} x1="0" y1={50 + i * 50} x2="700" y2={50 + i * 50} stroke="#E6E6E6" strokeWidth="1" strokeDasharray="2 4" />
          ))}
          {/* curve */}
          {(() => {
            const pts = stops.map((s, i) => {
              const x = (i / (stops.length - 1)) * 700;
              const y = 200 - ((s.elev - minElev) / (maxElev - minElev)) * 180;
              return [x, y];
            });
            const path = pts.map((p, i) => (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`)).join(" ");
            const fillPath = `${path} L 700 200 L 0 200 Z`;
            return (
              <>
                <path d={fillPath} fill="url(#elevFill)" />
                <path d={path} fill="none" stroke="url(#elevStroke)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                {pts.map((p, i) => (
                  <g key={i}>
                    <circle cx={p[0]} cy={p[1]} r="8" fill="#fff" stroke="#7B2FFF" strokeWidth="2.5" />
                    <circle cx={p[0]} cy={p[1]} r="3" fill="#7B2FFF" />
                  </g>
                ))}
              </>
            );
          })()}
        </svg>
        {/* y-axis labels */}
        <div style={{ position: "absolute", top: 0, right: -28, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", fontFamily: "var(--font-ui)", fontSize: 10.5, color: "var(--h2h-slate)" }}>
          <span>900m</span><span>600m</span><span>300m</span>
        </div>
      </div>

      {/* stops list */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 14 }}>
        {stops.map((s) => (
          <div key={s.time} style={{ position: "relative" }}>
            <div style={{ width: 36, height: 36, borderRadius: 12, background: "var(--h2h-violet-tint)", color: "var(--h2h-violet)", display: "grid", placeItems: "center", marginBottom: 10 }}>
              <s.Ic size={16} weight={2} />
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--h2h-violet)", fontWeight: 600, letterSpacing: 0.05 }}>{s.time}</div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, color: "var(--h2h-ink)", lineHeight: 1.25, marginTop: 4 }}>{s.title}</div>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: 11.5, color: "var(--h2h-slate)", lineHeight: 1.45, marginTop: 6 }}>{s.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// --------------------------------------------------------
// Sticky Booking Sidebar
// --------------------------------------------------------
function BookingSidebar({ onNav }) {
  return (
    <aside style={{ background: "#fff", borderRadius: 28, border: "1px solid rgba(15,12,39,0.06)", boxShadow: "0 18px 50px rgba(15,12,39,0.08)", overflow: "hidden" }}>
      <div style={{ padding: 24, borderBottom: "1px solid var(--h2h-line)", display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 12 }}>
        <div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 36, color: "var(--h2h-ink)", lineHeight: 1, letterSpacing: "-0.02em" }}>£28</span>
            <span style={{ fontFamily: "var(--font-ui)", fontSize: 13, color: "var(--h2h-slate)" }}>/ hiker</span>
          </div>
          <div style={{ fontFamily: "var(--font-ui)", fontSize: 12.5, color: "var(--h2h-slate)", marginTop: 6 }}>or included with a Companion membership</div>
        </div>
        <span className="pill" style={{ background: "#FFE0E6", color: "#A04055" }}>
          <span style={{ width: 7, height: 7, borderRadius: 999, background: "#A04055" }} /> 2 of 12 spots left
        </span>
      </div>

      <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 14, alignItems: "center" }}>
          <span style={{ width: 44, height: 44, borderRadius: 12, background: "var(--h2h-violet-tint)", color: "var(--h2h-violet)", display: "grid", placeItems: "center" }}>
            <Icons.Calendar size={20} weight={2} />
          </span>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: "var(--h2h-ink)" }}>Saturday 17 May 2025</div>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: 12.5, color: "var(--h2h-slate)" }}>06:00 → 14:00 GMT</div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 14, alignItems: "center" }}>
          <span style={{ width: 44, height: 44, borderRadius: 12, background: "var(--h2h-violet-tint)", color: "var(--h2h-violet)", display: "grid", placeItems: "center" }}>
            <Icons.Pin size={20} weight={2} />
          </span>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: "var(--h2h-ink)" }}>Storey Arms, Brecon</div>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: 12.5, color: "var(--h2h-slate)" }}>2h 15m from Birmingham · minibus available</div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 14, alignItems: "center" }}>
          <span style={{ width: 44, height: 44, borderRadius: 12, background: "var(--h2h-violet-tint)", color: "var(--h2h-violet)", display: "grid", placeItems: "center" }}>
            <Icons.Users size={20} weight={2} />
          </span>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: "var(--h2h-ink)" }}>10 going · room for you</div>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: 12.5, color: "var(--h2h-slate)" }}>4 first-timers · 2 hike-leads</div>
          </div>
        </div>
      </div>

      <div style={{ padding: "0 24px 24px", display: "flex", flexDirection: "column", gap: 10 }}>
        <button className="btn btn-primary" style={{ justifyContent: "center", width: "100%" }} onClick={() => onNav?.("booking")}>
          Book my spot <Icons.ArrowRight size={16} weight={2.2} />
        </button>
        <button className="btn btn-secondary" style={{ justifyContent: "center", width: "100%" }}>
          <Icons.Heart size={15} weight={2.1} /> Save for later
        </button>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: "var(--font-ui)", fontSize: 12, color: "var(--h2h-slate)", marginTop: 6 }}>
          <Icons.Check size={13} weight={2.4} style={{ color: "var(--h2h-success)" }} />
          Cancel any time up to the morning of
        </div>
      </div>

      {/* member upsell */}
      <div style={{ padding: 20, background: "linear-gradient(135deg, #1A1A31 0%, #2A1A4C 70%, #4E2BDF 100%)", color: "#fff", display: "flex", alignItems: "center", gap: 14 }}>
        <span style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.22)", display: "grid", placeItems: "center" }}>
          <Icons.Sparkle size={20} weight={2.2} />
        </span>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14 }}>Become a Companion</div>
          <div style={{ fontFamily: "var(--font-ui)", fontSize: 12, color: "rgba(255,255,255,0.74)", marginTop: 2 }}>
            Book popular hikes 48h before everyone else.
          </div>
        </div>
        <a href="#" onClick={(e)=>{e.preventDefault(); onNav?.("membership");}} style={{ color: "#fff", textDecoration: "none" }}>
          <Icons.ArrowRight size={18} weight={2.4} />
        </a>
      </div>
    </aside>
  );
}

// --------------------------------------------------------
// Related hikes
// --------------------------------------------------------
function RelatedHikes({ onNav }) {
  const items = [
    { title: "Sunrise · Lickey Hills", img: "photo-recovery-walk.jpg", date: "Sat 24 May · 08:00", level: "Easy", spots: 8 },
    { title: "Cannock Chase circular",  img: "photo-trail-hikers.jpg",   date: "Sat 10 May · 09:30", level: "Moderate", spots: 8 },
    { title: "Forest bathing walk",     img: "photo-forest-bathing.jpg", date: "Sat 17 May · 14:00", level: "Gentle",   spots: 6 },
  ];
  return (
    <section style={{ padding: "0 40px 100px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 32, marginBottom: 32 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 14 }}>Other hikes you might like</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 40, color: "var(--h2h-ink)", margin: 0, letterSpacing: "-0.02em" }}>More on the trail this month.</h2>
          </div>
          <a className="btn btn-secondary btn-sm" href="#" onClick={(e)=>{e.preventDefault(); onNav?.("booking");}}>See full calendar <Icons.ArrowRight size={14} weight={2.2} /></a>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
          {items.map((it) => (
            <a key={it.title} href="#" style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", borderRadius: 24, overflow: "hidden", background: "#fff", border: "1px solid rgba(15,12,39,0.06)", boxShadow: "var(--shadow-sm)" }}>
              <div style={{ position: "relative", aspectRatio: "16/10" }}>
                <img src={`assets/${it.img}`} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", top: 12, left: 12, display: "flex", gap: 6 }}>
                  <span className="pill pill-light" style={{ fontSize: 11.5 }}>{it.level}</span>
                  <span className="pill pill-light" style={{ fontSize: 11.5, background: "rgba(15,12,39,0.55)", color: "#fff", backdropFilter: "blur(8px)" }}>{it.spots} left</span>
                </div>
              </div>
              <div style={{ padding: 18 }}>
                <div style={{ fontFamily: "var(--font-ui)", fontSize: 12, color: "var(--h2h-slate)", fontWeight: 500, letterSpacing: 0.02 }}>{it.date}</div>
                <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "var(--h2h-forest)", margin: "6px 0 0", letterSpacing: "-0.01em" }}>{it.title}</h4>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

window.EventPage = EventPage;
