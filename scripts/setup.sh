#!/bin/bash
# be in the right directory
cd /var/www/html
echo 'Copying settings file...'
cp config/settings/settings.ddev.php web/sites/default
echo 'Installing site...'
cd web
mkdir sites/default/files/2020-10
cp modules/custom/bglobal_test_content/assets/*.* sites/default/files/2020-10
drush si --existing-config
echo 'Site installed...'
echo 'Copying development settings file...'
cp ../config/settings/development.services.yml sites/default
echo 'Done!'
drush cr
