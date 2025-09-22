let str = 'kousalya'
//function finds first non-duplicated char 

function nonDuplicated(str){
    for(let char of str){
        if(str.indexOf(char) === str.lastIndexOf(char)){
            return char;
        }
    }
    return null;
}

const result = nonDuplicated(str);
console.log('output', result)