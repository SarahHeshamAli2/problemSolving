



// function that takes array of numbers and return new filtered array that only contains even number

function returnEvenNumberInArray(arr) {

let filteredArray = arr.filter((number)=>number %2 ==0)
console.log(filteredArray);
 


}


returnEvenNumberInArray([10,8,2,5,3,6])





//function that takes array of number and return largest number in array

let myArray = [10,5,8,12]



function largestNumberInArray (array) {


    console.log(Math.max(...array));
    
}


largestNumberInArray(myArray)



//another way

function anotherWayToReturnLargestNumber(arr) {
    let largest = arr[0]
    for (let i=0 ; i <arr.length  ; i++) {
    if(arr[i] > largest) {
       
        largest = arr[i]
        
        
    
    }
    
    }
    console.log(largest);


}


anotherWayToReturnLargestNumber([10,20,50,1000,3])









//function to reverse a string 

function reverseString(string) {




    console.log(string.split('').reverse().join('')
);
    



}
 reverseString('sarah')











//function to remove duplicates value from an array

function removesDuplicate(array) {


    let mySet = new Set (array)
    let newFilteredArray = [...mySet]

    console.log(newFilteredArray);
    



}




removesDuplicate([10,10,2,5,3,5,2,1])
