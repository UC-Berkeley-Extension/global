#!/bin/bash
# be in the right directory
cd /var/www/html/web
echo 'Copying default files...'
mkdir sites/default/files/2020-10
cp modules/custom/bglobal_test_content/assets/*.* sites/default/files/2020-10
echo 'Clearing cache...'
drush cr
echo 'Importing configuration...'
drush cim -y
echo 'Done!'
