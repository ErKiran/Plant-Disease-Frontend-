const disease = require('./diseases.json');

export const top_three = (res) =>{
    if(!(Object.keys(res.disease).length === 0)){
let test = res.disease.result
let test_with_index = [];
for (let i in test) {
    test_with_index.push([test[i], i]);
}
test_with_index.sort(function(left, right) {
  return left[0] < right[0] ? -1 : 1;
}).reverse();
var indexes = [];
test = [];
for (let j in test_with_index) {
    test.push(test_with_index[j][0]);
    indexes.push(test_with_index[j][1]);
} 
let result = test.map(function (x, i) { 
    return [x, Object.keys(disease)[indexes[i]]] 
});
return result
}
}