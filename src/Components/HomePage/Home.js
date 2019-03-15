import React from "react"
import { button } from 'react-router-dom'

const home = () => {
    return (
        <div className= "container" style={{marginTop: 0, paddingTop:0}}>
            <h1 style={{marginTop: 0, paddingTop:0}}>Hello, welcome to sudoku!</h1>
            <p>Are you ready to play?</p>
            <button><a href='../Login/Login.js'>Let's Go!</a></button>
        </div>
    )
}

export default home;