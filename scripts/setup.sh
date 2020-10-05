#!/bin/bash
echo 'Installing Angular elements...'
cd /var/www/html/web/modules/contrib/pdb/modules/pdb_ng2
npm install 2>/dev/null
# be in the right directory
cd /var/www/html
echo 'Copying settings file...'
cp config/settings/settings.ddev.php web/sites/default
echo 'Removing old files...'
rm web/sites/default/files/2020-10/*-temp-* 2>/dev/null
echo 'Installing site...'
cd web
drush si --existing-config
echo 'Site installed...'
echo 'Copying development settings file...'
cp ../config/settings/development.services.yml sites/default
echo 'Done!'
drush cr
