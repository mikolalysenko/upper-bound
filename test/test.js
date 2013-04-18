var ub = require("../ub.js")

require("tap").test("upper bound", function(t) {

  t.equals(ub([0,1,1,1,2], -1), 0)
  t.equals(ub([0,1,1,1,2], 0), 1)
  t.equals(ub([0,1,1,1,2], 1), 4)
  t.equals(ub([0,1,1,1,2], 2), 5)
  t.equals(ub([0,1,1,1,2], 0.5), 1)
  t.equals(ub([0,1,1,1,2], 1.5), 4)
  t.equals(ub([0,1,1,1,2], 5), 5)
  
  t.equals(ub([0,2,5,6],-1), 0)
  t.equals(ub([0,2,5,6], 0), 1)
  t.equals(ub([0,2,5,6], 1), 1)
  t.equals(ub([0,2,5,6], 2), 2)
  t.equals(ub([0,2,5,6], 3), 2)
  t.equals(ub([0,2,5,6], 4), 2)
  t.equals(ub([0,2,5,6], 5), 3)
  t.equals(ub([0,2,5,6], 6), 4)
  
  function cmp(a,b) {
    return a - b
  }

  t.equals(ub([0,1,1,1,2], -1, cmp), 0)
  t.equals(ub([0,1,1,1,2], 0, cmp), 1)
  t.equals(ub([0,1,1,1,2], 1, cmp), 4)
  t.equals(ub([0,1,1,1,2], 2, cmp), 5)
  t.equals(ub([0,1,1,1,2], 0.5, cmp), 1)
  t.equals(ub([0,1,1,1,2], 1.5, cmp), 4)
  t.equals(ub([0,1,1,1,2], 5, cmp), 5)
  
  t.equals(ub([0,2,5,6],-1, cmp), 0)
  t.equals(ub([0,2,5,6], 0, cmp), 1)
  t.equals(ub([0,2,5,6], 1, cmp), 1)
  t.equals(ub([0,2,5,6], 2, cmp), 2)
  t.equals(ub([0,2,5,6], 3, cmp), 2)
  t.equals(ub([0,2,5,6], 4, cmp), 2)
  t.equals(ub([0,2,5,6], 5, cmp), 3)
  t.equals(ub([0,2,5,6], 6, cmp), 4)
  
  t.end()
})