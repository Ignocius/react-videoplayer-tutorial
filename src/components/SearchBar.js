import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: '', placeHolder: 'Please search here' }

  onInputChange = (event) => {
    this.setState({ term: event.target.value })
  }
  
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input 
              type="text" 
              onChange={this.onInputChange}
              value={this.state.term} 
              placeholder={this.state.placeHolder}  
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;