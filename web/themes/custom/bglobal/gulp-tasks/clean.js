'use strict';

// Include Our Plugins
const del = require('del');

// Export our tasks.
module.exports = {
  // Clean CSS files.
  cleanCSS: function() {
    return del(['./dist/css/*'], { force: true });
  },

  // Clean JS files.
  cleanJS: function() {
    return del(['./dist/js/*'], { force: true });
  },

  cleanPublicJs: function() {
    return del(['./public/js/*'], { force: true });
  },

  // Clean image files.
  cleanImages: function() {
    return del(['./dist/images/*'], { force: true });
  },

  // Clean font files.
  cleanFonts: function() {
    return del(['./dist/fonts/*'], { force: true });
  },
};
