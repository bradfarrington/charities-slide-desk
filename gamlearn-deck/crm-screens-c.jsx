// People list, person record, Groups, Comms hub, Reports, Documents library,
// Settings, Research (anonymised) — and referral intake flow.

const PeopleScreen = () => {
  const rows = [
    { n: "Sarah Okafor", ref: "G-1042", tint: 0, type: "Member", stage: "Pre-sentence", last: "22 Apr" },
    { n: "Maya Okafor", ref: "G-1049", tint: 4, type: "IO", stage: "Active support", last: "15 Apr" },
    { n: "Dele Adeyemi", ref: "G-1038", tint: 2, type: "Member", stage: "Post-sentence", last: "18 Apr" },
    { n: "Priya Shah", ref: "P-0214", tint: 4, type: "Professional", stage: "Solicitor · Thomas & Co", last: "18 Apr" },
    { n: "Dr. Tunde Adebayo", ref: "P-0189", tint: 3, type: "Professional", stage: "Psychiatrist · Instructed", last: "19 Apr" },
    { n: "Aleksander Kowalski", ref: "G-1033", tint: 3, type: "Member", stage: "Charged", last: "19 Apr" },
    { n: "Connor Byrne", ref: "G-1055", tint: 5, type: "Member", stage: "First contact", last: "21 Apr" },
    { n: "Esi Mensah", ref: "G-1015", tint: 2, type: "Member", stage: "Closed — transition", last: "14 Mar" },
    { n: "Jonah Byrne", ref: "G-1056", tint: 1, type: "IO", stage: "Active support", last: "20 Apr" },
  ];
  return (
    <div style={{ height: "100%", overflow: "auto", padding: "20px 24px" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 16 }}>
        <div>
          <h1 style={{ fontFamily: "Urbanist, Inter, sans-serif", fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "-0.02em" }}>People</h1>
          <p style={{ color: "#5A6670", fontSize: 13, margin: "4px 0 0" }}>412 members · 93 Impacted Others · 88 professionals</p>
        </div>
        <Button variant="primary" size="sm" icon="plus">Add person</Button>
      </div>
      <Card padded={false}>
        <div style={{ padding: 12, display: "flex", gap: 8, borderBottom: "1px solid #EEF1F3" }}>
          <div style={{ display: "flex", gap: 2, background: "#FAFBFC", padding: 3, borderRadius: 8, fontSize: 12 }}>
            {["All (593)", "Members (412)", "Impacted Others (93)", "Professionals (88)"].map((t, i) => (
              <div key={t} style={{ padding: "5px 10px", background: i === 0 ? "#fff" : "transparent", borderRadius: 6, fontWeight: i === 0 ? 600 : 500, color: i === 0 ? "#4B0082" : "#5A6670", boxShadow: i === 0 ? "0 1px 2px rgba(0,0,0,0.04)" : "none" }}>{t}</div>
            ))}
          </div>
          <div style={{ flex: 1 }} />
          <Button variant="ghost" size="sm" icon="filter">Filter</Button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 110px 1.2fr 110px 24px", padding: "10px 16px", fontSize: 10, color: "#8A929B", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", background: "#FAFBFC", borderBottom: "1px solid #EEF1F3" }}>
          <div>Name</div><div>Type</div><div>Status</div><div>Last contact</div><div></div>
        </div>
        {rows.map((r, i, arr) => (
          <div key={r.ref} style={{ display: "grid", gridTemplateColumns: "1.6fr 110px 1.2fr 110px 24px", padding: "11px 16px", alignItems: "center", fontSize: 13, borderBottom: i < arr.length - 1 ? "1px solid #EEF1F3" : 0, gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Avatar name={r.n} size={32} tint={r.tint} />
              <div>
                <div style={{ fontWeight: 600 }}>{r.n}</div>
                <div style={{ fontSize: 11, color: "#8A929B" }}>#{r.ref}</div>
              </div>
            </div>
            <div><Pill tone={r.type === "Professional" ? "info" : r.type === "IO" ? "amber" : "neutral"}>{r.type}</Pill></div>
            <div style={{ color: "#5A6670", fontSize: 12 }}>{r.stage}</div>
            <div style={{ color: "#5A6670", fontSize: 12 }}>{r.last}</div>
            <Icon name="chevron" size={13} color="#8A929B" />
          </div>
        ))}
      </Card>
    </div>
  );
};

const GroupsScreen = () => (
  <div style={{ height: "100%", overflow: "auto", padding: "20px 24px" }}>
    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 16 }}>
      <div>
        <h1 style={{ fontFamily: "Urbanist, Inter, sans-serif", fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "-0.02em" }}>Groups & sessions</h1>
        <p style={{ color: "#5A6670", fontSize: 13, margin: "4px 0 0" }}>4 active groups · 3 upcoming · 2 one-to-ones today</p>
      </div>
      <Button variant="primary" size="sm" icon="plus">Schedule session</Button>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 16 }}>
      {[
        { n: "Tuesday Peer Group", w: "Peckham", t: "Tue 18:30 · weekly", att: "12/15", rag: "green" },
        { n: "IO Support Circle", w: "Online", t: "Thu 19:00 · fortnightly", att: "6/8", rag: "green" },
        { n: "Early Recovery", w: "Southwark", t: "Sat 10:00 · weekly", att: "4/10", rag: "amber" },
      ].map((g, i) => (
        <Card key={i}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 8 }}>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, fontFamily: "Urbanist, Inter, sans-serif" }}>{g.n}</div>
              <div style={{ fontSize: 12, color: "#5A6670" }}>{g.w} · {g.t}</div>
            </div>
            <RAG tone={g.rag} label={g.rag === "amber" ? "Amber" : "Green"} size="sm" />
          </div>
          <div style={{ display: "flex", gap: 12, fontSize: 12, color: "#5A6670", marginTop: 10 }}>
            <span><strong style={{ color: "#1A1A1A" }}>{g.att}</strong> regulars</span>
            <span>·</span>
            <span>Next: Thu 23 Apr</span>
          </div>
        </Card>
      ))}
    </div>
    <SectionHead eyebrow="Upcoming" title="This week" />
    <Card padded={false}>
      {[
        { d: "Thu 23 Apr", t: "18:30", n: "Tuesday Peer Group", w: "Peckham · Room 2", att: "9 confirmed" },
        { d: "Fri 24 Apr", t: "14:00", n: "1-to-1: Connor Byrne", w: "Online", att: "—" },
        { d: "Sat 25 Apr", t: "10:00", n: "Early Recovery", w: "Southwark", att: "4 confirmed" },
      ].map((e, i, arr) => (
        <div key={i} style={{ padding: "12px 16px", display: "flex", gap: 14, alignItems: "center", borderBottom: i < arr.length - 1 ? "1px solid #EEF1F3" : 0 }}>
          <div style={{ width: 80, fontSize: 12 }}>
            <div style={{ fontWeight: 600 }}>{e.d}</div>
            <div style={{ color: "#5A6670" }}>{e.t}</div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600 }}>{e.n}</div>
            <div style={{ fontSize: 12, color: "#5A6670" }}>{e.w}</div>
          </div>
          <div style={{ fontSize: 12, color: "#5A6670" }}>{e.att}</div>
          <Button variant="ghost" size="sm">Take register</Button>
        </div>
      ))}
    </Card>
  </div>
);

const CommunicationsHub = () => (
  <div style={{ height: "100%", overflow: "auto", padding: "20px 24px" }}>
    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 16 }}>
      <div>
        <h1 style={{ fontFamily: "Urbanist, Inter, sans-serif", fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "-0.02em" }}>Communications</h1>
        <p style={{ color: "#5A6670", fontSize: 13, margin: "4px 0 0" }}>Messages · Campaigns · Lists · Templates · Automations</p>
      </div>
      <Button variant="primary" size="sm" icon="plus">New campaign</Button>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 16 }}>
      <KPI label="Sent · 7d" value="1,284" delta="+12% w/w" tone="purple" icon="mail" />
      <KPI label="Open rate" value="62%" delta="Above target (55%)" tone="green" icon="graph" />
      <KPI label="Scheduled" value="14" delta="Next: Thu 09:00" tone="yellow" icon="clock" />
      <KPI label="Bounces" value="3" delta="2 member, 1 pro" tone="red" icon="alert" />
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
      <Card padded={false}>
        <div style={{ padding: "12px 16px", borderBottom: "1px solid #EEF1F3", display: "flex", alignItems: "center" }}>
          <div style={{ fontSize: 14, fontWeight: 600 }}>Campaigns</div>
          <div style={{ flex: 1 }} />
          <span style={{ fontSize: 11, color: "#4B0082", fontWeight: 600 }}>View all →</span>
        </div>
        {[
          { n: "April newsletter — Members", s: "Sent", a: "412 recipients · 68% open", when: "14 Apr" },
          { n: "Professional engagement — solicitors Q2", s: "Scheduled", a: "88 recipients", when: "25 Apr" },
          { n: "Court reminder workflow", s: "Automation", a: "Ongoing · 42 sent this month", when: "—" },
          { n: "IO onboarding sequence", s: "Draft", a: "4 steps · needs sign-off", when: "—" },
        ].map((c, i, arr) => (
          <div key={i} style={{ padding: "12px 16px", borderBottom: i < arr.length - 1 ? "1px solid #EEF1F3" : 0, display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{c.n}</div>
              <div style={{ fontSize: 11, color: "#5A6670" }}>{c.a}</div>
            </div>
            <Pill tone={c.s === "Sent" ? "active" : c.s === "Scheduled" ? "info" : c.s === "Draft" ? "amber" : "featured"}>{c.s}</Pill>
            <div style={{ fontSize: 11, color: "#8A929B", width: 60, textAlign: "right" }}>{c.when}</div>
          </div>
        ))}
      </Card>
      <Card padded={false}>
        <div style={{ padding: "12px 16px", borderBottom: "1px solid #EEF1F3", fontSize: 14, fontWeight: 600 }}>Lists & segments</div>
        {[
          { n: "All members (CJS)", c: "412", tag: "Auto" },
          { n: "Pre-sentence (30d window)", c: "28", tag: "Auto" },
          { n: "Impacted Others — opted in", c: "67", tag: "Auto" },
          { n: "Solicitor network — London", c: "34", tag: "Manual" },
          { n: "Probation officers — partners", c: "19", tag: "Manual" },
          { n: "Alumni — newsletter only", c: "89", tag: "Auto" },
        ].map((l, i, arr) => (
          <div key={i} style={{ padding: "10px 16px", borderBottom: i < arr.length - 1 ? "1px solid #EEF1F3" : 0, display: "flex", alignItems: "center", gap: 10 }}>
            <Icon name="users" size={14} color="#4B0082" />
            <div style={{ flex: 1, fontSize: 13 }}>{l.n}</div>
            <span style={{ fontVariantNumeric: "tabular-nums", fontSize: 12, color: "#5A6670" }}>{l.c}</span>
            <Pill tone={l.tag === "Auto" ? "active" : "neutral"}>{l.tag}</Pill>
          </div>
        ))}
      </Card>
    </div>
  </div>
);

const ReportsScreen = () => (
  <div style={{ height: "100%", overflow: "auto", padding: "20px 24px" }}>
    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 16 }}>
      <div>
        <h1 style={{ fontFamily: "Urbanist, Inter, sans-serif", fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "-0.02em" }}>Reports</h1>
        <p style={{ color: "#5A6670", fontSize: 13, margin: "4px 0 0" }}>Live views across CJS, IO, comms and outcomes. Phase 1: direct + IO.</p>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <Button variant="ghost" size="sm" icon="download">Export CSV</Button>
        <Button variant="primary" size="sm" icon="plus">Build report</Button>
      </div>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 20 }}>
      <KPI label="Cases · active" value="24" delta="+3 this month" tone="purple" icon="folder" />
      <KPI label="IO records" value="93" delta="+4 this month" tone="yellow" icon="heart" />
      <KPI label="Group attendance" value="78%" delta="Goal: 70%" tone="green" icon="graph" />
      <KPI label="Avg. plea prep" value="9.2 wk" delta="Across 12 cases" tone="red" icon="clock" />
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 16 }}>
      <Card style={{ padding: 0 }}>
        <div style={{ padding: "14px 16px", borderBottom: "1px solid #EEF1F3", display: "flex", alignItems: "center" }}>
          <div>
            <Overline>CJS stage distribution</Overline>
            <div style={{ fontSize: 15, fontWeight: 600, marginTop: 2 }}>Active cases by stage</div>
          </div>
          <div style={{ flex: 1 }} />
          <Pill tone="neutral">Last 90 days</Pill>
        </div>
        <div style={{ padding: 20 }}>
          {[
            { l: "First contact", v: 8, c: "#B38CD9" },
            { l: "Pre-charge", v: 3, c: "#9B6FCF" },
            { l: "Charged", v: 6, c: "#7A43B8" },
            { l: "Pre-sentence", v: 4, c: "#6020A0" },
            { l: "Sentenced / prison", v: 2, c: "#4B0082" },
            { l: "Post-sentence", v: 1, c: "#38005F" },
          ].map((b, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
              <div style={{ width: 120, fontSize: 12, color: "#5A6670" }}>{b.l}</div>
              <div style={{ flex: 1, height: 14, background: "#F5F0FA", borderRadius: 4, overflow: "hidden" }}>
                <div style={{ width: `${(b.v / 8) * 100}%`, height: "100%", background: b.c }} />
              </div>
              <div style={{ width: 30, textAlign: "right", fontVariantNumeric: "tabular-nums", fontSize: 13, fontWeight: 600 }}>{b.v}</div>
            </div>
          ))}
        </div>
      </Card>
      <Card padded={false}>
        <div style={{ padding: "14px 16px", borderBottom: "1px solid #EEF1F3", fontSize: 14, fontWeight: 600 }}>Saved reports</div>
        {[
          { n: "Monthly CJS pack", o: "Director", when: "Auto · 1st of month" },
          { n: "Safeguarding dashboard", o: "DSL", when: "Live" },
          { n: "Solicitor gap analysis", o: "Legal lead", when: "Weekly · Monday" },
          { n: "IO engagement", o: "IO lead", when: "Monthly" },
          { n: "Evidence progress (mitigation)", o: "Legal lead", when: "Live" },
          { n: "Funder — Q2 outcomes", o: "Director", when: "Quarterly" },
        ].map((r, i, arr) => (
          <div key={i} style={{ padding: "11px 16px", borderBottom: i < arr.length - 1 ? "1px solid #EEF1F3" : 0, display: "flex", alignItems: "center", gap: 10 }}>
            <Icon name="graph" size={14} color="#4B0082" />
            <div style={{ flex: 1, fontSize: 13, fontWeight: 500 }}>{r.n}</div>
            <div style={{ fontSize: 11, color: "#8A929B" }}>{r.o} · {r.when}</div>
          </div>
        ))}
      </Card>
    </div>
  </div>
);

const DocLibrary = () => (
  <div style={{ height: "100%", overflow: "auto", padding: "20px 24px" }}>
    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 16 }}>
      <div>
        <h1 style={{ fontFamily: "Urbanist, Inter, sans-serif", fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "-0.02em" }}>Document library</h1>
        <p style={{ color: "#5A6670", fontSize: 13, margin: "4px 0 0" }}>Org-wide templates, leaflets, guides. Case files live on the case record.</p>
      </div>
      <Button variant="primary" size="sm" icon="plus">Upload</Button>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
      {[
        { cat: "Templates (12)", items: ["GP letter — MH at offence", "Character reference prompt", "Solicitor intro letter", "DSAR — operator request"] },
        { cat: "Member-facing (8)", items: ["Welcome leaflet", "Pre-sentence: what to expect", "IO guide for partners", "Group ground rules"] },
        { cat: "Staff guides (6)", items: ["Safeguarding flow", "Triage RAG rulebook (draft)", "Consent & visibility", "Migration checklist"] },
      ].map((g, i) => (
        <Card key={i}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
            <div style={{ fontFamily: "Urbanist, Inter, sans-serif", fontSize: 15, fontWeight: 700 }}>{g.cat}</div>
            <Icon name="folder" size={16} color="#4B0082" />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {g.items.map((it, j) => (
              <div key={j} style={{ padding: "8px 10px", background: "#FAFBFC", borderRadius: 6, fontSize: 13, display: "flex", alignItems: "center", gap: 8 }}>
                <Icon name="file" size={12} color="#5A6670" />
                <span style={{ flex: 1 }}>{it}</span>
                <Icon name="chevron" size={12} color="#8A929B" />
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  </div>
);

const SettingsScreen = () => (
  <div style={{ height: "100%", overflow: "auto", padding: "20px 24px" }}>
    <h1 style={{ fontFamily: "Urbanist, Inter, sans-serif", fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "-0.02em" }}>Settings</h1>
    <p style={{ color: "#5A6670", fontSize: 13, margin: "4px 0 20px" }}>Roles, permissions, integrations and migration.</p>
    <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 20 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {[
          ["Roles & permissions", true], ["RAG rulebook", false], ["Safeguarding thresholds", false],
          ["Consent templates", false], ["Integrations (M365)", false], ["Salesforce migration", false],
          ["Audit log", false], ["Branding", false],
        ].map(([l, active], i) => (
          <div key={i} style={{ padding: "8px 12px", borderRadius: 6, background: active ? "#F5F0FA" : "transparent", color: active ? "#4B0082" : "#5A6670", fontWeight: active ? 600 : 500, fontSize: 13 }}>{l}</div>
        ))}
      </div>
      <div>
        <SectionHead eyebrow="Settings · Roles & permissions" title="Workstream access matrix" />
        <Card padded={false}>
          <div style={{ display: "grid", gridTemplateColumns: "180px repeat(6, 1fr)", padding: "10px 16px", fontSize: 10, color: "#8A929B", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", background: "#FAFBFC", borderBottom: "1px solid #EEF1F3" }}>
            <div>Role</div><div>CJS</div><div>IO</div><div>Membership</div><div>Comms</div><div>Research</div><div>Admin</div>
          </div>
          {[
            { r: "Director", v: [3, 3, 3, 3, 3, 3] },
            { r: "Legal specialist", v: [3, 2, 0, 1, 0, 0] },
            { r: "Peer support worker", v: [2, 2, 1, 1, 0, 0] },
            { r: "IO lead", v: [1, 3, 0, 2, 0, 0] },
            { r: "Comms officer", v: [1, 1, 1, 3, 0, 1] },
            { r: "Researcher", v: [0, 0, 0, 0, 3, 0] },
            { r: "DSL (safeguarding)", v: [3, 3, 1, 0, 0, 1] },
          ].map((row, i, arr) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "180px repeat(6, 1fr)", padding: "12px 16px", alignItems: "center", fontSize: 13, borderBottom: i < arr.length - 1 ? "1px solid #EEF1F3" : 0 }}>
              <div style={{ fontWeight: 500 }}>{row.r}</div>
              {row.v.map((lvl, j) => {
                const labels = ["—", "Read", "Write", "Full"];
                const tones = ["closed", "info", "amber", "active"];
                return <div key={j}><Pill tone={tones[lvl]}>{labels[lvl]}</Pill></div>;
              })}
            </div>
          ))}
        </Card>
      </div>
    </div>
  </div>
);

const ResearchScreen = () => (
  <div style={{ height: "100%", overflow: "auto", padding: "20px 24px", background: "#FAFBFC" }}>
    <div style={{ padding: "12px 16px", background: "#E3EDF5", borderRadius: 8, marginBottom: 16, display: "flex", gap: 10, alignItems: "center" }}>
      <Icon name="shield" size={16} color="#2F6FA3" />
      <div style={{ fontSize: 12, color: "#1F4568" }}>
        <strong>Anonymised mode.</strong> Names, DOBs, addresses and free-text are suppressed. Records are pseudonymised by ID (R-xxxx). Only researchers with cleared access see this view. Anonymisation model: <strong>Tier-2 (k=5 aggregation)</strong> · still to be agreed.
      </div>
    </div>
    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 16 }}>
      <div>
        <h1 style={{ fontFamily: "Urbanist, Inter, sans-serif", fontSize: 28, fontWeight: 700, margin: 0, letterSpacing: "-0.02em" }}>Research dataset</h1>
        <p style={{ color: "#5A6670", fontSize: 13, margin: "4px 0 0" }}>388 records opted-in for research · 24 DSAR datasets attached</p>
      </div>
      <Button variant="primary" size="sm" icon="download">Export dataset</Button>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 16 }}>
      <KPI label="Records" value="388" delta="82% of eligible" tone="purple" icon="users" />
      <KPI label="DSAR datasets" value="24" delta="Operator records" tone="yellow" icon="file" />
      <KPI label="IO linked" value="72" delta="Anonymised" tone="green" icon="heart" />
      <KPI label="Avg. journey" value="18 wk" delta="first contact → close" tone="red" icon="clock" />
    </div>
    <Card padded={false}>
      <div style={{ display: "grid", gridTemplateColumns: "120px 1fr 1fr 1fr 1fr 1fr", padding: "10px 16px", fontSize: 10, color: "#8A929B", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", background: "#FAFBFC", borderBottom: "1px solid #EEF1F3" }}>
        <div>Record ID</div><div>Cohort</div><div>Stage at close</div><div>Outcome</div><div>IO linked</div><div>Journey (wk)</div>
      </div>
      {[
        { id: "R-0042", c: "2025 Q4", s: "Pre-sentence", o: "Non-custodial", io: "Yes", w: 14 },
        { id: "R-0041", c: "2025 Q4", s: "Post-sentence", o: "Custodial <12mo", io: "—", w: 22 },
        { id: "R-0040", c: "2025 Q4", s: "Transition", o: "Non-custodial", io: "Yes", w: 16 },
        { id: "R-0039", c: "2025 Q3", s: "Prison", o: "Custodial 12–24mo", io: "—", w: 31 },
        { id: "R-0038", c: "2025 Q3", s: "Transition", o: "Non-custodial", io: "Yes", w: 12 },
        { id: "R-0037", c: "2025 Q3", s: "Pre-sentence", o: "CCO", io: "—", w: 18 },
      ].map((r, i, arr) => (
        <div key={r.id} style={{ display: "grid", gridTemplateColumns: "120px 1fr 1fr 1fr 1fr 1fr", padding: "11px 16px", alignItems: "center", fontSize: 13, borderBottom: i < arr.length - 1 ? "1px solid #EEF1F3" : 0 }}>
          <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 12, color: "#5A6670" }}>{r.id}</div>
          <div><Pill tone="neutral">{r.c}</Pill></div>
          <div style={{ fontSize: 12 }}>{r.s}</div>
          <div style={{ fontSize: 12 }}>{r.o}</div>
          <div style={{ fontSize: 12, color: "#5A6670" }}>{r.io}</div>
          <div style={{ fontSize: 12, fontVariantNumeric: "tabular-nums" }}>{r.w}</div>
        </div>
      ))}
    </Card>
  </div>
);

const IntakeScreen = () => (
  <div style={{ height: "100%", overflow: "auto", padding: "20px 24px", background: "#FAFBFC" }}>
    <div style={{ display: "flex", gap: 8, fontSize: 12, color: "#5A6670", marginBottom: 6 }}>
      <span>Referrals</span><Icon name="chevron" size={11} color="#8A929B" /><span style={{ color: "#1A1A1A", fontWeight: 600 }}>New referral</span>
    </div>
    <h1 style={{ fontFamily: "Urbanist, Inter, sans-serif", fontSize: 26, fontWeight: 700, margin: "0 0 14px", letterSpacing: "-0.02em" }}>New referral</h1>

    <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
      {[
        { l: "Type", n: 1, done: true },
        { l: "Person", n: 2, done: true },
        { l: "Circumstances", n: 3, active: true },
        { l: "Consent", n: 4 },
        { l: "Review", n: 5 },
      ].map((s, i, arr) => (
        <React.Fragment key={i}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12 }}>
            <div style={{ width: 22, height: 22, borderRadius: "50%", background: s.done ? "#4B0082" : s.active ? "#FEE581" : "#EEF1F3", color: s.done ? "#fff" : "#1A1A1A", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700 }}>
              {s.done ? <Icon name="check" size={10} color="#fff" /> : s.n}
            </div>
            <span style={{ fontWeight: s.active ? 600 : 400, color: s.active || s.done ? "#1A1A1A" : "#8A929B" }}>{s.l}</span>
          </div>
          {i < arr.length - 1 && <div style={{ flex: "0 0 24px", height: 1, background: "#E1E5E8", alignSelf: "center" }} />}
        </React.Fragment>
      ))}
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 20 }}>
      <Card style={{ padding: 24 }}>
        <Overline>Step 3 of 5</Overline>
        <h2 style={{ fontFamily: "Urbanist, Inter, sans-serif", fontSize: 20, fontWeight: 700, margin: "6px 0 4px" }}>Circumstances</h2>
        <p style={{ fontSize: 13, color: "#5A6670", margin: 0 }}>Capture just enough to route fairly. Depth comes later via self-assessment and 1-to-1.</p>

        <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: "#1A1A1A" }}>Referral source</label>
            <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
              {["Self", "Professional", "Impacted Other"].map((t, i) => (
                <div key={t} style={{ flex: 1, padding: 12, border: `1.5px solid ${i === 1 ? "#4B0082" : "#E1E5E8"}`, background: i === 1 ? "#F5F0FA" : "#fff", borderRadius: 8, fontSize: 13, fontWeight: 500 }}>
                  <div style={{ fontWeight: 600 }}>{t}</div>
                  <div style={{ fontSize: 11, color: "#5A6670", marginTop: 2 }}>{t === "Self" ? "Person is referring themselves" : t === "Professional" ? "Solicitor, probation, clinician" : "Family or friend affected"}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: "#1A1A1A" }}>CJS stage at referral</label>
            <select style={{ width: "100%", marginTop: 8, padding: "10px 12px", border: "1px solid #E1E5E8", borderRadius: 8, fontSize: 13, fontFamily: "inherit", background: "#fff" }}>
              <option>Charged — awaiting first hearing</option>
            </select>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600 }}>Next key date</label>
              <input readOnly value="14 May 2026" style={{ width: "100%", marginTop: 8, padding: "10px 12px", border: "1px solid #E1E5E8", borderRadius: 8, fontSize: 13, fontFamily: "inherit" }} />
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600 }}>Solicitor status</label>
              <select style={{ width: "100%", marginTop: 8, padding: "10px 12px", border: "1px solid #E1E5E8", borderRadius: 8, fontSize: 13, fontFamily: "inherit", background: "#fff" }}>
                <option>Engaged (Thomas & Co)</option>
              </select>
            </div>
          </div>

          <div>
            <label style={{ fontSize: 12, fontWeight: 600 }}>Initial risk indicators (quick flags)</label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginTop: 8 }}>
              {[
                ["Active gambling", true], ["Dependent children", false], ["Safeguarding concerns", false],
                ["Mental health concerns", true], ["Homelessness risk", false], ["Debt / financial distress", true],
              ].map(([l, checked]) => (
                <div key={l} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", border: "1px solid #E1E5E8", borderRadius: 6, fontSize: 13, background: checked ? "#F5F0FA" : "#fff" }}>
                  <div style={{ width: 16, height: 16, borderRadius: 4, border: `1.5px solid ${checked ? "#4B0082" : "#C8CFD4"}`, background: checked ? "#4B0082" : "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {checked && <Icon name="check" size={10} color="#fff" />}
                  </div>
                  {l}
                </div>
              ))}
            </div>
          </div>

          <div>
            <label style={{ fontSize: 12, fontWeight: 600 }}>Brief context (optional)</label>
            <textarea readOnly style={{ width: "100%", marginTop: 8, padding: 12, border: "1px solid #E1E5E8", borderRadius: 8, fontSize: 13, fontFamily: "inherit", minHeight: 80, resize: "none" }} defaultValue="Solicitor advised mitigation likely to rely heavily on gambling-addiction evidence. Client currently 90 days abstinent and engaged with GA. Psych report being commissioned — GP letter outstanding." />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 24, paddingTop: 20, borderTop: "1px solid #EEF1F3" }}>
          <Button variant="ghost">← Back</Button>
          <div style={{ display: "flex", gap: 8 }}>
            <Button variant="ghost">Save draft</Button>
            <Button variant="primary">Continue to consent →</Button>
          </div>
        </div>
      </Card>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <Card>
          <Overline>What happens next</Overline>
          <ol style={{ fontSize: 12, color: "#5A6670", marginTop: 10, paddingLeft: 18, lineHeight: 1.7 }}>
            <li>Acknowledgement sent automatically.</li>
            <li>For non-self: consent outreach is triggered.</li>
            <li>Secure self-assessment link sent (optional).</li>
            <li>Referral enters the triage queue.</li>
          </ol>
        </Card>
        <Card>
          <Overline>Safeguarding note</Overline>
          <p style={{ fontSize: 12, color: "#5A6670", marginTop: 8 }}>If any child-at-risk or immediate-harm indicators are flagged, this referral will auto-route to the Designated Safeguarding Lead before assignment.</p>
        </Card>
      </div>
    </div>
  </div>
);

Object.assign(window, { PeopleScreen, GroupsScreen, CommunicationsHub, ReportsScreen, DocLibrary, SettingsScreen, ResearchScreen, IntakeScreen });
