// DESCRIPTION

/* 
Find the smallest integer in the array

Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

// MY SOLUTION
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min.apply(null, args); 
  }
}

// TEST CASES
/*
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Smallest Integer Tests", () => {
  let sif = new SmallestIntegerFinder();
  it("Fixed Tests", () => {
    assert.strictEqual(sif.findSmallestInt([78,56,232,12,8]),8,'Should return the smallest int 8');
    assert.strictEqual(sif.findSmallestInt([78,56,232,12,18]),12,'Should return the smallest int 12');
    assert.strictEqual(sif.findSmallestInt([78,56,232,412,228]),56,'Should return the smallest int 56');
    assert.strictEqual(sif.findSmallestInt([78,56,232,12,0]),0,'Should return the smallest int 0');
    assert.strictEqual(sif.findSmallestInt([1,56,232,12,8]),1,'Should return the smallest int 1');
  });
  
  it("Random Tests", () => {
    
    function solv(_) {
      let n = _.sort((a,b)=>a-b)[0];
      return {ans:n,desc:`Should return the smallest int ${n}`};
    }
    
    for(let i=0;i<100;i++){
      let count = Math.floor(Math.random()*100)+100;
      let test = [];
      for(let x=0;x<count;x++){
        test.push(Math.floor(Math.random()*100000000));
      }
      let ans = solv(test.slice());
      assert.strictEqual(sif.findSmallestInt(test),ans.ans, ans.desc)
    }
  });
});  

*/