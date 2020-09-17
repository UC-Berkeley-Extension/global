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

*Tip:* You can instead run the single shell command:
- `/var/www/html/scripts/setup.sh`

Visit https://global.ddev.site and login as `admin` with the password provided to you.

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

*Tip:* You can instead run the single shell command:
- `/var/www/html/scripts/refresh.sh`

And you should be all set!

## Troubleshooting

If the shell scripts will not execute, it may be because git doesn't include permissions on files.

Run the following commands from your host machine:

- `cd scripts`
- `chmod 665 *.sh`
- `chmod +x *.sh`
