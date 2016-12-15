export function $iArrayMerge(lhs, rhs, key = 'id') {
  if(lhs.length == 0) return rhs;
  if(rhs.length == 0) return lhs;
  lhs.sort(function (a, b) {
    return (a[key] > b[key])?1:(a[key] == b[key])?0:-1;
  });
  rhs.sort(function (a, b) {
    return (a[key] > b[key])?1:(a[key] == b[key])?0:-1;
  });
  let merged = [];
  let lhs_index = 0, rhs_index = 0, lhs_head, rhs_head, lhs_count = lhs.length, rhs_count = rhs.length;
  while (lhs_index != lhs_count && rhs_index != rhs_count) {
    lhs_head = lhs[lhs_index];
    rhs_head = rhs[rhs_index];
    if (lhs_head[key] < rhs_head[key]) {
      merged.push(lhs_head);
      lhs_index++;
    } else if (lhs_head[key] > rhs_head[key]){
      merged.push(rhs_head);
      rhs_index++;
    } else {
      //if lhs_head is the same with rhs_head, take the rhs_head, because rhs is the latest record.
      merged.push(rhs_head);
      lhs_index++;
      rhs_index++;
    }
  }
  if (lhs_index == lhs_count) {
    $arrayAppend.call(merged, rhs, rhs_index);
  }
  if (rhs_index == rhs_count) {
    $arrayAppend.call(merged, lhs, lhs_index);
  }
  return merged;
}
export function $arrayAppend(b, fromIdx = 0) {
  let count = b.length;
  if (fromIdx >= count) {
    return this;
  }
  while (fromIdx != count) {
    this.push(b[fromIdx++]);
  }
  return this;
}