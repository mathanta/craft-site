const { readdirSync, writeFileSync } = require('fs');
const path = require('path');

const craftsDir = path.join(process.cwd(), 'public/crafts');
const files = readdirSync(craftsDir);

const outputPath = path.join(craftsDir, 'manifest.json');
writeFileSync(outputPath, JSON.stringify(files, null, 2));

console.log(`✅ Wrote ${files.length} files to manifest.json`);