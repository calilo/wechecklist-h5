export function __extend(a, b) {
  let r = {};
  for(let k in a) {
    r[k] = a[k];
  }
  for(let k in b) {
    r[k] = b[k];
  }
  return r;
}