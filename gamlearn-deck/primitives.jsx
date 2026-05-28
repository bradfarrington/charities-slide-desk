// Primitives — shared across CRM + Portal design artboards.
// Scoped to GamLEARN tokens. Icon names are lucide-style single-path approximations.

const Icon = ({ name, size = 18, color = "currentColor", stroke = 1.5 }) => {
  const paths = {
    search: "M21 21l-4.3-4.3M17 11a6 6 0 11-12 0 6 6 0 0112 0z",
    users: "M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2 M12 7a4 4 0 11-8 0 4 4 0 018 0z M22 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75",
    user: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2 M16 7a4 4 0 11-8 0 4 4 0 018 0z",
    calendar: "M19 4H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zM16 2v4 M8 2v4 M3 10h18",
    inbox: "M22 12h-6l-2 3h-4l-2-3H2 M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z",
    file: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8",
    folder: "M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z",
    settings: "M12 15a3 3 0 100-6 3 3 0 000 6z M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z",
    plus: "M12 5v14 M5 12h14",
    filter: "M22 3H2l8 9.46V19l4 2v-8.54L22 3z",
    x: "M18 6L6 18 M6 6l12 12",
    chevron: "M9 18l6-6-6-6",
    chevDown: "M6 9l6 6 6-6",
    chevUp: "M18 15l-6-6-6 6",
    dots: "M12 13a1 1 0 100-2 1 1 0 000 2z M19 13a1 1 0 100-2 1 1 0 000 2z M5 13a1 1 0 100-2 1 1 0 000 2z",
    lock: "M19 11H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-7a2 2 0 00-2-2z M7 11V7a5 5 0 0110 0v4",
    shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    download: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4 M7 10l5 5 5-5 M12 15V3",
    upload: "M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4 M17 8l-5-5-5 5 M12 3v12",
    check: "M20 6L9 17l-5-5",
    bell: "M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9 M13.73 21a2 2 0 01-3.46 0",
    home: "M3 12l9-9 9 9 M5 10v10a1 1 0 001 1h3v-6h6v6h3a1 1 0 001-1V10",
    message: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z",
    mail: "M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z M22 6l-10 7L2 6",
    phone: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z",
    exit: "M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4 M16 17l5-5-5-5 M21 12H9",
    eye: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z M12 15a3 3 0 100-6 3 3 0 000 6z",
    eyeOff: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94 M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19 M14.12 14.12a3 3 0 11-4.24-4.24 M1 1l22 22",
    edit: "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7 M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z",
    trash: "M3 6h18 M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6 M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2 M10 11v6 M14 11v6",
    alert: "M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z M12 9v4 M12 17h.01",
    info: "M12 22a10 10 0 100-20 10 10 0 000 20z M12 16v-4 M12 8h.01",
    clock: "M12 22a10 10 0 100-20 10 10 0 000 20z M12 6v6l4 2",
    briefcase: "M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16",
    scale: "M3 6l9-4 9 4 M3 6l5 9 M3 6s-1 4 5 9c5 4 5-9 5-9 M21 6s1 4-5 9c-5 4-5-9-5-9 M21 6l-5 9 M12 2v20 M6 22h12",
    target: "M12 22a10 10 0 100-20 10 10 0 000 20z M12 18a6 6 0 100-12 6 6 0 000 12z M12 14a2 2 0 100-4 2 2 0 000 4z",
    book: "M4 19.5A2.5 2.5 0 016.5 17H20 M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z",
    heart: "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z",
    life: "M12 22a10 10 0 100-20 10 10 0 000 20z M12 17a5 5 0 100-10 5 5 0 000 10z M4.93 4.93l3.54 3.54 M15.54 15.54l3.53 3.53 M4.93 19.07l3.54-3.53 M15.54 8.46l3.53-3.53",
    gavel: "M14 2l8 8-4 4-8-8z M9 9l6 6 M12 12l-6 6-3-3 6-6 M11 22h10",
    share: "M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8 M16 6l-4-4-4 4 M12 2v13",
    megaphone: "M3 11l18-5v12l-18-5V11z M11.6 16.8a3 3 0 11-5.8-1.6",
    grid: "M3 3h7v7H3z M14 3h7v7h-7z M14 14h7v7h-7z M3 14h7v7H3z",
    list: "M8 6h13 M8 12h13 M8 18h13 M3 6h.01 M3 12h.01 M3 18h.01",
    map: "M1 6v16l7-3 8 3 7-3V4l-7 3-8-3z M8 3v16 M16 7v16",
    activity: "M22 12h-4l-3 9L9 3l-3 9H2",
    save: "M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z M17 21v-8H7v8 M7 3v5h8",
    send: "M22 2L11 13 M22 2l-7 20-4-9-9-4 20-7z",
    flag: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z M4 22V15",
    link: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71 M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71",
    paperclip: "M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48",
    refresh: "M23 4v6h-6 M1 20v-6h6 M3.51 9a9 9 0 0114.85-3.36L23 10 M1 14l4.64 4.36A9 9 0 0020.49 15",
    slash: "M10 10l4 4 M14 10l-4 4",
    arrow: "M5 12h14 M12 5l7 7-7 7",
    arrowL: "M19 12H5 M12 19l-7-7 7-7",
    arrowDn: "M12 5v14 M19 12l-7 7-7-7",
    arrowUp: "M12 19V5 M5 12l7-7 7 7",
    pin: "M12 22s8-7 8-13a8 8 0 00-16 0c0 6 8 13 8 13z M12 11a2 2 0 100-4 2 2 0 000 4z",
    moon: "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z",
    sun: "M12 17a5 5 0 100-10 5 5 0 000 10z M12 1v2 M12 21v2 M4.22 4.22l1.42 1.42 M18.36 18.36l1.42 1.42 M1 12h2 M21 12h2 M4.22 19.78l1.42-1.42 M18.36 5.64l1.42-1.42",
    camera: "M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z M12 17a4 4 0 100-8 4 4 0 000 8z",
    hide: "M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94 M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19 M14.12 14.12a3 3 0 11-4.24-4.24 M1 1l22 22",
    zap: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
    graph: "M3 3v18h18 M7 14l4-4 4 4 5-5",
    pie: "M21.21 15.89A10 10 0 118 2.83 M22 12A10 10 0 0012 2v10z",
    thumb: "M14 9V5a3 3 0 00-6 0v4H2v12h6v-9h6l4 9V9h-4z",
  };
  const d = paths[name] || "";
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, display: "inline-block" }}>
      {d.split(" M").map((seg, i) => <path key={i} d={(i === 0 ? "" : "M") + seg} />)}
    </svg>
  );
};

const Avatar = ({ name, size = 32, tint = 0 }) => {
  const tints = [
    { bg: "#F0E6F7", fg: "#4B0082" },
    { bg: "#E0EFEA", fg: "#00664D" },
    { bg: "#FFF4C2", fg: "#8A6600" },
    { bg: "#E3EDF5", fg: "#1F4A6E" },
    { bg: "#F8E3E0", fg: "#8A251A" },
    { bg: "#EEF1F3", fg: "#5A6670" },
  ];
  const t = tints[tint % tints.length];
  const initials = name.split(" ").map(n => n[0]).slice(0, 2).join("");
  return <span style={{ width: size, height: size, borderRadius: "50%", background: t.bg, color: t.fg, display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 600, fontSize: size * 0.38, flexShrink: 0, letterSpacing: 0 }}>{initials}</span>;
};

const Pill = ({ tone = "neutral", children, dot, style = {} }) => {
  const tones = {
    active: { bg: "#E0EFEA", fg: "#00664D" },
    pending: { bg: "#FFF4C2", fg: "#8A6600" },
    paused: { bg: "#E3EDF5", fg: "#2F6FA3" },
    closed: { bg: "#EEF1F3", fg: "#5A6670" },
    risk: { bg: "#F8E3E0", fg: "#C0392B" },
    amber: { bg: "#FBF1DE", fg: "#C9851A" },
    green: { bg: "#E6F1EC", fg: "#2E7D5B" },
    red: { bg: "#F8E3E0", fg: "#C0392B" },
    neutral: { bg: "#F0E6F7", fg: "#4B0082" },
    restricted: { bg: "#FFF", fg: "#4B0082", border: "1.5px solid #4B0082" },
    featured: { bg: "#FEE581", fg: "#38005F" },
    info: { bg: "#E3EDF5", fg: "#2F6FA3" },
  };
  const t = tones[tone] || tones.neutral;
  return (
    <span style={{ background: t.bg, color: t.fg, border: t.border || 0, fontSize: 11, fontWeight: 600, padding: "3px 8px", borderRadius: 999, display: "inline-flex", alignItems: "center", gap: 5, letterSpacing: "0.02em", textTransform: "none", ...style }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor" }} />}
      {children}
    </span>
  );
};

const Button = ({ variant = "primary", children, icon, iconRight, size = "md", fullWidth, style = {} }) => {
  const h = size === "sm" ? 32 : size === "lg" ? 48 : 38;
  const base = { height: h, borderRadius: 8, padding: size === "sm" ? "0 12px" : size === "lg" ? "0 20px" : "0 14px", fontFamily: "inherit", fontSize: size === "sm" ? 13 : 14, fontWeight: 500, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, cursor: "pointer", border: "1px solid transparent", width: fullWidth ? "100%" : "auto", lineHeight: 1 };
  const variants = {
    primary: { background: "#4B0082", color: "#fff" },
    secondary: { background: "#fff", color: "#4B0082", border: "1px solid #4B0082" },
    tertiary: { background: "transparent", color: "#4B0082" },
    ghost: { background: "transparent", color: "#5A6670", border: "1px solid #E1E5E8" },
    destructive: { background: "#C0392B", color: "#fff" },
    yellow: { background: "#FEE581", color: "#38005F" },
    dark: { background: "#1A1A1A", color: "#fff" },
  };
  return <button style={{ ...base, ...variants[variant], ...style }}>{icon && <Icon name={icon} size={size === "sm" ? 14 : 16} />}{children}{iconRight && <Icon name={iconRight} size={size === "sm" ? 14 : 16} />}</button>;
};

const Card = ({ children, padded = true, style = {} }) => (
  <div style={{ background: "#fff", border: "1px solid #E1E5E8", borderRadius: 12, padding: padded ? 20 : 0, boxShadow: "0 1px 2px rgba(75,0,130,0.04)", ...style }}>{children}</div>
);

// RAG pill with dot. tone: "green" | "amber" | "red" | "none"
const RAG = ({ tone = "green", label, size = "md" }) => {
  const map = {
    green: { bg: "#E6F1EC", fg: "#2E7D5B", dot: "#2E7D5B" },
    amber: { bg: "#FBF1DE", fg: "#C9851A", dot: "#C9851A" },
    red: { bg: "#F8E3E0", fg: "#C0392B", dot: "#C0392B" },
    none: { bg: "#EEF1F3", fg: "#5A6670", dot: "#8A929B" },
  };
  const t = map[tone];
  const h = size === "sm" ? 20 : 24;
  return (
    <span style={{ background: t.bg, color: t.fg, height: h, padding: "0 10px", fontSize: size === "sm" ? 11 : 12, fontWeight: 600, borderRadius: 999, display: "inline-flex", alignItems: "center", gap: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>
      <span style={{ width: 8, height: 8, borderRadius: "50%", background: t.dot }} />
      {label}
    </span>
  );
};

// Field row (key/value)
const Field = ({ label, value, restricted, editable, style = {} }) => (
  <div style={{ display: "grid", gridTemplateColumns: "160px 1fr", padding: "10px 0", borderBottom: "1px solid #EEF1F3", alignItems: "center", fontSize: 13, ...style }}>
    <div style={{ color: "#5A6670" }}>{label}</div>
    <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#1A1A1A" }}>
      {value}
      {restricted && <Icon name="lock" size={12} color="#4B0082" />}
      {editable && <Icon name="edit" size={12} color="#8A929B" />}
    </div>
  </div>
);

const Overline = ({ children, style = {} }) => (
  <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600, color: "#5A6670", ...style }}>{children}</div>
);

const SectionHead = ({ eyebrow, title, right, style = {} }) => (
  <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 16, ...style }}>
    <div>
      {eyebrow && <Overline style={{ marginBottom: 4 }}>{eyebrow}</Overline>}
      <div style={{ fontFamily: "Urbanist, Inter, sans-serif", fontSize: 22, fontWeight: 700, color: "#1A1A1A", letterSpacing: "-0.01em" }}>{title}</div>
    </div>
    {right}
  </div>
);

// Tiny KPI tile
const KPI = ({ label, value, delta, tone = "purple", icon }) => {
  const tones = { purple: "#4B0082", green: "#00664D", yellow: "#8A6600", red: "#C0392B" };
  return (
    <Card style={{ padding: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
        {icon && <Icon name={icon} size={14} color="#5A6670" />}
        <div style={{ fontSize: 12, color: "#5A6670" }}>{label}</div>
      </div>
      <div style={{ fontFamily: "Urbanist, Inter, sans-serif", fontSize: 28, fontWeight: 700, color: tones[tone], letterSpacing: "-0.02em", lineHeight: 1 }}>{value}</div>
      {delta && <div style={{ fontSize: 11, color: "#5A6670", marginTop: 6 }}>{delta}</div>}
    </Card>
  );
};

Object.assign(window, { Icon, Avatar, Pill, Button, Card, RAG, Field, Overline, SectionHead, KPI });
