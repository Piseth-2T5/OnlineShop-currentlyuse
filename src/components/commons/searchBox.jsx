import React, { Component } from "react";

class SearchBox extends Component {
    state={
        value: ""
    }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.raiseSearchQuery(this.state.value)
  };
  handleChange = (e) =>{
    this.setState({value: e.currentTarget.value})
    this.props.raiseSearchQuery(e.currentTarget.value)
  }
  componentDidMount(){
  }
  render() {
    if(!this.props.clicked) this.state.value = ""

    return (
      <form
        action=""
        className="form-inline d-inline"
        onSubmit={this.handleSubmit}
      >
        <input
          className="form-control w-25"
          type="search"
          name= "search"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Search..."
        />
        <button className="btn btn-outline-priamry border-primary text-primary">
          <i className="fas fa-search"></i>{" "}
        </button>
      </form>
    );
  }
}

export default SearchBox;
