# global
UC Berkeley Global Programs Drupal 9 site

## System Requirements
This setup has been tested with MacOS, but may work with other systems.
These setup steps only need to be run once.

### (Optional) Php and Composer
This is optional, but recommended. Composer runs much more quickly outside the container than inside.
You can use Homebrew to install both:
See https://brew.sh/ for documentation and installation instructions.
```
brew install php@7.3
brew install composer
```

### (Optional) NodeJS and Yarn
This is optional, and not recommended. You can run NodeJS and Yarn commands from inside the container.
Check the .nvmrc file for the version of Yarn that is being used in the container (10.15.3).
```
brew install node
brew install yarn
```

### DDEV Instructions
This readme will cover the basic installation of DDEV, with some recommendations. You can also follow instructions at https://ddev.readthedocs.io/en/stable/
You need to install Docker Desktop for Mac first. You may need to create an account.
https://hub.docker.com/editions/community/docker-ce-desktop-mac.

Install DDEV with Homebrew:
```
brew tap drud/ddev
brew install ddev
```
See last section of the Readme for recommended configuration for DDEV.

# Getting Started

- Clone this project. 
  - `git clone git@github.com:UC-Berkeley-Extension/global.git`
- `cd global`
- See the DDEV Instructions (and Recommended DDEV configuration) for setup
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
- For config export and import, use `drush cex` (export) and `drush cim` (import)

*Tip:* You can instead run the single shell command:
- `/var/www/html/scripts/refresh.sh`

And you should be all set!

## Troubleshooting

If the shell scripts will not execute, it may be because git doesn't include permissions on files.

Run the following commands from your host machine:

- `cd scripts`
- `chmod 665 *.sh`
- `chmod +x *.sh`

## Recommended DDEV configuration

### Set up NFS (file system sharing)
This will make file changes available to the ddev environment quickly and consistently. Without NFS, files may occasionally get "stuck" at an older version.
Either follow the official documentation here Using NFS to Mount the Project into the Web Container, or use these steps:

1. Before you set up NFS, DDEV needs to be run once:
```
ddev start
```

2. Add the project path to your /etc/exports file, which will look something like this:
```
# DDEV
"/System/Volumes/Data/Users/[YOUR USERNAME HERE]/Sites/global" --alldirs -mapall=501:20 localhost
```
  - You will need to provide the path to the project. This may be within /System/Volumes/... or it may be directly within your user directory like /Users/YOU/Sites/global.
  - The 501 here may need to be replaced with your user ID. You can use the script mentioned in the documentation above if you don’t want to manually create those.

3. Edit your `/etc/nfs.conf`:
```
# For DDEV
nfs.server.mount.require_resv_port = 0
```

4. Restart the NFS service:
```
sudo nfsd restart
```

5. Finally, verify that NFS is configured correctly for the project:
```
ddev debug nfsmount
```

###Set up a certificate
This makes HTTPS work without those “This is dangerous” notices.
- SSH into the ddev container `ddev ssh`
- From inside the container, run `mkcert -install`
