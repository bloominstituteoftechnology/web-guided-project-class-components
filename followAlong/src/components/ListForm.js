import React from "react";

class ListForm extends React.Component {
  // Constructor with state
  constructor() {
    super()
    this.state = {
      itemText: ''
    }
  }

  handleChanges = e => {
    // update state with each keystroke
    console.log(this.state, "input changes")
    this.setState({
      itemText: e.target.value
    })
  };

  // class property to submit form
  handleSubmit = e => {
    e.preventDefault()
    this.props.addItem(this.state.itemText)
    this.setState({
      itemText: ""
    })
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input 
            type="text" 
            name="item"
            value={this.state.itemText}
            onChange={this.handleChanges}
             />
        <button>Add</button>
      </form>
    );
  }
}

export default ListForm;