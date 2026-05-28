// Member portal — mobile-first. Home, Journey, Documents, Support, Messages, You.
// Wrapped in iOS frame. Includes auth screen and quick-exit affordance.

const PortalShell = ({ active = "home", children, title, hideNav = false, darkTop = false, showQuickExit = true }) => {
  const tabs = [
    { id: "home", label: "Home", icon: "home" },
    { id: "journey", label: "Journey", icon: "map" },
    { id: "documents", label: "Docs", icon: "file" },
    { id: "support", label: "Support", icon: "heart" },
    { id: "messages", label: "Messages", icon: "message" },
    { id: "you", label: "You", icon: "user" },
  ];
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#FAFBFC", fontFamily: "Inter, system-ui, sans-serif", color: "#1A1A1A" }}>
      <div style={{ padding: "14px 18px 12px", background: darkTop ? "#1A1A1A" : "#fff", color: darkTop ? "#fff" : "#1A1A1A", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: darkTop ? "none" : "1px solid #EEF1F3", flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {darkTop
            ? <span style={{ fontFamily: "Urbanist, Inter, sans-serif", fontSize: 15, fontWeight: 700, letterSpacing: "-0.01em" }}>Gordon Moody</span>
            : <img src="assets/favicon.png" style={{ height: 22 }} />}
          {title && !darkTop && <span style={{ fontFamily: "Urbanist, Inter, sans-serif", fontSize: 16, fontWeight: 600, letterSpacing: "-0.01em" }}>{title}</span>}
        </div>
        {showQuickExit && (
          <button style={{ background: darkTop ? "rgba(255,255,255,0.14)" : "#F8E3E0", color: darkTop ? "#fff" : "#C0392B", border: 0, padding: "6px 10px", borderRadius: 999, fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", gap: 5, cursor: "pointer" }}>
            <Icon name="shield" size={11} /> Quick exit
          </button>
        )}
      </div>
      <div style={{ flex: 1, overflow: "auto" }}>{children}</div>
      {!hideNav && (
        <div style={{ display: "flex", background: "#fff", borderTop: "1px solid #EEF1F3", padding: "4px 0 10px", flexShrink: 0 }}>
          {tabs.map(t => {
            const on = t.id === active;
            return (
              <div key={t.id} style={{ flex: 1, textAlign: "center", padding: "6px 2px 2px", color: on ? "#4B0082" : "#8A929B" }}>
                <div style={{ display: "inline-flex", padding: on ? "4px 10px" : 0, borderRadius: 999, background: on ? "#F5F0FA" : "transparent" }}>
                  <Icon name={t.icon} size={18} color={on ? "#4B0082" : "#8A929B"} />
                </div>
                <div style={{ fontSize: 10, fontWeight: on ? 700 : 500, marginTop: 3 }}>{t.label}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

// --- Login / auth ---
const PortalLogin = () => (
  <PortalShell active="" hideNav darkTop showQuickExit>
    <div style={{ minHeight: "100%", padding: "32px 24px", display: "flex", flexDirection: "column", background: "linear-gradient(180deg, #1A1A1A 0%, #1A1A1A 35%, #FAFBFC 35%, #FAFBFC 100%)" }}>
      <div style={{ textAlign: "center", color: "#fff", padding: "8px 0 32px" }}>
        <div style={{ fontFamily: "Urbanist, Inter, sans-serif", fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em" }}>Welcome back</div>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", marginTop: 4 }}>Your space with Gordon Moody</div>
      </div>
      <div style={{ background: "#fff", borderRadius: 16, padding: 20, boxShadow: "0 10px 30px rgba(26,26,26,0.08)", border: "1px solid #EEF1F3" }}>
        <label style={{ fontSize: 12, fontWeight: 600 }}>Email address</label>
        <input readOnly value="sarah.o@example.com" style={{ width: "100%", marginTop: 6, padding: "12px 14px", border: "1px solid #E1E5E8", borderRadius: 10, fontSize: 14, fontFamily: "inherit", boxSizing: "border-box" }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "14px 0 6px" }}>
          <label style={{ fontSize: 12, fontWeight: 600 }}>Password</label>
          <span style={{ fontSize: 11, color: "#4B0082", fontWeight: 600 }}>Forgot?</span>
        </div>
        <input readOnly value="••••••••••••" style={{ width: "100%", padding: "12px 14px", border: "1px solid #E1E5E8", borderRadius: 10, fontSize: 14, fontFamily: "inherit", boxSizing: "border-box" }} />
        <button style={{ width: "100%", marginTop: 16, padding: "13px", background: "#4B0082", color: "#fff", border: 0, borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>Sign in</button>
        <div style={{ textAlign: "center", margin: "14px 0 10px", fontSize: 11, color: "#8A929B" }}>or</div>
        <button style={{ width: "100%", padding: "11px", background: "#fff", color: "#1A1A1A", border: "1px solid #E1E5E8", borderRadius: 10, fontSize: 13, fontWeight: 500, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <Icon name="mail" size={14} /> Send me a sign-in link
        </button>
        <div style={{ marginTop: 16, padding: 12, background: "#FAFBFC", borderRadius: 10, fontSize: 11, color: "#5A6670", display: "flex", gap: 8 }}>
          <Icon name="shield" size={13} color="#4B0082" />
          <div>This is a private, secure space. <strong>Quick exit</strong> at the top takes you away from the site instantly.</div>
        </div>
      </div>
      <div style={{ flex: 1 }} />
      <div style={{ fontSize: 11, color: "#8A929B", textAlign: "center", padding: "20px 12px 0" }}>Need help? Call 0808 000 0000 · free, confidential</div>
    </div>
  </PortalShell>
);

// --- Home ---
const PortalHome = () => (
  <PortalShell active="home">
    <div style={{ padding: "18px 18px 32px", display: "flex", flexDirection: "column", gap: 14 }}>
      <div>
        <div style={{ fontSize: 12, color: "#5A6670" }}>Wednesday, 22 April</div>
        <h1 style={{ fontFamily: "Urbanist, Inter, sans-serif", fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em", margin: "4px 0 0" }}>Hi Sarah.</h1>
        <p style={{ fontSize: 13, color: "#5A6670", margin: "4px 0 0" }}>Here's where you are and what's next.</p>
      </div>

      <div style={{ background: "#1A1A1A", color: "#fff", padding: 18, borderRadius: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 10, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
          <Icon name="map" size={11} color="rgba(255,255,255,0.6)" /> Your stage
        </div>
        <div style={{ fontFamily: "Urbanist, Inter, sans-serif", fontSize: 22, fontWeight: 700, marginTop: 8, letterSpacing: "-0.01em" }}>Pre-sentence</div>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", marginTop: 4 }}>22 days until your plea hearing on 14 May</div>
        <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
          <div style={{ flex: 1, background: "rgba(255,255,255,0.12)", padding: "8px 10px", borderRadius: 8, fontSize: 11 }}>
            Support since<br /><span style={{ fontSize: 13, fontWeight: 600 }}>24 days</span>
          </div>
          <div style={{ flex: 1, background: "rgba(255,255,255,0.12)", padding: "8px 10px", borderRadius: 8, fontSize: 11 }}>
            Groups attended<br /><span style={{ fontSize: 13, fontWeight: 600 }}>6 of 6</span>
          </div>
        </div>
        <button style={{ width: "100%", marginTop: 12, padding: "10px", background: "#FEE581", color: "#38005F", border: 0, borderRadius: 8, fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Update my stage</button>
      </div>

      <Card>
        <Overline>What's next</Overline>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 10 }}>
          {[
            { d: "Today", t: "14:30", l: "1-to-1 with Joanna", w: "Peckham, Room 2", urgent: true },
            { d: "Thu 23 Apr", t: "18:30", l: "Tuesday Peer Group", w: "Peckham" },
            { d: "14 May 2026", t: "10:00", l: "Plea hearing", w: "Crown Court Southwark", urgent: true },
          ].map((e, i) => (
            <div key={i} style={{ display: "flex", gap: 10, padding: 10, background: e.urgent ? "#FBF1DE" : "#FAFBFC", borderRadius: 10 }}>
              <div style={{ width: 46, flexShrink: 0 }}>
                <div style={{ fontSize: 10, color: "#5A6670", textTransform: "uppercase", letterSpacing: "0.06em" }}>{e.d}</div>
                <div style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.1 }}>{e.t}</div>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{e.l}</div>
                <div style={{ fontSize: 11, color: "#5A6670" }}>{e.w}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Overline>Things for you</Overline>
          <span style={{ fontSize: 11, color: "#4B0082", fontWeight: 600 }}>2 open</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 10 }}>
          {[
            { l: "Upload the rest of your bank statements", due: "Due 2 May", icon: "file" },
            { l: "Complete the welfare check-in", due: "Takes 3 min", icon: "heart" },
          ].map((a, i) => (
            <div key={i} style={{ display: "flex", gap: 10, padding: 10, border: "1px solid #EEF1F3", borderRadius: 10, alignItems: "center" }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "#F5F0FA", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon name={a.icon} size={14} color="#4B0082" />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 500 }}>{a.l}</div>
                <div style={{ fontSize: 11, color: "#5A6670" }}>{a.due}</div>
              </div>
              <Icon name="chevron" size={14} color="#8A929B" />
            </div>
          ))}
        </div>
      </Card>

      <Card style={{ background: "#F5F0FA", border: "none" }}>
        <div style={{ display: "flex", gap: 10 }}>
          <Avatar name="Joanna Patel" size={36} tint={0} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600 }}>Joanna is your key worker</div>
            <div style={{ fontSize: 11, color: "#5A6670" }}>Usually replies within a few hours · Mon–Fri</div>
            <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
              <Button variant="primary" size="sm" icon="message">Message</Button>
              <Button variant="ghost" size="sm" icon="phone">Call</Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </PortalShell>
);

// --- Journey ---
const PortalJourney = () => (
  <PortalShell active="journey" title="Your journey">
    <div style={{ padding: "18px 18px 32px" }}>
      <Card>
        <Overline>Where you are</Overline>
        <div style={{ fontFamily: "Urbanist, Inter, sans-serif", fontSize: 20, fontWeight: 700, marginTop: 4 }}>Pre-sentence</div>
        <div style={{ fontSize: 12, color: "#5A6670", marginTop: 2 }}>You moved to this stage on 5 March. You can update this whenever things change.</div>
        <button style={{ width: "100%", marginTop: 12, padding: "10px", background: "#F5F0FA", color: "#4B0082", border: "1px solid #E8DFF1", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Update my stage</button>
      </Card>

      <div style={{ marginTop: 16 }}>
        <Overline>Your path so far</Overline>
        <div style={{ marginTop: 14, position: "relative", paddingLeft: 32 }}>
          <div style={{ position: "absolute", left: 11, top: 6, bottom: 6, width: 2, background: "#EEF1F3" }} />
          {[
            { l: "First contact", d: "2 Apr 2026", done: true, me: "You self-referred" },
            { l: "Arrest", d: "14 Feb 2026", done: true },
            { l: "Charged", d: "21 Feb 2026", done: true },
            { l: "First hearing", d: "5 Mar 2026", done: true },
            { l: "Pre-sentence (now)", d: "Ongoing", done: false, active: true, me: "Plea hearing on 14 May" },
            { l: "Sentencing", d: "—", done: false, future: true },
            { l: "What happens next", d: "—", done: false, future: true },
          ].map((s, i) => (
            <div key={i} style={{ paddingBottom: 14, position: "relative" }}>
              <div style={{ position: "absolute", left: -28, top: 2, width: 24, height: 24, borderRadius: "50%", background: s.done ? "#4B0082" : s.active ? "#FEE581" : "#fff", border: s.future ? "2px dashed #C8CFD4" : "2px solid " + (s.active ? "#FEE581" : "#4B0082"), display: "flex", alignItems: "center", justifyContent: "center" }}>
                {s.done && <Icon name="check" size={11} color="#fff" />}
                {s.active && <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#38005F" }} />}
              </div>
              <div style={{ fontSize: 14, fontWeight: s.active ? 700 : 500, color: s.future ? "#8A929B" : "#1A1A1A" }}>{s.l}</div>
              <div style={{ fontSize: 11, color: "#8A929B" }}>{s.d}</div>
              {s.me && <div style={{ fontSize: 12, color: "#5A6670", marginTop: 4 }}>{s.me}</div>}
            </div>
          ))}
        </div>
      </div>

      <Card style={{ marginTop: 16 }}>
        <Overline>What happens next</Overline>
        <p style={{ fontSize: 13, color: "#1A1A1A", margin: "10px 0 0", lineHeight: 1.5 }}>Your plea hearing is on <strong>14 May 2026</strong>. Before then, Joanna will help you:</p>
        <ul style={{ margin: "8px 0 0", paddingLeft: 18, fontSize: 13, color: "#5A6670", lineHeight: 1.7 }}>
          <li>Get your GP letter ready</li>
          <li>Receive Dr. Adebayo's report</li>
          <li>Finish uploading your bank statements</li>
        </ul>
      </Card>
    </div>
  </PortalShell>
);

// --- Documents ---
const PortalDocs = () => (
  <PortalShell active="documents" title="Documents">
    <div style={{ padding: "18px 18px 32px" }}>
      <div style={{ display: "flex", gap: 8, padding: 4, background: "#F0F2F4", borderRadius: 10, fontSize: 12, marginBottom: 14 }}>
        {["Shared with you", "Your uploads"].map((t, i) => (
          <div key={t} style={{ flex: 1, textAlign: "center", padding: "7px", background: i === 0 ? "#fff" : "transparent", borderRadius: 8, fontWeight: i === 0 ? 600 : 500, color: i === 0 ? "#1A1A1A" : "#5A6670", boxShadow: i === 0 ? "0 1px 2px rgba(0,0,0,0.06)" : "none" }}>{t}</div>
        ))}
      </div>

      <div style={{ fontSize: 11, color: "#5A6670", marginBottom: 8 }}>Shared by your worker — 4 items</div>
      <Card padded={false}>
        {[
          { n: "Welcome leaflet.pdf", by: "Joanna P.", when: "02 Apr" },
          { n: "Pre-sentence: what to expect.pdf", by: "Joanna P.", when: "08 Apr" },
          { n: "Self-assessment — responses.pdf", by: "System", when: "04 Apr" },
          { n: "Consent form — signed.pdf", by: "You · co-signed", when: "04 Apr" },
        ].map((d, i, arr) => (
          <div key={i} style={{ padding: "12px 14px", display: "flex", gap: 10, alignItems: "center", borderBottom: i < arr.length - 1 ? "1px solid #EEF1F3" : 0 }}>
            <div style={{ width: 32, height: 32, borderRadius: 6, background: "#F5F0FA", display: "flex", alignItems: "center", justifyContent: "center" }}><Icon name="file" size={14} color="#4B0082" /></div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{d.n}</div>
              <div style={{ fontSize: 11, color: "#8A929B" }}>{d.by} · {d.when}</div>
            </div>
            <Icon name="download" size={14} color="#4B0082" />
          </div>
        ))}
      </Card>

      <button style={{ width: "100%", marginTop: 14, padding: "14px", background: "#4B0082", color: "#fff", border: 0, borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
        <Icon name="plus" size={14} color="#fff" /> Upload a document
      </button>
      <div style={{ fontSize: 11, color: "#8A929B", marginTop: 8, textAlign: "center", lineHeight: 1.5 }}>PDFs, photos, or Word files. Only Joanna and the team see what you upload.</div>
    </div>
  </PortalShell>
);

// --- Support (groups + self-assessment + resources) ---
const PortalSupport = () => (
  <PortalShell active="support" title="Support">
    <div style={{ padding: "18px 18px 32px", display: "flex", flexDirection: "column", gap: 14 }}>
      <Card style={{ background: "#F5F0FA", border: "none" }}>
        <Overline>Available to you</Overline>
        <div style={{ fontFamily: "Urbanist, Inter, sans-serif", fontSize: 16, fontWeight: 700, marginTop: 4 }}>Self-assessment</div>
        <p style={{ fontSize: 12, color: "#5A6670", margin: "4px 0 10px", lineHeight: 1.5 }}>A secure form that helps Joanna understand how you're doing. Takes about 10 minutes. Your answers are private to your support team.</p>
        <Button variant="primary" size="sm">Start self-assessment</Button>
      </Card>

      <div>
        <Overline>Your groups</Overline>
        <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            { n: "Tuesday Peer Group", t: "Tuesdays 18:30", w: "Peckham · Room 2", next: "Thu 23 Apr", joined: true },
            { n: "Early Recovery Circle", t: "Saturdays 10:00", w: "Southwark", next: "Sat 25 Apr", joined: false },
          ].map((g, i) => (
            <Card key={i}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{g.n}</div>
                  <div style={{ fontSize: 12, color: "#5A6670", marginTop: 2 }}>{g.t} · {g.w}</div>
                  <div style={{ fontSize: 11, color: "#4B0082", marginTop: 6, fontWeight: 600 }}>Next: {g.next}</div>
                </div>
                {g.joined
                  ? <Pill tone="active" dot>Joined</Pill>
                  : <Button variant="ghost" size="sm">Join</Button>}
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <Overline>Helpful resources</Overline>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 10 }}>
          {[
            { l: "Coping with the wait", i: "heart" },
            { l: "Telling your family", i: "users" },
            { l: "Managing debt", i: "graph" },
            { l: "Talking to your solicitor", i: "briefcase" },
          ].map((r, i) => (
            <div key={i} style={{ padding: 12, background: "#fff", border: "1px solid #EEF1F3", borderRadius: 10 }}>
              <Icon name={r.i} size={16} color="#4B0082" />
              <div style={{ fontSize: 13, fontWeight: 600, marginTop: 8 }}>{r.l}</div>
              <div style={{ fontSize: 10, color: "#8A929B", marginTop: 2 }}>4 min read</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </PortalShell>
);

// --- Messages ---
const PortalMessages = () => (
  <PortalShell active="messages" title="Messages">
    <div style={{ padding: "18px 18px 32px" }}>
      <Card padded={false}>
        {[
          { from: "Joanna Patel", role: "Your key worker", when: "11:20", preview: "Hi Sarah — just confirming 14:30 today at Peckham. See you then x", unread: true },
          { from: "Gordon Moody", role: "Automated reminder", when: "09:00", preview: "Reminder: 1-to-1 tomorrow 14:30 at Peckham Room 2." },
          { from: "Joanna Patel", role: "Your key worker", when: "19 Apr", preview: "I've sent the self-assessment link. No rush — take your time." },
          { from: "Gordon Moody", role: "Automated", when: "04 Apr", preview: "Welcome to your space. Here's what you can do here…" },
        ].map((m, i, arr) => (
          <div key={i} style={{ padding: "14px 14px", display: "flex", gap: 10, alignItems: "flex-start", borderBottom: i < arr.length - 1 ? "1px solid #EEF1F3" : 0 }}>
            {m.from === "Joanna Patel" ? <Avatar name="Joanna Patel" size={36} tint={0} /> : <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#F5F0FA", display: "flex", alignItems: "center", justifyContent: "center" }}><img src="assets/favicon.png" style={{ height: 18 }} /></div>}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 6 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{m.from}</div>
                <div style={{ fontSize: 10, color: "#8A929B" }}>{m.when}</div>
              </div>
              <div style={{ fontSize: 11, color: "#8A929B" }}>{m.role}</div>
              <div style={{ fontSize: 12, color: m.unread ? "#1A1A1A" : "#5A6670", marginTop: 4, fontWeight: m.unread ? 600 : 400, lineHeight: 1.4 }}>{m.preview}</div>
            </div>
            {m.unread && <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4B0082", marginTop: 8 }} />}
          </div>
        ))}
      </Card>
      <div style={{ marginTop: 14, padding: 12, background: "#FAFBFC", borderRadius: 10, fontSize: 11, color: "#5A6670", display: "flex", gap: 8 }}>
        <Icon name="info" size={13} color="#5A6670" />
        <div>Messages here come from your support team. For something urgent out of hours, call <strong>0808 000 0000</strong>.</div>
      </div>
    </div>
  </PortalShell>
);

// --- You (profile + settings + quick exit + safe contact) ---
const PortalYou = () => (
  <PortalShell active="you" title="You">
    <div style={{ padding: "18px 18px 32px", display: "flex", flexDirection: "column", gap: 14 }}>
      <Card>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Avatar name="Sarah Okafor" size={56} tint={0} />
          <div>
            <div style={{ fontFamily: "Urbanist, Inter, sans-serif", fontSize: 18, fontWeight: 700 }}>Sarah Okafor</div>
            <div style={{ fontSize: 12, color: "#5A6670" }}>Member since 2 April 2026</div>
            <div style={{ fontSize: 11, color: "#4B0082", marginTop: 2, fontWeight: 600 }}>Key worker: Joanna Patel</div>
          </div>
        </div>
      </Card>

      <div>
        <Overline>Safety & privacy</Overline>
        <Card padded={false} style={{ marginTop: 10 }}>
          {[
            { l: "Quick exit", s: "On — shows Google when tapped", icon: "shield", tone: "danger" },
            { l: "Hide this site from history", s: "Use private browsing tip", icon: "eye" },
            { l: "Sign me out after 15 min idle", s: "On", icon: "clock" },
            { l: "Two-factor sign in", s: "Off — set up", icon: "lock" },
          ].map((r, i, arr) => (
            <div key={i} style={{ padding: "12px 14px", display: "flex", gap: 10, alignItems: "center", borderBottom: i < arr.length - 1 ? "1px solid #EEF1F3" : 0 }}>
              <Icon name={r.icon} size={15} color={r.tone === "danger" ? "#C0392B" : "#4B0082"} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 500 }}>{r.l}</div>
                <div style={{ fontSize: 11, color: "#5A6670" }}>{r.s}</div>
              </div>
              <Icon name="chevron" size={13} color="#8A929B" />
            </div>
          ))}
        </Card>
      </div>

      <div>
        <Overline>How you like to be contacted</Overline>
        <Card style={{ marginTop: 10 }}>
          <div style={{ fontSize: 12, color: "#5A6670", lineHeight: 1.6 }}>
            <div><strong style={{ color: "#1A1A1A" }}>Best times:</strong> weekdays, 9am–7pm</div>
            <div><strong style={{ color: "#1A1A1A" }}>By:</strong> SMS first, then email</div>
            <div><strong style={{ color: "#1A1A1A" }}>Call me:</strong> Sarah (not Ms Okafor)</div>
            <div><strong style={{ color: "#1A1A1A" }}>Don't use:</strong> work email, home landline</div>
          </div>
          <button style={{ marginTop: 12, padding: "8px 12px", background: "#F5F0FA", color: "#4B0082", border: 0, borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Edit preferences</button>
        </Card>
      </div>

      <div>
        <Overline>Consent</Overline>
        <Card padded={false} style={{ marginTop: 10 }}>
          {[
            { l: "General support", on: true },
            { l: "Use of my data for my own case (mitigation)", on: true },
            { l: "Anonymised research — help improve the service", on: false },
            { l: "Newsletter & updates", on: true },
          ].map((c, i, arr) => (
            <div key={i} style={{ padding: "12px 14px", display: "flex", alignItems: "center", gap: 10, borderBottom: i < arr.length - 1 ? "1px solid #EEF1F3" : 0 }}>
              <div style={{ flex: 1, fontSize: 13 }}>{c.l}</div>
              <div style={{ width: 36, height: 20, borderRadius: 999, background: c.on ? "#4B0082" : "#C8CFD4", padding: 2, boxSizing: "border-box", display: "flex", justifyContent: c.on ? "flex-end" : "flex-start" }}>
                <div style={{ width: 16, height: 16, borderRadius: "50%", background: "#fff" }} />
              </div>
            </div>
          ))}
        </Card>
      </div>

      <button style={{ padding: "11px", background: "#fff", color: "#C0392B", border: "1px solid #F8E3E0", borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Sign out</button>
    </div>
  </PortalShell>
);

// --- Self-assessment form (portal, fullscreen) ---
const PortalSelfAssess = () => (
  <PortalShell active="" hideNav showQuickExit>
    <div style={{ padding: "18px 18px 32px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "#4B0082", marginBottom: 4, fontWeight: 600 }}>
        <Icon name="chevron" size={11} color="#4B0082" style={{ transform: "rotate(180deg)" }} /> Back
      </div>
      <h1 style={{ fontFamily: "Urbanist, Inter, sans-serif", fontSize: 22, fontWeight: 700, margin: "4px 0 6px", letterSpacing: "-0.02em" }}>Self-assessment</h1>
      <p style={{ fontSize: 12, color: "#5A6670", margin: 0 }}>Section 2 of 5: How you're doing</p>
      <div style={{ height: 6, background: "#EEF1F3", borderRadius: 3, marginTop: 14, overflow: "hidden" }}>
        <div style={{ width: "40%", height: "100%", background: "#4B0082" }} />
      </div>

      <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 18 }}>
        {[
          { q: "How is your sleep been this past week?", opts: ["Good", "OK", "Not great", "Really poor"], sel: 2 },
          { q: "How has your mood been?", opts: ["Steady", "A bit low", "Low", "Very low"], sel: 1 },
        ].map((q, i) => (
          <div key={i}>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 10 }}>{q.q}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {q.opts.map((o, j) => (
                <div key={o} style={{ padding: "12px 14px", border: `1.5px solid ${j === q.sel ? "#4B0082" : "#E1E5E8"}`, background: j === q.sel ? "#F5F0FA" : "#fff", borderRadius: 10, fontSize: 13, fontWeight: 500, display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 18, height: 18, borderRadius: "50%", border: `2px solid ${j === q.sel ? "#4B0082" : "#C8CFD4"}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {j === q.sel && <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4B0082" }} />}
                  </div>
                  {o}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Anything you'd like Joanna to know?</div>
          <textarea readOnly defaultValue="Feeling quite anxious ahead of the plea hearing — sleeping badly." style={{ width: "100%", padding: 12, border: "1px solid #E1E5E8", borderRadius: 10, fontSize: 13, fontFamily: "inherit", minHeight: 90, resize: "none", boxSizing: "border-box" }} />
        </div>
      </div>

      <div style={{ display: "flex", gap: 8, marginTop: 24 }}>
        <button style={{ flex: 1, padding: "12px", background: "#fff", color: "#4B0082", border: "1px solid #E8DFF1", borderRadius: 10, fontSize: 13, fontWeight: 600 }}>Save & exit</button>
        <button style={{ flex: 2, padding: "12px", background: "#4B0082", color: "#fff", border: 0, borderRadius: 10, fontSize: 14, fontWeight: 600 }}>Continue</button>
      </div>
    </div>
  </PortalShell>
);

Object.assign(window, { PortalShell, PortalLogin, PortalHome, PortalJourney, PortalDocs, PortalSupport, PortalMessages, PortalYou, PortalSelfAssess });
