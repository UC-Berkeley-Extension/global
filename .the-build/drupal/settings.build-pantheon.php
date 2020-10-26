<?php

/**
 * @file
 * Drupal settings file template for use on Pantheon environments.
 */

$settings['config_sync_directory'] = '${drupal.site.config_sync_directory}';

/**
if (isset($_ENV['PANTHEON_ENVIRONMENT'])) {
  switch ($_ENV['PANTHEON_ENVIRONMENT']) {
    case 'test':
      $config['config_split.config_split.test']['status'] = TRUE;
      break;
    case 'live':
      $config['config_split.config_split.live']['status'] = TRUE;
      break;
    case 'dev':
    default:
      // Multidev catchall
      $config['config_split.config_split.dev']['status'] = TRUE;
      break;
  }

}*/
