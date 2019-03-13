import React, { Component } from "react"
import axios from "axios";
import Board from "../Board/Board";




class profile extends Component {
    constructor() {
        super();
        this.state = {
            users: {}
        }
        this.onClick = this.clickHandler.bind(this);
    }
    clickHandler(e) {
        e.preventDefault();
        
    }
    
    

    
    // axios calls
    componentDidMount () {
        axios.get('highscoressix.czi7s5zvjsvk.us-east-1.rds.amazonaws.com')
        .then(response => {
            // this.setState({user: response.data});
            console.log(response);
        });
    };

    render() {
        return (
            <div id="">
                <Board />
            </div>
        )

    }
}
export default profile;
