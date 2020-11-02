/**
 * @type {Drupal~behavior}
 */

var trackerValue = null;
var hasFired = null;
bglobalPardotSetTracker();

/**
 * Attaches the behavior to our Pardot form block.
 * @type {{attach: Drupal.behaviors.bglobalPardot.attach}}
 */
Drupal.behaviors.bglobalPardot = {
  attach: function (context, settings) {
    if (document.getElementById("pardot-hidden-full_path") !== null && hasFired === null) {
      document.getElementById("pardot-hidden-full_path").value = bglobalPardotGetTracker();
    }
  }
}

/**
 * Gets the tracker value for the form.
 * @returns string|array
 */
function bglobalPardotGetTracker() {
  hasFired = true;
  return trackerValue;
}

/**
 * Sets the tracker value for the user into local storage.
 *
 * @TODO: This code may need to live in another file that is always loaded, or we should
 * make sure to attach this library to all pages except admin.
 */
function bglobalPardotSetTracker() {
  trackerValue = 'Look! A value!';
  // Put your tracking code in here as the trackerValue variable.
}
