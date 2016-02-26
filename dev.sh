babel --presets react js/src/ --out-dir js/build/
browserify -t [ babelify --presets [ react ] ] js/build/grid.js -o js/build/bundle.js
