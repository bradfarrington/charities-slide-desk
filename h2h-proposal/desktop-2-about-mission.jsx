// ===========================================================
//  Desktop — About + Mission
// ===========================================================

function DesktopAbout() {
  return (
    <section className="section" style={{ position: "relative" }}>
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: 96, alignItems: "center" }}>
        {/* image collage */}
        <div style={{ position: "relative", height: 620 }}>
          <div style={{
            position: "absolute", top: 0, left: 0, width: 360, height: 460,
            borderRadius: 28, overflow: "hidden",
            boxShadow: "0 24px 50px rgba(15,12,39,0.16)",
          }}>
            <img src="assets/photo-mountain-group.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{
            position: "absolute", bottom: 0, right: 0, width: 320, height: 380,
            borderRadius: 28, overflow: "hidden",
            boxShadow: "0 24px 50px rgba(15,12,39,0.16)",
            border: "8px solid #fff",
          }}>
            <img src="assets/photo-trail-hikers.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          {/* floating stat chip */}
          <div style={{
            position: "absolute", top: 200, right: 20,
            background: "#fff", borderRadius: 20,
            padding: "16px 20px",
            boxShadow: "0 18px 40px rgba(15,12,39,0.14)",
            border: "1px solid rgba(15,12,39,0.05)",
            display: "flex", alignItems: "center", gap: 14,
            zIndex: 3,
          }}>
            <span style={{ width: 46, height: 46, borderRadius: 999, background: "var(--grad-brand)", color: "#fff", display: "grid", placeItems: "center", boxShadow: "0 6px 16px rgba(123,47,255,0.32)" }}>
              <Icons.Heart2 size={20} />
            </span>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: "var(--h2h-ink)", lineHeight: 1.15 }}>Pay-what-you-can</div>
              <div style={{ fontFamily: "var(--font-ui)", fontSize: 12.5, color: "var(--h2h-slate)" }}>Bursary places, every season.</div>
            </div>
          </div>
        </div>

        {/* text */}
        <div>
          <div className="eyebrow" style={{ marginBottom: 20 }}>Our story</div>
          <h2 className="h-section" style={{ fontSize: 60, color: "var(--h2h-forest)" }}>
            We walk with purpose,<br />
            <span style={{ color: "var(--h2h-ink)" }}>at the pace of the person</span><br />
            <em style={{ fontWeight: 600, color: "var(--h2h-violet)" }}>next to us.</em>
          </h2>

          <div style={{ marginTop: 30, display: "flex", flexDirection: "column", gap: 16, fontSize: 18, lineHeight: 1.6, color: "var(--h2h-ink-2)", maxWidth: 540 }}>
            <p style={{ margin: 0 }}>
              Hike2Heal began on a single muddy footpath outside Birmingham — a handful of people in recovery, finding it easier to talk shoulder‑to‑shoulder than face‑to‑face.
            </p>
            <p style={{ margin: 0 }}>
              Today we're a community of <strong style={{ color: "var(--h2h-ink)", fontWeight: 600 }}>over 1,200 walkers</strong>, hosting guided hikes across the Midlands and beyond — for anyone navigating addiction, mental‑health challenges, trauma, or simply the weight of an ordinary week.
            </p>
          </div>

          {/* small stats row */}
          <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, border: "1px solid var(--h2h-line)", borderRadius: 18, overflow: "hidden", background: "#fff" }}>
            {[
              { v: "2019", l: "Founded in Birmingham" },
              { v: "60+", l: "Guided hikes hosted" },
              { v: "100%", l: "Bursary places held" },
            ].map((s, i) => (
              <div key={s.l} style={{ padding: "20px 22px", borderLeft: i === 0 ? "none" : "1px solid var(--h2h-line)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 30, color: "var(--h2h-ink)", letterSpacing: "-0.02em", lineHeight: 1 }}>{s.v}</div>
                <div style={{ fontFamily: "var(--font-ui)", fontSize: 13, color: "var(--h2h-slate)", marginTop: 6 }}>{s.l}</div>
              </div>
            ))}
          </div>

          <a className="btn btn-secondary" href="#" style={{ marginTop: 32 }}>
            More about Hike2Heal <Icons.ArrowRight size={16} weight={2.2} />
          </a>
        </div>
      </div>
    </section>
  );
}

// --------------------------------------------------------
// MISSION — values around a central portrait image, organic layout
// --------------------------------------------------------
function DesktopMission() {
  const values = [
    { Ic: Icons.Leaf, title: "Nature therapy", body: "Open skies, soft trails, and time to think — landscapes that help people put themselves back together.", tone: "sage" },
    { Ic: Icons.Users, title: "Community & belonging", body: "Every hike builds the kind of friendships that last past the car park. No labels, no pressure.", tone: "violet" },
    { Ic: Icons.Hand, title: "Recovery without judgement", body: "We walk alongside people facing addiction, mental health challenges, and trauma — at their pace, no questions.", tone: "clay" },
    { Ic: Icons.Sun, title: "Hope & growth", body: "Each step is small. Each step is a step. Together they become a way forward you can trust.", tone: "sun" },
  ];

  const toneStyle = (t) => ({
    sage:   { bg: "#E7F1E5", fg: "#3F5E3F" },
    violet: { bg: "var(--h2h-violet-tint)", fg: "var(--h2h-violet)" },
    clay:   { bg: "#F7ECE0", fg: "#8C5A36" },
    sun:    { bg: "#FFF4C8", fg: "#8A6E14" },
  }[t]);

  return (
    <section style={{ padding: "120px 40px", position: "relative" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* heading */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "end", marginBottom: 64 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>Our mission</div>
            <h2 className="h-section" style={{ fontSize: 64, color: "var(--h2h-forest)" }}>
              Four ideas that<br />keep us walking<br />forward.
            </h2>
          </div>
          <p className="lede-lg" style={{ maxWidth: 480, justifySelf: "end" }}>
            Recovery isn't a journey to walk alone — every step forward is stronger when taken together. Here's what we hold to, mile after mile.
          </p>
        </div>

        {/* values + portrait layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 360px 1fr", gap: 32, alignItems: "stretch" }}>
          {/* left column - 2 stacked */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[values[0], values[2]].map((v, i) => {
              const tone = toneStyle(v.tone);
              return (
                <div key={v.title} style={{
                  background: "#fff", borderRadius: 28,
                  padding: 28,
                  border: "1px solid rgba(15,12,39,0.06)",
                  boxShadow: "0 4px 12px rgba(15,12,39,0.04)",
                  flex: 1,
                  display: "flex", flexDirection: "column", gap: 16,
                  ...(i === 0 ? { transform: "translateY(20px)" } : {}),
                }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 18,
                    background: tone.bg, color: tone.fg,
                    display: "grid", placeItems: "center",
                  }}>
                    <v.Ic size={26} weight={2} />
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 24, color: "var(--h2h-ink)", lineHeight: 1.15 }}>
                    {v.title}
                  </div>
                  <div style={{ fontSize: 15.5, lineHeight: 1.55, color: "var(--h2h-slate)" }}>
                    {v.body}
                  </div>
                </div>
              );
            })}
          </div>

          {/* center portrait */}
          <div style={{ position: "relative" }}>
            <div style={{
              borderRadius: 200,
              overflow: "hidden",
              height: "100%",
              minHeight: 540,
              background: "#eee",
              boxShadow: "0 30px 70px rgba(15,12,39,0.18)",
            }}>
              <img src="assets/photo-forest-bathing.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            {/* badge over portrait */}
            <div style={{
              position: "absolute", top: -20, left: "50%", transform: "translateX(-50%)",
              background: "#fff", padding: "8px 16px",
              borderRadius: 999, border: "1px solid rgba(15,12,39,0.08)",
              fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: 12.5, color: "var(--h2h-ink)",
              display: "inline-flex", alignItems: "center", gap: 8,
              boxShadow: "0 6px 18px rgba(15,12,39,0.08)",
            }}>
              <Icons.Wind size={14} weight={2.2} style={{ color: "var(--h2h-violet)" }} /> A guided breath
            </div>
            {/* sticker bottom */}
            <div style={{
              position: "absolute", bottom: -16, left: "50%", transform: "translateX(-50%)",
              background: "var(--grad-brand)", color: "#fff",
              padding: "12px 24px", borderRadius: 999,
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, letterSpacing: "0.02em",
              boxShadow: "0 12px 30px rgba(123,47,255,0.32)",
            }}>
              You are welcome here
            </div>
          </div>

          {/* right column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {[values[1], values[3]].map((v, i) => {
              const tone = toneStyle(v.tone);
              return (
                <div key={v.title} style={{
                  background: "#fff", borderRadius: 28,
                  padding: 28,
                  border: "1px solid rgba(15,12,39,0.06)",
                  boxShadow: "0 4px 12px rgba(15,12,39,0.04)",
                  flex: 1,
                  display: "flex", flexDirection: "column", gap: 16,
                  ...(i === 1 ? { transform: "translateY(20px)" } : {}),
                }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 18,
                    background: tone.bg, color: tone.fg,
                    display: "grid", placeItems: "center",
                  }}>
                    <v.Ic size={26} weight={2} />
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 24, color: "var(--h2h-ink)", lineHeight: 1.15 }}>
                    {v.title}
                  </div>
                  <div style={{ fontSize: 15.5, lineHeight: 1.55, color: "var(--h2h-slate)" }}>
                    {v.body}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

window.DesktopAbout = DesktopAbout;
window.DesktopMission = DesktopMission;
