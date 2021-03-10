<?php

// Don't run this automatically on the live environment.
if (isset($_ENV['PANTHEON_ENVIRONMENT']) && $_ENV['PANTHEON_ENVIRONMENT'] != 'live') {
  // Run Drupal database updates.
  echo "Running database updates.\n";
  passthru('drush updatedb');
  echo "Database updates complete.\n";
}
