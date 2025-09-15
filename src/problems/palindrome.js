//check palindrome

let normalStr = 'madam'
let reversedStr = ''

for(let i= normalStr.length-1; i>=0; i--){
    reversedStr += normalStr[i];
}
if(normalStr === reversedStr){
    console.log("Given value is palindrome")
}else{
    console.log("Given value is not palindrome")
}