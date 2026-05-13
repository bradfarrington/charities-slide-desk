// ===========================================================
//  App — Design canvas hosting all screens
//  navigateTo(): from within an artboard, open another artboard in focus mode
// ===========================================================

const NAV_TO_ARTBOARD = {
  home: "home-desktop",
  event: "event-desktop",
  events: "event-desktop",
  booking: "booking-desktop",
  membership: "membership-desktop",
  stories: "home-desktop",
  contact: "home-desktop",
};

function navigateTo(id) {
  const slot = NAV_TO_ARTBOARD[id];
  if (!slot) return;
  // Click the matching artboard's "focus" button to open it in fullscreen.
  const node = document.querySelector(`[data-dc-slot="${slot}"]`);
  if (!node) return;
  // Prefer the click-the-label path (more reliable across canvas versions)
  const label = node.querySelector(".dc-labeltext");
  if (label) { label.click(); return; }
  const expand = node.querySelector(".dc-expand");
  if (expand) expand.click();
}

function Screen({ children }) {
  return <div style={{ height: "100%", width: "100%", overflow: "hidden" }}>{children}</div>;
}

function App() {
  return (
    <DesignCanvas>
      <DCSection
        id="screens"
        title="Hike2Heal — Website redesign"
        subtitle="Click any artboard label to view it fullscreen. Pages link to each other when focused."
      >
        <DCArtboard id="home-desktop" label="01 · Homepage (desktop)" width={1440} height={7800}>
          <Screen><DesktopHomepage onNav={navigateTo} /></Screen>
        </DCArtboard>

        <DCArtboard id="event-desktop" label="02 · Event detail — Pen y Fan" width={1440} height={3700}>
          <Screen><EventPage onNav={navigateTo} /></Screen>
        </DCArtboard>

        <DCArtboard id="booking-desktop" label="03 · Booking — Calendar flow" width={1440} height={2800}>
          <Screen><BookingPage onNav={navigateTo} /></Screen>
        </DCArtboard>

        <DCArtboard id="membership-desktop" label="04 · Membership — Tiers & perks" width={1440} height={3700}>
          <Screen><MembershipPage onNav={navigateTo} /></Screen>
        </DCArtboard>
      </DCSection>

      <DCSection id="mobile" title="Mobile" subtitle="Re-flowed for 390px — not a shrunk desktop.">
        <DCArtboard id="home-mobile" label="01 · Homepage (iPhone, 390)" width={390} height={5200}>
          <Screen><MobileHomepage /></Screen>
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
