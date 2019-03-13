import React, { Component } from 'react'; 
import './App.css';
import axios from 'axios';


// Navbar
import Navbar from '../Components/Navbar/Navbar'

// Home Page
import Home from '../Components/HomePage/Home';

// Login
import Login from '../Components/Login/Login';

// Profile
import UProfile from '../Components/Profile/UProfile';

// Game Room
import Board from '../Components/Board/Board';

// Game Modes
import Easy from '../Components/GameModes/Easy/Easy';
import Medium from '../Components/GameModes/Medium/Medium';
import Hard from '../Components/GameModes/Hard/Hard';

// Score Board
import ScoreBoard from '../Components/ScoreBoard/ScoreBoard';




class App extends Component {
  

  render() {
    return (
      <div className="App">
        <div className="container">
          <Navbar />
        </div>
      </div>
    );
  }

}

export default App;



// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// function BasicExample() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//         </ul>

//         <hr />

//         <Route exact path="/" component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/topics" component={Topics} />
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function About() {
//   return (
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }

// function Topics({ match }) {
//   return (
//     <div>
//       <h2>Topics</h2>
//       <ul>
//         <li>
//           <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//         </li>
//       </ul>

//       <Route path={`${match.path}/:topicId`} component={Topic} />
//       <Route
//         exact
//         path={match.path}
//         render={() => <h3>Please select a topic.</h3>}
//       />
//     </div>
//   );
// }

// function Topic({ match }) {
//   return (
//     <div>
//       <h3>{match.params.topicId}</h3>
//     </div>
//   );
// }

// export default BasicExample;
{/* <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/scores">Scores</Link>
            </li>
          </ul>
  
          <hr />
  
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={UProfile} />
          <Route path="/scores" component={ScoreBoard} />
        </div>
      </Router> */}