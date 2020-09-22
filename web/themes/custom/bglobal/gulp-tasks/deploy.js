'use strict';

// Include gulp
const { src, dest } = require('gulp');

// Include Our Plugins
const deploy = require('gh-pages');

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

  // Push build to gh-pages
  createGHPages: function() {
    return deploy.publish(
      'patternlab',
      function(err) {}
    );
  },
}
