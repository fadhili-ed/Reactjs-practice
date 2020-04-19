import React from 'react'
import './App.css';
import CSVReader from 'react-csv-reader'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''}
    this.state = {date: new Date()};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state.value);
    console.log(this.state.date);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Deposits Form</h1>
        <form onSubmit={this.handleSubmit}>
          <br></br>
          <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Amount"/> <br></br>
          <input type="text" value={this.state.date.toLocaleDateString()} /><br></br>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default App;
