// ===========================================================
//  Booking page — calendar → hike → group/extras → pay
// ===========================================================

function BookingPage({ onNav, initialDate = "2025-05-24", initialHikeIdx = 1 }) {
  const [step, setStep] = React.useState(1);
  const [date, setDate] = React.useState(initialDate);
  const [hikeIdx, setHikeIdx] = React.useState(initialHikeIdx); // index within HIKE_DB
  const [group, setGroup] = React.useState("solo");
  const [extras, setExtras] = React.useState({ transport: false, lunch: true, donation: 5 });
  const [useMembership, setUseMembership] = React.useState(false);
  const [confirmed, setConfirmed] = React.useState(false);

  const hikesToday = HIKE_DB.map((h, i) => ({ ...h, _i: i })).filter(h => h.date === date);
  const hike = HIKE_DB[hikeIdx] || hikesToday[0];

  const groupOptions = [
    { id: "solo",    label: "Just me",     sub: "1 hiker",     people: 1, Ic: Icons.Heart },
    { id: "plus1",   label: "Bring +1",    sub: "2 hikers",    people: 2, Ic: Icons.Users },
    { id: "family",  label: "Small group", sub: "3–4 hikers",  people: 3, Ic: Icons.Users },
  ];
  const groupSel = groupOptions.find(g => g.id === group);

  const donationOptions = [0, 5, 10, 20, 50];
  const hikePrice = useMembership ? 0 : (hike?.price || 0) * (groupSel?.people || 1);
  const total = hikePrice + (extras.transport ? 8 : 0) + (extras.lunch ? 6 : 0) + extras.donation;

  return (
    <div style={{ background: "var(--h2h-paper)", color: "var(--fg-default)", minHeight: 100, position: "relative", overflow: "hidden", isolation: "isolate" }}>
      <div style={{ position: "absolute", inset: "0 0 auto 0", height: 700, background: "linear-gradient(180deg, #FBF5FF 0%, #FFFFFF 100%)", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <SubHeader active="events" onNav={onNav} />

        {/* Page header */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "36px 40px 8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-ui)", fontSize: 13, color: "var(--h2h-slate)", marginBottom: 18 }}>
            <a href="#" onClick={(e)=>{e.preventDefault(); onNav?.("home");}} style={{ color: "var(--h2h-slate)", textDecoration: "none" }}>Home</a>
            <Icons.Chevron size={14} weight={2.2} style={{ transform: "rotate(-90deg)" }} />
            <a href="#" onClick={(e)=>{e.preventDefault(); onNav?.("event");}} style={{ color: "var(--h2h-slate)", textDecoration: "none" }}>Hikes & events</a>
            <Icons.Chevron size={14} weight={2.2} style={{ transform: "rotate(-90deg)" }} />
            <span style={{ color: "var(--h2h-ink)" }}>Book your spot</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "end", gap: 32 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Booking · step {step} of 3</div>
              <h1 className="h-display" style={{ fontSize: 64 }}>
                Book your spot on the trail.
              </h1>
              <p className="lede-lg" style={{ marginTop: 14, fontSize: 17, maxWidth: 580 }}>
                Pay per hike, or use your Companion membership. Cancel anytime up to the morning of the walk.
              </p>
            </div>
            <BookingStepper step={step} onStep={setStep} />
          </div>
        </div>

        {/* Main two-column */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 40px 80px", display: "grid", gridTemplateColumns: "1.45fr 1fr", gap: 28, alignItems: "flex-start" }}>
          {/* LEFT — Active step content (all rendered to feel like a real flow) */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {/* Step 1: Date + Hike */}
            <StepCard num={1} title="Pick a date" expanded={step === 1} onToggle={() => setStep(1)} done={step > 1}>
              <HikeCalendar selectedDate={date} onSelectDate={(d) => { setDate(d); /* keep step on 1 */ }} />

              {/* hikes on selected date */}
              <div style={{ marginTop: 24 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "var(--h2h-ink)" }}>
                    Hikes on {fmtDate(date)}
                  </div>
                  <span className="pill pill-violet" style={{ fontSize: 12 }}>{hikesToday.length} options</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {hikesToday.map((h) => {
                    const sel = h._i === hikeIdx;
                    return (
                      <button
                        key={h._i}
                        onClick={() => setHikeIdx(h._i)}
                        style={{
                          display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 18, alignItems: "center",
                          padding: 16, borderRadius: 18,
                          background: sel ? "var(--h2h-violet-tint)" : "#fff",
                          border: sel ? "2px solid var(--h2h-violet)" : "1px solid var(--h2h-line)",
                          textAlign: "left", cursor: "pointer", fontFamily: "inherit",
                          transition: "all 160ms ease",
                        }}
                      >
                        <div style={{ width: 56, height: 56, borderRadius: 14, background: levelBg(h.level), color: levelFg(h.level), display: "grid", placeItems: "center" }}>
                          <Icons.Mountain size={24} weight={2} />
                        </div>
                        <div>
                          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, color: "var(--h2h-ink)", lineHeight: 1.2 }}>{h.title}</div>
                          <div style={{ display: "flex", gap: 12, marginTop: 6, fontFamily: "var(--font-ui)", fontSize: 12.5, color: "var(--h2h-slate)", flexWrap: "wrap" }}>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><Icons.Clock size={12} weight={2.4} /> {h.time} · {h.duration}</span>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><Icons.Pin size={12} weight={2.4} /> {h.where}</span>
                            <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><Icons.Mountain size={12} weight={2.4} /> {h.level}</span>
                          </div>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, color: h.spots === 0 ? "var(--h2h-slate)" : h.spots <= 3 ? "#C4790E" : "var(--h2h-sage-deep)" }}>
                            {h.spots === 0 ? "Full" : `${h.spots} of ${h.capacity} spots left`}
                          </div>
                          <div style={{ fontFamily: "var(--font-ui)", fontSize: 12, color: "var(--h2h-slate)", marginTop: 2 }}>£{h.price} per hiker · or use membership</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div style={{ marginTop: 22, display: "flex", justifyContent: "flex-end" }}>
                <button className="btn btn-primary" onClick={() => setStep(2)}>
                  Continue to group <Icons.ArrowRight size={16} weight={2.2} />
                </button>
              </div>
            </StepCard>

            {/* Step 2: Group + Extras */}
            <StepCard num={2} title="Your group & extras" expanded={step === 2} onToggle={() => setStep(2)} done={step > 2}>
              <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: "var(--h2h-ink)", marginBottom: 12 }}>How are you arriving?</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
                    {groupOptions.map(o => {
                      const sel = o.id === group;
                      return (
                        <button
                          key={o.id}
                          onClick={() => setGroup(o.id)}
                          style={{
                            display: "flex", flexDirection: "column", gap: 10,
                            padding: 18, borderRadius: 18,
                            background: sel ? "var(--h2h-violet-tint)" : "#fff",
                            border: sel ? "2px solid var(--h2h-violet)" : "1px solid var(--h2h-line)",
                            cursor: "pointer", textAlign: "left", fontFamily: "inherit",
                          }}
                        >
                          <span style={{ width: 40, height: 40, borderRadius: 12, background: sel ? "var(--grad-brand)" : "var(--h2h-violet-tint)", color: sel ? "#fff" : "var(--h2h-violet)", display: "grid", placeItems: "center" }}>
                            <o.Ic size={18} weight={2} />
                          </span>
                          <div>
                            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: "var(--h2h-ink)" }}>{o.label}</div>
                            <div style={{ fontFamily: "var(--font-ui)", fontSize: 12.5, color: "var(--h2h-slate)" }}>{o.sub}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: "var(--h2h-ink)", marginBottom: 12 }}>Optional extras</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    <ExtraRow
                      checked={extras.transport}
                      onToggle={() => setExtras({ ...extras, transport: !extras.transport })}
                      Ic={Icons.Globe}
                      title="Minibus from Birmingham city centre"
                      sub="Pick-up 06:30 at Centenary Square · returns 17:00"
                      price="£8"
                    />
                    <ExtraRow
                      checked={extras.lunch}
                      onToggle={() => setExtras({ ...extras, lunch: !extras.lunch })}
                      Ic={Icons.Leaf}
                      title="Packed lunch from a local Birmingham bakery"
                      sub="Sandwich, fruit, brownie, oat flapjack. Vegan option available."
                      price="£6"
                    />
                  </div>
                </div>

                <div>
                  <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 10 }}>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: "var(--h2h-ink)" }}>Donation to keep us walking</div>
                    <div style={{ fontFamily: "var(--font-ui)", fontSize: 12.5, color: "var(--h2h-slate)" }}>100% goes to running our hikes and bursary fund</div>
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {donationOptions.map(v => {
                      const sel = extras.donation === v;
                      return (
                        <button key={v} onClick={() => setExtras({ ...extras, donation: v })} style={{
                          fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14,
                          padding: "10px 18px", borderRadius: 999,
                          background: sel ? "var(--grad-brand)" : "#fff",
                          color: sel ? "#fff" : "var(--h2h-ink)",
                          border: sel ? "none" : "1px solid var(--h2h-line)",
                          cursor: "pointer", boxShadow: sel ? "var(--shadow-glow)" : "none",
                        }}>
                          {v === 0 ? "Not this time" : `£${v}`}
                        </button>
                      );
                    })}
                    <button style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, padding: "10px 18px", borderRadius: 999, background: "#fff", color: "var(--h2h-slate)", border: "1px dashed var(--h2h-line)", cursor: "pointer" }}>
                      Custom amount
                    </button>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 26, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <button className="btn btn-ghost btn-sm" onClick={() => setStep(1)}>
                  <Icons.ArrowLeft size={14} weight={2.2} /> Back
                </button>
                <button className="btn btn-primary" onClick={() => setStep(3)}>
                  Continue to payment <Icons.ArrowRight size={16} weight={2.2} />
                </button>
              </div>
            </StepCard>

            {/* Step 3: Pay */}
            <StepCard num={3} title="Confirm & pay" expanded={step === 3} onToggle={() => setStep(3)}>
              {!confirmed ? (
                <div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                    <Field label="Your name" value="Emily Hart" />
                    <Field label="Email for confirmation" value="emily@hart.co.uk" />
                    <Field label="Mobile (for hike-day texts)" value="+44 7700 900123" />
                    <Field label="Emergency contact" value="Sam Hart · +44 7700 900456" />
                  </div>

                  <div style={{ marginTop: 22, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: "var(--h2h-ink)", marginBottom: 12 }}>
                    Pay {total === 0 ? "with one click" : `£${total}.00`}
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 14 }}>
                    {[
                      { id: "card",   label: "Card",   sub: "Visa · Mastercard · Amex" },
                      { id: "apple",  label: "Apple Pay" },
                      { id: "paypal", label: "PayPal" },
                    ].map((p, i) => (
                      <button key={p.id} style={{
                        padding: 14, borderRadius: 14, border: i === 0 ? "2px solid var(--h2h-violet)" : "1px solid var(--h2h-line)", background: i === 0 ? "var(--h2h-violet-tint)" : "#fff",
                        fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, color: "var(--h2h-ink)", cursor: "pointer", textAlign: "left",
                      }}>
                        {p.label}
                        {p.sub && <div style={{ fontFamily: "var(--font-ui)", fontWeight: 400, fontSize: 11.5, color: "var(--h2h-slate)", marginTop: 4 }}>{p.sub}</div>}
                      </button>
                    ))}
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 10 }}>
                    <Field label="Card number" value="•••• •••• •••• 4242" mono />
                    <Field label="Expiry" value="12 / 28" mono />
                    <Field label="CVC" value="•••" mono />
                  </div>

                  <div style={{ marginTop: 18, fontFamily: "var(--font-ui)", fontSize: 12.5, color: "var(--h2h-slate)", display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <Icons.Check size={14} weight={2.4} style={{ color: "var(--h2h-success)", marginTop: 3 }} />
                    Full refund or reschedule up to the morning of the hike — just let us know.
                  </div>

                  <div style={{ marginTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <button className="btn btn-ghost btn-sm" onClick={() => setStep(2)}>
                      <Icons.ArrowLeft size={14} weight={2.2} /> Back
                    </button>
                    <button className="btn btn-primary" onClick={() => setConfirmed(true)}>
                      {total === 0 ? "Confirm my spot" : `Pay £${total}.00 & book`} <Icons.ArrowRight size={16} weight={2.2} />
                    </button>
                  </div>
                </div>
              ) : (
                <Confirmation hike={hike} group={groupSel} date={date} extras={extras} total={total} onNav={onNav} />
              )}
            </StepCard>
          </div>

          {/* RIGHT — Order summary sticky */}
          <div style={{ position: "sticky", top: 24 }}>
            <OrderSummary hike={hike} date={date} group={groupSel} extras={extras} total={total} useMembership={useMembership} onToggleMembership={() => setUseMembership(!useMembership)} onNav={onNav} />
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- Sub-components ----------
function BookingStepper({ step, onStep }) {
  const labels = ["Date", "Group", "Pay"];
  return (
    <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", gap: 18, alignItems: "center" }}>
      {labels.map((l, i) => {
        const idx = i + 1;
        const active = idx === step;
        const done = idx < step;
        return (
          <li key={l} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button onClick={() => onStep(idx)} style={{
              fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13,
              padding: "8px 14px 8px 8px", borderRadius: 999,
              background: active ? "var(--grad-brand)" : done ? "#fff" : "rgba(15,12,39,0.04)",
              color: active ? "#fff" : done ? "var(--h2h-ink)" : "var(--h2h-slate)",
              border: active ? "none" : "1px solid " + (done ? "var(--h2h-violet)" : "rgba(15,12,39,0.08)"),
              cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8,
              boxShadow: active ? "var(--shadow-glow)" : "none",
            }}>
              <span style={{ width: 22, height: 22, borderRadius: 999, background: active ? "rgba(255,255,255,0.22)" : done ? "var(--h2h-violet)" : "transparent", color: done ? "#fff" : "inherit", display: "grid", placeItems: "center", fontSize: 11 }}>
                {done ? <Icons.Check size={12} weight={3} /> : idx}
              </span>
              {l}
            </button>
            {i < labels.length - 1 && <span style={{ width: 18, height: 1, background: done ? "var(--h2h-violet)" : "var(--h2h-line)" }} />}
          </li>
        );
      })}
    </ol>
  );
}

function StepCard({ num, title, expanded, done, onToggle, children }) {
  return (
    <section style={{
      background: "#fff", borderRadius: 28,
      border: expanded ? "1px solid rgba(123,47,255,0.32)" : "1px solid rgba(15,12,39,0.06)",
      boxShadow: expanded ? "0 18px 50px rgba(15,12,39,0.08)" : "0 4px 12px rgba(15,12,39,0.04)",
      overflow: "hidden",
    }}>
      <button onClick={onToggle} style={{
        width: "100%", textAlign: "left",
        padding: "22px 28px", display: "flex", alignItems: "center", gap: 16,
        background: "transparent", border: "none", cursor: "pointer", fontFamily: "inherit",
      }}>
        <span style={{
          width: 36, height: 36, borderRadius: 999,
          background: done ? "var(--grad-brand)" : expanded ? "var(--h2h-violet-tint)" : "rgba(15,12,39,0.04)",
          color: done ? "#fff" : expanded ? "var(--h2h-violet)" : "var(--h2h-slate)",
          display: "grid", placeItems: "center",
          fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15,
        }}>
          {done ? <Icons.Check size={16} weight={3} /> : num}
        </span>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "var(--h2h-ink)", flex: 1 }}>{title}</span>
        <Icons.Chevron size={20} weight={2.2} style={{ color: "var(--h2h-slate)", transform: expanded ? "rotate(180deg)" : "none", transition: "transform 160ms" }} />
      </button>
      {expanded && <div style={{ padding: "4px 28px 28px" }}>{children}</div>}
    </section>
  );
}

function ExtraRow({ checked, onToggle, Ic, title, sub, price }) {
  return (
    <button onClick={onToggle} style={{
      display: "grid", gridTemplateColumns: "auto 1fr auto auto", gap: 14, alignItems: "center",
      padding: 16, borderRadius: 18,
      background: checked ? "var(--h2h-violet-tint)" : "#fff",
      border: checked ? "2px solid var(--h2h-violet)" : "1px solid var(--h2h-line)",
      cursor: "pointer", textAlign: "left", fontFamily: "inherit",
    }}>
      <span style={{ width: 46, height: 46, borderRadius: 14, background: checked ? "var(--grad-brand)" : "var(--h2h-violet-tint)", color: checked ? "#fff" : "var(--h2h-violet)", display: "grid", placeItems: "center" }}>
        <Ic size={20} weight={2} />
      </span>
      <div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15.5, color: "var(--h2h-ink)" }}>{title}</div>
        <div style={{ fontFamily: "var(--font-ui)", fontSize: 12.5, color: "var(--h2h-slate)", marginTop: 4 }}>{sub}</div>
      </div>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "var(--h2h-ink)" }}>{price}</div>
      <span style={{ width: 24, height: 24, borderRadius: 8, background: checked ? "var(--h2h-violet)" : "#fff", border: checked ? "none" : "1.5px solid var(--h2h-line)", color: "#fff", display: "grid", placeItems: "center" }}>
        {checked && <Icons.Check size={14} weight={3} />}
      </span>
    </button>
  );
}

function Field({ label, value, mono }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <span style={{ fontFamily: "var(--font-ui)", fontSize: 12, fontWeight: 500, color: "var(--h2h-slate)", letterSpacing: 0.02 }}>{label}</span>
      <input defaultValue={value} style={{
        padding: "14px 16px", borderRadius: 14,
        border: "1px solid var(--h2h-line)", outline: "none",
        fontFamily: mono ? "var(--font-mono)" : "var(--font-body)",
        fontSize: 15, color: "var(--h2h-ink)", background: "#fff",
      }} />
    </label>
  );
}

function OrderSummary({ hike, date, group, extras, total, useMembership, onToggleMembership, onNav }) {
  return (
    <aside style={{ background: "#fff", borderRadius: 28, border: "1px solid rgba(15,12,39,0.06)", boxShadow: "0 8px 24px rgba(15,12,39,0.06)", overflow: "hidden" }}>
      {/* hero image */}
      <div style={{ position: "relative", aspectRatio: "16/10" }}>
        <img src="assets/photo-mountain-group.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(15,12,39,0) 35%, rgba(15,12,39,0.78) 100%)" }} />
        <div style={{ position: "absolute", top: 16, left: 16 }}>
          <span className="pill pill-light"><Icons.Pin size={12} weight={2.4} /> {hike?.where}</span>
        </div>
        <div style={{ position: "absolute", bottom: 16, left: 16, right: 16, color: "#fff" }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 24, lineHeight: 1.15, letterSpacing: "-0.01em" }}>{hike?.title}</div>
          <div style={{ display: "flex", gap: 10, marginTop: 6, fontSize: 12.5, opacity: 0.92 }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><Icons.Calendar size={12} weight={2.4} /> {fmtDate(date)}</span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><Icons.Clock size={12} weight={2.4} /> {hike?.time} · {hike?.duration}</span>
          </div>
        </div>
      </div>

      <div style={{ padding: 22 }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, color: "var(--h2h-slate)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>Your order</div>

        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
          <SumRow label={`Hike · ${group?.label || "1 hiker"}`} sub={useMembership ? "Covered by Companion membership" : `${groupSel?.people || 1} × £${hike?.price || 0}`} price={useMembership ? "Included" : `£${(hike?.price || 0) * (groupSel?.people || 1)}`} />
          {extras.transport && <SumRow label="Minibus from Birmingham" sub="06:30 pick-up · return 17:00" price="£8" />}
          {extras.lunch && <SumRow label="Packed lunch" sub="From our local bakery" price="£6" />}
          {extras.donation > 0 && <SumRow label="Donation" sub="Supports our bursary fund" price={`£${extras.donation}`} accent />}
        </ul>

        <hr style={{ border: "none", borderTop: "1px dashed var(--h2h-line)", margin: "18px 0" }} />

        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "var(--h2h-ink)" }}>Total today</span>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 30, color: "var(--h2h-ink)", letterSpacing: "-0.02em" }}>
            £{total}.00
          </span>
        </div>
        <div style={{ fontFamily: "var(--font-ui)", fontSize: 12, color: "var(--h2h-slate)", marginTop: 4 }}>
          Hike fee covers your hike-lead, kit, insurance and bursary fund.
        </div>

        <div style={{ marginTop: 18, padding: 14, borderRadius: 16, background: useMembership ? "var(--h2h-ink)" : "var(--h2h-violet-tint)", color: useMembership ? "#fff" : "var(--h2h-ink)", display: "flex", alignItems: "center", gap: 12, position: "relative", overflow: "hidden" }}>
          {useMembership && <div style={{ position: "absolute", inset: 0, background: "radial-gradient(120% 90% at 100% 100%, rgba(255,61,200,0.34), transparent 60%)", pointerEvents: "none" }} />}
          <span style={{ width: 38, height: 38, borderRadius: 999, background: useMembership ? "rgba(255,255,255,0.16)" : "var(--grad-brand)", color: "#fff", display: "grid", placeItems: "center", flexShrink: 0, position: "relative" }}>
            <Icons.Sparkle size={16} weight={2.2} />
          </span>
          <div style={{ flex: 1, position: "relative" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13.5 }}>
              {useMembership ? "Companion membership applied" : "Member? Apply your subscription"}
            </div>
            <div style={{ fontFamily: "var(--font-ui)", fontSize: 12, opacity: 0.78, marginTop: 2 }}>
              {useMembership ? "Hike covered · only extras charged." : (
                <a href="#" onClick={(e)=>{e.preventDefault(); onNav?.("membership");}} style={{ color: "inherit", textDecoration: "underline" }}>See membership</a>
              )}
            </div>
          </div>
          <label style={{ position: "relative", display: "inline-flex", alignItems: "center", cursor: "pointer" }}>
            <input type="checkbox" checked={!!useMembership} onChange={onToggleMembership} style={{ position: "absolute", opacity: 0 }} />
            <span style={{ width: 38, height: 22, borderRadius: 999, background: useMembership ? "var(--h2h-success)" : "rgba(15,12,39,0.18)", display: "inline-block", position: "relative", transition: "background 160ms" }}>
              <span style={{ position: "absolute", top: 2, left: useMembership ? 18 : 2, width: 18, height: 18, borderRadius: 999, background: "#fff", transition: "left 160ms" }} />
            </span>
          </label>
        </div>
      </div>
    </aside>
  );
}

function SumRow({ label, sub, price, accent }) {
  return (
    <li style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 14 }}>
      <div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14.5, color: "var(--h2h-ink)" }}>{label}</div>
        {sub && <div style={{ fontFamily: "var(--font-ui)", fontSize: 12, color: "var(--h2h-slate)", marginTop: 2 }}>{sub}</div>}
      </div>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14.5, color: accent ? "var(--h2h-violet)" : "var(--h2h-ink)" }}>{price}</div>
    </li>
  );
}

function Confirmation({ hike, group, date, total, onNav }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18, padding: "12px 0 12px", textAlign: "center" }}>
      <div style={{ width: 80, height: 80, borderRadius: 999, background: "var(--grad-brand)", color: "#fff", display: "grid", placeItems: "center", boxShadow: "0 16px 40px rgba(123,47,255,0.34)" }}>
        <Icons.Check size={38} weight={3} />
      </div>
      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 32, color: "var(--h2h-ink)", margin: 0, letterSpacing: "-0.02em" }}>You're on the trail.</h3>
      <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--h2h-slate)", margin: 0, maxWidth: 460 }}>
        We've sent a confirmation to your email and we'll text you a kit checklist 48 hours before the hike. Can't wait to walk with you.
      </p>
      <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
        <a className="btn btn-primary" href="#" onClick={(e)=>{e.preventDefault(); onNav?.("event");}}>See hike details <Icons.ArrowRight size={15} weight={2.2} /></a>
        <a className="btn btn-secondary" href="#" onClick={(e)=>{e.preventDefault(); onNav?.("home");}}>Back to home</a>
      </div>
    </div>
  );
}

// ---------- utilities ----------
function fmtDate(iso) {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00Z");
  return d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "long", timeZone: "UTC" });
}
function levelBg(l) { return { Easy: "#E7F1E5", Gentle: "#E7F1E5", Moderate: "#FFF4C8", Hard: "#FFE0E6" }[l] || "var(--h2h-violet-tint)"; }
function levelFg(l) { return { Easy: "#3F5E3F", Gentle: "#3F5E3F", Moderate: "#8A6E14", Hard: "#A04055" }[l] || "var(--h2h-violet)"; }

window.BookingPage = BookingPage;
