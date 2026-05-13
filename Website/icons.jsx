// Lucide-style outline icons, 1.9 stroke. Exported as window.Icons.
const SVG = (props) => (
  <svg
    width={props.size ?? 24}
    height={props.size ?? 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={props.weight ?? 1.9}
    strokeLinecap="round"
    strokeLinejoin="round"
    style={props.style}
    aria-hidden="true"
  >{props.children}</svg>
);

const Icons = {
  Chevron: (p) => <SVG {...p}><path d="m6 9 6 6 6-6" /></SVG>,
  ChevronUp: (p) => <SVG {...p}><path d="m18 15-6-6-6 6" /></SVG>,
  ArrowRight: (p) => <SVG {...p}><path d="M5 12h14M13 5l7 7-7 7" /></SVG>,
  ArrowLeft: (p) => <SVG {...p}><path d="M19 12H5M11 5l-7 7 7 7" /></SVG>,
  ArrowUpRight: (p) => <SVG {...p}><path d="M7 17 17 7M8 7h9v9" /></SVG>,
  Heart: (p) => <SVG {...p}><path d="M12 21s-7-4.5-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.5-7 11-7 11Z" /></SVG>,
  Users: (p) => <SVG {...p}><circle cx="9" cy="9" r="3" /><circle cx="17" cy="10" r="2.5" /><path d="M3 20c.5-3 3-5 6-5s5.5 2 6 5" /><path d="M14 20c.4-2 2-3.4 4-3.4s3.6 1.4 4 3.4" /></SVG>,
  Compass: (p) => <SVG {...p}><circle cx="12" cy="12" r="9" /><path d="m9.5 14.5 1.5-5 5-1.5-1.5 5z" /></SVG>,
  Message: (p) => <SVG {...p}><path d="M22 5H2v12h6l4 4 4-4h6V5Z" /></SVG>,
  Mountain: (p) => <SVG {...p}><path d="M3 19l5-9 4 6 3-4 6 7" /><path d="M3 19h18" /></SVG>,
  Leaf: (p) => <SVG {...p}><path d="M11 20A7 7 0 0 1 4 13V7a3 3 0 0 1 3-3h6a7 7 0 0 1 7 7v0a9 9 0 0 1-9 9z" /><path d="M4 20 14 10" /></SVG>,
  Hand: (p) => <SVG {...p}><path d="M9 11V5a2 2 0 1 1 4 0v6" /><path d="M13 11V4a2 2 0 1 1 4 0v8" /><path d="M17 12V7a2 2 0 1 1 4 0v8a7 7 0 0 1-7 7H9a5 5 0 0 1-5-5l-1-4a2 2 0 1 1 3.4-1l1.6 3" /></SVG>,
  Sun: (p) => <SVG {...p}><circle cx="12" cy="12" r="4" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1" /></SVG>,
  Pin: (p) => <SVG {...p}><path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0 1 18 0Z" /><circle cx="12" cy="10" r="3" /></SVG>,
  Calendar: (p) => <SVG {...p}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></SVG>,
  Clock: (p) => <SVG {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></SVG>,
  Mail: (p) => <SVG {...p}><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M22 6 12 13 2 6" /></SVG>,
  Phone: (p) => <SVG {...p}><path d="M22 16.92V21a1 1 0 0 1-1.1 1A19 19 0 0 1 2 4.1 1 1 0 0 1 3 3h4.09a1 1 0 0 1 1 .75l1 4a1 1 0 0 1-.27 1L7.21 10.2a16 16 0 0 0 6.59 6.59l1.46-1.61a1 1 0 0 1 1-.27l4 1a1 1 0 0 1 .74 1Z" /></SVG>,
  Facebook: (p) => <SVG {...p}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></SVG>,
  Instagram: (p) => <SVG {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" /></SVG>,
  X: (p) => <SVG {...p}><path d="M18 3 6 21M6 3l12 18" /></SVG>,
  Quote: (p) => <SVG {...p}><path d="M7 7h4v4H7v3a3 3 0 0 0 3 3M17 7h4v4h-4v3a3 3 0 0 0 3 3" /></SVG>,
  Sparkle: (p) => <SVG {...p}><path d="M12 3v6M12 15v6M3 12h6M15 12h6M5.6 5.6l4 4M14.4 14.4l4 4M5.6 18.4l4-4M14.4 9.6l4-4" /></SVG>,
  Star: (p) => <svg width={p.size ?? 18} height={p.size ?? 18} viewBox="0 0 24 24" fill="currentColor" style={p.style} aria-hidden><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>,
  Play: (p) => <svg width={p.size ?? 24} height={p.size ?? 24} viewBox="0 0 24 24" fill="currentColor" style={p.style} aria-hidden><path d="M8 5v14l11-7z"/></svg>,
  Menu: (p) => <SVG {...p}><path d="M4 7h16M4 12h16M4 17h16" /></SVG>,
  Check: (p) => <SVG {...p}><path d="m5 12 5 5L20 7" /></SVG>,
  Globe: (p) => <SVG {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></SVG>,
  Heart2: (p) => <svg width={p.size ?? 24} height={p.size ?? 24} viewBox="0 0 24 24" fill="currentColor" style={p.style} aria-hidden><path d="M12 21s-7-4.5-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.5-7 11-7 11Z"/></svg>,
  Wind: (p) => <SVG {...p}><path d="M3 8h13a3 3 0 1 0-3-3M3 12h17a3 3 0 1 1-3 3M3 16h11a3 3 0 1 0-3 3"/></SVG>,
};

window.Icons = Icons;
