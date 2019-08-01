const disease = require('./diseases.json');

export const top_three = (res) =>{
    if(!(Object.keys(res.disease).length === 0)){
    /*const tops = res.disease.result.sort().reverse();
    console.log(tops)*/
  /* const test= res.disease.result.map((val, ind) => {return {ind, val}})
           .sort().resverse()
           .map((obj) => obj.ind);
           console.log(test)
    }*/
   let indexedTest;

indexedTest = res.disease.result.map(function(e,i){return {ind: i, val: e}});
console.log(indexedTest)
// sort index/value couples, based on values
indexedTest.sort().reverse();
// make list keeping only indices
const indices = indexedTest.map(function(e){return e.ind});
console.log(indices)
   
}
}