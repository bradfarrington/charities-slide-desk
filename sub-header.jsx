// ===========================================================
//  Slim page chrome — shared header + footer for sub-pages
// ===========================================================

function SubHeader({ active = "home", onNav }) {
  const links = [
    { id: "home", label: "Home" },
    { id: "events", label: "Hikes & events", drop: true },
    { id: "membership", label: "Membership" },
    { id: "stories", label: "Stories" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <header style={{ padding: "20px 32px 0", position: "relative", zIndex: 20 }}>
      <div style={{
        background: "rgba(255,255,255,0.78)",
        backdropFilter: "blur(18px) saturate(140%)",
        WebkitBackdropFilter: "blur(18px) saturate(140%)",
        border: "1px solid rgba(255,255,255,0.7)",
        boxShadow: "0 6px 20px rgba(15,12,39,0.06)",
        borderRadius: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "10px 14px 10px 22px",
      }}>
        <a href="#" onClick={(e)=>{e.preventDefault(); onNav?.("home");}} style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <img src="assets/logo-mark.png" alt="" style={{ height: 44, width: "auto" }} />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "var(--h2h-ink)", letterSpacing: "-0.01em" }}>Hike2Heal</span>
            <span style={{ fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: 10, color: "var(--h2h-slate)", letterSpacing: "0.22em", textTransform: "uppercase", marginTop: 3 }}>Recovery CIC</span>
          </div>
        </a>
        <nav style={{ display: "flex", gap: 4, alignItems: "center" }}>
          {links.map(l => (
            <a
              key={l.id}
              className={`nav-link ${active === l.id ? "is-active" : ""}`}
              href="#"
              onClick={(e)=>{e.preventDefault(); onNav?.(l.id);}}
            >
              {l.label}{l.drop && <Icons.Chevron size={14} weight={2.2} />}
            </a>
          ))}
        </nav>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <a className="btn btn-ghost btn-sm" href="#" style={{ background: "transparent", borderColor: "rgba(15,12,39,0.14)" }}>
            <Icons.Heart size={15} weight={2.1} /> Donate
          </a>
          <a className="btn btn-primary btn-sm" href="#" onClick={(e)=>{e.preventDefault(); onNav?.("booking");}}>
            Book a hike <Icons.ArrowRight size={15} weight={2.2} />
          </a>
        </div>
      </div>
    </header>
  );
}

window.SubHeader = SubHeader;
