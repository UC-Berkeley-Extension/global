# Berkeley Global Test Content

This module uses the [Default Content](https://www.drupal.org/project/default_content) module to import content required as part of site configuration.

Specifically, we want to pre-create Taxonomy Terms.

Right now, this module will create:

* 2 images (in /web/sites/default/files/2020-10/)
* 2 media items that contain those images
* 2 Taxonomy terms in the 'school' vocabulary
* 1 Article node assigned to the school vocabulary.

The module is enabled as part of the site `setup.sh` process.

## Changing content

If we change one of these content items, it can be re-exported with the following drush command:

`drush dcem bglobal_test_content`

This command will re-export all of the content defined in this module's info.yml file.

You can export one piece of content at a time if you prefer:

`drush dcer TYPE ID` e.g. `drush dcer node 4`

Then find the UUID of the output and edit that file inside this module's `content` directory.

## Adding content

To add content, run the following:

`drush dcer TYPE ID` e.g. `drush dcer node 4`

This will output YML in the terminal that looks like so:

```
_meta:
  version: '1.0'
  entity_type: node
  uuid: 5fa3b8c8-556d-4cba-8fb9-314783c93d80
  bundle: article
  default_langcode: en
  depends:
    4f64c2b0-36fd-436f-bb06-12c0b1724d8c: taxonomy_term
default:
  revision_uid:
    -
      target_id: 1
  status:
...

```

Take the UUID element and name a new file UUID.yml inside the `content/TYPE` directory of this module. In the above case, that would be:

`content/node/5fa3b8c8-556d-4cba-8fb9-314783c93d80.yml`

Add the UUID to the `bglobal_test_content.info.yml` file:
```
  node:
    - 5fa3b8c8-556d-4cba-8fb9-314783c93d80
```

This *registers* the content for future import/export.
