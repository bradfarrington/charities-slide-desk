// ===========================================================
//  Desktop Homepage — assembles all sections, accepts onNav
//  Intended to render inside a 1440px-wide DCArtboard.
// ===========================================================

function DesktopHomepage({ onNav }) {
  return (
    <div className="page" style={{ background: "var(--h2h-paper)", color: "var(--fg-default)", minHeight: 100, position: "relative", overflow: "hidden", isolation: "isolate" }}>
      <div style={{ position: "absolute", inset: "0 0 auto 0", height: 900, background: "linear-gradient(180deg, #FBF5FF 0%, #FFFFFF 100%)", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <SubHeader active="home" onNav={onNav} />
        <DesktopHero onNav={onNav} />
        <DesktopMarquee />
        <DesktopAbout />
        <DesktopMission />
        <DesktopPlanYourHike onNav={onNav} />
        <DesktopJourney onNav={onNav} />
        <DesktopAdventures />
        <DesktopImpact onNav={onNav} />
        <DesktopGallery />
        <DesktopTestimonial />
        <DesktopNewsletter />
        <DesktopFooter onNav={onNav} />
      </div>
    </div>
  );
}

window.DesktopHomepage = DesktopHomepage;
