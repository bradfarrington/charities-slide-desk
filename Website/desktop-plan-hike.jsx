// ===========================================================
//  "Plan your next hike" — homepage booking widget
//  Custom mini calendar preview + upcoming hikes rail
// ===========================================================

function DesktopPlanYourHike({ onNav }) {
  // pluck the next four
  const next = HIKE_DB.slice(0, 4);

  // build a small day-strip for May 2025 — Mon to Sun
  const weekStart = 19; // Mon 19 May
  const weekDays = Array.from({ length: 7 }, (_, i) => ({
    day: weekStart + i,
    dow: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"][i],
    iso: `2025-05-${String(weekStart + i).padStart(2, "0")}`,
  }));
  const hikesByDate = HIKE_DB.reduce((acc, h) => ((acc[h.date] = acc[h.date] || []).push(h), acc), {});

  return (
    <section style={{ padding: "100px 40px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "end", gap: 32, marginBottom: 40 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Plan your next hike</div>
            <h2 className="h-section" style={{ fontSize: 60 }}>
              The whole month,<br />
              <span style={{ color: "var(--h2h-violet)" }}>at a glance.</span>
            </h2>
          </div>
          <p className="lede-lg" style={{ maxWidth: 480, fontSize: 17 }}>
            Weekly walks somewhere on the map most Saturdays. Tap a date, pick your hike, save your spot in under a minute.
          </p>
        </div>

        {/* widget */}
        <div style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #FBF5FF 100%)",
          borderRadius: 40,
          padding: 32,
          border: "1px solid rgba(123,47,255,0.14)",
          boxShadow: "0 30px 70px rgba(15,12,39,0.08)",
          display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 28,
        }}>
          {/* LEFT — interactive week strip + month preview */}
          <div style={{ background: "#fff", borderRadius: 28, padding: 26, border: "1px solid rgba(15,12,39,0.06)", display: "flex", flexDirection: "column", gap: 24 }}>
            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "var(--h2h-ink)", letterSpacing: "-0.01em" }}>This week · May 2025</div>
                <div style={{ fontFamily: "var(--font-ui)", fontSize: 13, color: "var(--h2h-slate)", marginTop: 2 }}>Mon 19 — Sun 25 May</div>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <button aria-label="prev week" style={{ width: 36, height: 36, borderRadius: 999, border: "1px solid var(--h2h-line)", background: "#fff", color: "var(--h2h-ink)", cursor: "pointer", display: "grid", placeItems: "center" }}>
                  <Icons.ArrowLeft size={15} weight={2.2} />
                </button>
                <button aria-label="next week" style={{ width: 36, height: 36, borderRadius: 999, border: "1px solid var(--h2h-line)", background: "#fff", color: "var(--h2h-ink)", cursor: "pointer", display: "grid", placeItems: "center" }}>
                  <Icons.ArrowRight size={15} weight={2.2} />
                </button>
              </div>
            </div>

            {/* Day strip */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 10 }}>
              {weekDays.map((d) => {
                const hikes = hikesByDate[d.iso] || [];
                const hasEvents = hikes.length > 0;
                const totalSpots = hikes.reduce((s, h) => s + h.spots, 0);
                const totalCap = hikes.reduce((s, h) => s + h.capacity, 0);
                const ratio = totalCap > 0 ? totalSpots / totalCap : 0;
                const status =
                  !hasEvents ? "no" :
                  ratio === 0 ? "full" :
                  ratio < 0.35 ? "few" : "open";
                const isActive = d.day === 24;
                return (
                  <button key={d.iso} onClick={() => onNav?.("booking")} disabled={!hasEvents} style={{
                    aspectRatio: "1 / 1.18",
                    borderRadius: 18,
                    border: isActive ? "2px solid var(--h2h-violet)" : "1px solid rgba(15,12,39,0.08)",
                    background: isActive ? "var(--h2h-violet-tint)" : hasEvents ? "#fff" : "rgba(15,12,39,0.02)",
                    padding: "12px 10px",
                    display: "flex", flexDirection: "column", justifyContent: "space-between",
                    cursor: hasEvents ? "pointer" : "default",
                    fontFamily: "inherit",
                    opacity: hasEvents ? 1 : 0.55,
                    position: "relative",
                  }}>
                    <div>
                      <div style={{ fontFamily: "var(--font-ui)", fontSize: 10.5, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--h2h-slate)" }}>{d.dow}</div>
                      <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 26, color: "var(--h2h-ink)", lineHeight: 1, marginTop: 4, letterSpacing: "-0.02em" }}>{d.day}</div>
                    </div>
                    <div>
                      {hasEvents ? (
                        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                          {hikes.slice(0, 2).map((h, i) => (
                            <div key={i} style={{ height: 4, borderRadius: 999, background: status === "full" ? "#9CA3AF" : status === "few" ? "#F59E0B" : "#52DB82" }} />
                          ))}
                          <span style={{ fontFamily: "var(--font-ui)", fontSize: 10, color: "var(--h2h-slate)" }}>
                            {hikes.length} hike{hikes.length > 1 ? "s" : ""}
                          </span>
                        </div>
                      ) : (
                        <span style={{ fontFamily: "var(--font-ui)", fontSize: 10, color: "var(--h2h-slate)" }}>rest day</span>
                      )}
                    </div>
                    {isActive && <span style={{ position: "absolute", top: -8, right: -8, width: 20, height: 20, borderRadius: 999, background: "var(--grad-brand)", display: "grid", placeItems: "center", color: "#fff", boxShadow: "0 4px 10px rgba(123,47,255,0.4)" }}><Icons.Check size={11} weight={3} /></span>}
                  </button>
                );
              })}
            </div>

            {/* footer with month progress */}
            <div style={{ marginTop: "auto", padding: 16, borderRadius: 18, background: "linear-gradient(135deg, var(--h2h-violet-tint), #FFFFFF)", border: "1px solid rgba(15,12,39,0.05)", display: "flex", alignItems: "center", gap: 14 }}>
              <span style={{ width: 44, height: 44, borderRadius: 12, background: "var(--grad-brand)", color: "#fff", display: "grid", placeItems: "center", boxShadow: "var(--shadow-glow)" }}>
                <Icons.Calendar size={20} weight={2} />
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "var(--h2h-ink)" }}>
                  8 hikes scheduled in May
                </div>
                <div style={{ fontFamily: "var(--font-ui)", fontSize: 12.5, color: "var(--h2h-slate)", marginTop: 2 }}>
                  See the full calendar → reserve any spot in seconds.
                </div>
              </div>
              <button className="btn btn-primary btn-sm" onClick={() => onNav?.("booking")}>
                Open calendar <Icons.ArrowRight size={14} weight={2.4} />
              </button>
            </div>
          </div>

          {/* RIGHT — upcoming hikes rail */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "var(--h2h-ink)", letterSpacing: "-0.01em" }}>Next up</div>
              <a href="#" onClick={(e)=>{e.preventDefault(); onNav?.("booking");}} style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, color: "var(--h2h-violet)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4 }}>
                See all <Icons.ArrowRight size={13} weight={2.4} />
              </a>
            </div>

            {next.slice(0, 4).map((h, i) => {
              const ratio = h.spots / h.capacity;
              const status = ratio === 0 ? "full" : ratio < 0.35 ? "few" : "open";
              return (
                <a key={i} href="#" onClick={(e)=>{e.preventDefault(); onNav?.("event");}} style={{
                  display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 14, alignItems: "center",
                  padding: 14, borderRadius: 18,
                  background: "#fff", border: "1px solid rgba(15,12,39,0.06)",
                  textDecoration: "none", color: "inherit",
                  transition: "all 160ms ease",
                }}>
                  <div style={{ width: 54, height: 54, borderRadius: 14, background: "var(--h2h-violet-tint)", color: "var(--h2h-violet)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", lineHeight: 1 }}>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22 }}>{parseInt(h.date.split("-")[2], 10)}</span>
                    <span style={{ fontFamily: "var(--font-ui)", fontSize: 9.5, fontWeight: 600, letterSpacing: 0.08, textTransform: "uppercase", marginTop: 2 }}>May</span>
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "var(--h2h-ink)", lineHeight: 1.2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {h.title}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 4, fontFamily: "var(--font-ui)", fontSize: 11.5, color: "var(--h2h-slate)" }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 3 }}><Icons.Clock size={11} weight={2.4} /> {h.time}</span>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 3 }}><Icons.Pin size={11} weight={2.4} /> {h.where}</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ width: 7, height: 7, borderRadius: 999, background: status === "full" ? "#9CA3AF" : status === "few" ? "#F59E0B" : "#52DB82" }} />
                    <span style={{ fontFamily: "var(--font-ui)", fontSize: 11.5, fontWeight: 600, color: status === "full" ? "var(--h2h-slate)" : status === "few" ? "#C4790E" : "var(--h2h-sage-deep)" }}>
                      {status === "full" ? "Full" : `${h.spots} left`}
                    </span>
                  </div>
                </a>
              );
            })}

            <a href="#" onClick={(e)=>{e.preventDefault(); onNav?.("membership");}} style={{
              marginTop: "auto",
              display: "flex", alignItems: "center", gap: 14,
              padding: 16, borderRadius: 18,
              background: "var(--h2h-ink)", color: "#fff",
              textDecoration: "none",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{ position: "absolute", inset: 0, background: "radial-gradient(120% 90% at 100% 100%, rgba(255,61,200,0.42), transparent 60%)", pointerEvents: "none" }} />
              <span style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.2)", display: "grid", placeItems: "center", flexShrink: 0, position: "relative" }}>
                <Icons.Sparkle size={18} weight={2.2} />
              </span>
              <div style={{ position: "relative", flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14 }}>Members book 48h early</div>
                <div style={{ fontFamily: "var(--font-ui)", fontSize: 12, color: "rgba(255,255,255,0.74)", marginTop: 2 }}>£8/mo · cancel any time</div>
              </div>
              <Icons.ArrowRight size={18} weight={2.4} style={{ position: "relative" }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

window.DesktopPlanYourHike = DesktopPlanYourHike;
