#!/bin/bash
# be in the right directory
cd /var/www/html/web
echo 'Copying settings file...'
cp ../config/settings/settings.ddev.php sites/default
echo 'Copying development settings file...'
cp ../config/settings/development.services.yml sites/default
echo 'Clearing cache...'
drush cr
echo 'Importing configuration...'
drush cim -y
echo 'Done!'
