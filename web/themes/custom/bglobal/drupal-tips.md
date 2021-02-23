# Debugging

## Debugging PHP
- `echo` to print stuff, <pre> helps format it.
- `var_dump()` for strings. If you try to var_dump drupal arrays it breaks
- `dd()` for complex arrays

```
echo '<pre>' . __FILE__ . ': ' . $node_type;
var_dump($variables['content']);
echo '</pre>';

dd($variables)
```

## Debugging Twig
```
    var dump: {{ content | json_encode(constant('JSON_PRETTY_PRINT')) }}
```

## Resources
* [Working with Entity fields programmatically][https://drupalbook.org/drupal/9111-working-entity-fields-programmatically]
    - How to get and set stuff from fields