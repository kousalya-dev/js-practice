// There are 5 phases in Event Loop

/*
Phase 1 : Timer phase
Phase 2 : Pending Phase
Phase 3 : Poll Phase
Phase 4 : Check Phase
Phase 5 : close phase

 ┌───────────────────────────┐
 │           Timers          │ ← setTimeout, setInterval
 └──────────────┬────────────┘
                │
 ┌──────────────▼────────────┐
 │    Pending Callbacks      │ ← system callbacks
 └──────────────┬────────────┘
                │
 ┌──────────────▼────────────┐
 │        Poll (I/O)         │ ← incoming requests, fs.readFile, etc.
 └──────────────┬────────────┘
                │
 ┌──────────────▼────────────┐
 │          Check            │ ← setImmediate
 └──────────────┬────────────┘
                │
 ┌──────────────▼────────────┐
 │     Close Callbacks        │ ← socket.on("close")
 └───────────────────────────┘

(Microtasks: process.nextTick, Promises → run *between each step*)


Synchronous code first.

Then microtasks (nextTick > Promises).

Then event loop phases: Timers → Pending → Poll → Check → Close.


1. Run synchronous code (main stack)

2. Process Microtasks (before moving to event loop phase):
   ├─ process.nextTick()    (highest priority in Node.js)
   └─ Promise callbacks (then/catch/finally)

3. Enter Event Loop Phases (repeat cycle):
   ┌───────────────────────────────┐
   │ Timers Phase                  │ ← setTimeout, setInterval
   ├───────────────────────────────┤
   │ Pending Callbacks Phase       │ ← some system-level callbacks
   ├───────────────────────────────┤
   │ Poll Phase                    │ ← waiting for I/O (fs, net, etc.)
   ├───────────────────────────────┤
   │ Check Phase                   │ ← setImmediate
   ├───────────────────────────────┤
   │ Close Callbacks Phase         │ ← socket.on("close"), etc.
   └───────────────────────────────┘

   (Between every phase, run microtasks again: nextTick → Promises)


*/


const a = setInterval(()=>{
    console.log("Im Interval")
},1000)

const b = setTimeout(()=>{
    console.log("Im On Timeout")
},2000)

const c = setImmediate(()=>{
    console.log("Im on SetImmediate")
})

process.nextTick(()=>{
    console.log("Im inside nextTick")
})

clearInterval(a)
clearTimeout(b)
clearImmediate(c)