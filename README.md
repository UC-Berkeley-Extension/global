# UC Berkeley Global Programs
UC Berkeley Global Programs Drupal 9 site

This project requires the following software on OS X:

- [Docker](https://hub.docker.com/editions/community/docker-ce-desktop-mac/)
- Git
- [DDEV](https://ddev.readthedocs.io/en/stable/)
- PHP 7.3 or higher
- Composer

See the [System Requirements](#system-requirements) section for information about installing these applications.

# Getting Started

## Checkout the Project

Virtual machines like DDEV run best from your Sites directory.

- `cd ~/Sites`

Then clone this project.
- `git clone git@github.com:UC-Berkeley-Extension/global.git`
- `cd global`
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

*Hint:* If you forget the password, use `drush uli` to get a login link.

## Updating After Installation

From your host machine
- `cd global`
- `git pull`
- `composer install`
- `ddev start` -- If ddev is not running.
- `ddev ssh` -- You might open this in a new terminal tab.

From DDEV
- `drush cr`
- For config export and import, use `drush cex` (export) and `drush cim` (import)

*Tip:* You can instead run the single shell command:
- `/var/www/html/scripts/refresh.sh`

And you should be all set!

## Running Commands

We prefer to run the following commands from your host machine:

- git
- composer
- npm

And run these from inside the DDEV container:

- drush
- node
- yarn

## Troubleshooting

If you see this on running `ddev start`: 
```
=== Running task: Exec command 'cp /var/www/html/config/settings/settings.ddev.php /var/www/html/web/sites/default' in container/service 'web', output below 
cp: cannot create regular file '/var/www/html/web/sites/default/settings.ddev.php': Permission denied
task failed: Exec command 'cp /var/www/html/config/settings/settings.ddev.php /var/www/html/web/sites/default' in container/service 'web': exit status 1 
```
Try `chmod -R a+w web/sites/`

If the shell scripts will not execute, it may be because git doesn't include permissions on files.

Run the following commands from your host machine:

- `cd scripts`
- `chmod 665 *.sh`
- `chmod +x *.sh`

# Pattern Lab
We are using [Pattern Lab](https://patternlab.io/) for the component-based styleguide for the project. Pattern Lab is a node-based system that can integrate with Drupal themes.

To get started with Pattern Lab, follow these steps:

- On your host machine, go to the `global` directory.
- If you have `node` installed on your machine:
    - `cd web/themes/custom/bglobal/styleguide`
    - `npm install`
    - `npm start`
    - Visit the styleguide at https://127.0.0.1:3000
- If you *do not* have `node` installed on your machine:
    - `ddev ssh`
    - `cd web/themes/custom/bglobal/styleguide`
    - `npm install`
    - `npm start`
    - Visit the styleguide at https://global.ddev.site:3000/

## Troubleshooting Pattern Lab

* Pattern Lab may load on a port other than 3000. When `npm start` completes, your browser should autoload the correct page. It will also be visible in the terminal:
    ```
    [Browsersync] Access URLs:
    ----------------------------------
       Local: http://localhost:3002
    External: http://10.0.1.6:3002
    ----------------------------------

    ```
* If you get a 404 on the homepage, but still see the navigation, run the following from the project root:

    `cp -r web/themes/custom/bglobal/public/dist/html web/themes/custom/bglobal/public/styleguide/html`

* If you see an error on the homepage like `Twig\Error\LoaderError: Template "@<%= themeNameMachine %>/message/message.twig" is not defined ` you may need to rebuild the node_modules for the styleguide.

  - From the host machine:
  - `cd web/themes/custom/bglobal`
  - `rm -rf node_modules`
  - `npm install`
  - `npm start`

# System Requirements
This setup has been tested with Mac OS X, but may work with other systems.
These setup steps only need to be run once.

### Git
These instructions assume you have Git setup on your local machine. See [the documentation on GitHub](https://docs.github.com/en/github/getting-started-with-github) for more information.

### PHP and Composer (optional)
OS X should already have PHP 7.3 installed. If not, install with the instructions below.

[Composer](https://getcomposer.org/) is a command-line package manager used to manage Drupal projects. Installing Composer on your machine is optional, but recommended. Composer runs much more quickly outside the container than inside.

You can use Homebrew (a command-line OS X installer) to install both:
See https://brew.sh/ for documentation and installation instructions.

To install Homebrew:
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```
This action requires *administrator* permissions on your machine.


Once installed:
```
brew install php@7.3
brew install composer
```

### NodeJS and Yarn (Optional)
This is optional, and not recommended. You can run NodeJS and Yarn commands from inside the container.
Check the .nvmrc file for the version of Yarn that is being used in the container (10.15.3).
```
brew install node
brew install yarn
```

## DDEV Installation

[DDEV](https://www.ddev.com/) is a local development environment for use with Drupal and WordPress. DDEV is well-supported and provides community support.

This section will cover the basic installation of DDEV, with some recommendations. You can also follow instructions at https://ddev.readthedocs.io/en/stable/
You need to install Docker Desktop for Mac first. You may need to create an account.
https://hub.docker.com/editions/community/docker-ce-desktop-mac.

Install DDEV with Homebrew:
```
brew tap drud/ddev
brew install ddev
```
See [Recommended DDEV configuration](#recommended-ddev-configuration) to complete the  recommended configuration for DDEV.

## Recommended DDEV Configuration

### Set up NFS (file system sharing)
This will make file changes available to the ddev environment quickly and consistently. Without NFS, files may occasionally get "stuck" at an older version.
Either follow the official documentation here Using NFS to Mount the Project into the Web Container, or use these steps:

1. Before you set up NFS, DDEV needs to be run once:

    From your host machine:
    ```
    cd global
    ddev start
    ```

2. Add the project path to your /etc/exports file, which will look something like this:
    ```
    # DDEV
    "/System/Volumes/Data/Users/[YOUR USERNAME HERE]/Sites/global" --alldirs -mapall=501:20 localhost
    ```
      - You will need to provide the path to the project. This may be within /System/Volumes/... or it may be directly within your user directory like /Users/YOU/Sites/global.
      - The 501 here may need to be replaced with your user ID. You can use the script mentioned in the documentation above if you don’t want to manually create those.

    This action requires *administrator* permissions on your machine.

3. Edit your `/etc/nfs.conf`:
    ```
    # For DDEV
    nfs.server.mount.require_resv_port = 0
    ```
    This action requires *administrator* permissions on your machine.

4. Restart the NFS service:
    ```
    sudo nfsd restart
    ```
    This action requires *administrator* permissions on your machine.

5. Finally, verify that NFS is configured correctly for the project:
    ```
    ddev debug nfsmount
    ```

### Set up a certificate
This makes HTTPS work without those “This is dangerous” notices.
- SSH into the ddev container `ddev ssh`
- From inside the container, run `mkcert -install`
