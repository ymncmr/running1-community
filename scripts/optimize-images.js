const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '..', 'site', 'assets');

async function convertToWebP() {
  const files = fs.readdirSync(assetsDir);
  let total = 0, saved = 0;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') continue;

    const input = path.join(assetsDir, file);
    const outputName = path.basename(file, ext) + '.webp';
    const output = path.join(assetsDir, outputName);

    try {
      await sharp(input).webp({ quality: 82 }).toFile(output);
      const inSize = fs.statSync(input).size;
      const outSize = fs.statSync(output).size;
      const pct = ((1 - outSize / inSize) * 100).toFixed(1);
      const inMB = (inSize / 1024 / 1024).toFixed(2);
      const outMB = (outSize / 1024 / 1024).toFixed(2);
      console.log(`  ${file} (${inMB}MB) → ${outputName} (${outMB}MB)  -${pct}%`);
      total += inSize;
      saved += (inSize - outSize);
    } catch (err) {
      console.error(`  FAILED: ${file} — ${err.message}`);
    }
  }

  const totalMB = (total / 1024 / 1024).toFixed(1);
  const savedMB = (saved / 1024 / 1024).toFixed(1);
  const pct = ((saved / total) * 100).toFixed(1);
  console.log(`\nDone. ${savedMB}MB saved of ${totalMB}MB total (-${pct}%)`);
}

convertToWebP();
