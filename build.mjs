import { build, context } from 'esbuild';

const entryPoints = [
  'icons.jsx',
  'sub-header.jsx',
  'hike-calendar.jsx',
  'desktop-1-hero.jsx',
  'desktop-2-about-mission.jsx',
  'desktop-plan-hike.jsx',
  'desktop-3-journey-adventures-impact.jsx',
  'desktop-4-gallery-testimonial-footer.jsx',
  'desktop.jsx',
  'event-page.jsx',
  'booking-page.jsx',
  'membership-page.jsx',
  'mobile.jsx',
  'ato-deck/ato-mocks.jsx',
  'gamlearn-deck/primitives.jsx',
  'gamlearn-deck/crm-shell.jsx',
  'gamlearn-deck/crm-triage.jsx',
  'gamlearn-deck/crm-screens-a.jsx',
  'gamlearn-deck/crm-screens-b.jsx',
  'gamlearn-deck/crm-screens-c.jsx',
  'gamlearn-deck/portal-screens.jsx',
  'proposal-slides.jsx',
];

const options = {
  entryPoints,
  bundle: false,
  outdir: 'dist',
  loader: { '.jsx': 'jsx' },
  jsx: 'transform',
  jsxFactory: 'React.createElement',
  jsxFragment: 'React.Fragment',
  target: ['es2020'],
  minify: true,
  logLevel: 'info',
};

const watch = process.argv.includes('--watch');

if (watch) {
  const ctx = await context(options);
  await ctx.watch();
  console.log('esbuild: watching for changes…');
} else {
  await build(options);
  console.log('esbuild: build complete');
}
