const result = require('esbuild').buildSync({
    entryPoints: ['index.jsx'],
    bundle: true,
    metafile: true,
    outfile: 'main.js',
  })

require('fs').writeFileSync('./esbuild_dist/meta.json', JSON.stringify(result.metafile))