//return the sum of 1 to N.  For example Sum1toN(3) would return the sum of 1+2+3 which is 6.
//sum1toN(255) returns the sum of all numbers from 1 to 255
function Sum1toN(n){
    var x=0 
    for(i=0; i<= n; i++){
        x+=i
    }
    return x
}
//return the sum of the first number in the array and the last number in the array
function sumFirstLast(arr){
    var x=0
    x= arr[0]+arr[arr.length-1]
    return x
}
//create a test for a function that returns the largest number in the array.  For example, returnLargest([1,3,10]) should return 10.  returnLargest([-2,-5,-10]) should return -2
function returnLargest(x){
    var x= x[0]
    for(i=0; i<x.length; i++){
        if(x[i]>x){
            x= x[i]
        }
    }
    return x
}
    
describe("Sum1toN", function() { 
    it("should return 3 when we pass 2 as an argument", function() { 
        expect(Sum1toN(2)).toEqual(3); 
    }); 
    it("should return 6 when we pass 3 as an argument", function() { 
        expect(Sum1toN(3)).toEqual(6); 
    }); 
    it("should return 10 when we pass 4 as an argument", function() { 
        expect(Sum1toN(4)).toEqual(10); 
    });
    it("should return 15 when we pass 5 as an argument", function() { 
        expect(Sum1toN(5)).toEqual(15); 
    });  
});
    
describe("sumFirstLast", function() { 
    it("should return 3 when we pass [1,2] as an argument", function() { 
        expect(sumFirstLast([1,2])).toEqual(3); 
    }); 
    it("should return 10 when we pass [2,3,8] as an argument", function() { 
        expect(sumFirstLast([2,3,8])).toEqual(10); 
    }); 
    it("should return -10 when we pass [-6,23,3,-4] as an argument", function() { 
        expect(sumFirstLast([-6,23,3,-4])).toEqual(-10); 
    });
    it("should return 30 when we pass [10,2,3,20] as an argument", function() { 
        expect(sumFirstLast([10,2,3,20])).toEqual(30); 
    });  
});

describe("returnLargest", function() { 
    it("should return 6 when we pass [3,4,6] as an argument", function() { 
        expect(returnLargest([3,4,6])).toEqual(6); 
    }); 
    it("should return 22 when we pass [1,2,5,6,7,8,22] as an argument", function() { 
        expect(returnLargest([1,2,5,6,7,8,22])).toEqual(22); 
    }); 
});