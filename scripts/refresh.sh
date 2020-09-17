#!/bin/bash
# be in the right directory
cd /var/www/html/web
echo 'Clearing cache...'
drush cr
echo 'Importing configuration...'
drush cim -y
echo 'Done!'
