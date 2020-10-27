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
- phing
- terminus


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
    - `cd web/themes/custom/bglobal`
    - `npm install`
    - `npm start`
    - Visit the styleguide at https://127.0.0.1:3000
- If you *do not* have `node` installed on your machine:
    - `ddev ssh`
    - `cd web/themes/custom/bglobal`
    - `npm install`
    - `npm start`
    - Visit the styleguide at https://global.ddev.site:3000/

# Pattern Lab - Build
To build the styleguide without launching the Pattern Lab browser, you can run `npm start build` from within `cd web/themes/custom/bglobal/styleguide`.

# Pattern Lab - Deployment
Deployed styleguide can be viewed [here](https://uc-berkeley-extension.github.io/global/?p=atoms-welcome).

When the styleguide is deployed, it uses `gh-pages` branch on the repo, which should not be removed.

To deploy the styleguide, navigate to the theme's root (web/themes/custom/bglobal):
```
npm start
npm start deploy
```
Then visit the styleguide on github.io (link above), confirm that everything has been deployed properly.


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

# Deploying to Pantheon

The site is deployed to the `berkeleyglobal` Pantheon account and follows Pantheon's development workflow. We use Palantir's `The Build` to manage `phing` tasks for deployment.

Running the artifact process will automatically deploy to the `deploy` multisite environment on Pantheon. Once your changes have been tested there, you can merge them to the `dev` server using the Pantheon dashboard.

When deployments are pushed to `deploy`, `dev`, and `test` -- but not `live` -- configuration changes are imported automatically and the Drupal database update script is run.

*NOTE: the Pantheon build is not currently using Config Split, which may be desired for local development once the site goes live.*

## Building an Artifact

To build an artifact, follow these steps:

1. `ddev ssh`
1. `cd ..` -- This should put you in the `/var/www/html` directory
1. `phing artifact`
1. When prompted to `Push artifact changes to the 'deploy' branch?`, enter [0] to accept.

This process can take 5 minutes or so, as the entire node and composer install processes must take place.

For documentation on other commands available, see [The Build github documentation](https://github.com/palantirnet/the-build/blob/develop/docs/artifacts.md)

## Pre-deployment

When preparing an artifact for an environment other than `live`, normal best practice is to use the Pantheon dashboard to copy live database and files to the target environment. See [the Pantheon workflow documentation](https://pantheon.io/docs/pantheon-workflow) for details.

Best practice is to [create a site backup](https://pantheon.io/docs/backups) before deploying to `live`. You may also wish to backup `test` and `dev` before deploying there.

If a deployment goes wrong, you can [restore the site from your backup](https://pantheon.io/docs/restore-environment-backup).


## Post-deployment

After deploying an artifact, you can run additional commands using `drush` or `terminus`. On the `live` environment, you should always run `drush cim -y` and `drush updb -y` after a deployment.

### Pantheon scripts

Pantheon allows for automated tasks to run on deployment. These tasks are defined in the `pantheon.yml` file in the project root and live in the `web/private` directory.

## Additional `phing` Commands

The Build provides standard `phing` commands. The following commands have been tested for this project:

* `phing artifact`
  - Builds and deploys the application to Pantheon.
* `phing styleguide`
  - Installs node dependencies and builds the styleguide.

Other default `phing` commands should not be used at this time.

## Setting up Terminus

In order to use Terminus, Pantheon's command line tool, it is necessary to [install terminus using the Pantheon documentation](https://pantheon.io/docs/terminus/install) on the DDEV system.

You must also create a [machine token](https://pantheon.io/docs/machine-tokens) for use on the site.

We recommend installing `terminus` on the DDEV virtual machine.

## Using Drush aliases

Drush aliases let you use `drush` command on remote machines. To use `drush` on Pantheon, you must first install Terminus.

After you have intsalled terminus, run this command from inside DDEV: `terminus aliases`.

We prefer to run this inside the DDEV machine to ensure that Drush 10 is used at all times.

### Viewing site aliases

You can see your site aliases by running `drush sa`. Your alias list should include this entry:

```
'@pantheon.berkeleyglobal.*':

```

You can use this alias with any of the Pantheon environments by replacing the `*` with the environment name:

* `drush @pantheon.berkeleyglobal.deploy`
* `drush @pantheon.berkeleyglobal.dev`
* `drush @pantheon.berkeleyglobal.test`
* `drush @pantheon.berkeleyglobal.live`

To test that `drush` is working, the best command to use is `status`:

* `drush @pantheon.berkeleyglobal.dev status`

## Using ssh keys with DDEV

Running terminus and drush commands from within DDEV requires the use of ssh key-forwarding. To do so, follow these steps:

1. If you have an existing public ssh key, [add it to your Pantheon account](https://pantheon.io/docs/ssh-keys#add-your-ssh-key-to-pantheon).
   - If you do not, follow [the instructions](https://pantheon.io/docs/ssh-keys) to generate one.
1. From the project root, run `ddev auth ssh` to enable ssh key-forwarding into the DDEV shell.

# System Requirements
This setup has been tested with Mac OS X, but may work with other systems.
These setup steps only need to be run once.

## Git
These instructions assume you have Git setup on your local machine. See [the documentation on GitHub](https://docs.github.com/en/github/getting-started-with-github) for more information.

## PHP and Composer (optional)
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

## NodeJS and Yarn (Optional)
This is optional, and not recommended. You can run NodeJS and Yarn commands from inside the container.
Check the .nvmrc file for the version of Yarn that is being used in the container (10.15.3).
```
brew install node
brew install yarn
```

# DDEV Installation

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
