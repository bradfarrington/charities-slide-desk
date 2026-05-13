// Hike2Heal — interactive website proposal deck.
// Each slide is a Wrap; key slides embed a tabbed carousel (CarouselSlide)
// so the prospect can flick through screens from the H2H website designs.

const DESKTOP_W = 1440;
const DESKTOP_H = 900;
const MOBILE_W = 390;
const MOBILE_H = 760;

// Lets heavy embeds (mobile-screen iframes) gate themselves to the active slide
// so the deck doesn't fetch ~150MB of Figma-exported HTML on initial load.
const CurrentSlideContext = React.createContext(0);

const PhoneMock = ({ children, lg }) => {
  const w = lg ? 280 : 240;
  const scale = (w - 16) / MOBILE_W;
  const h = MOBILE_H * scale;
  return (
    <div className={`phone-mock${lg ? ' phone-mock--lg' : ''}`}>
      <div className="phone-mock__status">
        <span>9:41</span>
        <div className="phone-mock__notch" />
        <span style={{ fontSize: 10 }}>●●●●</span>
      </div>
      <div className="phone-mock__screen" style={{ height: h }}>
        <div className="phone-mock__inner" style={{ transform: `scale(${scale})`, height: MOBILE_H }}>
          {children}
        </div>
      </div>
    </div>
  );
};

// Embeds a static mobile HTML screen (Figma export) as an iframe sized to the
// mobile viewport — used inside PhoneMock for proposal placeholders, and inside
// the demo overlay for the live mobile preview.
// If `slideIdx` is passed, the iframe only renders when that slide is active —
// avoids loading 100MB+ Figma-exported HTML for off-screen slides.
const MobileFrameEmbed = ({ src, fill = false, scrollable = false, slideIdx }) => {
  const current = React.useContext(CurrentSlideContext);
  const style = {
    width: fill ? '100%' : MOBILE_W,
    height: fill ? '100%' : MOBILE_H,
    border: 0,
    display: 'block',
    background: '#fff',
  };
  if (slideIdx != null && slideIdx !== current) {
    return <div style={{ ...style, background: '#F4ECFB' }} aria-hidden="true" />;
  }
  return (
    <iframe
      src={src}
      title={src}
      loading="lazy"
      scrolling={scrollable ? 'yes' : 'no'}
      style={style}
    />
  );
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

const SlideFooter = ({ num, label }) => (
  <div className="slide__footer"><span>{num} · {label} · HIKE2HEAL</span></div>
);

// ---- H2H homepage section wrappers (so each carousel tab shows a distinct chunk) ----
// Wraps a section in a soft cream background and the appropriate header.

const HomeHeroScene = () => (
  <div style={{ background: 'linear-gradient(180deg, #FBF5FF 0%, #FFFFFF 100%)', minHeight: DESKTOP_H }}>
    <DesktopHeader />
    <DesktopHero />
  </div>
);

const HomeAboutScene = () => (
  <div style={{ background: '#FFFFFF', minHeight: DESKTOP_H, paddingBottom: 24 }}>
    <SubHeader active="home" />
    <DesktopAbout />
    <DesktopMission />
  </div>
);

const HomePlanScene = () => (
  <div style={{ background: '#FFFFFF', minHeight: DESKTOP_H }}>
    <SubHeader active="events" />
    <DesktopPlanYourHike />
  </div>
);

const HomeJourneyScene = () => (
  <div style={{ background: '#FFFFFF', minHeight: DESKTOP_H }}>
    <SubHeader active="home" />
    <DesktopJourney />
    <DesktopAdventures />
  </div>
);

const HomeImpactScene = () => (
  <div style={{ background: '#FFFFFF', minHeight: DESKTOP_H }}>
    <SubHeader active="home" />
    <DesktopImpact />
    <DesktopGallery />
  </div>
);

const HomeTestimonialScene = () => (
  <div style={{ background: '#FFFFFF', minHeight: DESKTOP_H }}>
    <SubHeader active="stories" />
    <DesktopTestimonial />
    <DesktopNewsletter />
  </div>
);

// Carousel slide — left text + tab buttons, right tabbed screen swap (desktop).
const CarouselSlide = ({ title, eyebrow, num, footerLabel, callouts, screenData, theme, extra }) => {
  const [screen, setScreen] = React.useState(0);

  const Tabs = () => (
    <div className="screen-tabs">
      {screenData.map((s, i) => (
        <button key={i} className={`screen-tab ${i === screen ? 'screen-tab--active' : ''}`} onClick={() => setScreen(i)}>
          {s.label}
        </button>
      ))}
    </div>
  );

  return (
    <div className={`slide ${theme || ''}`}>
      <div className="mobile-only-tabs" style={{ position: 'absolute', top: 24, left: 0, width: '100%', zIndex: 50, justifyContent: 'center' }}>
        <Tabs />
      </div>
      <div className="slide__left" style={{ flex: '0 0 38%', paddingRight: 32 }}>
        <div className="deck-overline enter e-up">{eyebrow}</div>
        <h2 className="deck-h2 enter e-up d1" dangerouslySetInnerHTML={{ __html: title }} style={{ marginBottom: 24 }} />
        <div className="enter e-up d2">
          {callouts.map(([cls, t, d], i) => (
            <div key={i} className={`callout ${cls}`} style={{ marginBottom: 14 }}>
              <div className="callout__title">{t}</div>
              <div className="callout__body">{d}</div>
            </div>
          ))}
        </div>
        <div className="enter e-up d3 desktop-only-tabs" style={{ marginTop: 24 }}>
          <Tabs />
        </div>
        {extra && <div className="enter e-up d4" style={{ marginTop: 20 }}>{extra}</div>}
      </div>
      <div className="slide__right enter e-scale d2" style={{ flex: 1, position: 'relative' }}>
        <div className="crm-mock-wrapper" data-screen-idx={screen} style={{ width: '100%', maxWidth: 1100, position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 1 }}>
          <DesktopMock>
            <div key={screen} className="screen-fade" style={{ width: '100%', height: '100%' }}>
              {screenData[screen].el}
            </div>
          </DesktopMock>
        </div>
      </div>
      <SlideFooter num={num} label={footerLabel} />
    </div>
  );
};

// Mobile carousel slide — phones instead of desktop mocks.
const PhoneCarouselSlide = ({ title, eyebrow, num, footerLabel, callouts, screenData, theme, extra }) => {
  const [screen, setScreen] = React.useState(0);

  const Tabs = () => (
    <div className="screen-tabs">
      {screenData.map((s, i) => (
        <button key={i} className={`screen-tab ${i === screen ? 'screen-tab--active' : ''}`} onClick={() => setScreen(i)}>
          {s.label}
        </button>
      ))}
    </div>
  );

  return (
    <div className={`slide ${theme || ''}`}>
      <div className="mobile-only-tabs" style={{ position: 'absolute', top: 24, left: 0, width: '100%', zIndex: 50, justifyContent: 'center' }}>
        <Tabs />
      </div>
      <div className="slide__left" style={{ flex: '0 0 42%', paddingRight: 32 }}>
        <div className="deck-overline enter e-up">{eyebrow}</div>
        <h2 className="deck-h2 enter e-up d1" dangerouslySetInnerHTML={{ __html: title }} style={{ marginBottom: 24 }} />
        <div className="enter e-up d2">
          {callouts.map(([cls, t, d], i) => (
            <div key={i} className={`callout ${cls}`} style={{ marginBottom: 14 }}>
              <div className="callout__title">{t}</div>
              <div className="callout__body">{d}</div>
            </div>
          ))}
        </div>
        <div className="enter e-up d3 desktop-only-tabs" style={{ marginTop: 24 }}>
          <Tabs />
        </div>
        {extra && <div className="enter e-up d4" style={{ marginTop: 20 }}>{extra}</div>}
      </div>
      <div className="slide__right enter e-scale d2" style={{ flex: 1, position: 'relative', justifyContent: 'center' }}>
        <div key={screen} className="screen-fade">
          <PhoneMock lg>
            {screenData[screen].el}
          </PhoneMock>
        </div>
      </div>
      <SlideFooter num={num} label={footerLabel} />
    </div>
  );
};

// Tiny inline icon set for callout/feature cards (purple/violet themed).
const PIcon = ({ name, size = 20, color = '#7B2FFF' }) => {
  const props = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const paths = {
    heart:    <path d="M12 21s-7-4.5-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.5-7 11-7 11Z" />,
    sparkle:  <path d="M12 3v6M12 15v6M3 12h6M15 12h6M5.6 5.6l4 4M14.4 14.4l4 4M5.6 18.4l4-4M14.4 9.6l4-4" />,
    mountain: <g><path d="M3 19l5-9 4 6 3-4 6 7" /><path d="M3 19h18" /></g>,
    users:    <g><circle cx="9" cy="9" r="3" /><circle cx="17" cy="10" r="2.5" /><path d="M3 20c.5-3 3-5 6-5s5.5 2 6 5" /><path d="M14 20c.4-2 2-3.4 4-3.4s3.6 1.4 4 3.4" /></g>,
    calendar: <g><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></g>,
    leaf:     <g><path d="M11 20A7 7 0 0 1 4 13V7a3 3 0 0 1 3-3h6a7 7 0 0 1 7 7v0a9 9 0 0 1-9 9z" /><path d="M4 20 14 10" /></g>,
    zap:      <path d="m13 2-9 12h7l-1 8 9-12h-7z" />,
    target:   <g><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" fill={color} /></g>,
    chart:    <g><path d="M3 3v18h18" /><path d="m7 14 3-3 4 4 5-6" /></g>,
    globe:    <g><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></g>,
  };
  return <svg {...props}>{paths[name] || paths.heart}</svg>;
};

// ---- Live site overlay ----
// Renders the real, scrollable Hike2Heal homepage at native size, in either
// desktop (1440) or mobile (390 with phone frame) view. Nav links are no-ops
// because the inner pages aren't built yet for mobile.
const MOBILE_SCREENS = [
  { key: 'home',       label: 'Homepage',     render: () => <MobileHomepage /> },
  { key: 'event',      label: 'Event detail', render: () => <MobileFrameEmbed src="mobile-screens/event-detail.html" fill scrollable /> },
  { key: 'booking',    label: 'Booking',      render: () => <MobileFrameEmbed src="mobile-screens/booking.html" fill scrollable /> },
  { key: 'membership', label: 'Membership',   render: () => <MobileFrameEmbed src="mobile-screens/membership.html" fill scrollable /> },
];

const SiteOverlay = ({ mode, onChangeMode, onClose }) => {
  const [mobileScreen, setMobileScreen] = React.useState('home');

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    // Stop deck arrow keys from firing under the overlay
    const block = (e) => { if (e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'ArrowUp' || e.key === 'ArrowDown') e.stopPropagation(); };
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
            <div className="site-overlay__title-sub">Scrollable · interactive · navigation disabled</div>
          </div>
        </div>
        <div className="site-overlay__toggle">
          <button className={mode === 'desktop' ? 'is-active' : ''} onClick={() => onChangeMode('desktop')}>Desktop</button>
          <button className={mode === 'mobile' ? 'is-active' : ''} onClick={() => onChangeMode('mobile')}>Mobile</button>
        </div>
        <button className="site-overlay__close" onClick={onClose} aria-label="Close demo">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M6 18 18 6" /></svg>
        </button>
      </div>
      {mode === 'mobile' && (
        <div className="site-overlay__screen-nav">
          {MOBILE_SCREENS.map(s => (
            <button
              key={s.key}
              className={`site-overlay__screen-nav-btn ${s.key === mobileScreen ? 'is-active' : ''}`}
              onClick={() => setMobileScreen(s.key)}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}
      <div className="site-overlay__stage">
        {mode === 'desktop' ? (
          <div className="site-overlay__desktop">
            <DesktopHomepage />
          </div>
        ) : (
          <div className="site-overlay__phone">
            <div className="site-overlay__phone-frame">
              <div className="site-overlay__phone-notch" />
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

const ViewSiteButton = ({ onClick, variant = 'light', label = 'View demo' }) => (
  <button className={`view-site-btn view-site-btn--${variant}`} onClick={onClick}>
    <span className="view-site-btn__dot" />
    {label}
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M8 7h9v9" /></svg>
  </button>
);

// ---- MAIN APP ----
const ProposalApp = () => {
  const [current, setCurrent] = React.useState(0);
  const [mobileStep, setMobileStep] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
  const [siteView, setSiteView] = React.useState(null); // null | 'desktop' | 'mobile'
  const totalSlides = 11;
  const openSite = (mode = 'desktop') => setSiteView(mode);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const next = () => {
    const isSingleStep = current === 9;
    if (isMobile && mobileStep === 0 && !isSingleStep) setMobileStep(1);
    else if (current < totalSlides - 1) { setCurrent(current + 1); setMobileStep(0); }
  };
  const prev = () => {
    const prevIsSingleStep = (current - 1) === 9;
    if (isMobile && mobileStep === 1) setMobileStep(0);
    else if (current > 0) { setCurrent(current - 1); setMobileStep(isMobile && !prevIsSingleStep ? 1 : 0); }
  };
  const go = (n) => { setCurrent(Math.max(0, Math.min(totalSlides - 1, n))); setMobileStep(0); };

  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); next(); }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp')  { e.preventDefault(); prev(); }
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
        transition: 'opacity 0.6s ease',
      }}>{children}</div>
  );

  const Logo = ({ size = 56, withName = true, dark = false }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <img src="assets/logo-mark.png" alt="Hike2Heal" style={{ height: size, width: 'auto', display: 'block' }} />
      {withName && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: size * 0.42, color: dark ? '#fff' : 'var(--h2h-ink)', letterSpacing: '-0.01em' }}>Hike2Heal</span>
          <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: size * 0.18, color: dark ? 'rgba(255,255,255,0.66)' : 'var(--h2h-slate)', letterSpacing: '0.22em', textTransform: 'uppercase', marginTop: 6 }}>Recovery CIC</span>
        </div>
      )}
    </div>
  );

  return (
    <CurrentSlideContext.Provider value={current}>
    <React.Fragment>
      <div className="deck">

        {/* 0 — COVER */}
        <Wrap idx={0}>
          <div className="slide slide--gradient">
            <div className="slide__left" style={{ flex: '0 0 50%', paddingRight: 40 }}>
              <div className="enter e-fade" style={{ marginBottom: 48 }}><Logo size={72} /></div>
              <div className="deck-overline enter e-up d1">Website Proposal · 2026</div>
              <h1 className="deck-h1 enter e-up d2" style={{ marginBottom: 18 }}>
                Healing through nature,<br />
                <span className="deck-grad-text" style={{ fontStyle: 'italic', fontWeight: 600 }}>together</span> — online.
              </h1>
              <p className="deck-body enter e-up d3" style={{ maxWidth: 600, marginBottom: 24 }}>
                A digital home for the Hike2Heal community. A website that turns first-time visitors
                into hikers, hikers into members, and members into lifelong advocates of the cause.
              </p>
              <div className="enter e-up d3" style={{ marginBottom: 28 }}>
                <ViewSiteButton onClick={() => openSite('desktop')} variant="brand" label="View demo" />
              </div>
              <div className="stat-row enter e-up d4" style={{ maxWidth: 640, marginTop: 12 }}>
                <div className="stat-box"><div className="stat-box__value">4</div><div className="stat-box__label">Polished pages</div></div>
                <div className="stat-box"><div className="stat-box__value">1.2k+</div><div className="stat-box__label">Hikers to welcome</div></div>
                <div className="stat-box"><div className="stat-box__value">100%</div><div className="stat-box__label">Mobile-first</div></div>
                <div className="stat-box"><div className="stat-box__value">1</div><div className="stat-box__label">Brand system</div></div>
              </div>
            </div>
            <div className="slide__right enter e-scale d2" style={{ flex: 1, position: 'relative' }}>
              <div style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 1, width: '100%', maxWidth: 1000 }}>
                <DesktopMock><HomeHeroScene /></DesktopMock>
              </div>
              <div style={{ position: 'absolute', right: -40, top: '52%', transform: 'translateY(-30%)', zIndex: 2 }}>
                <PhoneMock lg><MobileHomepage /></PhoneMock>
              </div>
            </div>
            <SlideFooter num="00" label="COVER" />
          </div>
        </Wrap>

        {/* 1 — THE PROBLEM */}
        <Wrap idx={1}>
          <div className="slide slide--dark">
            <div className="slide__left" style={{ flex: '0 0 46%', paddingRight: 40, position: 'relative', zIndex: 10 }}>
              <div className="deck-overline enter e-up">The Problem</div>
              <h2 className="deck-h2 enter e-up d1" style={{ marginBottom: 20 }}>Recovery is hard. Finding the right community is harder.</h2>
              <p className="deck-body enter e-up d2" style={{ marginBottom: 28, color: 'rgba(255,255,255,0.78)' }}>
                People reaching out for help shouldn't have to dig through a clinical, generic site to find their tribe.
                And the people doing the work deserve a platform that reflects the warmth they create on the trail.
              </p>
              <div className="enter e-up d3 callout-grid">
                {[
                  ['callout--red',   'Hard to find',     'Local recovery support is fragmented, word-of-mouth, and invisible to the people who need it most.'],
                  ['callout--amber', 'Cold first impression', 'Most charity sites feel like brochures, not communities. Warmth gets lost the moment someone lands.'],
                  ['callout--pink',  'Hard to commit',   'No clear path from "I\'m curious" to "I\'m booked". The friction loses people at the moment they\'re ready.'],
                  ['',               'Invisible impact', 'Donors, partners and members can\'t see the lives changed — so generosity goes elsewhere.'],
                ].map(([cls, t, d], i) => (
                  <div key={i} className={`callout ${cls}`} style={{ marginTop: 0 }}>
                    <div className="callout__title">{t}</div>
                    <div className="callout__body">{d}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="slide__right enter e-fade d3" style={{ flex: 1, position: 'relative' }}>
              <div style={{ position: 'absolute', right: -40, top: '40%', transform: 'translateY(-50%) rotate(-2deg)', zIndex: 1, width: '100%', maxWidth: 900, opacity: 0.85 }}>
                <DesktopMock><HomeHeroScene /></DesktopMock>
              </div>
              <div style={{ position: 'absolute', right: -120, top: '70%', transform: 'translateY(-50%) rotate(3deg)', zIndex: 0, width: '100%', maxWidth: 900, opacity: 0.4 }}>
                <DesktopMock><HomeJourneyScene /></DesktopMock>
              </div>
            </div>
            <SlideFooter num="01" label="THE PROBLEM" />
          </div>
        </Wrap>

        {/* 2 — THE TRANSFORMATION */}
        <Wrap idx={2}>
          <div className="slide slide--violet">
            <div className="slide__left" style={{ flex: '0 0 48%', paddingRight: 40, zIndex: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div className="deck-overline enter e-up">The Transformation</div>
              <h2 className="deck-h2 enter e-up d1" style={{ marginBottom: 18 }}>
                A digital home,<br />built for belonging.
              </h2>
              <p className="deck-body enter e-up d2" style={{ marginBottom: 36, color: 'rgba(255,255,255,0.88)' }}>
                Four beautifully crafted pages, one cohesive brand system. Editorial photography, warm copy,
                a calendar that books in a tap, membership that means something — every screen says "you belong here".
              </p>
              <div className="stat-row enter e-up d3" style={{ width: '100%' }}>
                <div className="stat-box"><div className="stat-box__value">60s</div><div className="stat-box__label">Curious → booked</div></div>
                <div className="stat-box"><div className="stat-box__value">3×</div><div className="stat-box__label">Member conversion</div></div>
                <div className="stat-box"><div className="stat-box__value">24/7</div><div className="stat-box__label">Always-on storefront</div></div>
                <div className="stat-box"><div className="stat-box__value">1</div><div className="stat-box__label">Brand voice</div></div>
              </div>
            </div>
            <div className="slide__right enter e-scale d2" style={{ flex: 1, position: 'relative' }}>
              <div style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 1, width: '100%', maxWidth: 1000 }}>
                <DesktopMock><HomeImpactScene /></DesktopMock>
              </div>
              <div style={{ position: 'absolute', right: -40, top: '52%', transform: 'translateY(-30%)', zIndex: 2 }}>
                <PhoneMock lg><MobileHomepage /></PhoneMock>
              </div>
            </div>
            <SlideFooter num="02" label="THE TRANSFORMATION" />
          </div>
        </Wrap>

        {/* 3 — HOMEPAGE — carousel through key scenes */}
        <Wrap idx={3}>
          <CarouselSlide num="03" footerLabel="HOMEPAGE TOUR" eyebrow="Homepage · Desktop"
            title="A first impression<br/>that opens hearts."
            callouts={[
              ['',               'Editorial hero',     'Big photography, gradient brand wordmark, and a live "next hike" card — emotion before information.'],
              ['callout--green', 'Trust strip',        '1,200+ hikers, 60+ walks, real faces. Visitors see proof of community before they even scroll.'],
              ['callout--pink',  'Plan-your-hike',     'A built-in mini calendar lets visitors find the next walk that suits them without leaving the page.'],
            ]}
            extra={<ViewSiteButton onClick={() => openSite('desktop')} variant="brand" label="View homepage demo" />}
            screenData={[
              { label: 'Hero',            el: <HomeHeroScene /> },
              { label: 'About & mission', el: <HomeAboutScene /> },
              { label: 'Plan a hike',     el: <HomePlanScene /> },
              { label: 'Journey',         el: <HomeJourneyScene /> },
              { label: 'Impact & gallery',el: <HomeImpactScene /> },
              { label: 'Stories',         el: <HomeTestimonialScene /> },
            ]} />
        </Wrap>

        {/* 4 — EVENT PAGE */}
        <Wrap idx={4}>
          <div className="slide">
            <div className="slide__left" style={{ flex: '0 0 36%', paddingRight: 32 }}>
              <div className="deck-overline enter e-up">Event · Detail page</div>
              <h2 className="deck-h2 enter e-up d1" style={{ marginBottom: 22 }}>Every hike tells a story.</h2>
              <div className="enter e-up d2">
                <div className="callout">
                  <div className="callout__title">Imagery-first storytelling</div>
                  <div className="callout__body">Big hero photo, route map and group shots — visitors feel the walk before they read about it.</div>
                </div>
                <div className="callout callout--green">
                  <div className="callout__title">Crystal-clear meeting details</div>
                  <div className="callout__body">Date, time, postcode, what to bring, difficulty level — everything someone nervous about turning up needs to know.</div>
                </div>
                <div className="callout callout--pink">
                  <div className="callout__title">Single-click book CTA</div>
                  <div className="callout__body">A persistent "Book this hike" button keeps the action one tap away from any scroll position.</div>
                </div>
              </div>
            </div>
            <div className="slide__right enter e-scale d2" style={{ flex: 1, position: 'relative' }}>
              <div style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', width: '100%', maxWidth: 1100 }}>
                <DesktopMock><EventPage /></DesktopMock>
              </div>
              <div style={{ position: 'absolute', right: -40, top: '52%', transform: 'translateY(-30%)', zIndex: 2 }}>
                <PhoneMock lg><MobileFrameEmbed src="mobile-screens/event-detail.html" slideIdx={4} /></PhoneMock>
              </div>
            </div>
            <SlideFooter num="04" label="EVENT DETAIL" />
          </div>
        </Wrap>

        {/* 5 — BOOKING FLOW */}
        <Wrap idx={5}>
          <div className="slide slide--cream">
            <div className="slide__left" style={{ flex: '0 0 36%', paddingRight: 32 }}>
              <div className="deck-overline enter e-up">Booking · Calendar flow</div>
              <h2 className="deck-h2 enter e-up d1" style={{ marginBottom: 22 }}>"See you Saturday" in three taps.</h2>
              <div className="enter e-up d2">
                <div className="callout callout--green">
                  <div className="callout__title">Calendar-led, not form-led</div>
                  <div className="callout__body">Pick a hike from the live calendar — no scroll-through-a-form drudgery. The next available walk is always one tap away.</div>
                </div>
                <div className="callout">
                  <div className="callout__title">Member benefits visible</div>
                  <div className="callout__body">Members see their saved details and discount automatically. New hikers see a gentle nudge to join, never a hard sell.</div>
                </div>
                <div className="callout callout--pink">
                  <div className="callout__title">Designed for first-timers</div>
                  <div className="callout__body">Warm copy, plain language, and a "what to expect" reassurance panel — built for someone nervous about reaching out.</div>
                </div>
              </div>
            </div>
            <div className="slide__right enter e-scale d2" style={{ flex: 1, position: 'relative' }}>
              <div style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', width: '100%', maxWidth: 1100 }}>
                <DesktopMock><BookingPage /></DesktopMock>
              </div>
              <div style={{ position: 'absolute', right: -40, top: '52%', transform: 'translateY(-30%)', zIndex: 2 }}>
                <PhoneMock lg><MobileFrameEmbed src="mobile-screens/booking.html" slideIdx={5} /></PhoneMock>
              </div>
            </div>
            <SlideFooter num="05" label="BOOKING FLOW" />
          </div>
        </Wrap>

        {/* 6 — MEMBERSHIP */}
        <Wrap idx={6}>
          <div className="slide">
            <div className="slide__left" style={{ flex: '0 0 36%', paddingRight: 32 }}>
              <div className="deck-overline enter e-up">Membership · Tiers</div>
              <h2 className="deck-h2 enter e-up d1" style={{ marginBottom: 22 }}>Membership that means something.</h2>
              <div className="enter e-up d2">
                <div className="callout">
                  <div className="callout__title">Three clear tiers</div>
                  <div className="callout__body">A simple ladder from "supporter" through to "champion" — easy to choose, easy to upgrade, easy to gift.</div>
                </div>
                <div className="callout callout--green">
                  <div className="callout__title">Recurring revenue, built in</div>
                  <div className="callout__body">Members pay monthly. The charity gets predictable funding; members get a sense of ongoing belonging.</div>
                </div>
                <div className="callout callout--pink">
                  <div className="callout__title">Perks that compound</div>
                  <div className="callout__body">Priority booking, member-only hikes, behind-the-scenes stories — the longer you stay, the more you get.</div>
                </div>
              </div>
            </div>
            <div className="slide__right enter e-scale d2" style={{ flex: 1, position: 'relative' }}>
              <div style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', width: '100%', maxWidth: 1100 }}>
                <DesktopMock><MembershipPage /></DesktopMock>
              </div>
              <div style={{ position: 'absolute', right: -40, top: '52%', transform: 'translateY(-30%)', zIndex: 2 }}>
                <PhoneMock lg><MobileFrameEmbed src="mobile-screens/membership.html" slideIdx={6} /></PhoneMock>
              </div>
            </div>
            <SlideFooter num="06" label="MEMBERSHIP" />
          </div>
        </Wrap>

        {/* 7 — MOBILE */}
        <Wrap idx={7}>
          <PhoneCarouselSlide num="07" footerLabel="MOBILE · BUILT FOR THE TRAIL" eyebrow="Mobile · 390px"
            title="Built for the phone<br/>in their pocket."
            callouts={[
              ['callout--green', 'Re-flowed, not shrunk',  'Every section redesigned for thumb reach — not a desktop page squashed onto a phone screen.'],
              ['',               'Always-on Donate & Join','Sticky calls-to-action stay reachable as the user scrolls — generosity is only ever one tap away.'],
              ['callout--pink',  'Lightweight & fast',     'Optimised images, system fonts where it counts, and lazy-loaded photos for buttery scroll on 4G.'],
            ]}
            extra={<ViewSiteButton onClick={() => openSite('mobile')} variant="brand" label="View mobile demo" />}
            screenData={[
              { label: 'Homepage',     el: <MobileHomepage /> },
              { label: 'Event detail', el: <MobileFrameEmbed src="mobile-screens/event-detail.html" /> },
              { label: 'Booking',      el: <MobileFrameEmbed src="mobile-screens/booking.html" /> },
              { label: 'Membership',   el: <MobileFrameEmbed src="mobile-screens/membership.html" /> },
            ]} />
        </Wrap>

        {/* 8 — WHY IT WORKS */}
        <Wrap idx={8}>
          <div className="slide slide--cream">
            <div className="slide__left" style={{ flex: '0 0 50%', paddingRight: 40 }}>
              <div className="deck-overline enter e-up">Why it works</div>
              <h2 className="deck-h2 enter e-up d1" style={{ marginBottom: 18 }}>
                Every visitor becomes<br />a hiker, member, or advocate.
              </h2>
              <p className="deck-body enter e-up d2" style={{ marginBottom: 28 }}>
                The website is built as a funnel, not a brochure. Each scroll is engineered to move people one step closer
                to action — whether that's joining a hike, becoming a member, or sharing the story with someone who needs it.
              </p>
              <div className="enter e-up d3 feature-grid">
                {[
                  ['heart',    'Warm by design',        'Editorial photography, sentence-cased headlines, and a gradient brand mark create instant emotional connection.'],
                  ['mountain', 'Conversion-engineered', 'Hero CTAs, sticky book buttons, member-conversion nudges — designed for real-world engagement.'],
                  ['users',    'Built for belonging',   'Real faces, real stories, real numbers — visitors see themselves reflected before they\'re asked anything.'],
                  ['leaf',     'Mobile-first',          'Over 70% of charity site traffic is mobile. Every screen is designed for the phone first, desktop second.'],
                ].map(([icon, t, d], i) => (
                  <div key={i} className="feature-card">
                    <div className="feature-card__icon"><PIcon name={icon} size={18} color="#7B2FFF" /></div>
                    <div className="feature-card__title">{t}</div>
                    <div className="feature-card__desc">{d}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="slide__right enter e-scale d2" style={{ flex: 1, position: 'relative' }}>
              <div style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', width: '100%', maxWidth: 1000 }}>
                <DesktopMock><HomeImpactScene /></DesktopMock>
              </div>
              <div style={{ position: 'absolute', right: -40, top: '52%', transform: 'translateY(-30%)', zIndex: 2 }}>
                <PhoneMock lg><MobileHomepage /></PhoneMock>
              </div>
            </div>
            <SlideFooter num="08" label="WHY IT WORKS" />
          </div>
        </Wrap>

        {/* 9 — SUSTAINABILITY MODEL */}
        <Wrap idx={9}>
          <div className="slide slide--dark">
            <div className="slide__center" style={{ flex: 1, maxWidth: 1100, margin: '0 auto', textAlign: 'left' }}>
              <div className="deck-overline enter e-up" style={{ textAlign: 'center', alignSelf: 'center' }}>The Sustainability Model</div>
              <h2 className="deck-h2 enter e-up d1" style={{ marginBottom: 18, textAlign: 'center', maxWidth: 900 }}>A website that funds the mission, not the other way around.</h2>
              <p className="deck-body enter e-up d2" style={{ marginBottom: 40, textAlign: 'center', maxWidth: 760, color: 'rgba(255,255,255,0.8)' }}>
                Three revenue streams, all baked into the design from day one. Each one stands alone —
                together, they create a self-sustaining engine that lets Hike2Heal focus on the work that matters.
              </p>
              <div className="enter e-up d3 business-model-grid">
                {[
                  { icon: 'heart',   t: 'Membership tiers',  d: 'Three monthly tiers — predictable recurring income that lets the charity plan with confidence.', big: '£10–30', cap: 'Per member · monthly' },
                  { icon: 'calendar',t: 'Event bookings',    d: 'Pay-what-you-can hike contributions and ticketed retreats — gentle revenue from each event run.', big: '£5–25', cap: 'Per hike · suggested' },
                  { icon: 'sparkle', t: 'Donations & partners',d: 'One-click donate, corporate sponsor placements, and a partners strip that turns goodwill into funding.',big: '∞', cap: 'No ceiling' },
                ].map((p, i) => (
                  <div key={i} className="feature-card business-card">
                    <div className="feature-card__icon business-card__icon">
                      <PIcon name={p.icon} size={22} color="#fff" />
                    </div>
                    <div className="business-card__stats">
                      <div className="business-card__big">{p.big}</div>
                      <div className="business-card__cap">{p.cap}</div>
                    </div>
                    <div className="business-card__main">
                      <div className="business-card__title">{p.t}</div>
                      <div className="business-card__desc">{p.d}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="enter e-up d4 future-proof-box">
                <div className="future-proof-icon">
                  <PIcon name="sparkle" size={22} color="#fff" />
                </div>
                <div style={{ flex: 1 }}>
                  <div className="future-proof-title">Future-proofed by design.</div>
                  <div className="future-proof-desc">Stripe for payments, Mailchimp for newsletters, a CMS-ready content layer — every integration the charity will eventually want is wired into the architecture from launch day.</div>
                </div>
              </div>
            </div>
            <SlideFooter num="09" label="SUSTAINABILITY MODEL" />
          </div>
        </Wrap>

        {/* 10 — CTA / NEXT STEPS */}
        <Wrap idx={10}>
          <div className="slide slide--gradient">
            <div className="slide__left" style={{ flex: '0 0 50%', paddingRight: 60, position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div className="enter e-fade" style={{ marginBottom: 36 }}><Logo size={64} /></div>
              <div className="deck-overline enter e-up d1">Next Steps</div>
              <h2 className="deck-h2 enter e-up d2" style={{ marginBottom: 18 }}>Your website is designed.<br />Now let's launch it.</h2>
              <p className="deck-body enter e-up d3" style={{ marginBottom: 32 }}>
                Every page on the previous slides is locked, on-brand, and engineered to ship. The homepage, event page,
                booking flow and membership tiers are built on a single design system — so growth doesn't need a rebuild.
              </p>
              <div className="feature-grid enter e-up d4">
                {[
                  ['zap',      'Phase 1', 'Homepage, event detail, booking flow and membership pages — built, deployed, branded.'],
                  ['users',    'Phase 2', 'CMS, Stripe checkout, Mailchimp newsletter integration. Self-serve content for the team.'],
                  ['chart',    'Phase 3', 'Stories blog, hike calendar API, donation campaigns, member portal.'],
                  ['target',   'Launch',  'Live in 4–6 weeks. Iterated alongside the community for the first 90 days.'],
                ].map(([icon, t, d], i) => (
                  <div key={i} className="feature-card">
                    <div className="feature-card__icon"><PIcon name={icon} size={18} color="#7B2FFF" /></div>
                    <div className="feature-card__title">{t}</div>
                    <div className="feature-card__desc">{d}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="slide__right enter e-scale d3" style={{ flex: 1, position: 'relative' }}>
              <div style={{ position: 'absolute', right: 100, top: '38%', transform: 'translateY(-50%) rotate(-3deg)', zIndex: 1, width: '100%', maxWidth: 900, opacity: 0.7 }}>
                <DesktopMock><HomeHeroScene /></DesktopMock>
              </div>
              <div style={{ position: 'absolute', right: 0, top: '54%', transform: 'translateY(-50%) rotate(2deg)', zIndex: 2, width: '100%', maxWidth: 900 }}>
                <DesktopMock><EventPage /></DesktopMock>
              </div>
              <div style={{ position: 'absolute', right: -50, top: '70%', transform: 'translateY(-30%) rotate(6deg)', zIndex: 3 }}>
                <PhoneMock lg><MobileHomepage /></PhoneMock>
              </div>
            </div>
            <SlideFooter num="10" label="LET'S BUILD IT" />
          </div>
        </Wrap>

      </div>

      <button className="view-site-fab" onClick={() => openSite('desktop')} aria-label="Open demo">
        <span className="view-site-fab__dot" />
        <span className="view-site-fab__label">View demo</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 17 7M8 7h9v9" /></svg>
      </button>

      {siteView && (
        <SiteOverlay mode={siteView} onChangeMode={setSiteView} onClose={() => setSiteView(null)} />
      )}

      <div className="deck-nav">
        <button className="deck-nav__btn" disabled={current === 0 && (!isMobile || mobileStep === 0)} onClick={prev}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 3L5 7l4 4" /></svg>
        </button>
        <div className="deck-nav__dots">
          {Array.from({ length: totalSlides }, (_, i) => (
            <button key={i} className={`deck-nav__dot ${i === current ? 'deck-nav__dot--active' : ''}`} onClick={() => go(i)} />
          ))}
        </div>
        <button className="deck-nav__btn" disabled={current === totalSlides - 1 && (!isMobile || mobileStep === 1)} onClick={next}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 3l4 4-4 4" /></svg>
        </button>
      </div>
    </React.Fragment>
    </CurrentSlideContext.Provider>
  );
};

Object.assign(window, { ProposalApp });
