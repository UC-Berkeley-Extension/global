# global
UC Berkeley Global Programs Drupal 9 site

# Getting Started

- Clone this project.
- `cd global`
- See the DDEV Instructions for setup
- `composer install`

## New Installations

From your host machine
- `cd global`
- `ddev start`
- `ddev ssh` -- You might open this in a new terminal tab.

You should now be in the DDEV virtual machine at the prompt:

`USERNAME@global-web:/var/www/html/web$`

Run the following commands.
- `cp ../config/settings/settings.ddev.php sites/default`
- `drush si --existing-config`
- Then note the password given at the end of installation.

Visit https://global.ddev.site and login as `admin` with the password.

Hint: If you forget the password, use `drush uli` to get a login link.

## Updating

From your host machine
- `cd global`
- `git pull`
- `composer install`
- `ddev start` -- If ddev is not running.
- `ddev ssh` -- You might open this in a new terminal tab.

From DDEV
- `drush cr`
- `drush cim`

And you should be all set!
