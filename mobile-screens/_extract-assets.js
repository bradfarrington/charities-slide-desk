// Pulls base64-embedded fonts/images out of the Figma-exported HTML mobile
// screens and writes them as standalone files in ./assets, replacing each
// data: URI in the HTML with a relative path. Dedupes across files via a
// content-hash so the shared Bricolage font ships only once.

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const dir = __dirname;
const assetsDir = path.join(dir, 'assets');
fs.mkdirSync(assetsDir, { recursive: true });

const inputs = ['event-detail.html', 'booking.html', 'membership.html'];

function extract(file) {
  const full = path.join(dir, file);
  console.log(`reading ${file} (${(fs.statSync(full).size / 1e6).toFixed(1)} MB)`);
  let html = fs.readFileSync(full, 'utf8');

  const re = /data:(image|font)\/([a-zA-Z0-9.+-]+);base64,([A-Za-z0-9+/=]+)/g;
  let replaced = 0;
  html = html.replace(re, (_full, kind, type, b64) => {
    const buf = Buffer.from(b64, 'base64');
    const hash = crypto.createHash('sha256').update(buf).digest('hex').slice(0, 12);
    const ext = type.split('+')[0].toLowerCase();
    const prefix = kind === 'font' ? 'font' : 'img';
    const filename = `${prefix}-${hash}.${ext}`;
    const out = path.join(assetsDir, filename);
    if (!fs.existsSync(out)) fs.writeFileSync(out, buf);
    replaced++;
    return `assets/${filename}`;
  });

  fs.writeFileSync(full, html);
  console.log(`  → ${replaced} data URIs extracted, ${file} now ${(Buffer.byteLength(html, 'utf8') / 1e6).toFixed(2)} MB`);
}

inputs.forEach(extract);
console.log('done.');
