// ===========================================================
//  Custom Hike Calendar — the booking page's hero component
//
//  Renders a month grid where event dates are highlighted with
//  capacity dots, click to select, surfaces matching hikes below.
//  Pure React state (no router, no external lib).
// ===========================================================

// May 2025 event seed
const HIKE_DB = [
  { date: "2025-05-03", time: "07:00", title: "Sunrise · Lickey Hills",      where: "Worcestershire", level: "Easy",     duration: "3h",  spots: 4,  capacity: 14, price: 12 },
  { date: "2025-05-10", time: "09:30", title: "Cannock Chase circular",      where: "Staffordshire",  level: "Moderate", duration: "5h",  spots: 8,  capacity: 16, price: 18 },
  { date: "2025-05-17", time: "06:00", title: "Pen y Fan at first light",    where: "Brecon Beacons", level: "Hard",     duration: "8h",  spots: 2,  capacity: 12, price: 28, featured: true },
  { date: "2025-05-17", time: "14:00", title: "Forest bathing walk",         where: "West Devon",     level: "Gentle",   duration: "3h",  spots: 6,  capacity: 12, price: 12 },
  { date: "2025-05-24", time: "08:00", title: "Sunrise · Lickey Hills",      where: "Worcestershire", level: "Easy",     duration: "3h",  spots: 8,  capacity: 14, price: 12 },
  { date: "2025-05-24", time: "11:00", title: "Bring-a-friend Saturday",     where: "Sutton Park",    level: "Gentle",   duration: "2h",  spots: 12, capacity: 20, price: 12 },
  { date: "2025-05-25", time: "10:00", title: "Sunday slow walk",            where: "Lickey Hills",   level: "Gentle",   duration: "2h",  spots: 0,  capacity: 12, price: 12 },
  { date: "2025-05-31", time: "07:00", title: "Snowdon weekend (day 1)",     where: "Eryri",          level: "Hard",     duration: "10h", spots: 3,  capacity: 10, price: 32 },
];

function HikeCalendar({ selectedDate, onSelectDate }) {
  // Build May 2025 grid; Monday-first.
  const year = 2025, month = 4; // 0-indexed May
  const monthName = "May";
  const firstDay = new Date(Date.UTC(year, month, 1));
  const startDow = (firstDay.getUTCDay() + 6) % 7; // Mon = 0
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Build cells (with leading prev-month pads and trailing pads to fill 6 rows)
  const cells = [];
  // leading
  const prevDays = new Date(year, month, 0).getDate();
  for (let i = 0; i < startDow; i++) {
    cells.push({ day: prevDays - startDow + 1 + i, outside: true });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, outside: false, iso: `2025-05-${String(d).padStart(2, "0")}` });
  }
  while (cells.length % 7 !== 0 || cells.length < 42) {
    const d = cells.length - daysInMonth - startDow + 1;
    cells.push({ day: d, outside: true });
  }

  const hikesByDate = HIKE_DB.reduce((acc, h) => ((acc[h.date] = acc[h.date] || []).push(h), acc), {});
  const today = "2025-05-13"; // pinned for mock realism

  return (
    <div style={{ background: "#fff", borderRadius: 28, padding: 28, border: "1px solid rgba(15,12,39,0.06)", boxShadow: "0 8px 24px rgba(15,12,39,0.06)" }}>
      {/* nav */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 22 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 26, color: "var(--h2h-ink)", letterSpacing: "-0.02em" }}>{monthName} 2025</div>
          <span className="pill pill-violet" style={{ padding: "5px 12px", fontSize: 12 }}>{HIKE_DB.length} hikes this month</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button aria-label="prev" style={cnBtn}><Icons.ArrowLeft size={16} weight={2.2} /></button>
          <button style={{ fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: 13, padding: "9px 14px", borderRadius: 999, border: "1px solid var(--h2h-line)", background: "#fff", color: "var(--h2h-ink)", cursor: "pointer" }}>Today</button>
          <button aria-label="next" style={cnBtn}><Icons.ArrowRight size={16} weight={2.2} /></button>
        </div>
      </div>

      {/* day headers */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 6, marginBottom: 10 }}>
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
          <div key={d} style={{ fontFamily: "var(--font-ui)", fontSize: 11.5, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--h2h-slate)", textAlign: "center", paddingBottom: 4 }}>{d}</div>
        ))}
      </div>

      {/* cells */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 6 }}>
        {cells.map((c, i) => {
          const hikes = hikesByDate[c.iso] || [];
          const hasEvents = hikes.length > 0;
          const isSelected = selectedDate === c.iso;
          const isToday = c.iso === today;
          // capacity color: sum spots
          const totalSpots = hikes.reduce((s, h) => s + h.spots, 0);
          const totalCap = hikes.reduce((s, h) => s + h.capacity, 0);
          const ratio = totalCap > 0 ? totalSpots / totalCap : 0;
          const capacityColor =
            !hasEvents ? "transparent" :
            ratio === 0 ? "#9CA3AF" :
            ratio < 0.3 ? "#F59E0B" :
            "#52DB82";
          const isFull = hasEvents && ratio === 0;

          return (
            <button
              key={i}
              disabled={c.outside || isFull || !hasEvents}
              onClick={() => hasEvents && onSelectDate(c.iso)}
              style={{
                aspectRatio: "1 / 0.95",
                borderRadius: 16,
                border: isSelected ? "2px solid var(--h2h-violet)" : "1px solid rgba(15,12,39,0.06)",
                background:
                  c.outside ? "transparent" :
                  isSelected ? "var(--h2h-violet-tint)" :
                  hasEvents ? "rgba(243,232,255,0.32)" :
                  "transparent",
                padding: 8,
                cursor: c.outside ? "default" : hasEvents ? "pointer" : "default",
                display: "flex", flexDirection: "column", justifyContent: "space-between",
                position: "relative",
                opacity: c.outside ? 0.28 : isFull ? 0.6 : 1,
                transition: "all 160ms ease",
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => { if (!c.outside && hasEvents && !isSelected) e.currentTarget.style.background = "var(--h2h-violet-tint)"; }}
              onMouseLeave={(e) => { if (!isSelected && hasEvents) e.currentTarget.style.background = "rgba(243,232,255,0.32)"; }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{
                  fontFamily: "var(--font-display)", fontWeight: isSelected ? 700 : 600, fontSize: 16,
                  color: isToday ? "var(--h2h-violet)" : "var(--h2h-ink)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  width: isToday ? 24 : "auto", height: isToday ? 24 : "auto",
                  borderRadius: 999, background: isToday ? "rgba(123,47,255,0.12)" : "transparent",
                }}>{c.day}</span>
                {hasEvents && (
                  <span style={{ fontFamily: "var(--font-ui)", fontSize: 10, fontWeight: 600, color: "var(--h2h-slate)" }}>
                    {hikes.length}
                  </span>
                )}
              </div>
              {hasEvents && (
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <span style={{ width: 6, height: 6, borderRadius: 999, background: capacityColor }} />
                  <span style={{ fontFamily: "var(--font-ui)", fontSize: 10.5, fontWeight: 500, color: "var(--h2h-slate)", textTransform: "lowercase" }}>
                    {isFull ? "full" : `${totalSpots} left`}
                  </span>
                </div>
              )}
              {isSelected && (
                <span style={{ position: "absolute", top: -6, right: -6, width: 22, height: 22, borderRadius: 999, background: "var(--grad-brand)", display: "grid", placeItems: "center", color: "#fff" }}>
                  <Icons.Check size={12} weight={3} />
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* legend */}
      <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 22, paddingTop: 18, borderTop: "1px solid var(--h2h-line)", fontFamily: "var(--font-ui)", fontSize: 12, color: "var(--h2h-slate)" }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><span style={{ width: 8, height: 8, borderRadius: 999, background: "#52DB82" }} />Plenty of spots</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><span style={{ width: 8, height: 8, borderRadius: 999, background: "#F59E0B" }} />Filling up</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><span style={{ width: 8, height: 8, borderRadius: 999, background: "#9CA3AF" }} />Full</span>
        <span style={{ marginLeft: "auto", display: "inline-flex", alignItems: "center", gap: 6 }}>
          From <strong style={{ color: "var(--h2h-ink)", fontWeight: 600 }}>£12 per hike</strong> · or covered by a Companion membership.
        </span>
      </div>
    </div>
  );
}

const cnBtn = {
  width: 40, height: 40, borderRadius: 999,
  border: "1px solid var(--h2h-line)", background: "#fff",
  color: "var(--h2h-ink)", cursor: "pointer",
  display: "grid", placeItems: "center",
};

window.HikeCalendar = HikeCalendar;
window.HIKE_DB = HIKE_DB;
