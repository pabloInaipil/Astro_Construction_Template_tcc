// scripts/optimize-images.mjs
// Regenera las imágenes sobredimensionadas detectadas por PageSpeed.
// Uso: node scripts/optimize-images.mjs
// Sobreescribe los archivos en public/ (mismo nombre → no hay que tocar referencias).

import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';

// [archivo, ancho objetivo, calidad webp]
const targets = [
  // Hero slides: 1920px → 1600px, recomprimidas (el LCP es slide-01)
  ['public/hero/slide-01.webp', 1600, 70],
  ['public/hero/slide-02.webp', 1600, 70],
  ['public/hero/slide-03.webp', 1600, 70],
  ['public/hero/slide-04.webp', 1600, 70],
  ['public/hero/slide-05.webp', 1600, 70],
  // Galería ampliaciones: a tamaño real de display según PageSpeed
  ['public/proyectos/ampliaciones/ampliaciones.webp', 662, 72],
  ['public/proyectos/ampliaciones/ampliaciones2.webp', 662, 72],
  ['public/proyectos/ampliaciones/ampliaciones3.webp', 662, 72],
];

for (const [file, width, quality] of targets) {
  const input = await readFile(file);
  const before = (input.length / 1024).toFixed(1);
  const output = await sharp(input)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 6 })
    .toBuffer();
  const meta = await sharp(output).metadata();
  await writeFile(file, output);
  console.log(
    `${file}: ${before} KB -> ${(output.length / 1024).toFixed(1)} KB (${meta.width}x${meta.height})`
  );
}
