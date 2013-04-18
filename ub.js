"use strict"

function upperBound_cmp(array, value, compare, lo, hi) {
  lo = lo|0
  hi = hi|0
  while(lo < hi) {
    var m = (lo + hi) >>> 1
      , v = compare(value, array[m])
    if(v < 0) {
      hi = m-1
    } else if(v >= 0) {
      lo = m+1
    }
  }
  if(hi >= 0 && hi < array.length && compare(array[hi], value) > 0) {
    return hi
  }
  return hi+1
}

function upperBound_def(array, value, lo, hi) {
  lo |= 0
  hi |= 0
  while(lo < hi) {
    var m = (lo + hi) >>> 1
    if(value < array[m]) {
      hi = m-1
    } else if(value >= array[m]) {
      lo = m+1
    }
  }
  if(hi >= 0 && hi < array.length && array[hi] > value) {
    return hi
  }
  return hi+1
}


function upperBound(array, value, compare, lo, hi) {
  if(!lo) {
    lo = 0
  }
  if(typeof(hi) !== "number") {
    hi = array.length-1
  }
  if(compare) {
    return upperBound_cmp(array, value, compare, lo, hi)
  }
  return upperBound_def(array, value, lo, hi)
}

module.exports = upperBound

