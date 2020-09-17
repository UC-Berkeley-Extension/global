#!/bin/bash
# be in the right directory
cd /var/www/html
echo 'Copying settings file...'
cp config/settings/settings.ddev.php web/sites/default
echo 'Installing site...'
cd web
drush si --existing-config
echo 'Done!'
