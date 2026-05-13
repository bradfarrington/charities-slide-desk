// ===========================================================
//  Membership page — tiers, perks, comparison, FAQ, member voices
// ===========================================================

function MembershipPage({ onNav }) {
  const [cycle, setCycle] = React.useState("month"); // "month" | "year"
  const [selected, setSelected] = React.useState("companion");

  const tiers = [
    {
      id: "walker",
      name: "Walker",
      tag: "Pay as you go",
      tone: "neutral",
      monthly: 0, yearly: 0,
      payg: true,
      tagline: "Join in. Pay per hike, no subscription, no expectations.",
      perks: [
        { Ic: Icons.Calendar, label: "Pay-per-hike booking", sub: "From £12 a hike · £28 for big-mountain days." },
        { Ic: Icons.Mail,     label: "Monthly newsletter", sub: "Stories from the trail." },
        { Ic: Icons.Users,    label: "Members-only WhatsApp", sub: "Optional, after your first hike." },
      ],
      cta: "Create my account",
    },
    {
      id: "companion",
      name: "Companion",
      tag: "Most popular",
      tone: "brand",
      monthly: 8, yearly: 72, save: 24,
      tagline: "Walk regularly? Get every hike included, plus priority and kit.",
      perks: [
        { Ic: Icons.Check,    label: "Every hike included", sub: "No per-hike fee — just turn up." },
        { Ic: Icons.Sparkle,  label: "Priority booking", sub: "Reserve popular hikes 48 hours early." },
        { Ic: Icons.Leaf,     label: "Packed lunch included", sub: "On every full-day hike." },
        { Ic: Icons.Globe,    label: "Minibus seat held", sub: "From Birmingham city centre." },
        { Ic: Icons.Heart,    label: "Bring +1 included", sub: "Once a quarter — your guest pays nothing." },
      ],
      cta: "Become a Companion",
    },
    {
      id: "pathmaker",
      name: "Pathmaker",
      tag: "Keep us walking",
      tone: "dark",
      monthly: 18, yearly: 168, save: 48,
      tagline: "Underwrite a place for someone who can't afford one.",
      perks: [
        { Ic: Icons.Check,   label: "Everything in Companion", sub: "Priority, lunch, transport, +1." },
        { Ic: Icons.Hand,    label: "Sponsor a hiker", sub: "Your monthly funds a quarterly bursary place." },
        { Ic: Icons.Quote,   label: "Quarterly impact letter", sub: "Stories from the people you helped." },
        { Ic: Icons.Mountain,label: "Annual residential", sub: "A place on our weekend retreat, included." },
        { Ic: Icons.Star,    label: "Named on the trail wall", sub: "If you'd like to be — totally optional." },
      ],
      cta: "Become a Pathmaker",
    },
  ];

  return (
    <div style={{ background: "var(--h2h-paper)", color: "var(--fg-default)", minHeight: 100, position: "relative", overflow: "hidden", isolation: "isolate" }}>
      <div style={{ position: "absolute", inset: "0 0 auto 0", height: 760, background: "linear-gradient(180deg, #FBF5FF 0%, #FFFFFF 100%)", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <SubHeader active="membership" onNav={onNav} />

        {/* Hero */}
        <section style={{ padding: "60px 40px 40px", position: "relative" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 18 }}>Membership · pay if you can</div>
              <h1 className="h-display" style={{ fontSize: 80 }}>
                Walk with us<br />
                <span style={{ fontStyle: "italic", fontWeight: 600, background: "linear-gradient(110deg, #7B2FFF, #D72ADF 60%, #FF3DC8)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", color: "transparent" }}>year-round.</span>
              </h1>
              <p className="lede-lg" style={{ marginTop: 22, maxWidth: 540, fontSize: 18 }}>
                Two ways to walk with us: pay per hike, or subscribe and get every walk covered. Memberships also help us run our <strong style={{ color: "var(--h2h-ink)", fontWeight: 600 }}>quiet bursary fund</strong> for people who can’t pay.
              </p>

              {/* trust line */}
              <div style={{ marginTop: 28, display: "flex", flexWrap: "wrap", gap: 20, fontFamily: "var(--font-ui)", fontSize: 13.5, color: "var(--h2h-slate)" }}>
                {[
                  "Cancel anytime, one click",
                  "100% goes to running hikes",
                  "Gift Aid registered",
                ].map((t) => (
                  <span key={t} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                    <Icons.Check size={14} weight={2.4} style={{ color: "var(--h2h-success)" }} /> {t}
                  </span>
                ))}
              </div>
            </div>

            {/* hero illustration / impact card */}
            <div style={{ position: "relative" }}>
              <div style={{ position: "relative", borderRadius: 44, overflow: "hidden", aspectRatio: "4/5", boxShadow: "0 30px 70px rgba(15,12,39,0.18)" }}>
                <img src="assets/photo-people-hands.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", borderRadius: "inherit" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,12,39,0) 50%, rgba(15,12,39,0.6) 100%)", borderRadius: "inherit", pointerEvents: "none" }} />
              </div>
              {/* floating member-funded-spots stat */}
              <div style={{
                position: "absolute", left: -28, bottom: 40,
                background: "#fff", borderRadius: 24, padding: 22,
                width: 280,
                boxShadow: "0 24px 60px rgba(15,12,39,0.18)",
                border: "1px solid rgba(15,12,39,0.05)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                  <span style={{ width: 30, height: 30, borderRadius: 999, background: "var(--grad-brand)", color: "#fff", display: "grid", placeItems: "center" }}>
                    <Icons.Hand size={15} weight={2.2} />
                  </span>
                  <span style={{ fontFamily: "var(--font-ui)", fontSize: 12, fontWeight: 600, color: "var(--h2h-slate)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Members funded
                  </span>
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 48, letterSpacing: "-0.03em", color: "var(--h2h-ink)", lineHeight: 1 }}>
                  238 spots
                </div>
                <div style={{ fontFamily: "var(--font-ui)", fontSize: 13, color: "var(--h2h-slate)", marginTop: 6 }}>
                  …for people who couldn't otherwise afford the kit, transport, or a day off, in 2024.
                </div>
              </div>
              {/* tag pill top */}
              <div style={{
                position: "absolute", top: 28, right: -10,
                background: "rgba(255,255,255,0.94)",
                backdropFilter: "blur(10px)",
                borderRadius: 999,
                padding: "10px 16px",
                display: "inline-flex", alignItems: "center", gap: 8,
                border: "1px solid rgba(255,255,255,0.6)",
                boxShadow: "0 10px 26px rgba(15,12,39,0.14)",
              }}>
                <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--h2h-success)" }} />
                <span style={{ fontFamily: "var(--font-ui)", fontSize: 12.5, fontWeight: 500, color: "var(--h2h-ink)" }}>
                  314 active members
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Cycle toggle */}
        <section style={{ padding: "30px 40px 0" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", justifyContent: "center" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: 5, borderRadius: 999, background: "rgba(15,12,39,0.05)", border: "1px solid rgba(15,12,39,0.06)" }}>
              {[
                { id: "month", l: "Monthly" },
                { id: "year",  l: "Yearly", note: "save 25%" },
              ].map(o => {
                const a = o.id === cycle;
                return (
                  <button key={o.id} onClick={() => setCycle(o.id)} style={{
                    fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14,
                    padding: "10px 22px", borderRadius: 999,
                    background: a ? "#fff" : "transparent",
                    color: a ? "var(--h2h-ink)" : "var(--h2h-slate)",
                    border: "none", cursor: "pointer",
                    boxShadow: a ? "0 4px 12px rgba(15,12,39,0.08)" : "none",
                    display: "inline-flex", alignItems: "center", gap: 8,
                  }}>
                    {o.l}
                    {o.note && (
                      <span style={{ background: "var(--h2h-success-tint)", color: "var(--h2h-sage-deep)", padding: "3px 8px", borderRadius: 999, fontSize: 11, fontWeight: 700, letterSpacing: 0.02 }}>{o.note}</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tier cards */}
        <section style={{ padding: "32px 40px 60px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22, alignItems: "stretch" }}>
            {tiers.map((t) => (
              <TierCard
                key={t.id}
                tier={t}
                cycle={cycle}
                selected={selected === t.id}
                onSelect={() => setSelected(t.id)}
              />
            ))}
          </div>
        </section>

        {/* Compare */}
        <section style={{ padding: "20px 40px 80px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 24, marginBottom: 24 }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: 14 }}>Compare</div>
                <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 40, color: "var(--h2h-ink)", margin: 0, letterSpacing: "-0.02em" }}>
                  Everything that's in each tier.
                </h2>
              </div>
            </div>
            <CompareTable />
          </div>
        </section>

        {/* Member stories */}
        <section style={{ padding: "0 40px 80px" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div className="eyebrow" style={{ marginBottom: 14 }}>Why our members support us</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 40, color: "var(--h2h-ink)", margin: "0 0 32px", letterSpacing: "-0.02em" }}>
              In their own words.
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
              {[
                { who: "Hannah O.", role: "Companion · since 2023", quote: "I'm not in recovery myself but my brother is. Becoming a member felt like the small thing I could actually do for him.", img: "photo-portrait-man.jpg" },
                { who: "Marcus T.", role: "Pathmaker · since 2022", quote: "I can't always make the hikes anymore. Funding someone else's spot is the next best thing — feels like I'm still walking with them.", img: "photo-recovery-walk.jpg" },
                { who: "Aisha B.",  role: "Companion · since 2024", quote: "Worth it for the lunch alone, but honestly the WhatsApp group is what keeps me on the right side of a hard week.", img: "photo-mountain-group.jpg" },
              ].map((m) => (
                <div key={m.who} style={{ background: "#fff", borderRadius: 24, padding: 24, border: "1px solid rgba(15,12,39,0.06)" }}>
                  <div style={{ display: "flex", gap: 3, color: "var(--h2h-violet)", marginBottom: 12 }}>{[0,1,2,3,4].map(i => <Icons.Star key={i} size={14} />)}</div>
                  <p style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: 17, lineHeight: 1.5, color: "var(--h2h-ink)", margin: 0, letterSpacing: "-0.005em" }}>
                    &ldquo;{m.quote}&rdquo;
                  </p>
                  <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 999, backgroundImage: `url(assets/${m.img})`, backgroundSize: "cover", border: "2.5px solid #fff", boxShadow: "var(--shadow-sm)" }} />
                    <div>
                      <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, color: "var(--h2h-ink)" }}>{m.who}</div>
                      <div style={{ fontSize: 12.5, color: "var(--h2h-slate)" }}>{m.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <FAQ />

        <DesktopFooter />
      </div>
    </div>
  );
}

// --------------------------------------------------------
// Tier card
// --------------------------------------------------------
function TierCard({ tier, cycle, selected, onSelect }) {
  const isDark = tier.tone === "dark";
  const isBrand = tier.tone === "brand";
  const price = cycle === "month" ? tier.monthly : tier.yearly;
  const unit = cycle === "month" ? "/ month" : "/ year";

  return (
    <div
      onClick={onSelect}
      style={{
        position: "relative",
        borderRadius: 32,
        padding: 30,
        display: "flex", flexDirection: "column",
        cursor: "pointer",
        background: isDark
          ? "linear-gradient(165deg, #1A1A31 0%, #2A1A4C 60%, #4E2BDF 100%)"
          : isBrand
          ? "linear-gradient(180deg, #FFFFFF 0%, #FBF5FF 100%)"
          : "#fff",
        color: isDark ? "#fff" : "var(--h2h-ink)",
        border: isBrand
          ? "2px solid var(--h2h-violet)"
          : isDark
          ? "1px solid rgba(255,255,255,0.12)"
          : "1px solid rgba(15,12,39,0.08)",
        boxShadow: isBrand
          ? "0 30px 70px rgba(123,47,255,0.22)"
          : isDark
          ? "0 30px 70px rgba(15,12,39,0.32)"
          : "var(--shadow-sm)",
        transform: isBrand ? "translateY(-12px)" : "none",
        overflow: "hidden",
      }}
    >
      {isDark && <div style={{ position: "absolute", right: -60, bottom: -60, width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(closest-side, rgba(255,61,200,0.34), transparent)", filter: "blur(40px)" }} />}

      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18, position: "relative" }}>
        <span style={{
          fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22,
          letterSpacing: "-0.01em",
        }}>{tier.name}</span>
        <span className="pill" style={{
          fontSize: 11,
          background: isBrand ? "var(--grad-brand)" : isDark ? "rgba(255,255,255,0.14)" : "rgba(15,12,39,0.05)",
          color: isBrand ? "#fff" : isDark ? "#fff" : "var(--h2h-slate)",
          border: isBrand ? "none" : isDark ? "1px solid rgba(255,255,255,0.18)" : "none",
        }}>{tier.tag}</span>
      </div>

      <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 6, position: "relative" }}>
        {tier.payg ? (
          <>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 56, letterSpacing: "-0.03em", lineHeight: 1 }}>£12</span>
            <span style={{ fontFamily: "var(--font-ui)", fontSize: 14, color: isDark ? "rgba(255,255,255,0.7)" : "var(--h2h-slate)" }}>+ / hike</span>
          </>
        ) : (
          <>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 56, letterSpacing: "-0.03em", lineHeight: 1 }}>
              £{price}
            </span>
            <span style={{ fontFamily: "var(--font-ui)", fontSize: 14, color: isDark ? "rgba(255,255,255,0.7)" : "var(--h2h-slate)" }}>{unit}</span>
          </>
        )}
      </div>
      {cycle === "year" && tier.save && (
        <div style={{ marginBottom: 14 }}>
          <span style={{ display: "inline-block", padding: "3px 10px", borderRadius: 999, background: isDark ? "rgba(255,255,255,0.12)" : "var(--h2h-success-tint)", color: isDark ? "#fff" : "var(--h2h-sage-deep)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 11.5, letterSpacing: 0.02 }}>
            Save £{tier.save} a year
          </span>
        </div>
      )}

      <p style={{ fontSize: 14.5, lineHeight: 1.55, color: isDark ? "rgba(255,255,255,0.78)" : "var(--h2h-slate)", margin: "0 0 22px", position: "relative" }}>
        {tier.tagline}
      </p>

      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 14, position: "relative", flex: 1 }}>
        {tier.perks.map((p, i) => (
          <li key={i} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 12, alignItems: "flex-start" }}>
            <span style={{
              width: 32, height: 32, borderRadius: 10,
              background: isDark ? "rgba(255,255,255,0.1)" : isBrand ? "var(--grad-brand)" : "var(--h2h-violet-tint)",
              color: isDark ? "#fff" : isBrand ? "#fff" : "var(--h2h-violet)",
              display: "grid", placeItems: "center", flexShrink: 0,
            }}>
              <p.Ic size={15} weight={2.2} />
            </span>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14.5, lineHeight: 1.3 }}>{p.label}</div>
              <div style={{ fontFamily: "var(--font-ui)", fontSize: 12.5, color: isDark ? "rgba(255,255,255,0.66)" : "var(--h2h-slate)", lineHeight: 1.5, marginTop: 2 }}>{p.sub}</div>
            </div>
          </li>
        ))}
      </ul>

      <button
        className={isDark ? "btn btn-secondary" : "btn btn-primary"}
        style={{
          justifyContent: "center", width: "100%", position: "relative",
          background: isDark ? "#fff" : undefined,
          color: isDark ? "var(--h2h-ink)" : undefined,
          border: isDark ? "none" : undefined,
          boxShadow: isDark ? "none" : undefined,
        }}
      >
        {tier.cta} <Icons.ArrowRight size={15} weight={2.2} />
      </button>
    </div>
  );
}

// --------------------------------------------------------
// Compare table
// --------------------------------------------------------
function CompareTable() {
  const rows = [
    { label: "Book any guided hike",                  w: "From £12", c: true, p: true },
    { label: "Hikes covered by membership",            w: false, c: true, p: true },
    { label: "Packed lunch on full-day hikes",         w: "£6", c: true, p: true },
    { label: "Minibus from Birmingham",               w: "£8", c: true, p: true },
    { label: "Priority booking (48 hours early)",     w: false, c: true, p: true },
    { label: "Bring +1 included, once a quarter",     w: false, c: true, p: true },
    { label: "Members-only WhatsApp",                 w: "After first hike", c: true, p: true },
    { label: "Sponsor a bursary place each quarter",  w: false, c: false, p: true },
    { label: "Annual weekend residential",            w: false, c: false, p: true },
    { label: "Named on the trail wall (optional)",    w: false, c: false, p: true },
  ];
  const Mark = ({ v }) => {
    if (v === true) return <span style={{ width: 28, height: 28, borderRadius: 999, background: "var(--h2h-success-tint)", color: "var(--h2h-sage-deep)", display: "inline-grid", placeItems: "center" }}><Icons.Check size={15} weight={3} /></span>;
    if (v === false) return <span style={{ color: "var(--h2h-slate)", opacity: 0.3, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18 }}>—</span>;
    return <span style={{ fontFamily: "var(--font-ui)", fontSize: 12, fontWeight: 500, color: "var(--h2h-slate)" }}>{v}</span>;
  };
  return (
    <div style={{ background: "#fff", borderRadius: 28, border: "1px solid var(--h2h-line)", overflow: "hidden" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", padding: "22px 24px", borderBottom: "1px solid var(--h2h-line)", background: "var(--h2h-violet-tint)" }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, color: "var(--h2h-slate)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Perk</div>
        {["Walker", "Companion", "Pathmaker"].map((t, i) => (
          <div key={t} style={{ textAlign: "center", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: i === 1 ? "var(--h2h-violet)" : "var(--h2h-ink)" }}>
            {t}{i === 1 && <span style={{ display: "inline-block", marginLeft: 8, padding: "2px 8px", borderRadius: 999, background: "var(--h2h-violet)", color: "#fff", fontSize: 10, letterSpacing: 0.04 }}>POPULAR</span>}
          </div>
        ))}
      </div>
      {rows.map((r, i) => (
        <div key={r.label} style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", padding: "16px 24px", alignItems: "center", borderBottom: i === rows.length - 1 ? "none" : "1px solid var(--h2h-line)" }}>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--h2h-ink)" }}>{r.label}</div>
          <div style={{ textAlign: "center" }}><Mark v={r.w} /></div>
          <div style={{ textAlign: "center", background: i % 2 === 0 ? "rgba(243,232,255,0.4)" : "transparent", padding: "8px 0", borderRadius: 8 }}><Mark v={r.c} /></div>
          <div style={{ textAlign: "center" }}><Mark v={r.p} /></div>
        </div>
      ))}
    </div>
  );
}

// --------------------------------------------------------
// FAQ
// --------------------------------------------------------
function FAQ() {
  const [open, setOpen] = React.useState(0);
  const items = [
    { q: "How much does a hike cost?", a: "Most hikes are £12 a person. Big-mountain days (Pen y Fan, Snowdon, Ben Nevis) are £28 — they cost us more to run safely. A Companion membership covers every walk for £8 a month, so if you hike monthly the maths is on your side." },
    { q: "Can I pause or cancel my membership?", a: "Anytime, in one click from your account. We don't ask why, and there's no minimum term." },
    { q: "What if I can't afford a Companion membership but I want one?", a: "We have a quiet bursary fund — funded entirely by Pathmakers. Email hello@hike2heal.org.uk and we'll sort it. No forms, no proof, no follow-ups." },
    { q: "Does any of this go to a third party?", a: "No. We're a CIC and 100% of membership income goes to running hikes — kit, hike-lead training, transport, insurance, and the bursary fund." },
    { q: "Can I gift a membership?", a: "Yes — Companion and Pathmaker memberships can be gifted for a year. We'll send a hand-written card and the recipient picks their start date." },
  ];
  return (
    <section style={{ padding: "0 40px 100px" }}>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div className="eyebrow" style={{ marginBottom: 14, justifyContent: "center" }}>Frequently asked</div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 44, color: "var(--h2h-ink)", margin: 0, letterSpacing: "-0.02em" }}>
            Things we get asked a lot.
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q} style={{
                background: "#fff", borderRadius: 22,
                border: isOpen ? "1px solid rgba(123,47,255,0.28)" : "1px solid rgba(15,12,39,0.06)",
                boxShadow: isOpen ? "0 10px 28px rgba(15,12,39,0.06)" : "none",
                overflow: "hidden",
              }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
                  width: "100%", textAlign: "left",
                  padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16,
                  background: "transparent", border: "none", cursor: "pointer", fontFamily: "inherit",
                }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "var(--h2h-ink)" }}>{it.q}</span>
                  <span style={{ width: 32, height: 32, borderRadius: 999, background: isOpen ? "var(--grad-brand)" : "var(--h2h-violet-tint)", color: isOpen ? "#fff" : "var(--h2h-violet)", display: "grid", placeItems: "center", transition: "all 200ms" }}>
                    {isOpen ? <Icons.ChevronUp size={16} weight={2.4} /> : <Icons.Chevron size={16} weight={2.4} />}
                  </span>
                </button>
                {isOpen && (
                  <div style={{ padding: "0 24px 22px", fontSize: 16, lineHeight: 1.6, color: "var(--h2h-slate)", maxWidth: 760 }}>
                    {it.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

window.MembershipPage = MembershipPage;
