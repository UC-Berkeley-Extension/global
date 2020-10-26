<?php

/**
 * @file
 * Drupal settings file template for use on Pantheon environments.
 */

/**
 * Load services definition file.
 */
$settings['container_yamls'][] = __DIR__ . '/services.yml';

/**
 * Include the Pantheon-specific settings file.
 *
 * n.b. The settings.pantheon.php file makes some changes
 *      that affect all envrionments that this site
 *      exists in.  Always include this file, even in
 *      a local development environment, to insure that
 *      the site settings remain consistent.
 */
include __DIR__ . "/settings.pantheon.php";


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
