
/*
⚡ Common events you’ll use in React with addEventListener:

"click" 

"keydown" / "keyup"

"scroll"

"resize"

"mouseover" / "mouseout"

"input" / "change"
*/

function CheckEvents(){
    const eventFunction = ()=>{
        document.getElementById("Box").addEventListener("box",()=>{
            alert("It is a box!")
        })
    }

    return (
        <div>
            Hello world!
        </div>
    )
}