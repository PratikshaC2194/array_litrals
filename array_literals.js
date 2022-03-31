using array literals
[let arr=[1,"sai",3,42.3,5,{id:1,name:"harsh"},7];

 console.log("arr",arr);

 usinng constructor function

let anotherArr=new Array(1,2,3,4,5,6,6);

// console.log("anotherArr",anotherArr);

//push,pop,shift,unshift

// let values=["a","e","i","o","u"];

// //length of the array
// console.log(values.length);

 values[10]=12;

console.log(values[6]);

// console.log(values);
// values.push(1);
// console.log(values);
// values.pop();
// console.log(values);
// values.shift();//removes from end
// console.log();
// values.unshift();//removes from start
// console.log(values);

function to find out the length of var or strings in array

 function countString (arr) {   let count = 0;
     let tempArr = [];
     for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (typeof(element)==="string") count++;
        // if (typeof(element)==="string") tempArr.push(element)
   }
   return count;
}

const result = countString(["a", "b", "c", 1, 3, 5]);
console.log(result);
