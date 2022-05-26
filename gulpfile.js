const babel = require("gulp-babel");
const terser = require("gulp-terser");
const { src, dest, series } = require('gulp');


function jsTask() {
    return src('app/JS/Script.js', { sourcemaps: true })
      .pipe(babel({ presets: ['@babel/preset-env'] }))
      .pipe(terser())
      .pipe(dest('Dist', { sourcemaps: '.' }));
  }



// Default Gulp Task
exports.default = series(jsTask);
exports.build = series(jsTask);
