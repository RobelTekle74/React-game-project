class DifficultyDialog extends React.Component {
    shouldComponentUpdate(newProps, newState) {
      return false;
    }
  
    constructor(props) {
      super(props);
      this.state = Store.getState();
  
      this.difficultyClick = this.difficultyClick.bind(this);
    }
  
    componentDidMount() {
      var self = this;
      self.unsubscribe =  Store.subscribe(function() {
        self.setState(Store.getState());
      });
    }
  
    componentWillUnmount() {
      this.unsubscribe();
    }
  
    render() {
      return (
        <div className="dialog">
          <Link to="/" className="dialog-close">&#x2715;</Link>
          <p>Please, choose the difficulty:</p>
          <button data-difficulty="easy" onClick={this.difficultyClick}>Easy</button>
          <button data-difficulty="medium" onClick={this.difficultyClick}>Medium</button>
          <button data-difficulty="hard" onClick={this.difficultyClick}>Hard</button>
        </div>
      );
    }
  
    difficultyClick(event) {
      event.preventDefault();
      var difficulty = event.target.getAttribute('data-difficulty');
      Store.dispatch({type: 'NEW_GAME', difficulty});
      location.hash = 'play';
    }
  }