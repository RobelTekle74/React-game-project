import React from "react"
// import { Button } from 'react-router-dom'
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import './Home.css'

const home = () => {
    return (
        <div className= "container" style={{marginTop: 0, paddingTop:0}}>
            <h1 style={{marginTop: 0, paddingTop:0}}>Hello, welcome to sudoku!</h1>
            <p>Are you ready to play?</p>
            <Button className='letsgo'><a href='../Login/Login.js'>Let's Go!</a></Button>
        </div>
    )
}

export default home;