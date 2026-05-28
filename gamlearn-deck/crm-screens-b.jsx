// More CRM screens: Legal & mitigation, DSAR, Documents, Comms, Notes, Timeline,
// Overview, People list, person record.

const LegalScreen = () => (
  <div style={{ height: "100%", overflow: "auto" }}>
    <CaseHeader tab="legal" />
    <div style={{ padding: "20px 24px 32px", display: "grid", gridTemplateColumns: "1fr 320px", gap: 20 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <SectionHead eyebrow="Legal workflow" title="Stages" right={<Button variant="ghost" size="sm" icon="plus">Log update</Button>} />
        <Card padded={false}>
          {[
            { s: "Arrest & interview", done: true, when: "14 Feb 2026", note: "Duty solicitor: Hanna Lu" },
            { s: "Charge", done: true, when: "21 Feb 2026", note: "Single count, s.1 Theft Act" },
            { s: "First hearing (Magistrates)", done: true, when: "05 Mar 2026", note: "Sent to Crown" },
            { s: "Plea & Trial Preparation", done: false, active: true, when: "14 May 2026", note: "Solicitor advising, plea tbc", status: "In progress" },
            { s: "Sentencing", done: false, when: "—", note: "Awaiting plea" },
            { s: "Post-sentence", done: false, when: "—", note: "" },
          ].map((s, i, arr) => (
            <div key={i} style={{ padding: "14px 18px", display: "flex", gap: 14, borderBottom: i < arr.length - 1 ? "1px solid #EEF1F3" : 0, background: s.active ? "#F5F0FA" : "#fff" }}>
              <div style={{ width: 22, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: 22, height: 22, borderRadius: "50%", background: s.done ? "#4B0082" : s.active ? "#FEE581" : "#EEF1F3", display: "flex", alignItems: "center", justifyContent: "center", color: s.done ? "#fff" : "#1A1A1A", fontSize: 11, fontWeight: 700 }}>
                  {s.done ? <Icon name="check" size={11} color="#fff" /> : (i + 1)}
                </div>
                {i < arr.length - 1 && <div style={{ width: 2, flex: 1, background: "#EEF1F3", marginTop: 4 }} />}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{s.s}</div>
                  {s.status && <Pill tone="featured">{s.status}</Pill>}
                </div>
                <div style={{ fontSize: 12, color: "#5A6670", marginTop: 2 }}>{s.when} · {s.note}</div>
              </div>
            </div>
          ))}
        </Card>

        <SectionHead eyebrow="Mitigation pack" title="Evidence builder" right={<span style={{ fontSize: 11, color: "#5A6670" }}>3 of 7 complete · 43%</span>} />
        <Card padded={false}>
          <div style={{ height: 4, background: "#EEF1F3" }}><div style={{ width: "43%", height: 4, background: "#4B0082" }} /></div>
          {[
            { t: "Psychiatric report", o: "Dr. T. Adebayo", status: "Commissioned", rag: "amber", due: "29 Apr" },
            { t: "GP letter — MH at offence", o: "Joanna P.", status: "Not started", rag: "red", due: "25 Apr" },
            { t: "Employer character ref", o: "Sarah O.", status: "Received", rag: "green", due: "—" },
            { t: "Gambling treatment evidence", o: "Peer team", status: "Received", rag: "green", due: "—" },
            { t: "Bank statements (12 mo.)", o: "Sarah O.", status: "Partial (3 of 12)", rag: "amber", due: "02 May" },
            { t: "Community support letter", o: "Vicar T. Rowe", status: "Requested", rag: "amber", due: "30 Apr" },
            { t: "Pre-sentence report", o: "Probation", status: "Awaiting", rag: "amber", due: "TBD" },
          ].map((r, i, arr) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1.4fr 140px 160px 80px 24px", gap: 10, padding: "12px 16px", alignItems: "center", fontSize: 13, borderBottom: i < arr.length - 1 ? "1px solid #EEF1F3" : 0 }}>
              <div style={{ fontWeight: 500 }}>{r.t}</div>
              <div style={{ color: "#5A6670", fontSize: 12 }}>{r.o}</div>
              <div><Pill tone={r.status === "Received" ? "active" : r.status === "Not started" ? "risk" : "amber"} dot>{r.status}</Pill></div>
              <div style={{ color: "#5A6670", fontSize: 12 }}>{r.due}</div>
              <Icon name="chevron" size={13} color="#8A929B" />
            </div>
          ))}
        </Card>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Card>
          <Overline>Solicitor</Overline>
          <div style={{ marginTop: 10, padding: 10, border: "1px solid #EEF1F3", borderRadius: 8 }}>
            <div style={{ fontWeight: 600 }}>Priya Shah</div>
            <div style={{ fontSize: 12, color: "#5A6670" }}>Thomas & Co · Crown</div>
            <div style={{ fontSize: 11, color: "#8A929B", marginTop: 4 }}>priya@thomasco.uk · 020 7946 0012</div>
          </div>
        </Card>
        <Card>
          <Overline>Internal referrals</Overline>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 10, fontSize: 12 }}>
            <div style={{ padding: 8, background: "#F5F0FA", borderRadius: 6 }}>→ Legal specialist (R. Osei) · open · 02 Apr</div>
            <div style={{ padding: 8, background: "#F5F0FA", borderRadius: 6 }}>→ IO support for Maya · open · 14 Apr</div>
            <Button variant="ghost" size="sm" icon="plus">New internal referral</Button>
          </div>
        </Card>
        <Card>
          <Overline>External signposts</Overline>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 10, fontSize: 12 }}>
            <div>StepChange (DMP) · engaged 08 Mar</div>
            <div>GA Southwark · attending since 12 Mar</div>
            <div>GP — The Surgery SE15 · active</div>
          </div>
        </Card>
      </div>
    </div>
  </div>
);

const DSARScreen = () => (
  <div style={{ height: "100%", overflow: "auto" }}>
    <CaseHeader tab="dsar" />
    <div style={{ padding: "20px 24px 32px" }}>
      <SectionHead eyebrow="Subject Access Request" title="DSAR: gambling operator records" right={<Pill tone="active">In progress</Pill>} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 20 }}>
        <Card padded={false}>
          {[
            { s: "DSAR scoping", when: "02 Apr", done: true, note: "4 operators identified · Sarah consented" },
            { s: "Requests issued", when: "04 Apr", done: true, note: "Sent to all 4 · statutory 30-day clock running" },
            { s: "Responses received", when: "19 Apr", done: false, active: true, note: "2 of 4 received · chased BetFair 21 Apr · Flutter overdue" },
            { s: "Analysis & highlights", when: "—", done: false, note: "Deposit patterns, marketing exposure, VIP flags" },
            { s: "Reused for mitigation", when: "—", done: false, note: "Will feed psychiatric report + plea" },
            { s: "Reused for insight (anon.)", when: "—", done: false, note: "For research dataset, post-consent" },
          ].map((s, i, arr) => (
            <div key={i} style={{ padding: "14px 18px", display: "flex", gap: 14, borderBottom: i < arr.length - 1 ? "1px solid #EEF1F3" : 0, background: s.active ? "#F5F0FA" : "#fff" }}>
              <div style={{ width: 22, height: 22, borderRadius: "50%", background: s.done ? "#4B0082" : s.active ? "#FEE581" : "#EEF1F3", display: "flex", alignItems: "center", justifyContent: "center", color: s.done ? "#fff" : "#1A1A1A", fontSize: 11, fontWeight: 700, flexShrink: 0 }}>
                {s.done ? <Icon name="check" size={11} color="#fff" /> : (i + 1)}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{s.s}</div>
                  <div style={{ fontSize: 11, color: "#8A929B" }}>{s.when}</div>
                </div>
                <div style={{ fontSize: 12, color: "#5A6670", marginTop: 2 }}>{s.note}</div>
              </div>
            </div>
          ))}
        </Card>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Card>
            <Overline>Operators</Overline>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 10, fontSize: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>Paddy Power <Pill tone="active">Received</Pill></div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>Bet365 <Pill tone="active">Received</Pill></div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>BetFair <Pill tone="amber">Chasing</Pill></div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>Flutter <Pill tone="risk">Overdue</Pill></div>
            </div>
          </Card>
          <Card>
            <Overline>Reusability</Overline>
            <p style={{ fontSize: 12, color: "#5A6670", marginTop: 8 }}>DSAR data will be reused for mitigation and (with separate consent) anonymised research. Consent status: <strong>Mitigation granted · Research pending</strong>.</p>
          </Card>
        </div>
      </div>
    </div>
  </div>
);

const DocsTab = () => (
  <div style={{ height: "100%", overflow: "auto" }}>
    <CaseHeader tab="documents" />
    <div style={{ padding: "20px 24px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <SectionHead eyebrow="Documents" title="Case files (14)" />
        <div style={{ display: "flex", gap: 8 }}>
          <Button variant="ghost" size="sm" icon="filter">Filter</Button>
          <Button variant="primary" size="sm" icon="plus">Upload</Button>
        </div>
      </div>
      <Card padded={false}>
        <div style={{ display: "grid", gridTemplateColumns: "32px 1.6fr 120px 120px 90px 120px 120px 24px", padding: "10px 16px", fontSize: 10, color: "#8A929B", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", background: "#FAFBFC", borderBottom: "1px solid #EEF1F3" }}>
          <div></div><div>Name</div><div>Category</div><div>Uploaded by</div><div>Version</div><div>Updated</div><div>Visibility</div><div></div>
        </div>
        {[
          { n: "Psych report — draft v0.3.pdf", c: "Medical", by: "Dr. Adebayo", v: "v0.3", up: "21 Apr", vis: "Staff only" },
          { n: "Consent form — signed.pdf", c: "Consent", by: "Sarah O.", v: "v1", up: "04 Apr", vis: "Shared with member" },
          { n: "GP letter — request template.docx", c: "Template", by: "Joanna P.", v: "v2", up: "14 Apr", vis: "Staff only" },
          { n: "Bank statements (Lloyds, Jan-Mar).pdf", c: "Evidence", by: "Sarah O.", v: "v1", up: "19 Apr", vis: "Shared with member" },
          { n: "Employer character reference.pdf", c: "Evidence", by: "Sarah O.", v: "v1", up: "16 Apr", vis: "Shared with member" },
          { n: "Safeguarding notes — Mar.docx", c: "Internal", by: "Joanna P.", v: "v1", up: "28 Mar", vis: "Restricted" },
          { n: "Self-assessment — responses.pdf", c: "Assessment", by: "Sarah O.", v: "v1", up: "02 Apr", vis: "Shared with member" },
        ].map((d, i, arr) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "32px 1.6fr 120px 120px 90px 120px 120px 24px", padding: "11px 16px", alignItems: "center", fontSize: 13, borderBottom: i < arr.length - 1 ? "1px solid #EEF1F3" : 0, gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: 6, background: "#F5F0FA", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="file" size={14} color="#4B0082" /></div>
            <div style={{ fontWeight: 500 }}>{d.n}</div>
            <div><Pill tone="neutral">{d.c}</Pill></div>
            <div style={{ color: "#5A6670", fontSize: 12 }}>{d.by}</div>
            <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: "#5A6670" }}>{d.v}</div>
            <div style={{ color: "#5A6670", fontSize: 12 }}>{d.up}</div>
            <div><Pill tone={d.vis === "Shared with member" ? "active" : d.vis === "Restricted" ? "restricted" : "closed"} dot>{d.vis === "Shared with member" ? "Shared" : d.vis === "Restricted" ? "Restricted" : "Staff"}</Pill></div>
            <Icon name="more" size={14} color="#8A929B" />
          </div>
        ))}
      </Card>
    </div>
  </div>
);

const CommsTab = () => (
  <div style={{ height: "100%", overflow: "auto" }}>
    <CaseHeader tab="comms" />
    <div style={{ padding: "20px 24px" }}>
      <SectionHead eyebrow="Communications log" title="All threads" right={<div style={{ display: "flex", gap: 8 }}><Button variant="ghost" size="sm" icon="filter">Filter</Button><Button variant="primary" size="sm" icon="plus">New message</Button></div>} />
      <Card padded={false}>
        {[
          { ch: "SMS", to: "Sarah O.", s: "Reminder: 1-to-1 tomorrow 14:30 at Peckham", when: "Today 09:00", dir: "out", auto: true, opened: true },
          { ch: "Email", to: "Sarah O.", s: "Self-assessment link (secure)", when: "19 Apr", dir: "out", auto: true, opened: true },
          { ch: "Email", to: "Priya Shah (solicitor)", s: "Re: plea hearing preparation", when: "18 Apr", dir: "in", opened: true },
          { ch: "SMS", to: "Sarah O.", s: "Your self-assessment is due in 3 days", when: "16 Apr", dir: "out", auto: true, opened: true },
          { ch: "Email", to: "Sarah O.", s: "Welcome & first contact", when: "02 Apr", dir: "out", auto: false, opened: true },
        ].map((m, i, arr) => (
          <div key={i} style={{ padding: "12px 16px", display: "flex", gap: 12, alignItems: "center", borderBottom: i < arr.length - 1 ? "1px solid #EEF1F3" : 0, fontSize: 13 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: m.ch === "SMS" ? "#E0EFEA" : "#E3EDF5", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name={m.ch === "SMS" ? "message" : "mail"} size={14} color={m.ch === "SMS" ? "#00664D" : "#2F6FA3"} />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <span style={{ fontSize: 11, color: "#8A929B", fontWeight: 600 }}>{m.dir === "out" ? "→" : "←"} {m.to}</span>
                {m.auto && <Pill tone="neutral">Automated</Pill>}
              </div>
              <div style={{ color: "#1A1A1A", marginTop: 2 }}>{m.s}</div>
            </div>
            <div style={{ fontSize: 11, color: "#8A929B", width: 80, textAlign: "right" }}>{m.when}</div>
            {m.opened && <Pill tone="active" dot>Opened</Pill>}
          </div>
        ))}
      </Card>
    </div>
  </div>
);

const NotesTab = () => (
  <div style={{ height: "100%", overflow: "auto" }}>
    <CaseHeader tab="notes" />
    <div style={{ padding: "20px 24px", display: "grid", gridTemplateColumns: "1fr 280px", gap: 20 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <SectionHead eyebrow="Case notes" title="14 notes · 3 restricted" right={<Button variant="primary" size="sm" icon="plus">Add note</Button>} />
        {[
          { w: "Joanna Patel", role: "Peer support", when: "Today · 11:20", restricted: false, tag: "1-to-1", t: "Sarah spoke about pressure ahead of plea hearing. Reports sleep down to ~4 hrs, mood low. Agreed to: (1) call GP re: short-term sleep support, (2) add mindfulness audio to daily plan, (3) bring Maya in if she's comfortable.", rags: ["welfare"] },
          { w: "Joanna Patel", role: "Peer support", when: "19 Apr · 15:40", restricted: true, tag: "Safeguarding", t: "[Restricted] Sarah disclosed historic self-harm (>5 years, no current ideation). Logged per safeguarding protocol. Not a current concern — no escalation needed at this time. Reviewed with DSL.", rags: ["safeguarding"] },
          { w: "Raheem Osei", role: "Legal specialist", when: "18 Apr · 10:05", restricted: false, tag: "Legal", t: "Call with Priya Shah (sol.). Plea hearing 14 May. Advice leaning guilty plea with strong mitigation. Confirmed psych report timeline works. Discussed structure of mitigation letter.", rags: ["legal", "evidence"] },
        ].map((n, i) => (
          <Card key={i} style={{ padding: 16, borderLeft: n.restricted ? "3px solid #C0392B" : "3px solid transparent" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
              <Avatar name={n.w} size={28} tint={0} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{n.w}</div>
                <div style={{ fontSize: 11, color: "#8A929B" }}>{n.role} · {n.when}</div>
              </div>
              {n.restricted && <Pill tone="restricted"><Icon name="lock" size={10} /> Restricted</Pill>}
              <Pill tone="neutral">{n.tag}</Pill>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.5, color: "#1A1A1A", margin: 0 }}>{n.t}</p>
            {n.rags.length > 0 && (
              <div style={{ display: "flex", gap: 6, marginTop: 10, paddingTop: 10, borderTop: "1px solid #EEF1F3" }}>
                <span style={{ fontSize: 11, color: "#8A929B" }}>Affects RAG:</span>
                {n.rags.map(r => <Pill key={r} tone="neutral">{r}</Pill>)}
              </div>
            )}
          </Card>
        ))}
      </div>
      <div>
        <Card>
          <Overline>Filter</Overline>
          <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 8, fontSize: 12 }}>
            {["All", "1-to-1", "Group", "Legal", "Safeguarding", "Call / email", "Restricted only"].map((f, i) => (
              <div key={f} style={{ padding: "6px 10px", borderRadius: 6, background: i === 0 ? "#F5F0FA" : "transparent", color: i === 0 ? "#4B0082" : "#5A6670", fontWeight: i === 0 ? 600 : 400 }}>{f}</div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  </div>
);

const TimelineTab = () => (
  <div style={{ height: "100%", overflow: "auto" }}>
    <CaseHeader tab="timeline" />
    <div style={{ padding: "20px 24px" }}>
      <SectionHead eyebrow="Timeline" title="Full case history" right={<div style={{ display: "flex", gap: 8 }}><Button variant="ghost" size="sm" icon="filter">All events</Button><Button variant="ghost" size="sm" icon="download">Export</Button></div>} />
      <Card style={{ padding: 20 }}>
        {[
          { d: "22 Apr 2026", evs: [{ t: "11:20", k: "note", l: "1-to-1 note added by Joanna P." }, { t: "09:00", k: "sms", l: "Reminder SMS sent (automated)" }] },
          { d: "21 Apr 2026", evs: [{ t: "16:12", k: "doc", l: "Psych report draft v0.3 uploaded by Dr. Adebayo" }, { t: "14:00", k: "rag", l: "Evidence domain → Red (was Amber) — by Joanna P." }] },
          { d: "19 Apr 2026", evs: [{ t: "15:40", k: "note", l: "Restricted note added (safeguarding review)" }, { t: "11:02", k: "email", l: "Self-assessment link sent (secure)" }] },
          { d: "14 Apr 2026", evs: [{ t: "10:30", k: "ref", l: "Internal referral → IO support opened for Maya Okafor" }] },
          { d: "04 Apr 2026", evs: [{ t: "09:15", k: "consent", l: "Consent form signed & filed" }, { t: "09:12", k: "rag", l: "Initial RAG set: Amber overall" }] },
          { d: "02 Apr 2026", evs: [{ t: "14:40", k: "intake", l: "First contact with Joanna P. · self-referral accepted" }] },
        ].map((day, i) => (
          <div key={i} style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "#8A929B", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>{day.d}</div>
            {day.evs.map((e, j) => (
              <div key={j} style={{ display: "flex", gap: 12, padding: "6px 0" }}>
                <div style={{ width: 48, fontVariantNumeric: "tabular-nums", fontSize: 12, color: "#8A929B" }}>{e.t}</div>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: e.k === "rag" ? "#C9851A" : e.k === "doc" ? "#4B0082" : e.k === "note" ? "#2F6FA3" : "#5A6670", marginTop: 6, flexShrink: 0 }} />
                <div style={{ fontSize: 13, flex: 1 }}>{e.l}</div>
                <Pill tone="neutral">{e.k}</Pill>
              </div>
            ))}
          </div>
        ))}
      </Card>
    </div>
  </div>
);

const OverviewTab = () => (
  <div style={{ height: "100%", overflow: "auto" }}>
    <CaseHeader tab="overview" />
    <div style={{ padding: "20px 24px 32px", display: "grid", gridTemplateColumns: "1fr 320px", gap: 20 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <Card>
          <Overline>Summary</Overline>
          <p style={{ fontSize: 14, lineHeight: 1.55, color: "#1A1A1A", marginTop: 10 }}>Sarah, 34, referred herself on 2 April 2026 following arrest for theft offences connected to gambling addiction. Single charge, pre-sentence. In active recovery (90 days). Partner Maya is linked as an Impacted Other. Key pressure points ahead of 14 May plea: psych report draft, GP letter on MH at offence, remaining bank statements.</p>
        </Card>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <Card>
            <Overline>Consent & sharing</Overline>
            <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 6, fontSize: 13 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>General support <Pill tone="active" dot>Granted</Pill></div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>Data for mitigation <Pill tone="active" dot>Granted</Pill></div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>Anonymised research <Pill tone="amber" dot>Pending</Pill></div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>Comms: SMS + email <Pill tone="active" dot>Granted</Pill></div>
            </div>
          </Card>
          <Card>
            <Overline>Safe contact</Overline>
            <div style={{ marginTop: 10, fontSize: 12, color: "#5A6670", display: "flex", flexDirection: "column", gap: 4 }}>
              <div><strong style={{ color: "#1A1A1A" }}>OK to contact:</strong> 9am–7pm weekdays</div>
              <div><strong style={{ color: "#1A1A1A" }}>Channels:</strong> mobile (SMS first), personal email</div>
              <div><strong style={{ color: "#1A1A1A" }}>Preferred name:</strong> Sarah (not "Ms Okafor")</div>
              <div><strong style={{ color: "#1A1A1A" }}>Hidden from:</strong> work email, home landline</div>
            </div>
          </Card>
        </div>
        <Card>
          <Overline>Quick facts</Overline>
          <div style={{ marginTop: 10, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, fontSize: 13 }}>
            {[
              ["DOB", "14 Aug 1991"], ["First contact", "02 Apr 2026"], ["Key worker", "Joanna Patel"],
              ["Referral source", "Self"], ["Linked people", "1 IO, 1 solicitor"], ["Consent", "Signed 04 Apr"],
            ].map(([k, v]) => <div key={k}><div style={{ color: "#8A929B", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 2 }}>{k}</div><div style={{ fontWeight: 500 }}>{v}</div></div>)}
          </div>
        </Card>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <Card style={{ background: "#1A1A1A", color: "#fff" }}>
          <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: "rgba(255,255,255,0.6)" }}>At-a-glance</div>
          <div style={{ fontFamily: "Urbanist, Inter, sans-serif", fontSize: 22, fontWeight: 700, marginTop: 8 }}>Stage: Pre-sentence</div>
          <div style={{ marginTop: 4, fontSize: 13, color: "rgba(255,255,255,0.8)" }}>22 days until plea hearing</div>
          <div style={{ display: "flex", gap: 6, marginTop: 12 }}>
            <span style={{ background: "rgba(255,255,255,0.12)", padding: "3px 8px", borderRadius: 999, fontSize: 11 }}>24 days in support</span>
            <span style={{ background: "rgba(255,255,255,0.12)", padding: "3px 8px", borderRadius: 999, fontSize: 11 }}>6/6 groups attended</span>
          </div>
        </Card>
        <Card>
          <Overline>Linked people</Overline>
          <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: 8, borderRadius: 8, background: "#FAFBFC", fontSize: 12 }}>
              <Avatar name="Maya Okafor" size={28} tint={4} />
              <div style={{ flex: 1 }}><div style={{ fontWeight: 600 }}>Maya Okafor</div><div style={{ color: "#5A6670" }}>Partner · IO</div></div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
);

Object.assign(window, { LegalScreen, DSARScreen, DocsTab, CommsTab, NotesTab, TimelineTab, OverviewTab });
