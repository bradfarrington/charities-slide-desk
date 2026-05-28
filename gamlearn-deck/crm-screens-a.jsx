// CRM screen bodies — Today, Referrals, Cases list, Case Overview,
// Legal & mitigation, DSAR, Documents, Comms, Notes, Timeline, People,
// Groups, Communications, Reports, Documents library, Settings, Research.

const TodayScreen = () => (
  <div style={{ height: "100%", overflow: "auto", padding: "20px 24px 32px" }}>
    <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 20 }}>
      <div>
        <div style={{ fontSize: 13, color: "#5A6670" }}>Wednesday, 22 April 2026</div>
        <h1 style={{ fontFamily: "Urbanist, Inter, sans-serif", fontSize: 28, fontWeight: 700, color: "#1A1A1A", margin: "4px 0 0", letterSpacing: "-0.02em" }}>Good afternoon, Joanna.</h1>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <Button variant="ghost" size="sm" icon="calendar">Week view</Button>
        <Button variant="primary" size="sm" icon="plus">New referral</Button>
      </div>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 20 }}>
      <KPI label="Active cases" value="24" delta="+2 this week" tone="purple" icon="folder" />
      <KPI label="Amber / red" value="7" delta="3 need review" tone="yellow" icon="alert" />
      <KPI label="Overdue actions" value="5" delta="across 4 people" tone="red" icon="clock" />
      <KPI label="Unassigned referrals" value="3" delta="oldest 2 days" tone="green" icon="inbox" />
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 16 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Card padded={false}>
          <div style={{ padding: "14px 16px", borderBottom: "1px solid #EEF1F3", display: "flex", alignItems: "center" }}>
            <div style={{ fontSize: 14, fontWeight: 600 }}>Needs your attention</div>
            <span style={{ marginLeft: 10, fontSize: 11, color: "#8A929B" }}>Sorted by urgency</span>
            <div style={{ flex: 1 }} />
            <div style={{ display: "flex", gap: 2, background: "#FAFBFC", padding: 3, borderRadius: 8, fontSize: 12 }}>
              <div style={{ padding: "4px 10px", background: "#fff", borderRadius: 6, fontWeight: 600, boxShadow: "0 1px 2px rgba(0,0,0,0.05)" }}>My cases</div>
              <div style={{ padding: "4px 10px", color: "#5A6670" }}>All</div>
            </div>
          </div>
          {[
            { n: "Sarah Okafor", ref: "G-1042", tint: 0, flag: "Red evidence domain — psych report overdue", stage: "Pre-sentence", rag: "red", days: 0 },
            { n: "Dele Adeyemi", ref: "G-1038", tint: 2, flag: "Safeguarding review due", stage: "Post-sentence", rag: "amber", days: 1 },
            { n: "Connor Byrne", ref: "G-1055", tint: 5, flag: "Self-assessment not yet returned", stage: "First contact", rag: "amber", days: 3 },
            { n: "Aleksander Kowalski", ref: "G-1033", tint: 3, flag: "Solicitor gap — nothing logged", stage: "Charged", rag: "amber", days: 4 },
          ].map((r, i, arr) => (
            <div key={i} style={{ padding: "12px 16px", display: "flex", alignItems: "center", gap: 12, borderBottom: i < arr.length - 1 ? "1px solid #EEF1F3" : 0 }}>
              <Avatar name={r.n} size={36} tint={r.tint} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{r.n}</div>
                  <span style={{ fontSize: 11, color: "#8A929B" }}>#{r.ref}</span>
                  <Pill tone="neutral">{r.stage}</Pill>
                </div>
                <div style={{ fontSize: 12, color: "#5A6670", marginTop: 2 }}>{r.flag}</div>
              </div>
              <RAG tone={r.rag} label={r.rag === "red" ? "Red" : "Amber"} size="sm" />
              <div style={{ fontSize: 11, color: "#8A929B", width: 60, textAlign: "right" }}>{r.days === 0 ? "Today" : `${r.days}d ago`}</div>
              <Icon name="chevron" size={14} color="#8A929B" />
            </div>
          ))}
        </Card>

        <Card padded={false}>
          <div style={{ padding: "14px 16px", borderBottom: "1px solid #EEF1F3", fontSize: 14, fontWeight: 600 }}>My tasks today</div>
          {[
            { t: "Call Sarah O. re: GP letter", tag: "Legal", done: false },
            { t: "Write up group session notes", tag: "Recovery", done: false },
            { t: "Confirm plea hearing with solicitor (Dele)", tag: "Legal", done: true },
            { t: "Send IO leaflet to Maya Okafor", tag: "IO", done: false },
          ].map((t, i, arr) => (
            <div key={i} style={{ padding: "10px 16px", display: "flex", alignItems: "center", gap: 10, borderBottom: i < arr.length - 1 ? "1px solid #EEF1F3" : 0, fontSize: 13 }}>
              <div style={{ width: 16, height: 16, borderRadius: 4, border: `1.5px solid ${t.done ? "#2E7D5B" : "#C8CFD4"}`, background: t.done ? "#2E7D5B" : "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {t.done && <Icon name="check" size={10} color="#fff" />}
              </div>
              <span style={{ flex: 1, textDecoration: t.done ? "line-through" : "none", color: t.done ? "#8A929B" : "#1A1A1A" }}>{t.t}</span>
              <Pill tone="neutral">{t.tag}</Pill>
            </div>
          ))}
        </Card>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Card style={{ padding: 0, overflow: "hidden" }}>
          <div style={{ background: "#1A1A1A", color: "#fff", padding: 18 }}>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Next up · in 90 min</div>
            <div style={{ fontFamily: "Urbanist, Inter, sans-serif", fontSize: 18, fontWeight: 600, marginBottom: 10 }}>1-to-1 with Sarah Okafor</div>
            <div style={{ display: "flex", gap: 16, fontSize: 12, color: "rgba(255,255,255,0.8)" }}>
              <span>14:30 – 15:30</span><span>·</span><span>Peckham · Room 2</span>
            </div>
          </div>
          <div style={{ padding: 14 }}>
            {[
              { t: "10:00", l: "Team huddle (video)", s: "Done" },
              { t: "11:30", l: "Call: Connor Byrne", s: "Done" },
              { t: "14:30", l: "1-to-1: Sarah O.", s: "Next", next: true },
              { t: "16:00", l: "Admin block", s: "—" },
            ].map((e, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "center", padding: "6px 0", fontSize: 12 }}>
                <span style={{ width: 44, color: "#5A6670", fontVariantNumeric: "tabular-nums" }}>{e.t}</span>
                <span style={{ flex: 1, color: e.next ? "#1A1A1A" : "#5A6670", fontWeight: e.next ? 600 : 400 }}>{e.l}</span>
                {e.next && <Pill tone="featured">Next</Pill>}
                {e.s === "Done" && <Icon name="check" size={12} color="#2E7D5B" />}
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <Overline>Safeguarding flags (your cases)</Overline>
          <div style={{ marginTop: 10 }}>
            <div style={{ padding: 10, background: "#F8E3E0", borderRadius: 8, fontSize: 12, color: "#8A251A", display: "flex", gap: 8 }}>
              <Icon name="alert" size={14} color="#C0392B" />
              <div>
                <div style={{ fontWeight: 600, color: "#C0392B", marginBottom: 2 }}>Dele Adeyemi</div>
                Review due — DSL should be notified if partner concern persists (threshold draft: 2+ amber indicators)
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
);

// --- Referrals queue ---
const ReferralsScreen = () => {
  const rows = [
    { id: "R-0412", name: "Anon (intake name)", type: "Self", source: "Web form", age: "2h", stage: "New", assigned: "—", tint: 5, urgent: false },
    { id: "R-0411", name: "Omar Hassan", type: "Professional", source: "Solicitor: Rahim & Partners", age: "5h", stage: "Awaiting consent", assigned: "J. Patel", tint: 3, urgent: true },
    { id: "R-0410", name: "Chloe Wren", type: "Self", source: "Email", age: "1d", stage: "First contact", assigned: "R. Hughes", tint: 4, urgent: false },
    { id: "R-0409", name: "—", type: "IO", source: "Linked to G-1042 (Sarah O.)", age: "1d", stage: "Awaiting consent", assigned: "J. Patel", tint: 2, urgent: false },
    { id: "R-0408", name: "Michael Dunne", type: "Professional", source: "Probation: Lambeth", age: "2d", stage: "Triage", assigned: "J. Patel", tint: 1, urgent: true },
    { id: "R-0407", name: "Tariq Malik", type: "Self", source: "Phone", age: "3d", stage: "Self-assessment sent", assigned: "R. Hughes", tint: 0, urgent: false },
    { id: "R-0406", name: "—", type: "IO", source: "Self (partner)", age: "4d", stage: "First contact", assigned: "—", tint: 3, urgent: false },
  ];
  return (
    <div style={{ height: "100%", overflow: "auto", padding: "20px 24px 32px" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 16 }}>
        <div>
          <h1 style={{ fontFamily: "Urbanist, Inter, sans-serif", fontSize: 28, fontWeight: 700, color: "#1A1A1A", margin: 0, letterSpacing: "-0.02em" }}>Referrals</h1>
          <p style={{ color: "#5A6670", fontSize: 13, margin: "4px 0 0" }}>7 in queue · 3 awaiting consent · 1 flagged urgent</p>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <Button variant="ghost" size="sm" icon="download">Export queue</Button>
          <Button variant="primary" size="sm" icon="plus">New referral</Button>
        </div>
      </div>

      <Card padded={false}>
        <div style={{ padding: 12, display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid #EEF1F3" }}>
          <div style={{ display: "flex", gap: 2, background: "#FAFBFC", padding: 3, borderRadius: 8, fontSize: 12 }}>
            {["All (7)", "Self (3)", "Professional (2)", "IO (2)"].map((t, i) => (
              <div key={t} style={{ padding: "5px 10px", background: i === 0 ? "#fff" : "transparent", borderRadius: 6, fontWeight: i === 0 ? 600 : 500, color: i === 0 ? "#4B0082" : "#5A6670", boxShadow: i === 0 ? "0 1px 2px rgba(0,0,0,0.04)" : "none" }}>{t}</div>
            ))}
          </div>
          <div style={{ flex: 1 }} />
          <div style={{ position: "relative", width: 200 }}>
            <div style={{ position: "absolute", left: 10, top: 8 }}><Icon name="search" size={13} color="#8A929B" /></div>
            <input readOnly placeholder="Search in queue…" style={{ width: "100%", height: 30, border: "1px solid #E1E5E8", borderRadius: 6, padding: "0 10px 0 28px", fontSize: 12, fontFamily: "inherit" }} />
          </div>
          <Button variant="ghost" size="sm" icon="filter">Filter</Button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "60px 1.4fr 100px 1.3fr 110px 140px 120px 24px", padding: "10px 16px", fontSize: 10, color: "#8A929B", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", background: "#FAFBFC", borderBottom: "1px solid #EEF1F3" }}>
          <div>ID</div><div>Name</div><div>Type</div><div>Source</div><div>Age</div><div>Stage</div><div>Assigned</div><div></div>
        </div>
        {rows.map((r, i, arr) => (
          <div key={r.id} style={{ display: "grid", gridTemplateColumns: "60px 1.4fr 100px 1.3fr 110px 140px 120px 24px", padding: "12px 16px", alignItems: "center", fontSize: 13, borderBottom: i < arr.length - 1 ? "1px solid #EEF1F3" : 0, gap: 12 }}>
            <div style={{ fontVariantNumeric: "tabular-nums", fontSize: 12, color: "#5A6670" }}>{r.id}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}>
              {r.name === "—" || r.name.startsWith("Anon") ? (
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#EEF1F3", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="user" size={14} color="#8A929B" /></div>
              ) : <Avatar name={r.name} size={32} tint={r.tint} />}
              <div style={{ minWidth: 0 }}>
                <div style={{ fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", color: r.name === "—" ? "#8A929B" : "#1A1A1A" }}>{r.name}</span>
                  {r.urgent && <Pill tone="risk" dot>Urgent</Pill>}
                </div>
              </div>
            </div>
            <div><Pill tone={r.type === "Self" ? "neutral" : r.type === "Professional" ? "info" : "amber"}>{r.type}</Pill></div>
            <div style={{ color: "#5A6670", fontSize: 12, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{r.source}</div>
            <div style={{ color: "#5A6670" }}>{r.age}</div>
            <div><Pill tone={r.stage === "New" ? "pending" : r.stage === "Awaiting consent" ? "amber" : "active"}>{r.stage}</Pill></div>
            <div style={{ fontSize: 12, color: r.assigned === "—" ? "#8A929B" : "#1A1A1A" }}>{r.assigned}</div>
            <Icon name="chevron" size={13} color="#8A929B" />
          </div>
        ))}
      </Card>
    </div>
  );
};

// --- Cases list ---
const CasesScreen = () => {
  const rows = [
    { n: "Sarah Okafor", ref: "G-1042", tint: 0, stage: "Pre-sentence", rag: "amber", last: "22 Apr", next: "14 May · plea", worker: "J. Patel", type: "CJS" },
    { n: "Dele Adeyemi", ref: "G-1038", tint: 2, stage: "Post-sentence", rag: "amber", last: "18 Apr", next: "29 Apr · probation", worker: "J. Patel", type: "CJS" },
    { n: "Aleksander Kowalski", ref: "G-1033", tint: 3, stage: "Charged", rag: "green", last: "19 Apr", next: "08 May · hearing", worker: "R. Hughes", type: "CJS" },
    { n: "Connor Byrne", ref: "G-1055", tint: 5, stage: "First contact", rag: "amber", last: "21 Apr", next: "—", worker: "J. Patel", type: "CJS" },
    { n: "Maya Okafor", ref: "G-1049", tint: 4, stage: "Active support", rag: "green", last: "15 Apr", next: "28 Apr · 1-to-1", worker: "J. Patel", type: "IO" },
    { n: "Priya Sharma", ref: "G-1028", tint: 4, stage: "Transition", rag: "green", last: "02 Apr", next: "—", worker: "R. Hughes", type: "CJS" },
    { n: "Thomas Wright", ref: "G-1058", tint: 3, stage: "Prison", rag: "red", last: "14 Apr", next: "Release · 12 Jun", worker: "—", type: "CJS" },
    { n: "Esi Mensah", ref: "G-1015", tint: 2, stage: "Closed", rag: "none", last: "14 Mar", next: "—", worker: "—", type: "CJS" },
  ];
  return (
    <div style={{ height: "100%", overflow: "auto", padding: "20px 24px 32px" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 16 }}>
        <div>
          <h1 style={{ fontFamily: "Urbanist, Inter, sans-serif", fontSize: 28, fontWeight: 700, color: "#1A1A1A", margin: 0, letterSpacing: "-0.02em" }}>Cases</h1>
          <p style={{ color: "#5A6670", fontSize: 13, margin: "4px 0 0" }}>24 active · 3 on pause · 12 closed this year</p>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <Button variant="ghost" size="sm" icon="download">Export</Button>
          <Button variant="primary" size="sm" icon="plus">New case</Button>
        </div>
      </div>
      <Card padded={false}>
        <div style={{ padding: 12, display: "flex", alignItems: "center", gap: 8, borderBottom: "1px solid #EEF1F3", fontSize: 12 }}>
          <div style={{ display: "flex", gap: 2, background: "#FAFBFC", padding: 3, borderRadius: 8 }}>
            {["Active (24)", "By stage", "By RAG", "On pause (3)", "Closed"].map((t, i) => (
              <div key={t} style={{ padding: "5px 10px", background: i === 0 ? "#fff" : "transparent", borderRadius: 6, fontWeight: i === 0 ? 600 : 500, color: i === 0 ? "#4B0082" : "#5A6670", boxShadow: i === 0 ? "0 1px 2px rgba(0,0,0,0.04)" : "none" }}>{t}</div>
            ))}
          </div>
          <div style={{ flex: 1 }} />
          <Pill tone="neutral">Mine only</Pill>
          <Button variant="ghost" size="sm" icon="filter">Filter (2)</Button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 130px 90px 120px 160px 110px 24px", padding: "10px 16px", fontSize: 10, color: "#8A929B", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", background: "#FAFBFC", borderBottom: "1px solid #EEF1F3" }}>
          <div>Person</div><div>Stage</div><div>RAG</div><div>Last contact</div><div>Next key date</div><div>Worker</div><div></div>
        </div>
        {rows.map((r, i, arr) => (
          <div key={r.ref} style={{ display: "grid", gridTemplateColumns: "1.5fr 130px 90px 120px 160px 110px 24px", padding: "12px 16px", alignItems: "center", fontSize: 13, borderBottom: i < arr.length - 1 ? "1px solid #EEF1F3" : 0, gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Avatar name={r.n} size={32} tint={r.tint} />
              <div>
                <div style={{ fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>{r.n}<Icon name="lock" size={11} color="#4B0082" /></div>
                <div style={{ fontSize: 11, color: "#8A929B" }}>#{r.ref} · {r.type}</div>
              </div>
            </div>
            <div><Pill tone={r.stage === "Closed" ? "closed" : r.stage === "Prison" ? "risk" : "neutral"}>{r.stage}</Pill></div>
            <div>{r.rag === "none" ? <Pill tone="closed">—</Pill> : <RAG tone={r.rag} label={r.rag[0].toUpperCase() + r.rag.slice(1)} size="sm" />}</div>
            <div style={{ color: "#5A6670" }}>{r.last}</div>
            <div style={{ color: r.next === "—" ? "#8A929B" : "#1A1A1A" }}>{r.next}</div>
            <div style={{ color: r.worker === "—" ? "#8A929B" : "#5A6670" }}>{r.worker}</div>
            <Icon name="chevron" size={13} color="#8A929B" />
          </div>
        ))}
      </Card>
    </div>
  );
};

Object.assign(window, { TodayScreen, ReferralsScreen, CasesScreen });
