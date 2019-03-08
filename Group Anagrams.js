/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  var map= {};
  for(let i=0;i<strs.length;i++){
      let cur = strs[i].split('').sort().join('');
      // console.log(cur);
      if(map[cur]==undefined) map[cur] = [];
      map[cur].push(strs[i])
  }
  return Object.keys(map).map(key=>{
      return map[key]
  })
};