# Debugging
- `echo` to print stuff, <pre> helps format it.
- `var_dump()` for strings. If you try to var_dump drupal arrays it breaks
- `dd()` for complex arrays

```
echo '<pre>' . __FILE__ . ': ' . $node_type;
var_dump($variables['content']);
echo '</pre>';

dd($variables)
```