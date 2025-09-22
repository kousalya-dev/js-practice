import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

export default function Main(){
    return(
        <BrowserRouter>
            <nav>
                <Link to='/'>Home</Link> | <Link to='/about'>About</Link>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />}/>
            </Routes>
        </BrowserRouter>
    )
}


function Home(){
    return(
        <div> Welcome to home! </div>
    )
}

function About(){
    return(
        <div> Welcome to About Page!</div>
    )
}

