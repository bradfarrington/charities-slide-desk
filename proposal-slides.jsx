// Digital Craft — multi-charity proposal deck.
// Aimed at recovery / mental-health / gambling-education / drugs & alcohol
// charities. Three real case studies: Against the Odds (CRM + site),
// GamLEARN (CRM + portal + site), Hike2Heal (website in progress).

const DESKTOP_W = 1440;
const DESKTOP_H = 900;
const MOBILE_W  = 390;
const MOBILE_H  = 760;

// Lets heavy embeds gate themselves to the active slide so we don't fetch
// every charity's design at once.
const CurrentSlideContext = React.createContext(0);

/* ---------- DC icon set (1.5px stroke per brand bible) ---------- */
const DCSvg = ({ size = 20, children, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    style={style} aria-hidden="true">{children}</svg>
);
const DC_ICONS = {
  map:       <><path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3z"/><path d="M9 3v15M15 6v15"/></>,
  layers:    <><path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5M3 18l9 5 9-5"/></>,
  workflow:  <><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M10 6.5h4M17.5 10v4M14 17.5h-4M6.5 14v-4"/></>,
  database:  <><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6"/></>,
  send:      <><path d="m22 2-11 11M22 2l-7 20-4-9-9-4z"/></>,
  bolt:      <><path d="m13 2-9 12h7l-1 8 9-12h-7z"/></>,
  gauge:     <><circle cx="12" cy="14" r="9"/><path d="m12 14 4-4"/><path d="M12 2v3M3.5 7.5l2 2M22 14h-3M2 14h3M20.5 7.5l-2 2"/></>,
  shield:    <><path d="M12 22s9-4 9-12V5l-9-3-9 3v5c0 8 9 12 9 12z"/></>,
  users:     <><circle cx="9" cy="8" r="4"/><path d="M3 21c0-3 3-6 6-6s6 3 6 6"/><circle cx="17" cy="9" r="3"/><path d="M15 21c0-2 2-4 4-4s4 2 4 4"/></>,
  calendar:  <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></>,
  globe:     <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></>,
  heart:     <><path d="M12 21s-7-4.5-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.5-7 11-7 11Z"/></>,
  chart:     <><path d="M3 3v18h18"/><path d="m7 14 3-3 4 4 5-6"/></>,
  phone:     <><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/></>,
  graduation:<><path d="M21 9 12 4 3 9l9 5 9-5z"/><path d="M6 11v5c2 1.5 4 2.5 6 2.5s4-1 6-2.5v-5"/></>,
  fileText:  <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 12h8M8 16h8M8 8h2"/></>,
  inbox:     <><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5 4h14l3 8v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7z"/></>,
  arrowRight:<><path d="M5 12h14M13 5l7 7-7 7"/></>,
  external:  <><path d="M7 17 17 7M8 7h9v9"/></>,
};
const DCIcon = ({ name, size = 20, style }) => (
  <DCSvg size={size} style={style}>{DC_ICONS[name] || DC_ICONS.arrowRight}</DCSvg>
);

/* ---------- Mockup chrome ---------- */
// Observes its own rendered width so it scales correctly inside clusters that
// override the default phone-mock width via CSS (e.g. the 220/240px cluster).
const PhoneMock = ({ children, lg }) => {
  const ref = React.useRef(null);
  const [scale, setScale] = React.useState((300 - 14) / MOBILE_W);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const w = el.offsetWidth;
      if (w > 14) setScale((w - 14) / MOBILE_W);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const h = MOBILE_H * scale;
  return (
    <div ref={ref} className={`phone-mock${lg ? ' phone-mock--lg' : ''}`}>
      <div className="phone-mock__status" />
      <div className="phone-mock__screen" style={{ height: h }}>
        <div className="phone-mock__inner" style={{ transform: `scale(${scale})`, height: MOBILE_H }}>
          {children}
        </div>
      </div>
    </div>
  );
};

/* ---------- Phone with a static screenshot (raw PNG, not a scaled iframe) ---------- */
const PhoneScreenshot = ({ src, lg }) => (
  <div className={`phone-mock${lg ? ' phone-mock--lg' : ''}`}>
    <div className="phone-mock__status" />
    <div className="phone-mock__screen phone-mock__screen--shot">
      <img src={src} alt="" className="phone-mock__shot" />
    </div>
  </div>
);

/* ---------- Cluster of three phones showing the ATO mobile app ---------- */
const ATOMobileCluster = () => (
  <div className="phone-cluster">
    <PhoneScreenshot src="IPHONE%20SCREENSHOTS/IMG_4816.PNG" />
    <PhoneScreenshot src="IPHONE%20SCREENSHOTS/IMG_4830.PNG" lg />
    <PhoneScreenshot src="IPHONE%20SCREENSHOTS/IMG_4840.PNG" />
  </div>
);

/* ---------- Live website embed (iframe at desktop dimensions, scaled by DesktopMock) ---------- */
const WebsiteEmbed = ({ src, slideIdx }) => {
  const current = React.useContext(CurrentSlideContext);
  if (slideIdx != null && slideIdx !== current) {
    return <div style={{ width: DESKTOP_W, height: DESKTOP_H, background: '#F5F5F5' }} aria-hidden="true" />;
  }
  return (
    <iframe
      src={src}
      title={src}
      loading="lazy"
      style={{ width: DESKTOP_W, height: DESKTOP_H, border: 0, display: 'block', background: '#fff' }}
    />
  );
};

const MobileFrameEmbed = ({ src, fill = false, scrollable = false, slideIdx }) => {
  const current = React.useContext(CurrentSlideContext);
  const style = {
    width: fill ? '100%' : MOBILE_W,
    height: fill ? '100%' : MOBILE_H,
    border: 0, display: 'block', background: '#fff',
  };
  if (slideIdx != null && slideIdx !== current) {
    return <div style={{ ...style, background: '#F5F5F5' }} aria-hidden="true" />;
  }
  return <iframe src={src} title={src} loading="lazy" scrolling={scrollable ? 'yes' : 'no'} style={style} />;
};

const DesktopMock = ({ children }) => {
  const [scale, setScale] = React.useState(0.5);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current?.parentElement;
    if (!el) return;
    const update = () => setScale(el.offsetWidth / DESKTOP_W);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return (
    <div ref={ref} className="desktop-mock" style={{ height: 28 + DESKTOP_H * scale }}>
      <div className="desktop-mock__inner" style={{ transform: `scale(${scale})` }}>{children}</div>
    </div>
  );
};

/* ---------- Slide footer ---------- */
const SlideFooter = ({ num, label }) => (
  <div className="slide__footer">
    <span>{num}</span>
    <span style={{ opacity: 0.5 }}>/</span>
    <span>{label}</span>
    <div className="slide__footer-spacer" />
    <div className="slide__footer-mark">
      <img src="assets/dc-mark-black.png" alt="" className="dc-foot-mark dc-foot-mark--light" />
      <img src="assets/dc-mark-white.png" alt="" className="dc-foot-mark dc-foot-mark--dark" style={{ display: 'none' }} />
      <span>digital craft</span>
    </div>
  </div>
);

/* ---------- View-demo button (only enabled for H2H, which has live components) ---------- */
const ViewSiteButton = ({ onClick, label = 'View live demo' }) => (
  <button className="view-site-btn" onClick={onClick}>
    <span className="view-site-btn__dot" />
    {label}
    <DCIcon name="external" size={14} />
  </button>
);

/* ---------- Case header (logo + name + sub + accent bar) ---------- */
const CaseHeader = ({ charity, name, sub, logo, inProgress }) => (
  <div className={`case-header case--${charity}`}>
    <span className="case-header__bar" />
    <div className="case-header__logo">
      <img src={logo} alt={name} />
    </div>
    <div className="case-header__meta">
      <div className="case-header__name">{name}</div>
      <div className="case-header__sub">{sub}</div>
    </div>
    {inProgress && (
      <span className="in-progress-badge" style={{ marginLeft: 12 }}>
        <span className="in-progress-badge__dot" />
        In progress
      </span>
    )}
  </div>
);

/* ---------- Reusable carousel slide ---------- */
// `extra` (the testimonial block) is mounted at the bottom of the right column,
// not in slide__left — keeps the left column compact so the case header always
// stays visible above the fold.
const CarouselSlide = ({ num, footerLabel, eyebrow, title, lede, callouts, screenData, dark, header, extra }) => {
  const [screen, setScreen] = React.useState(0);

  const Tabs = () => (
    <div className="screen-tabs">
      {screenData.map((s, i) => (
        <button key={i} className={`screen-tab ${i === screen ? 'screen-tab--active' : ''}`}
                onClick={() => setScreen(i)}>{s.label}</button>
      ))}
    </div>
  );

  return (
    <div className={`slide slide--case ${dark ? 'slide--dark' : ''}`}>
      <div className="mobile-only-tabs" style={{ position: 'absolute', top: 24, left: 0, width: '100%', zIndex: 50 }}>
        <Tabs />
      </div>
      <div className="slide__left case__left">
        {header && <div className="enter e-up">{header}</div>}
        {eyebrow && <div className="dc-eyebrow enter e-up d1" style={{ marginBottom: 12, marginTop: 8 }}>{eyebrow}</div>}
        {title && <h2 className="dc-h2 case__title enter e-up d2" dangerouslySetInnerHTML={{ __html: title }} />}
        {lede && <p className="dc-lede case__lede enter e-up d3">{lede}</p>}
        {callouts && (
          <div className="case__callouts enter e-up d4">
            {callouts.map(([t, d], i) => (
              <div key={i} className="callout">
                <div className="callout__title">{t}</div>
                <div className="callout__body">{d}</div>
              </div>
            ))}
          </div>
        )}
        <div className="enter e-up d5 desktop-only-tabs case__tabs">
          <Tabs />
        </div>
      </div>
      <div className="slide__right case__right enter e-scale d3">
        <div className="case__mock-wrap crm-mock-wrapper" data-screen-idx={screen}>
          {screenData[screen].mobile ? (
            <div key={screen} className="screen-fade case__phone-cluster">
              {screenData[screen].el}
            </div>
          ) : (
            <DesktopMock>
              <div key={screen} className="screen-fade" style={{ width: '100%', height: '100%' }}>
                {screenData[screen].el}
              </div>
            </DesktopMock>
          )}
        </div>
        {extra && <div className="case__extra enter e-up d4">{extra}</div>}
      </div>
      <SlideFooter num={num} label={footerLabel} />
    </div>
  );
};

/* ---------- Per-charity mock placeholders (Phase 1 — to be replaced with real designs in Phase 2/3/4) ---------- */
// These render simple representational frames so the deck shell is presentable
// before the real charity components are wired in.

const MockShell = ({ accent, logo, sectionName, screenName, body }) => (
  <div style={{
    width: '100%', height: '100%', background: '#fff',
    display: 'grid', gridTemplateColumns: '240px 1fr', gridTemplateRows: '64px 1fr',
    fontFamily: 'var(--dc-font-body)',
  }}>
    {/* Sidebar */}
    <div style={{
      gridRow: '1 / span 2', borderRight: '1px solid #EAEAEA',
      padding: 24, display: 'flex', flexDirection: 'column', gap: 20,
    }}>
      <img src={logo} alt="" style={{ height: 36, width: 'auto', objectFit: 'contain', alignSelf: 'flex-start' }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 16 }}>
        {['Dashboard', sectionName, 'Calendar', 'Tasks', 'Reports', 'Settings'].map((s, i) => (
          <div key={s} style={{
            padding: '10px 12px', borderRadius: 8, fontSize: 13,
            background: i === 1 ? accent : 'transparent',
            color: i === 1 ? '#fff' : '#3D3D3D',
            fontWeight: i === 1 ? 500 : 400,
          }}>{s}</div>
        ))}
      </div>
    </div>
    {/* Topbar */}
    <div style={{
      borderBottom: '1px solid #EAEAEA', padding: '0 32px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <div style={{ fontFamily: 'var(--dc-font-display)', fontSize: 20, color: '#0A0A0A', letterSpacing: '-0.015em' }}>{screenName}</div>
      <div style={{ display: 'flex', gap: 12 }}>
        <div style={{ width: 36, height: 36, borderRadius: 8, border: '1px solid #EAEAEA' }} />
        <div style={{ width: 36, height: 36, borderRadius: 999, background: accent }} />
      </div>
    </div>
    {/* Body */}
    <div style={{ padding: 32, background: '#FAFBFC', overflow: 'hidden' }}>{body}</div>
  </div>
);

const MockStatTiles = ({ accent }) => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
    {[['Active cases', '184'], ['New this week', '12'], ['Upcoming events', '8'], ['Outcomes logged', '326']].map(([l, v], i) => (
      <div key={l} style={{ background: '#fff', border: '1px solid #EAEAEA', borderRadius: 12, padding: 20 }}>
        <div style={{ fontSize: 12, color: '#6B6B6B', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: 8 }}>{l}</div>
        <div style={{ fontFamily: 'var(--dc-font-display)', fontSize: 28, color: i === 0 ? accent : '#0A0A0A', letterSpacing: '-0.025em' }}>{v}</div>
      </div>
    ))}
  </div>
);

const MockTable = ({ accent, rows }) => (
  <div style={{ background: '#fff', border: '1px solid #EAEAEA', borderRadius: 12, overflow: 'hidden' }}>
    <div style={{ padding: '16px 24px', borderBottom: '1px solid #EAEAEA', display: 'flex', gap: 12 }}>
      <div style={{ flex: 1, fontFamily: 'var(--dc-font-display)', fontSize: 16, color: '#0A0A0A' }}>Recent activity</div>
      <div style={{ padding: '6px 12px', borderRadius: 6, background: accent, color: '#fff', fontSize: 12, fontWeight: 500 }}>+ Add new</div>
    </div>
    {rows.map((r, i) => (
      <div key={i} style={{ display: 'grid', gridTemplateColumns: '40px 1fr 1fr 100px 80px', alignItems: 'center', gap: 16, padding: '14px 24px', borderTop: i === 0 ? 'none' : '1px solid #F5F5F5' }}>
        <div style={{ width: 32, height: 32, borderRadius: 999, background: i % 2 ? '#F5F5F5' : accent + '20' }} />
        <div style={{ fontSize: 14, color: '#0A0A0A' }}>{r[0]}</div>
        <div style={{ fontSize: 13, color: '#6B6B6B' }}>{r[1]}</div>
        <div style={{ fontSize: 12, color: accent, fontWeight: 500 }}>{r[2]}</div>
        <div style={{ fontSize: 12, color: '#A3A3A3' }}>{r[3]}</div>
      </div>
    ))}
  </div>
);

// ATO — uses the real-look components from ato-deck/ato-mocks.jsx (loaded via index.html).
// ATODashboardScreen / ATORecoverySeekersScreen / ATOCalendarScreen are exposed on window.*.
const ATOMockDashboard = () => (
  typeof ATODashboardScreen === 'function' ? <ATODashboardScreen /> : <div style={{ padding: 40 }}>Dashboard</div>
);
const ATOMockSeekers = () => (
  typeof ATORecoverySeekersScreen === 'function' ? <ATORecoverySeekersScreen /> : <div style={{ padding: 40 }}>Recovery Clients</div>
);
const ATOMockCalendar = () => (
  typeof ATOCalendarScreen === 'function' ? <ATOCalendarScreen /> : <div style={{ padding: 40 }}>Calendar</div>
);

// GamLearn — uses the real components from gamlearn-deck/ (loaded via index.html).
// CRMFrame, TodayScreen, CaseHeader (from crm-shell), TriageDashboard, PeopleScreen, PortalHome
// are all exposed on window.* by those scripts.
const GLMockDashboard = () => (
  typeof CRMFrame === 'function' && typeof TodayScreen === 'function'
    ? <CRMFrame active="today" crumbs={["Today"]}><TodayScreen /></CRMFrame>
    : <div style={{ padding: 40 }}>Today</div>
);
const GLMockTriage = () => (
  typeof CRMFrame === 'function' && typeof TriageDashboard === 'function'
    ? <CRMFrame active="cases" crumbs={["Cases","Sarah Okafor"]}>
        <CaseHeader tab="triage" />
        <TriageDashboard />
      </CRMFrame>
    : <div style={{ padding: 40 }}>Triage</div>
);
const GLMockPeople = () => (
  typeof CRMFrame === 'function' && typeof PeopleScreen === 'function'
    ? <CRMFrame active="people" crumbs={["People"]}><PeopleScreen /></CRMFrame>
    : <div style={{ padding: 40 }}>People</div>
);
const GLMockPortal = () => (
  typeof PortalHome === 'function' ? <PortalHome /> : <div style={{ padding: 40 }}>Portal Home</div>
);
const GLMockPortalJourney = () => (
  typeof PortalJourney === 'function' ? <PortalJourney /> : <div style={{ padding: 40 }}>Journey</div>
);
const GLMockPortalMessages = () => (
  typeof PortalMessages === 'function' ? <PortalMessages /> : <div style={{ padding: 40 }}>Messages</div>
);
const GLMockPortalDocs = () => (
  typeof PortalDocs === 'function' ? <PortalDocs /> : <div style={{ padding: 40 }}>Documents</div>
);
const GLMockPortalSupport = () => (
  typeof PortalSupport === 'function' ? <PortalSupport /> : <div style={{ padding: 40 }}>Support</div>
);

/* ---------- Cluster of three phones showing the GamLearn member portal ---------- */
const GLMobileCluster = () => (
  <div className="phone-cluster">
    <PhoneMock><GLMockPortalJourney /></PhoneMock>
    <PhoneMock lg><GLMockPortal /></PhoneMock>
    <PhoneMock><GLMockPortalMessages /></PhoneMock>
  </div>
);

// Hike2Heal mocks — use the real components already loaded from the H2H jsx files.
// The H2H site components are: DesktopHomepage / MobileHomepage (composite) plus the
// section components used by the existing proposal-slides scenes.
const H2HHomeHero = () => (
  <div style={{ background: 'linear-gradient(180deg, #FBF5FF 0%, #FFFFFF 100%)', minHeight: DESKTOP_H }}>
    {typeof DesktopHeader === 'function' && <DesktopHeader />}
    {typeof DesktopHero === 'function' && <DesktopHero />}
  </div>
);
const H2HHomeAbout = () => (
  <div style={{ background: '#FFFFFF', minHeight: DESKTOP_H, paddingBottom: 24 }}>
    {typeof SubHeader === 'function' && <SubHeader active="home" />}
    {typeof DesktopAbout === 'function' && <DesktopAbout />}
    {typeof DesktopMission === 'function' && <DesktopMission />}
  </div>
);
const H2HHomeJourney = () => (
  <div style={{ background: '#FFFFFF', minHeight: DESKTOP_H }}>
    {typeof SubHeader === 'function' && <SubHeader active="home" />}
    {typeof DesktopJourney === 'function' && <DesktopJourney />}
    {typeof DesktopAdventures === 'function' && <DesktopAdventures />}
  </div>
);
const H2HEventPage = () => (
  typeof EventPage === 'function' ? <EventPage /> : <div style={{ padding: 40 }}>Event page</div>
);
const H2HBookingPage = () => (
  typeof BookingPage === 'function' ? <BookingPage /> : <div style={{ padding: 40 }}>Booking page</div>
);
const H2HMembershipPage = () => (
  typeof MembershipPage === 'function' ? <MembershipPage /> : <div style={{ padding: 40 }}>Membership page</div>
);
const H2HMobileHome = () => (
  typeof MobileHomepage === 'function' ? <MobileHomepage /> : <div style={{ padding: 40 }}>Mobile homepage</div>
);

/* ---------- Live demo overlay (H2H only — the only charity with running components) ---------- */
const SiteOverlay = ({ mode, onChangeMode, onClose }) => {
  const [mobileScreen, setMobileScreen] = React.useState('home');
  const MOBILE_SCREENS = [
    { key: 'home', label: 'Homepage', render: () => <H2HMobileHome /> },
    { key: 'event', label: 'Event detail', render: () => <MobileFrameEmbed src="mobile-screens/event-detail.html" fill scrollable /> },
    { key: 'booking', label: 'Booking', render: () => <MobileFrameEmbed src="mobile-screens/booking.html" fill scrollable /> },
    { key: 'membership', label: 'Membership', render: () => <MobileFrameEmbed src="mobile-screens/membership.html" fill scrollable /> },
  ];

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    const block = (e) => { if (['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)) e.stopPropagation(); };
    document.addEventListener('keydown', block, true);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('keydown', block, true);
    };
  }, [onClose]);

  const activeScreen = MOBILE_SCREENS.find(s => s.key === mobileScreen) || MOBILE_SCREENS[0];

  return (
    <div className="site-overlay">
      <div className="site-overlay__bar">
        <div className="site-overlay__title">
          <img src="assets/logo-mark.png" alt="" />
          <div>
            <div className="site-overlay__title-main">Hike2Heal</div>
            <div className="site-overlay__title-sub">In progress · interactive demo</div>
          </div>
        </div>
        <div className="site-overlay__toggle">
          <button className={mode === 'desktop' ? 'is-active' : ''} onClick={() => onChangeMode('desktop')}>Desktop</button>
          <button className={mode === 'mobile' ? 'is-active' : ''} onClick={() => onChangeMode('mobile')}>Mobile</button>
        </div>
        <button className="site-overlay__close" onClick={onClose} aria-label="Close demo">
          <DCIcon name="external" size={14} style={{ transform: 'rotate(180deg)' }} />
        </button>
      </div>
      {mode === 'mobile' && (
        <div className="site-overlay__screen-nav">
          {MOBILE_SCREENS.map(s => (
            <button key={s.key}
              className={`site-overlay__screen-nav-btn ${s.key === mobileScreen ? 'is-active' : ''}`}
              onClick={() => setMobileScreen(s.key)}>{s.label}</button>
          ))}
        </div>
      )}
      <div className="site-overlay__stage">
        {mode === 'desktop' ? (
          <div className="site-overlay__desktop">
            {typeof DesktopHomepage === 'function' ? <DesktopHomepage /> : <div>Loading…</div>}
          </div>
        ) : (
          <div className="site-overlay__phone">
            <div className="site-overlay__phone-frame">
              <div className="site-overlay__phone-screen" key={activeScreen.key}>
                {activeScreen.render()}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

/* ---------- MAIN APP ---------- */
const ProposalApp = () => {
  const [current, setCurrent] = React.useState(0);
  const [mobileStep, setMobileStep] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  const [siteView, setSiteView] = React.useState(null);
  const [processStep, setProcessStep] = React.useState(0);
  const totalSlides = 9;
  const openSite = (mode = 'desktop') => setSiteView(mode);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Single-step slides (no second mobile substep) — slides that are content-only
  const SINGLE_STEP = new Set([0, 1, 2, 6, 7, 8]);

  const next = () => {
    const cur = current;
    const isSingleStep = SINGLE_STEP.has(cur);
    if (isMobile && mobileStep === 0 && !isSingleStep) setMobileStep(1);
    else if (cur < totalSlides - 1) { setCurrent(cur + 1); setMobileStep(0); }
  };
  const prev = () => {
    if (isMobile && mobileStep === 1) setMobileStep(0);
    else if (current > 0) {
      const prevIdx = current - 1;
      const prevSingle = SINGLE_STEP.has(prevIdx);
      setCurrent(prevIdx);
      setMobileStep(isMobile && !prevSingle ? 1 : 0);
    }
  };
  const go = (n) => { setCurrent(Math.max(0, Math.min(totalSlides - 1, n))); setMobileStep(0); };

  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); next(); }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp')   { e.preventDefault(); prev(); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [current, isMobile, mobileStep]);

  React.useEffect(() => {
    const deck = document.querySelector('.deck');
    if (!deck) return;
    deck.querySelectorAll('.slide-wrap').forEach((w, i) => {
      if (i === current) {
        w.querySelectorAll('.enter').forEach(el => el.classList.remove('on'));
        requestAnimationFrame(() => requestAnimationFrame(() => {
          w.querySelectorAll('.enter').forEach(el => el.classList.add('on'));
        }));
      }
    });
  }, [current, mobileStep]);

  const Wrap = ({ idx, children }) => (
    <div className={`slide-wrap ${idx === current ? ('active ' + (mobileStep === 0 ? 'step-text' : 'step-image')) : ''}`}
      style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: idx === current ? 1 : 0,
        pointerEvents: idx === current ? 'auto' : 'none',
        zIndex: idx === current ? 10 : 1,
        transition: 'opacity 0.5s var(--ease-out)',
      }}>{children}</div>
  );

  const Lockup = ({ dark }) => (
    <div className="dc-lockup">
      <img src={dark ? "assets/dc-wordmark-white.png" : "assets/dc-wordmark-black.png"} alt="Digital Craft" />
    </div>
  );

  return (
    <CurrentSlideContext.Provider value={current}>
    <React.Fragment>
      <div className="deck">

        {/* 0 — COVER */}
        <Wrap idx={0}>
          <div className="slide slide--grid">
            <div className="slide__left" style={{ flex: '0 0 52%' }}>
              <div className="enter e-fade"><Lockup /></div>
              <h1 className="dc-h1 enter e-up d2">
                Custom systems for the <em>work that matters</em>.
              </h1>
              <p className="dc-lede enter e-up d3">
                You run on heart, late nights, and a team that won't let people down. Your tools shouldn't fight you. We build bespoke websites, CRMs, and apps that replace the spreadsheets, sticky notes, and manual handoffs — so your people can do the work only they can do.
              </p>
              <div className="enter e-up d4" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a className="dc-btn dc-btn-primary" href="mailto:brad@thedigicraft.co.uk?subject=Charity%20proposal%20%E2%80%94%20let%27s%20talk">
                  Book a system audit <span className="dc-arrow" />
                </a>
                <button className="dc-btn dc-btn-secondary" onClick={() => go(3)}>See recent work</button>
              </div>
              <div className="trust-strip enter e-up d5">
                <div className="trust-strip__label">Currently working with</div>
                <div className="trust-strip__logos">
                  <img src="assets/ato-logo.png" alt="Against the Odds" className="trust-strip__logo trust-strip__logo--ato" />
                  <img src="assets/gamlearn-logo.png" alt="GamLEARN" className="trust-strip__logo trust-strip__logo--gamlearn" />
                  <img src="assets/DARK.png" alt="Hike2Heal" className="trust-strip__logo trust-strip__logo--h2h" />
                </div>
              </div>
            </div>
            <div className="slide__right cover__mocks enter e-scale d3">
              <div className="cover__stage">
                <div className="cover__mock cover__mock--back">
                  <DesktopMock><ATOMockDashboard /></DesktopMock>
                </div>
                <div className="cover__mock cover__mock--front">
                  <DesktopMock><GLMockDashboard /></DesktopMock>
                </div>
                <div className="cover__phone cover__phone--trail">
                  <PhoneMock><GLMockPortal /></PhoneMock>
                </div>
                <div className="cover__phone cover__phone--lead">
                  <PhoneScreenshot src="IPHONE%20SCREENSHOTS/IMG_4816.PNG" lg />
                </div>
              </div>
            </div>
            <SlideFooter num="00" label="COVER" />
          </div>
        </Wrap>

        {/* 1 — THE OPENING */}
        <Wrap idx={1}>
          <div className="slide slide--dark slide--grid">
            <div className="slide__left" style={{ flex: '0 0 50%' }}>
              <div className="dc-eyebrow enter e-up">Where we come in</div>
              <h2 className="dc-h2 enter e-up d1">
                Your charity runs on heart. Your tools should <em>keep up</em>.
              </h2>
              <p className="dc-lede enter e-up d2">
                Most recovery and mental-health charities run on generic CRMs designed for B2B sales, donor lists in spreadsheets, and reminders sent by hand. Caseworkers spend hours on admin every week. The people you serve get no visibility, no portal, no self-service. Funders ask for outcomes you can't easily report. We replace all of that with one system, built around how your team actually works.
              </p>
              <div className="feature-grid feature-grid--2 enter e-up d3" style={{ marginTop: 16 }}>
                {[
                  ['Scattered records',     'Salesforce, spreadsheets, paper, email. No one source of truth, no live risk picture.'],
                  ['Manual everything',     'Reminders, follow-ups, intake forms, evidence chasing — sent by hand, every time.'],
                  ['No user voice',         'The people you support have no portal, no self-service, no way to see their journey.'],
                  ['Invisible outcomes',    'Funders want numbers. You have paper notes and 14 dashboards that disagree.'],
                ].map(([t, d]) => (
                  <div key={t} className="feature-card">
                    <div className="feature-card__title">{t}</div>
                    <div className="feature-card__desc">{d}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="slide__right enter e-fade d3">
              <div style={{ position: 'absolute', right: 0, top: '38%', transform: 'translateY(-50%) rotate(-2deg)', width: '100%', maxWidth: 820, opacity: 0.95 }}>
                <DesktopMock><ATOMockDashboard /></DesktopMock>
              </div>
              <div style={{ position: 'absolute', right: -90, top: '68%', transform: 'translateY(-50%) rotate(3deg)', width: '100%', maxWidth: 820, opacity: 0.88 }}>
                <DesktopMock><GLMockTriage /></DesktopMock>
              </div>
            </div>
            <SlideFooter num="01" label="THE PROBLEM" />
          </div>
        </Wrap>

        {/* 2 — WHAT WE BUILD */}
        <Wrap idx={2}>
          <div className="slide slide--builds">
            <div className="slide__center" style={{ maxWidth: 1180 }}>
              <div className="dc-eyebrow enter e-up">What we build</div>
              <h2 className="dc-h2 enter e-up d1" style={{ marginBottom: 18, textAlign: 'center', maxWidth: 980, fontSize: 'clamp(28px, 3vw, 44px)' }}>
                Built around your charity —<br /><em>not someone else's product.</em>
              </h2>
              <div className="capabilities enter e-up d2" style={{ width: '100%', marginBottom: 28 }}>
                {[
                  'Custom websites', 'Bespoke CRMs', 'Client & member portals', 'Mobile apps',
                  'Online courses', 'Documentation systems', 'Donor & impact dashboards', 'Booking & event flows',
                  'Referral pipelines', 'Automated comms', 'Funder-ready reporting', 'Public booking calendars',
                ].map(item => (
                  <span key={item} className="capabilities__item">{item}</span>
                ))}
              </div>
              <div className="feature-grid enter e-up d3" style={{ width: '100%' }}>
                {[
                  ['workflow',  'Map the process first',     'Before any code is written, we draw the system. The spec is the deliverable — the build is the easy part.'],
                  ['database',  'One source of truth',       'Cases, contacts, donors, outcomes — owned by you, queryable, exportable, never locked in.'],
                  ['bolt',      'Ship in weeks',             'Working software in three to six weeks. Weekly demos.'],
                  ['users',     'Built for your team',       'We design around the people who actually use it. If they don\'t open it, we didn\'t ship it.'],
                  ['shield',    'Safeguarding by default',   'Quick exit, idle timeout, permission-gated docs, audit trails — baked in, not bolted on.'],
                  ['chart',     'Outcomes you can report',   'Funder-ready dashboards. CSV exports. Live engagement and stage data — not screenshots from a spreadsheet.'],
                ].map(([icon, t, d]) => (
                  <div key={t} className="feature-card">
                    <div className="feature-card__icon"><DCIcon name={icon} size={18} /></div>
                    <div className="feature-card__title">{t}</div>
                    <div className="feature-card__desc">{d}</div>
                  </div>
                ))}
              </div>
            </div>
            <SlideFooter num="02" label="WHAT WE BUILD" />
          </div>
        </Wrap>

        {/* 3 — CASE STUDY: AGAINST THE ODDS */}
        <Wrap idx={3}>
          <CarouselSlide
            num="03" footerLabel="CASE STUDY · AGAINST THE ODDS"
            header={<CaseHeader charity="ato" name="Against the Odds" sub="Prevention · Treatment · Recovery"
                                logo="assets/ato-logo.png" />}
            eyebrow="What we built"
            title="A landing page became an <em>impact engine</em>."
            lede="Outdated brochure site, paper records, and admin scattered across email and spreadsheets — replaced with one branded website that tells the impact story, and a custom CRM that runs Prevention, Treatment, and Recovery from a single record per person."
            callouts={[
              ['Bespoke CRM',           'Caseload management for Prevention, Treatment & Recovery — referrals, contacts, workshops, treatment tracker, surveys, invoicing, automations.'],
              ['Website + mobile app',  'Editorial homepage and a native-feel recovery app — clean streak, daily check-in, affirmations, courses, and a private community.'],
              ['Marketing hub',         'Email builder, social planner, automations, public booking calendar, survey builder — every channel from one place.'],
            ]}
            screenData={[
              { label: 'Website',          el: <WebsiteEmbed src="https://againsttheodds.uk" slideIdx={3} /> },
              { label: 'Dashboard',        el: <ATOMockDashboard /> },
              { label: 'Recovery seekers', el: <ATOMockSeekers /> },
              { label: 'Calendar',         el: <ATOMockCalendar /> },
              { label: 'Mobile app',       el: <ATOMobileCluster />, mobile: true },
            ]}
            extra={
              <div className="quote" style={{ maxWidth: 580 }}>
                <div className="quote__body">"Working with Brad at Digital Craft has been <em>a dream</em> — he's taken our website from an outdated landing page to an epic overview of our services and impact. We've also utilised his CRM to streamline our admin. 10/10."</div>
                <div className="quote__attrib"><b>Aaron Abbott</b> · Against the Odds</div>
              </div>
            }
          />
        </Wrap>

        {/* 4 — CASE STUDY: GAMLEARN */}
        <Wrap idx={4}>
          <CarouselSlide
            num="04" footerLabel="CASE STUDY · GAMLEARN"
            header={<CaseHeader charity="gamlearn" name="GamLEARN" sub="Gambling harm · Education · Recovery"
                                logo="assets/gamlearn-logo.png" />}
            eyebrow="What we built"
            title="A member-experience platform built for <em>live risk</em>."
            lede="A staff CRM and a member portal that work as one system. Caseworkers see a live RAG risk picture and chase evidence with one click. People in recovery sign in to their own portal, update their stage, see their documents, and book in — without filling out another form."
            callouts={[
              ['Staff CRM',            'Triage dashboard, referrals pipeline, DSAR workflow, mitigation builder, funder-ready reports — one record per person, owned by you.'],
              ['Member portal',        'Stage tracking the member can update themselves. Permission-gated documents. Self-assessment in-app. Quick exit on every screen.'],
              ['Branded site',         'A cohesive public face — same brand, same voice, no Wix landing page paying rent.'],
            ]}
            screenData={[
              { label: 'Website',   el: <WebsiteEmbed src="https://gamlearn.org.uk" slideIdx={4} /> },
              { label: 'Today',     el: <GLMockDashboard /> },
              { label: 'Triage',    el: <GLMockTriage /> },
              { label: 'People',    el: <GLMockPeople /> },
              { label: 'Member portal', el: <GLMobileCluster />, mobile: true },
            ]}
            extra={
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, maxWidth: 700 }}>
                <div className="quote">
                  <div className="quote__body" style={{ fontSize: 17 }}>"Brad went above and beyond developing our new site at GamLEARN. He brought <em>some great ideas</em> and fully believed in what we do."</div>
                  <div className="quote__attrib"><b>Tony</b> · GamLEARN</div>
                </div>
                <div className="quote">
                  <div className="quote__body" style={{ fontSize: 17 }}>"Brad is <em>incredible</em> at what he does. Great communication from start to finish — and to know he's there for any updates or changes is brilliant."</div>
                  <div className="quote__attrib"><b>Elise</b> · GamLEARN</div>
                </div>
              </div>
            }
          />
        </Wrap>

        {/* 5 — CASE STUDY: HIKE2HEAL (in progress) */}
        <Wrap idx={5}>
          <CarouselSlide
            num="05" footerLabel="CASE STUDY · HIKE2HEAL · IN PROGRESS"
            header={<CaseHeader charity="h2h" name="Hike2Heal Recovery" sub="Nature · Recovery · Community"
                                logo="assets/logo-mark.png" />}
            eyebrow="What we're building now"
            title="A digital home for a Birmingham <em>recovery community</em>."
            lede="A four-page website that turns curiosity into commitment — editorial hero, plan-a-hike calendar, three-tap booking, membership tiers that fund the mission. Live in build right now. The full interactive demo is one click away."
            callouts={[
              ['Editorial homepage',  'Big photography, gradient brand wordmark, trust strip with real hikers — emotion before information.'],
              ['Booking in 60 seconds', 'Live calendar, no form drudgery. Members get their saved details and discount automatically.'],
              ['Membership that funds the mission', 'Three monthly tiers. Predictable recurring income. Members get a sense of ongoing belonging.'],
            ]}
            screenData={[
              { label: 'Homepage',   el: <H2HHomeHero /> },
              { label: 'About',      el: <H2HHomeAbout /> },
              { label: 'Journey',    el: <H2HHomeJourney /> },
              { label: 'Event',      el: <H2HEventPage /> },
              { label: 'Booking',    el: <H2HBookingPage /> },
              { label: 'Membership', el: <H2HMembershipPage /> },
            ]}
          />
        </Wrap>

        {/* 6 — THE DIFFERENCE */}
        <Wrap idx={6}>
          <div className="slide slide--alt">
            <div className="slide__left" style={{ flex: '0 0 44%' }}>
              <div className="dc-eyebrow enter e-up">Custom vs generic</div>
              <h2 className="dc-h2 enter e-up d1">
                Generic software <em>fits no one well</em>.
              </h2>
              <p className="dc-lede enter e-up d2">
                Off-the-shelf CRMs were built to sell B2B subscriptions. They charge per seat. They lock your data behind their API. They force your process to bend to their model. Custom systems do the opposite: they fit you, scale with you, and stay yours.
              </p>
              <div className="enter e-up d3">
                <a className="dc-btn dc-btn-primary" href="mailto:brad@thedigicraft.co.uk?subject=Custom%20system%20%E2%80%94%20charity">
                  Book a system audit <span className="dc-arrow" />
                </a>
              </div>
            </div>
            <div className="slide__right">
              <div className="feature-grid enter e-up d2" style={{ width: '100%', maxWidth: 720 }}>
                {[
                  ['database',  'Own your data',           'No vendor lock-in. Your records live in a database you can export, query, or migrate at any time.'],
                  ['workflow',  'Fits your real process',  'No "the software doesn\'t do that." We build around your safeguarding, your stages, your reporting.'],
                  ['gauge',     'No per-seat trap',        'Add caseworkers, add volunteers, add trustees. The bill doesn\'t balloon — there are no per-seat fees.'],
                  ['layers',    'Scales with the mission', 'Today: 1 service. Tomorrow: 3. The system extends — it doesn\'t need rebuilding when you grow.'],
                  ['users',     'Built for your team',     'We design around real users, not a generic admin. Training takes hours, not weeks.'],
                  ['chart',     'Measurable outcomes',     'Every system has numbers attached on day one. Funder reports stop being a Friday afternoon problem.'],
                ].map(([icon, t, d]) => (
                  <div key={t} className="feature-card">
                    <div className="feature-card__icon"><DCIcon name={icon} size={20} /></div>
                    <div className="feature-card__title">{t}</div>
                    <div className="feature-card__desc">{d}</div>
                  </div>
                ))}
              </div>
            </div>
            <SlideFooter num="06" label="THE DIFFERENCE" />
          </div>
        </Wrap>

        {/* 7 — PROCESS */}
        <Wrap idx={7}>
          <div className="slide">
            <div className="slide__center" style={{ maxWidth: 1200 }}>
              <div className="dc-eyebrow enter e-up">How it works</div>
              <h2 className="dc-h2 enter e-up d1" style={{ marginBottom: 16, textAlign: 'center' }}>
                Three to six weeks to a <em>working system</em>.
              </h2>
              <p className="dc-lede enter e-up d2" style={{ textAlign: 'center', marginInline: 'auto', marginBottom: 32 }}>
                We map your real process, build the system around it, and put it in your hands. You see progress every week.
              </p>
              <div className="process enter e-up d3" style={{ width: '100%' }}>
                <div className="process__conn" style={{ '--progress': `${(processStep / 3) * 100}%` }} />
                {[
                  ['Map',       'We sit with your team and document the real process — not the one in the SOP folder.'],
                  ['Design',    'Wire the system, write the spec, and agree the metrics before any code is written.'],
                  ['Build',     'Two-week sprints, weekly demos. You see progress, not promises.'],
                  ['Hand over', 'Training, runbooks, and a system your team owns. We\'re a phone call away.'],
                ].map(([h, p], i) => (
                  <div key={h} className={`process__step ${i <= processStep ? 'is-active' : ''}`}
                       onMouseEnter={() => setProcessStep(i)}>
                    <div className="process__num">{String(i + 1).padStart(2, '0')}</div>
                    <h4>{h}</h4>
                    <p>{p}</p>
                  </div>
                ))}
              </div>
            </div>
            <SlideFooter num="07" label="PROCESS" />
          </div>
        </Wrap>

        {/* 8 — CTA / NEXT STEPS */}
        <Wrap idx={8}>
          <div className="slide slide--dark slide--grid">
            <div className="slide__left" style={{ flex: '0 0 56%' }}>
              <div className="enter e-fade"><Lockup dark /></div>
              <div className="dc-eyebrow enter e-up d1">Next steps</div>
              <h2 className="dc-h2 enter e-up d2">
                Let's draw the <em>future state</em>.
              </h2>
              <p className="dc-lede enter e-up d3">
                Tell us what's broken. We'll come back with the system that replaces it.
              </p>
              <div className="enter e-up d4" style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <a href="mailto:brad@thedigicraft.co.uk?subject=Charity%20system%20audit"
                   style={{ fontFamily: 'var(--dc-font-display)', fontSize: 'clamp(28px, 3vw, 44px)', color: '#fff', letterSpacing: '-0.025em', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 16 }}>
                  brad@thedigicraft.co.uk
                  <DCIcon name="arrowRight" size={28} style={{ color: 'var(--accent)' }} />
                </a>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <a className="dc-btn dc-btn-primary" href="mailto:brad@thedigicraft.co.uk?subject=Book%20a%20system%20audit">
                    Book a system audit <span className="dc-arrow" />
                  </a>
                  <button className="dc-btn dc-btn-secondary" onClick={() => go(0)}>Back to start</button>
                </div>
              </div>
            </div>
            <div className="slide__right enter e-scale d3">
              <div style={{ position: 'absolute', right: 80, top: '36%', transform: 'translateY(-50%) rotate(-3deg)', zIndex: 1, width: '100%', maxWidth: 820, opacity: 0.7 }}>
                <DesktopMock><ATOMockDashboard /></DesktopMock>
              </div>
              <div style={{ position: 'absolute', right: 0, top: '54%', transform: 'translateY(-50%) rotate(2deg)', zIndex: 2, width: '100%', maxWidth: 820 }}>
                <DesktopMock><GLMockDashboard /></DesktopMock>
              </div>
              <div style={{ position: 'absolute', right: -40, top: '74%', transform: 'translateY(-30%) rotate(5deg)', zIndex: 3 }}>
                <PhoneMock lg><GLMockPortal /></PhoneMock>
              </div>
            </div>
            <SlideFooter num="08" label="LET'S BUILD IT" />
          </div>
        </Wrap>

      </div>

      {siteView && (
        <SiteOverlay mode={siteView} onChangeMode={setSiteView} onClose={() => setSiteView(null)} />
      )}

      <div className="deck-nav">
        <button className="deck-nav__btn" disabled={current === 0 && (!isMobile || mobileStep === 0)} onClick={prev} aria-label="Previous">
          <DCIcon name="arrowRight" size={14} style={{ transform: 'rotate(180deg)' }} />
        </button>
        <div className="deck-nav__dots">
          {Array.from({ length: totalSlides }, (_, i) => (
            <button key={i} className={`deck-nav__dot ${i === current ? 'deck-nav__dot--active' : ''}`}
                    onClick={() => go(i)} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
        <button className="deck-nav__btn" disabled={current === totalSlides - 1 && (!isMobile || mobileStep === 1)} onClick={next} aria-label="Next">
          <DCIcon name="arrowRight" size={14} />
        </button>
      </div>
    </React.Fragment>
    </CurrentSlideContext.Provider>
  );
};

Object.assign(window, { ProposalApp });
