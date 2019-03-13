import React from "react";
import store from '../../js/store';
import Sudoku from "../../js/sudoku"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Controls extends React.Component {
    constructor(props) {
      super(props);
      this.state = store.getState();
    }
  
    componentDidMount() {
      var self = this;
      self.unsubscribe = store.subscribe(function() {
        self.setState(store.getState());
      });
    }
  
    componentWillUnmount() {
      this.unsubscribe();
    }
  
    render() {
      var time = this.state.game.time;
      function f(num) {
        if (num < 10) {
          return '0'+num;
        } else {
          return ''+num;
        }
      }
      return (
        <div className="controls">
          <p><Link to="/">Back</Link></p>
          {Sudoku.isComplete(this.state.game.cells)
            ? <p className="congratulations">Congratulations!</p>
            : <p>{f(time.getHours())+':'+f(time.getMinutes())+':'+f(time.getSeconds())}</p>}
        </div>
      )
    }
}

// class Index extends React.Component {
//     render() {
//       return (
//         <div className="index">
//           <h1>Sudoku</h1>
//           <p><Link to="new-game">Start a new game</Link></p>
//           {this.hasExistingGame()
//             ? <p>or <Link to="play">resume the existing one</Link></p>
//             : null}
//           <p>The code of this game is on&nbsp;
//           <a href="https://github.com/andreynering/sudoku" target="_blank">GitHub</a></p>
//         </div>
//       );
//     }
  
//     hasExistingGame() {
//       return (typeof localStorage.currentGame !== 'undefined');
//     }
// }

export default Controls;

