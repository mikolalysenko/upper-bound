upper-bound
===========
Finds the first item in a sorted array greater than a given value.

# DEPRECATED

Use [binary-search-bounds](https://github.com/mikolalysenko/binary-search-bounds) instead

Use
===
First install using npm:

    npm install upper-bound
    
Then use as follows:

```javascript
var ub = require("upper-bound")

console.log(ub([0, 1, 1, 1, 2], 0))    // Prints 1
console.log(ub([0, 1, 1, 1, 2], 1))    // Prints 4
```

### `require("upper-bound")(array, value[, compare, lo, hi])`
Uses a binary search to find the first item which is greater than `value` in `array`.

* `array` a sorted list of items
* `value` the item to find
* `compare` a comparison function (optional)
* `lo` a lower bound to search on (optional)
* `hi` an upper bound on the range to search on (optional)

Credits
=======
(c) 2013 Mikola Lysenko. MIT License

