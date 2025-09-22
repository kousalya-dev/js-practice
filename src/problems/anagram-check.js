//anagram check
let str1 = 'listen'
let str2 = 'silpnt'

if(str1.length !== str2.length){
    console.log("Anagram check is False")
}else{
    const result = str1.split('').sort().join('') === str2.split('').sort().join('');
    console.log('Anagram check is :', result)
}



//find greatest number 

