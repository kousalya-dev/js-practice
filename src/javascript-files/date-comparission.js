const d1 = '23/05/2025'
const d2 = '2001-10-23'

//function compare two dates
function dateComparision(date1,date2){
    return new Date(date1) === new Date(date2)
}

//function check which is greater date
function checkGreaterDate(date1,date2){

    return date1 > date2 ? "date1 is greater" : "date2 is greater"
}

//function parse Date to correct date format (from : 23/09/2002) (to : 2002-09-23)
function dateParse(dateValue){
    const [date,month,year] = dateValue.split('/').map(Number)
    return new Date(year,month-1,date).toDateString()
}

const call1 = dateComparision(d1,d2)
const call2 = checkGreaterDate(d1,d2)
const call3 = dateParse(d1);

console.log("call1",call1,"call2",call2,"call3",call3)