#!/bin/bash
# be in the right directory
cd /var/www/html
echo 'Removing old development settings...'
echo 'Copying settings file...'
cp config/settings/settings.ddev.php web/sites/default
echo 'Installing site...'
cd web
drush si --existing-config
echo 'Site installed...'
echo 'Copying development settings file...'
cp ../config/settings/development.services.yml sites/default
echo 'Done!'
drush cr
