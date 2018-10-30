import React, { Component } from 'react';
import './App.css';
import List from './List';// import the list component

class App extends Component {
  constructor(props) { //App constructor
    super(props); // Component constructor
    this.state = { // the state of the app
      term: '', // current todo that the user is typing
      items: [] // the current todo will be saved here when the user type save
    };
  }
  onChange = (event) => { //onchange method
    this.setState({term: event.target.value}); // update the state.term with the current value of the input
  }
  onSubmit = (event) => {// onSubmit method
    event.preventDefault() // prevent the default form behavour
    this.setState({ // used to change the state of the app
      term: '',// reset the term; clears the input field
      items: [...this.state.items, this.state.term] // copy the state.items and add the user's input without mutating the default array
    });
  }
  render() {
    return (
      <div>
      <form className="App" onSubmit={this.onSubmit}>
      {/**Displays the state.term value in the text area */ }
      <input value={this.state.term} 
       onChange={this.onChange} />
       {/** the react onChange event will run the onChange method anytime the user type or delete the iput value */}
      <button>Submit</button>
  </form>
  {/* Dispays the list */}
  <List items={this.state.items} /> {/* call the list component and pass {this.state.items} as the props */}
  </div>
    );
  }
}

export default App;
