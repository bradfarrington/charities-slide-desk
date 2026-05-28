// Triage dashboard — the anchor surface. Domain RAGs + support plan + actions.

const TriageDashboard = () => {
  const domains = [
    { id: "legal", label: "Legal", rag: "amber", headline: "Awaiting solicitor's advice on plea", updated: "2d ago", items: ["Solicitor engaged (Thomas & Co)", "Plea hearing: 14 May 2026", "No pre-sentence report yet"] },
    { id: "gambling", label: "Gambling", rag: "green", headline: "90 days gambling-free, self-exclusion in place", updated: "5d ago", items: ["GamStop active", "Banking blocks in place", "Attending Tuesday group"] },
    { id: "welfare", label: "Welfare", rag: "amber", headline: "Sleeping poorly, low mood reported", updated: "today", items: ["GP engaged, awaiting CMHT triage", "Housing stable", "Eating regularly"] },
    { id: "safeguarding", label: "Safeguarding", rag: "green", headline: "No active concerns", updated: "2w ago", items: ["No children in household", "No DA indicators", "Partner aware and supportive"] },
    { id: "recovery", label: "Recovery", rag: "green", headline: "Engaged in peer support + 1-to-1", updated: "3d ago", items: ["Weekly 1-to-1 with Joanna", "Group attendance: 6/6", "Mutual aid: GA Wednesdays"] },
    { id: "stability", label: "Stability", rag: "amber", headline: "Debt management in progress", updated: "1w ago", items: ["DMP set up via StepChange", "Employer aware, flexible", "Tenancy secure to Aug 2026"] },
    { id: "evidence", label: "Evidence", rag: "red", headline: "Key documents outstanding for mitigation", updated: "today", items: ["Psychiatric report: commissioned", "Bank statements: 3 of 12 mo.", "GP letter: not yet requested"] },
  ];
  const ragColors = { green: "#2E7D5B", amber: "#C9851A", red: "#C0392B" };
  const ragBg = { green: "#E6F1EC", amber: "#FBF1DE", red: "#F8E3E0" };

  return (
    <div style={{ height: "100%", overflow: "auto", padding: "20px 24px 32px", display: "grid", gridTemplateColumns: "1fr 320px", gap: 20, alignItems: "start" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 20, minWidth: 0 }}>
        {/* Overall banner */}
        <Card style={{ padding: 0, overflow: "hidden" }}>
          <div style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: 16, borderBottom: "1px solid #EEF1F3" }}>
            <div>
              <Overline>Overall risk picture</Overline>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 6 }}>
                <div style={{ fontFamily: "Urbanist, Inter, sans-serif", fontSize: 26, fontWeight: 700, color: "#1A1A1A", letterSpacing: "-0.02em" }}>Watchful</div>
                <RAG tone="amber" label="Amber" />
                <span style={{ fontSize: 12, color: "#5A6670" }}>3 amber · 1 red · 3 green domains</span>
              </div>
            </div>
            <div style={{ flex: 1 }} />
            <Button variant="ghost" size="sm" icon="refresh">Recalculate</Button>
            <Button variant="secondary" size="sm" icon="file">One-page summary</Button>
          </div>
          <div style={{ padding: "12px 20px", background: "#FBF1DE", display: "flex", alignItems: "center", gap: 10, fontSize: 12, color: "#8A6600" }}>
            <Icon name="info" size={14} color="#8A6600" />
            <span>Overall RAG is calculated from the rule <strong>R1 (draft)</strong>: 1 red + ≥2 amber = amber. Rule set still to be agreed — see admin settings.</span>
          </div>
        </Card>

        {/* Domain grid */}
        <div>
          <SectionHead eyebrow="Domains" title="RAG by area" right={<Button variant="ghost" size="sm" icon="plus">Add update</Button>} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
            {domains.map(d => (
              <Card key={d.id} style={{ padding: 16, borderLeft: `3px solid ${ragColors[d.rag]}` }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#1A1A1A" }}>{d.label}</div>
                  <RAG tone={d.rag} label={d.rag === "amber" ? "Amber" : d.rag === "red" ? "Red" : "Green"} size="sm" />
                </div>
                <div style={{ fontSize: 13, color: "#1A1A1A", marginBottom: 10, lineHeight: 1.4 }}>{d.headline}</div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 4 }}>
                  {d.items.map((it, i) => <li key={i} style={{ fontSize: 12, color: "#5A6670", paddingLeft: 12, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, top: 6, width: 4, height: 4, borderRadius: "50%", background: "#C8CFD4" }} />{it}
                  </li>)}
                </ul>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12, paddingTop: 10, borderTop: "1px solid #EEF1F3", fontSize: 11, color: "#8A929B" }}>
                  <span>Updated {d.updated}</span>
                  <span style={{ color: "#4B0082", fontWeight: 600, cursor: "pointer" }}>History →</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Support plan */}
        <div>
          <SectionHead eyebrow="Support plan" title="Actions & priorities" right={<Button variant="ghost" size="sm" icon="plus">Add action</Button>} />
          <Card padded={false}>
            <div style={{ padding: "10px 16px", background: "#FAFBFC", borderBottom: "1px solid #EEF1F3", display: "grid", gridTemplateColumns: "24px 1fr 120px 100px 120px", gap: 12, fontSize: 10, color: "#8A929B", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              <div></div><div>Action</div><div>Owner</div><div>Priority</div><div>Due</div>
            </div>
            {[
              { t: "Request GP letter evidencing mental health at time of offence", o: "Joanna P.", p: "High", due: "25 Apr", done: false },
              { t: "Chase psychiatric report (commissioned 8 Apr)", o: "Legal spec.", p: "High", due: "29 Apr", done: false },
              { t: "Collect remaining bank statements (9 months)", o: "Sarah O.", p: "Medium", due: "02 May", done: false },
              { t: "Confirm plea hearing date with solicitor", o: "Joanna P.", p: "Medium", due: "—", done: true },
              { t: "Send IO information leaflet to partner", o: "Joanna P.", p: "Low", due: "30 Apr", done: false },
            ].map((a, i, arr) => (
              <div key={i} style={{ padding: "12px 16px", borderBottom: i < arr.length - 1 ? "1px solid #EEF1F3" : 0, display: "grid", gridTemplateColumns: "24px 1fr 120px 100px 120px", gap: 12, alignItems: "center", fontSize: 13 }}>
                <div style={{ width: 16, height: 16, borderRadius: 4, border: `1.5px solid ${a.done ? "#2E7D5B" : "#C8CFD4"}`, background: a.done ? "#2E7D5B" : "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {a.done && <Icon name="check" size={10} color="#fff" />}
                </div>
                <div style={{ color: a.done ? "#8A929B" : "#1A1A1A", textDecoration: a.done ? "line-through" : "none" }}>{a.t}</div>
                <div style={{ color: "#5A6670" }}>{a.o}</div>
                <div><Pill tone={a.p === "High" ? "amber" : a.p === "Medium" ? "info" : "closed"} dot>{a.p}</Pill></div>
                <div style={{ color: a.due === "—" ? "#8A929B" : "#1A1A1A" }}>{a.due}</div>
              </div>
            ))}
          </Card>
        </div>
      </div>

      {/* Right rail */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Card style={{ padding: 16 }}>
          <Overline>Key dates</Overline>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 10 }}>
            {[
              { d: "14 May 2026", l: "Plea hearing", where: "Crown Court · Southwark", urgent: true },
              { d: "29 Apr 2026", l: "Psych report due", where: "Dr. Adebayo", urgent: true },
              { d: "06 May 2026", l: "Peer group session", where: "Peckham · Room 2" },
              { d: "22 May 2026", l: "Pre-sentence mtg w. probation", where: "Probation office" },
            ].map((k, i) => (
              <div key={i} style={{ display: "flex", gap: 10, padding: "8px 10px", borderRadius: 8, background: k.urgent ? "#FBF1DE" : "#FAFBFC" }}>
                <div style={{ width: 44, textAlign: "center", flexShrink: 0 }}>
                  <div style={{ fontSize: 10, color: "#5A6670", textTransform: "uppercase", letterSpacing: "0.06em" }}>{k.d.split(" ")[1]}</div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: "#1A1A1A", lineHeight: 1 }}>{k.d.split(" ")[0]}</div>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "#1A1A1A" }}>{k.l}</div>
                  <div style={{ fontSize: 11, color: "#5A6670" }}>{k.where}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card style={{ padding: 16 }}>
          <Overline>Linked people</Overline>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: 8, borderRadius: 8, background: "#FAFBFC" }}>
              <Avatar name="Maya Okafor" size={32} tint={4} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>Maya Okafor</div>
                <div style={{ fontSize: 11, color: "#5A6670" }}>Partner · Impacted Other · G-1049</div>
              </div>
              <Icon name="chevron" size={14} color="#8A929B" />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: 8, borderRadius: 8 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#E3EDF5", color: "#2F6FA3", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600 }}><Icon name="briefcase" size={14} /></div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>Priya Shah</div>
                <div style={{ fontSize: 11, color: "#5A6670" }}>Solicitor · Thomas & Co</div>
              </div>
              <Icon name="chevron" size={14} color="#8A929B" />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: 8, borderRadius: 8 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#E3EDF5", color: "#2F6FA3", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600 }}><Icon name="briefcase" size={14} /></div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>Dr. Tunde Adebayo</div>
                <div style={{ fontSize: 11, color: "#5A6670" }}>Psychiatrist · Instructed</div>
              </div>
              <Icon name="chevron" size={14} color="#8A929B" />
            </div>
          </div>
        </Card>

        <Card style={{ padding: 16 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
            <Overline>Recent notes</Overline>
            <span style={{ fontSize: 11, color: "#4B0082", fontWeight: 600 }}>All →</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { w: "J. Patel", when: "Today · 11:20", t: "Sarah spoke about pressure ahead of plea hearing. Agreed to bring partner into next session if she's comfortable." },
              { w: "J. Patel", when: "19 Apr", t: "Chased psych report. Dr. A. confirmed draft by 29 Apr." },
            ].map((n, i) => (
              <div key={i} style={{ padding: 10, background: "#FAFBFC", borderRadius: 8, fontSize: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", color: "#5A6670", marginBottom: 4 }}>
                  <span style={{ fontWeight: 600, color: "#1A1A1A" }}>{n.w}</span><span>{n.when}</span>
                </div>
                <div style={{ color: "#1A1A1A", lineHeight: 1.45 }}>{n.t}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

Object.assign(window, { TriageDashboard });
