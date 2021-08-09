// codewars String Repeat
function repeatStr (num, str) {
    let new_string = '';
    for(let i=0; i<num; i++){
        new_string += str}
    return new_string
};

// OR
function repeatStr2(num, str){
    return str.repeat(num)
}

console.log(repeatStr(5, 'Hi, Marcus! '))
console.log(repeatStr2(3, 'Hello'))

// codewars Grasshopper - Summation
var summation = function(num){
    let sum = 0;
    for(let i = 0; i<num+1; i++){
        sum+=i
    }
    return sum
};

console.log(summation(5))

//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let other_string = "This is another string with no matches"
let dog_names = ["HAS","PuRple","Max", "Dog"]

let findWords = (array_1, comp_str) => {
    for(let i = 0; i < array_1.length; i++){
        if(comp_str.includes(array_1[i])){
            console.log(`Matched ${array_1[i]}`)
        }else {
            console.log(`no matches`)
    } 
    }
};

console.log(findWords(dog_names, dog_string))

//Call method here with parameters



//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every value that's double is over 50.*/

let given_arr = [13, 22, 26, 40, 1, 10]

let replaceEvens = (arr) =>{
    smallDubs = [];
    for(let i=0; i<arr.length;i++){
        if((arr[i]*2)<50){
            smallDubs.push(arr[i])
        }
    }return smallDubs
};

console.log(replaceEvens(given_arr))

//Expected output
//Given arr == [13, 22, 26, 40, 1, 10]
//Output arr == [13, 22, 1, 10]
//Explanation: 13*2 < 50, 22*2 < 50, 26*2 > 50, etc...