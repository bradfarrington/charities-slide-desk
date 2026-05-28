// Staff CRM shell — sidebar, topbar, case header. Used by all CRM artboards.

const CRMSidebar = ({ active = "today", collapsed = false }) => {
  const sections = [
    { heading: "Work", items: [
      { id: "today", label: "Today", icon: "home" },
      { id: "referrals", label: "Referrals", icon: "inbox", badge: 7 },
      { id: "cases", label: "Cases", icon: "folder" },
      { id: "people", label: "People", icon: "users" },
    ]},
    { heading: "Service", items: [
      { id: "groups", label: "Groups & sessions", icon: "calendar" },
      { id: "comms", label: "Communications", icon: "megaphone" },
      { id: "documents", label: "Documents", icon: "file" },
      { id: "reports", label: "Reports", icon: "graph" },
    ]},
    { heading: "Later phase", items: [
      { id: "membership", label: "Membership", icon: "heart" },
      { id: "training", label: "Training", icon: "book" },
      { id: "research", label: "Research", icon: "pie", tag: "Anon" },
    ]},
  ];
  const width = collapsed ? 64 : 240;
  return (
    <aside style={{ width, background: "#fff", display: "flex", flexDirection: "column", flexShrink: 0, borderRight: "1px solid #EEF1F3" }}>
      <div style={{ padding: collapsed ? "16px 8px" : "16px 20px 12px", display: "flex", alignItems: "center", justifyContent: collapsed ? "center" : "space-between", borderBottom: "1px solid #EEF1F3", height: 64, boxSizing: "border-box" }}>
        {collapsed
          ? <img src="assets/favicon.png" style={{ height: 24 }} />
          : <img src="assets/logo.png" style={{ height: 26 }} />}
      </div>
      <nav style={{ padding: "10px 8px", display: "flex", flexDirection: "column", gap: 14, flex: 1, overflow: "auto" }}>
        {sections.map(sec => (
          <div key={sec.heading}>
            {!collapsed && <div style={{ fontSize: 10, fontWeight: 600, color: "#8A929B", textTransform: "uppercase", letterSpacing: "0.08em", padding: "6px 10px 6px" }}>{sec.heading}</div>}
            <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {sec.items.map(it => {
                const isActive = it.id === active;
                return (
                  <div key={it.id} style={{
                    background: isActive ? "#4B0082" : "transparent",
                    color: isActive ? "#fff" : "#5A6670",
                    borderRadius: 8,
                    padding: collapsed ? "9px 0" : "8px 10px",
                    display: "flex", alignItems: "center", gap: 10,
                    justifyContent: collapsed ? "center" : "flex-start",
                    fontSize: 13, fontWeight: isActive ? 600 : 500,
                  }}>
                    <Icon name={it.icon} size={16} color={isActive ? "#fff" : "#5A6670"} />
                    {!collapsed && <span style={{ flex: 1 }}>{it.label}</span>}
                    {!collapsed && it.badge && <span style={{ background: isActive ? "rgba(255,255,255,0.18)" : "#FEE581", color: isActive ? "#fff" : "#38005F", fontSize: 10, fontWeight: 700, padding: "1px 6px", borderRadius: 999 }}>{it.badge}</span>}
                    {!collapsed && it.tag && <span style={{ background: "#E0EFEA", color: "#00664D", fontSize: 9, fontWeight: 700, padding: "1px 5px", borderRadius: 999, letterSpacing: "0.04em" }}>{it.tag}</span>}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
      <div style={{ padding: "8px 8px 10px", borderTop: "1px solid #EEF1F3", display: "flex", flexDirection: "column", gap: 1 }}>
        <div style={{ padding: collapsed ? "9px 0" : "8px 10px", display: "flex", alignItems: "center", gap: 10, justifyContent: collapsed ? "center" : "flex-start", fontSize: 13, color: "#5A6670" }}>
          <Icon name="settings" size={16} color="#5A6670" />
          {!collapsed && <span>Settings</span>}
        </div>
        {!collapsed && (
          <div style={{ marginTop: 6, padding: "8px 8px", borderRadius: 8, background: "#FAFBFC", display: "flex", alignItems: "center", gap: 8 }}>
            <Avatar name="Joanna Patel" size={28} tint={0} />
            <div style={{ flex: 1, minWidth: 0, fontSize: 12, lineHeight: 1.3 }}>
              <div style={{ fontWeight: 600, color: "#1A1A1A", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Joanna Patel</div>
              <div style={{ color: "#8A929B", fontSize: 11 }}>Peer support worker</div>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

const CRMTopBar = ({ crumbs = [], right }) => (
  <header style={{ height: 56, background: "#fff", borderBottom: "1px solid #EEF1F3", display: "flex", alignItems: "center", padding: "0 20px", gap: 16, flexShrink: 0 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13 }}>
      {crumbs.map((c, i) => (
        <React.Fragment key={i}>
          {i > 0 && <Icon name="chevron" size={12} color="#8A929B" />}
          <span style={{ color: i === crumbs.length - 1 ? "#1A1A1A" : "#5A6670", fontWeight: i === crumbs.length - 1 ? 600 : 400 }}>{c}</span>
        </React.Fragment>
      ))}
    </div>
    <div style={{ flex: 1 }} />
    <div style={{ position: "relative", width: 280 }}>
      <div style={{ position: "absolute", left: 10, top: 9 }}><Icon name="search" size={14} color="#8A929B" /></div>
      <input readOnly placeholder="Search people, cases, documents…" style={{ width: "100%", height: 32, border: "1px solid #EEF1F3", borderRadius: 8, padding: "0 10px 0 30px", fontSize: 12, fontFamily: "inherit", background: "#FAFBFC", color: "#5A6670" }} />
      <span style={{ position: "absolute", right: 8, top: 7, fontSize: 10, color: "#8A929B", background: "#fff", border: "1px solid #E1E5E8", padding: "2px 5px", borderRadius: 4 }}>⌘K</span>
    </div>
    {right}
    <button style={{ width: 32, height: 32, borderRadius: 8, background: "transparent", border: 0, position: "relative", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Icon name="bell" size={16} color="#5A6670" />
      <span style={{ position: "absolute", top: 6, right: 6, width: 7, height: 7, borderRadius: "50%", background: "#FEE581", border: "1.5px solid #fff" }} />
    </button>
  </header>
);

// Case header used across all case-scoped screens.
const CaseHeader = ({ person, tab = "triage", restricted = true }) => {
  const p = person || { name: "Sarah Okafor", ref: "G-1042", tint: 0, stage: "Pre-sentence", worker: "Joanna Patel", overall: "amber", type: "Directly affected" };
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "triage", label: "Triage" },
    { id: "legal", label: "Legal & mitigation" },
    { id: "dsar", label: "DSAR" },
    { id: "documents", label: "Documents" },
    { id: "comms", label: "Comms" },
    { id: "notes", label: "Notes" },
    { id: "timeline", label: "Timeline" },
  ];
  return (
    <div style={{ background: "#fff", borderBottom: "1px solid #E1E5E8" }}>
      <div style={{ padding: "16px 24px 0", display: "flex", alignItems: "flex-start", gap: 16 }}>
        <Avatar name={p.name} size={52} tint={p.tint} />
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ fontFamily: "Urbanist, Inter, sans-serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", letterSpacing: "-0.01em" }}>{p.name}</div>
            {restricted && <Pill tone="restricted"><Icon name="lock" size={10} /> Restricted</Pill>}
            <Pill tone={p.type === "Impacted Other" ? "info" : "neutral"} dot>{p.type}</Pill>
          </div>
          <div style={{ fontSize: 12, color: "#5A6670", marginTop: 3, display: "flex", gap: 14 }}>
            <span>Member #{p.ref}</span>
            <span>·</span>
            <span>Stage: <strong style={{ color: "#1A1A1A", fontWeight: 600 }}>{p.stage}</strong></span>
            <span>·</span>
            <span>Key worker: <strong style={{ color: "#1A1A1A", fontWeight: 600 }}>{p.worker}</strong></span>
            <span>·</span>
            <span>Overall risk:</span>
            <RAG tone={p.overall} label={p.overall === "amber" ? "Amber" : p.overall === "red" ? "Red" : "Green"} size="sm" />
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <Button variant="ghost" size="sm" icon="message">Message</Button>
          <Button variant="ghost" size="sm" icon="file">Download summary</Button>
          <Button variant="primary" size="sm" icon="plus">Add</Button>
        </div>
      </div>
      <div style={{ padding: "14px 24px 0", display: "flex", gap: 2 }}>
        {tabs.map(t => (
          <div key={t.id} style={{
            padding: "8px 12px 12px",
            fontSize: 13,
            fontWeight: t.id === tab ? 600 : 500,
            color: t.id === tab ? "#4B0082" : "#5A6670",
            borderBottom: t.id === tab ? "2px solid #4B0082" : "2px solid transparent",
            marginBottom: -1,
          }}>{t.label}</div>
        ))}
      </div>
    </div>
  );
};

// Full CRM frame wrapper — drop any screen inside it.
const CRMFrame = ({ active, crumbs, children, topRight }) => (
  <div style={{ width: "100%", height: "100%", display: "flex", background: "#FAFBFC", fontFamily: "Inter, system-ui, sans-serif", color: "#1A1A1A", fontSize: 13 }}>
    <CRMSidebar active={active} />
    <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
      <CRMTopBar crumbs={crumbs} right={topRight} />
      <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>{children}</div>
    </div>
  </div>
);

Object.assign(window, { CRMSidebar, CRMTopBar, CaseHeader, CRMFrame });
