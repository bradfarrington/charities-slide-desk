// Against the Odds — high-fidelity recreation of the live CRM dark mode UI.
// The CRM source (in against-the-odds-crm copy/) uses react-router / supabase /
// lucide-react / context hooks that can't run inside a Babel-standalone deck,
// so this file mirrors the visual design directly with hard-coded sample data.
// Color tokens and nav structure match the live app exactly.

const ATO = (() => {
  const PRIMARY        = "#FF6100";
  const PRIMARY_LIGHT  = "#FF8533";
  const PRIMARY_GLOW   = "rgba(255, 97, 0, 0.15)";
  const BG_ROOT        = "#0B0D13";
  const BG_SIDEBAR     = "#0F1117";
  const BG_MAIN        = "#12141C";
  const BG_CARD        = "#1A1D27";
  const BG_CARD_HOVER  = "#1E2231";
  const BG_INPUT       = "#161821";
  const BORDER         = "#2A2D3A";
  const BORDER_LIGHT   = "#333751";
  const FG_PRIMARY     = "#F0F0F5";
  const FG_SECONDARY   = "#8B8FA3";
  const FG_MUTED       = "#5C5F73";
  return {
    PRIMARY, PRIMARY_LIGHT, PRIMARY_GLOW, BG_ROOT, BG_SIDEBAR, BG_MAIN, BG_CARD,
    BG_CARD_HOVER, BG_INPUT, BORDER, BORDER_LIGHT, FG_PRIMARY, FG_SECONDARY, FG_MUTED,
  };
})();

const ATOIcon = ({ path, size = 18, stroke = 1.75 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
    {typeof path === "string" ? <path d={path} /> : path}
  </svg>
);

// Lucide-aligned single-path/two-path glyphs
const ATO_ICON_PATHS = {
  dashboard: "M3 3h7v9H3zM14 3h7v5h-7zM14 12h7v9h-7zM3 16h7v5H3z",
  calendar:  "M3 8h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM8 2v4M16 2v4",
  users:     "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  building:  "M3 21h18M5 21V7l8-4v18M19 21V11l-6-4",
  check:     "M9 11l3 3L22 4M22 12v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11",
  notebook:  "M4 19V5a2 2 0 0 1 2-2h14v18H6a2 2 0 0 1-2-2zM4 19a2 2 0 0 1 2-2h14M9 3v18",
  columns:   "M4 5h4v14H4zM10 5h4v14h-4zM16 5h4v14h-4z",
  folder:    "M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",
  receipt:   "M14 2H6a2 2 0 0 0-2 2v18l4-2 4 2 4-2 4 2V8zM9 7h6M9 11h6M9 15h4",
  clipboard: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M9 4a3 3 0 1 1 6 0v2H9zM9 14l2 2 4-4",
  target:    "M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4z",
  heart:     "M19 14c1.5-1.5 3-3.6 3-6a4 4 0 0 0-7-2.6A4 4 0 0 0 8 5c-2 2-5 5-5 8 0 4 5 9 9 9 1.5 0 3-.5 4-1.5",
  file:      "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8",
  hard:      "M22 12H2M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11zM6 16h.01M10 16h.01",
  bolt:      "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
  share:     "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13",
  mail:      "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM22 6l-10 7L2 6",
  settings:  "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z",
  search:    "M21 21l-4.3-4.3M17 11a6 6 0 1 1-12 0 6 6 0 0 1 12 0z",
  bell:      "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0",
  plus:      "M12 5v14M5 12h14",
  more:      "M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM19 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",
  chev:      "M9 18l6-6-6-6",
};

// ---------- Sidebar ----------
const ATOSidebar = ({ active = "dashboard" }) => {
  const sections = [
    { heading: "CORE", items: [
      { id: "dashboard",      label: "Dashboard",       icon: "dashboard" },
      { id: "calendar",       label: "Calendar",        icon: "calendar" },
      { id: "contacts",       label: "Contacts",        icon: "users" },
      { id: "companies",      label: "Companies",       icon: "building" },
      { id: "tasks",          label: "Tasks",           icon: "check" },
      { id: "meeting-notes",  label: "Meeting Notes",   icon: "notebook" },
    ]},
    { heading: "PREVENTION", items: [
      { id: "workshop-tracker", label: "Workshop Tracker", icon: "columns" },
      { id: "prevention-resources", label: "Resources",    icon: "folder" },
      { id: "prevention-surveys",   label: "Surveys",      icon: "clipboard" },
      { id: "prevention-targets",   label: "Targets",      icon: "target" },
    ]},
    { heading: "RECOVERY", items: [
      { id: "recovery-seekers",   label: "Recovery Clients",  icon: "users" },
      { id: "treatment-tracker",  label: "Treatment Tracker", icon: "heart" },
      { id: "recovery-resources", label: "Resources",         icon: "folder" },
      { id: "recovery-surveys",   label: "Surveys",           icon: "clipboard" },
    ]},
    { heading: "OPERATIONS", items: [
      { id: "projects",      label: "Projects",      icon: "folder" },
      { id: "contracts",     label: "Contracts",     icon: "file" },
      { id: "staff-hub",     label: "Staff Hub",     icon: "users" },
      { id: "media-library", label: "Media Library", icon: "hard" },
      { id: "automations",   label: "Automations",   icon: "bolt" },
    ]},
    { heading: "MARKETING", items: [
      { id: "social-planner",  label: "Social Planner", icon: "share" },
      { id: "email-marketing", label: "Marketing Hub",  icon: "mail" },
    ]},
  ];
  return (
    <aside style={{
      width: 240, background: ATO.BG_SIDEBAR, borderRight: `1px solid ${ATO.BORDER}`,
      display: "flex", flexDirection: "column", flexShrink: 0, overflow: "hidden",
    }}>
      {/* Brand strip */}
      <div style={{
        padding: "18px 20px", borderBottom: `1px solid ${ATO.BORDER}`,
        display: "flex", alignItems: "center", gap: 10, height: 64, boxSizing: "border-box",
      }}>
        <img src="assets/ato-logo.png" alt="" style={{ height: 28, width: "auto", objectFit: "contain" }} />
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: ATO.FG_PRIMARY, letterSpacing: "0.02em" }}>Against the Odds</span>
          <span style={{ fontSize: 10, color: ATO.FG_MUTED, letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 2 }}>CRM</span>
        </div>
      </div>
      <nav style={{ padding: "12px 8px", flex: 1, overflow: "auto", display: "flex", flexDirection: "column", gap: 14 }}>
        {sections.map(sec => (
          <div key={sec.heading}>
            <div style={{
              fontSize: 9.5, fontWeight: 700, color: ATO.FG_MUTED,
              letterSpacing: "0.12em", padding: "8px 12px 6px",
            }}>{sec.heading}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {sec.items.map(it => {
                const isActive = it.id === active;
                return (
                  <div key={it.id} style={{
                    padding: "8px 12px", borderRadius: 8, display: "flex", alignItems: "center", gap: 11,
                    color: isActive ? ATO.PRIMARY : ATO.FG_SECONDARY,
                    background: isActive ? ATO.PRIMARY_GLOW : "transparent",
                    fontSize: 13, fontWeight: isActive ? 600 : 500,
                    boxShadow: isActive ? `inset 2px 0 0 ${ATO.PRIMARY}` : "none",
                  }}>
                    <ATOIcon path={ATO_ICON_PATHS[it.icon]} size={16} />
                    <span>{it.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
};

// ---------- Topbar ----------
const ATOTopBar = ({ title, breadcrumb }) => (
  <div style={{
    height: 64, borderBottom: `1px solid ${ATO.BORDER}`, background: ATO.BG_SIDEBAR,
    display: "flex", alignItems: "center", padding: "0 28px", gap: 20, flexShrink: 0,
  }}>
    <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
      {breadcrumb && (
        <div style={{ fontSize: 11, color: ATO.FG_MUTED, letterSpacing: "0.04em" }}>{breadcrumb}</div>
      )}
      <div style={{ fontSize: 18, fontWeight: 600, color: ATO.FG_PRIMARY, letterSpacing: "-0.01em" }}>{title}</div>
    </div>
    <div style={{
      position: "relative", width: 320, height: 36, background: ATO.BG_INPUT,
      border: `1px solid ${ATO.BORDER}`, borderRadius: 8,
      display: "flex", alignItems: "center", gap: 10, padding: "0 12px",
      color: ATO.FG_MUTED, fontSize: 13,
    }}>
      <ATOIcon path={ATO_ICON_PATHS.search} size={15} />
      <span>Search clients, workshops, contacts…</span>
    </div>
    <div style={{
      width: 36, height: 36, borderRadius: 8, border: `1px solid ${ATO.BORDER}`,
      display: "flex", alignItems: "center", justifyContent: "center", color: ATO.FG_SECONDARY,
      position: "relative",
    }}>
      <ATOIcon path={ATO_ICON_PATHS.bell} size={16} />
      <span style={{
        position: "absolute", top: 6, right: 6, width: 8, height: 8, borderRadius: 999,
        background: ATO.PRIMARY, boxShadow: `0 0 0 2px ${ATO.BG_SIDEBAR}`,
      }} />
    </div>
    <div style={{
      width: 36, height: 36, borderRadius: 999, background: `linear-gradient(135deg, ${ATO.PRIMARY}, ${ATO.PRIMARY_LIGHT})`,
      display: "flex", alignItems: "center", justifyContent: "center",
      color: "#fff", fontSize: 13, fontWeight: 700,
    }}>BF</div>
  </div>
);

// ---------- Frame ----------
const ATOFrame = ({ active, title, breadcrumb, children }) => (
  <div style={{
    width: "100%", height: "100%", display: "flex", background: ATO.BG_MAIN,
    fontFamily: "Inter, system-ui, sans-serif", color: ATO.FG_PRIMARY, fontSize: 13,
  }}>
    <ATOSidebar active={active} />
    <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
      <ATOTopBar title={title} breadcrumb={breadcrumb} />
      <div style={{ flex: 1, overflow: "hidden", position: "relative", padding: 24, background: ATO.BG_MAIN }}>{children}</div>
    </div>
  </div>
);

// ---------- Dashboard ----------
const ATOCard = ({ children, style }) => (
  <div style={{
    background: ATO.BG_CARD, border: `1px solid ${ATO.BORDER}`, borderRadius: 10,
    ...style,
  }}>{children}</div>
);

const ATOStatTile = ({ label, value, delta, accent }) => (
  <ATOCard style={{ padding: 18 }}>
    <div style={{ fontSize: 11, color: ATO.FG_MUTED, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 10 }}>{label}</div>
    <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
      <div style={{ fontSize: 30, fontWeight: 700, color: accent ? ATO.PRIMARY : ATO.FG_PRIMARY, letterSpacing: "-0.025em", lineHeight: 1 }}>{value}</div>
      {delta && <div style={{ fontSize: 11, color: ATO.PRIMARY_LIGHT, fontWeight: 600 }}>{delta}</div>}
    </div>
  </ATOCard>
);

const ATOMiniBars = () => {
  const heights = [38, 52, 44, 68, 56, 78, 64, 88, 72, 96, 84];
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 88 }}>
      {heights.map((h, i) => (
        <div key={i} style={{
          flex: 1, height: h, background: i === heights.length - 1 ? ATO.PRIMARY : ATO.BORDER_LIGHT,
          borderRadius: 2, opacity: i === heights.length - 1 ? 1 : 0.55,
        }} />
      ))}
    </div>
  );
};

const ATORow = ({ avatarBg, name, role, status, statusColor, when }) => (
  <div style={{
    display: "grid", gridTemplateColumns: "36px 1fr 1fr 120px 90px",
    alignItems: "center", gap: 12, padding: "14px 20px", borderBottom: `1px solid ${ATO.BORDER}`,
  }}>
    <div style={{ width: 32, height: 32, borderRadius: 999, background: avatarBg, opacity: 0.9 }} />
    <div style={{ fontSize: 13, color: ATO.FG_PRIMARY, fontWeight: 500 }}>{name}</div>
    <div style={{ fontSize: 12, color: ATO.FG_SECONDARY }}>{role}</div>
    <div style={{
      display: "inline-flex", padding: "3px 8px", borderRadius: 999, fontSize: 11,
      background: statusColor + "22", color: statusColor, fontWeight: 600, alignSelf: "start", width: "fit-content",
    }}>{status}</div>
    <div style={{ fontSize: 11, color: ATO.FG_MUTED }}>{when}</div>
  </div>
);

const ATODashboardScreen = () => (
  <ATOFrame active="dashboard" title="Dashboard" breadcrumb="Home">
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 20 }}>
      <ATOStatTile label="Active Clients" value="184" delta="↑ 12" accent />
      <ATOStatTile label="Workshops · Month" value="28" delta="↑ 6" />
      <ATOStatTile label="Outcomes Logged" value="326" delta="↑ 48" />
      <ATOStatTile label="Invoices Due" value="£14.2k" />
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16, marginBottom: 20 }}>
      <ATOCard style={{ padding: 20 }}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: 16 }}>
          <div style={{ flex: 1, fontSize: 14, fontWeight: 600, color: ATO.FG_PRIMARY }}>Engagement · last 12 weeks</div>
          <div style={{ fontSize: 11, color: ATO.FG_MUTED, letterSpacing: "0.04em" }}>vs last quarter +18%</div>
        </div>
        <ATOMiniBars />
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10, fontSize: 10, color: ATO.FG_MUTED }}>
          {['W1','W2','W3','W4','W5','W6','W7','W8','W9','W10','W11'].map(w => <span key={w}>{w}</span>)}
        </div>
      </ATOCard>
      <ATOCard style={{ padding: 20 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: ATO.FG_PRIMARY, marginBottom: 14 }}>Upcoming workshops</div>
        {[
          ['Tue', '21', 'Recovery group · Birmingham', '14:00'],
          ['Wed', '22', 'Schools prevention · Selly Oak', '10:30'],
          ['Thu', '23', '1:1 aftercare · Marcus A.', '16:00'],
          ['Fri', '24', 'Family support evening', '18:30'],
        ].map(([d, n, title, time]) => (
          <div key={title} style={{ display: "flex", gap: 12, alignItems: "center", padding: "10px 0", borderBottom: `1px solid ${ATO.BORDER}` }}>
            <div style={{ width: 38, textAlign: "center" }}>
              <div style={{ fontSize: 9, color: ATO.FG_MUTED, letterSpacing: "0.06em" }}>{d}</div>
              <div style={{ fontSize: 18, color: ATO.FG_PRIMARY, fontWeight: 700, lineHeight: 1 }}>{n}</div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, color: ATO.FG_PRIMARY }}>{title}</div>
              <div style={{ fontSize: 11, color: ATO.FG_MUTED }}>{time}</div>
            </div>
          </div>
        ))}
      </ATOCard>
    </div>
    <ATOCard>
      <div style={{ padding: "16px 20px", borderBottom: `1px solid ${ATO.BORDER}`, display: "flex", alignItems: "center" }}>
        <div style={{ flex: 1, fontSize: 14, fontWeight: 600, color: ATO.FG_PRIMARY }}>Recent client activity</div>
        <div style={{
          padding: "7px 14px", background: ATO.PRIMARY, color: "#fff",
          fontSize: 12, fontWeight: 600, borderRadius: 7, display: "inline-flex", alignItems: "center", gap: 6,
          boxShadow: `0 0 0 1px ${ATO.PRIMARY_LIGHT}, 0 0 12px ${ATO.PRIMARY_GLOW}`,
        }}>
          <ATOIcon path={ATO_ICON_PATHS.plus} size={14} />
          Add client
        </div>
      </div>
      {[
        ['#3B4A6B', 'Marcus Allen',  'Treatment · Stage 3',     'On track', '#22C55E', '2h ago'],
        ['#6B4A3B', 'Priya Shah',    'Prevention · Workshop',   'Active',   '#3B82F6', '4h ago'],
        ['#4A3B6B', 'Tom Beckett',   'Recovery · Aftercare',    'Review',   '#F59E0B', 'Today'],
        ['#6B3B5A', 'Lara Singh',    'Treatment · Intake',      'New',      '#FF6100', 'Today'],
        ['#3B6B5A', 'Jordan Reed',   'Recovery · Stage 2',      'On track', '#22C55E', 'Yesterday'],
      ].map(([bg, name, role, status, color, when]) =>
        <ATORow key={name} avatarBg={bg} name={name} role={role} status={status} statusColor={color} when={when} />
      )}
    </ATOCard>
  </ATOFrame>
);

// ---------- Recovery Seekers list ----------
const ATORecoverySeekersScreen = () => (
  <ATOFrame active="recovery-seekers" title="Recovery Clients" breadcrumb="Recovery">
    <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
      {[
        ['All', '184', true],
        ['Treatment', '72', false],
        ['Prevention', '64', false],
        ['Aftercare', '48', false],
        ['At risk', '12', false],
      ].map(([label, n, active]) => (
        <div key={label} style={{
          padding: "8px 14px", borderRadius: 8, fontSize: 12,
          background: active ? ATO.PRIMARY_GLOW : ATO.BG_CARD,
          color: active ? ATO.PRIMARY : ATO.FG_SECONDARY,
          border: `1px solid ${active ? ATO.PRIMARY : ATO.BORDER}`,
          fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 6,
        }}>
          {label}
          <span style={{ opacity: 0.6, fontWeight: 400 }}>{n}</span>
        </div>
      ))}
      <div style={{ flex: 1 }} />
      <div style={{
        padding: "8px 14px", background: ATO.PRIMARY, color: "#fff", fontSize: 12, fontWeight: 600,
        borderRadius: 7, display: "inline-flex", alignItems: "center", gap: 6,
        boxShadow: `0 0 0 1px ${ATO.PRIMARY_LIGHT}, 0 0 12px ${ATO.PRIMARY_GLOW}`,
      }}>
        <ATOIcon path={ATO_ICON_PATHS.plus} size={14} />
        New client
      </div>
    </div>
    <ATOCard>
      <div style={{ display: "grid", gridTemplateColumns: "36px 1fr 1.4fr 130px 120px 80px",
                    padding: "12px 20px", borderBottom: `1px solid ${ATO.BORDER}`, fontSize: 10,
                    color: ATO.FG_MUTED, letterSpacing: "0.06em", textTransform: "uppercase" }}>
        <div />
        <div>Name</div>
        <div>Stage</div>
        <div>Status</div>
        <div>Key worker</div>
        <div>More</div>
      </div>
      {[
        ['#3B4A6B', 'Marcus Allen',  'Stage 3 · 12 weeks',  'On track', '#22C55E', 'M. Hayes'],
        ['#6B4A3B', 'Priya Shah',    'Stage 1 · 2 weeks',   'Active',   '#3B82F6', 'A. Khan'],
        ['#4A3B6B', 'Tom Beckett',   'Stage 4 · 28 weeks',  'Review',   '#F59E0B', 'S. Patel'],
        ['#6B3B5A', 'Lara Singh',    'Intake',              'New',      '#FF6100', '—'],
        ['#3B6B5A', 'Jordan Reed',   'Stage 2 · 6 weeks',   'On track', '#22C55E', 'M. Hayes'],
        ['#5A4A6B', 'Aaron West',    'Stage 3 · 14 weeks',  'On track', '#22C55E', 'A. Khan'],
        ['#6B3B4A', 'Becca Lloyd',   'Aftercare · 1 month', 'Stable',   '#22C55E', 'S. Patel'],
        ['#4A6B3B', 'Daniel Reece',  'Stage 1 · 1 week',    'New',      '#FF6100', 'M. Hayes'],
      ].map(([bg, name, stage, status, color, kw]) => (
        <div key={name} style={{
          display: "grid", gridTemplateColumns: "36px 1fr 1.4fr 130px 120px 80px",
          alignItems: "center", gap: 12, padding: "14px 20px", borderBottom: `1px solid ${ATO.BORDER}`,
        }}>
          <div style={{ width: 32, height: 32, borderRadius: 999, background: bg, opacity: 0.9 }} />
          <div style={{ fontSize: 13, color: ATO.FG_PRIMARY, fontWeight: 500 }}>{name}</div>
          <div style={{ fontSize: 12, color: ATO.FG_SECONDARY }}>{stage}</div>
          <div style={{
            display: "inline-flex", padding: "3px 8px", borderRadius: 999, fontSize: 11,
            background: color + "22", color, fontWeight: 600, width: "fit-content",
          }}>{status}</div>
          <div style={{ fontSize: 12, color: ATO.FG_SECONDARY }}>{kw}</div>
          <div style={{ color: ATO.FG_MUTED, display: "flex", justifyContent: "flex-end" }}>
            <ATOIcon path={ATO_ICON_PATHS.more} size={16} />
          </div>
        </div>
      ))}
    </ATOCard>
  </ATOFrame>
);

// ---------- Calendar ----------
const ATOCalendarScreen = () => {
  const events = {
    5:  [["Workshop", ATO.PRIMARY], ["1:1", "#3B82F6"]],
    8:  [["Group", "#22C55E"]],
    12: [["Workshop", ATO.PRIMARY], ["Intake", "#F59E0B"]],
    15: [["Workshop", ATO.PRIMARY]],
    19: [["Group", "#22C55E"], ["1:1", "#3B82F6"]],
    22: [["Workshop", ATO.PRIMARY]],
    23: [["1:1", "#3B82F6"]],
    28: [["Family eve", "#A855F7"]],
  };
  return (
    <ATOFrame active="calendar" title="Calendar" breadcrumb="Schedule">
      <ATOCard style={{ padding: 20 }}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: 18 }}>
          <div style={{ flex: 1, fontSize: 18, fontWeight: 600, color: ATO.FG_PRIMARY, letterSpacing: "-0.01em" }}>May 2026</div>
          <div style={{ display: "flex", gap: 6 }}>
            {['Month','Week','Day'].map((v, i) => (
              <div key={v} style={{
                padding: "6px 12px", fontSize: 12, fontWeight: 500,
                background: i === 0 ? ATO.PRIMARY : "transparent",
                color: i === 0 ? "#fff" : ATO.FG_SECONDARY,
                border: `1px solid ${i === 0 ? ATO.PRIMARY : ATO.BORDER}`,
                borderRadius: 6,
              }}>{v}</div>
            ))}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 1, background: ATO.BORDER, border: `1px solid ${ATO.BORDER}`, borderRadius: 8, overflow: "hidden" }}>
          {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d => (
            <div key={d} style={{ background: ATO.BG_SIDEBAR, padding: "10px 0", fontSize: 10, color: ATO.FG_MUTED, letterSpacing: "0.08em", textTransform: "uppercase", textAlign: "center" }}>{d}</div>
          ))}
          {Array.from({ length: 35 }).map((_, i) => {
            const day = i - 3;
            const isOff = day <= 0 || day > 31;
            const evs = events[day] || [];
            return (
              <div key={i} style={{
                background: isOff ? ATO.BG_MAIN : ATO.BG_CARD,
                minHeight: 84, padding: 8,
                display: "flex", flexDirection: "column", gap: 4,
              }}>
                <div style={{ fontSize: 12, color: isOff ? ATO.FG_MUTED : ATO.FG_PRIMARY, fontWeight: day === 22 ? 700 : 500 }}>
                  {!isOff ? day : ""}
                </div>
                {evs.map(([label, color], j) => (
                  <div key={j} style={{
                    fontSize: 10, padding: "2px 6px", borderRadius: 3,
                    background: color + "22", color,
                  }}>{label}</div>
                ))}
              </div>
            );
          })}
        </div>
      </ATOCard>
    </ATOFrame>
  );
};

Object.assign(window, { ATOFrame, ATODashboardScreen, ATORecoverySeekersScreen, ATOCalendarScreen });
