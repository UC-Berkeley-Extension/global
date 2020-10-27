<?php

// @see https://github.com/pantheon-systems/quicksilver-examples/tree/main/drush_config_import

// Don't run this automatically on the live environment.
if (isset($_ENV['PANTHEON_ENVIRONMENT']) && $_ENV['PANTHEON_ENVIRONMENT'] != 'live') {
  // Clear the cache to ensure all new code is picked up.
  echo "Rebuilding cache.\n";
  passthru('drush cache:rebuild');
  echo "Rebuilding cache complete.\n";

  // Import config changes.
  echo "Importing configuration from yml files...\n";
  passthru('drush config:import -y');
  echo "Import of configuration complete.\n";
}
