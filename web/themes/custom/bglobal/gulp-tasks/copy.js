'use strict';

// Include gulp
const { src, dest } = require('gulp');

// Include Our Plugins
const gulpCopy = require('gulp-copy');

/**
 * Error handler function so we can see when errors happen.
 * @param {object} err error that was thrown
 * @returns {undefined}
 */
function handleError(err) {
  // eslint-disable-next-line no-console
  console.error(err.toString());
  this.emit('end');
}

// Export our tasks.
module.exports = {
  // Copy CSS files that are used in Drupal core and contrib modules.
  copyDrupalCSS: function() {
    const sourceFiles = [
      ' ',
      // An example of Drupal contrib CSS files that we might need in Styleguide.
      // '../../../modules/contrib/admin_toolbar/css/admin.toolbar.css',
    ];
    const destination = './dist/css/drupal_modules';

    return src(
      sourceFiles,
      { allowEmpty: true })
      .pipe(dest(destination));
  },

  // Copy JavaScript files that are used in Drupal core and contrib modules.
  copyDrupalJS: function() {
    const sourceFiles = [
      '../../../core/assets/vendor/jquery/jquery.min.js',
      '../../../core/assets/vendor/jquery-once/jquery.once.min.js',
      '../../../core/misc/drupalSettingsLoader.js',
      '../../../core/misc/drupal.js',
      '../../../core/misc/drupal.init.js',
      '../../../core/assets/vendor/underscore/underscore-min.js',
    ];
    const destination = './dist/js/drupal_core';

    return src(sourceFiles)
      .pipe(dest(destination));
  },

};
