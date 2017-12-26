//import React from 'react'
import React, {Component} from 'react'

class SearchBar extends Component{

  //constructor : load stuff before anything else
  constructor(props){
    super(props); //call constructor of the parent class Component
    //initialize the variable this.state.term to ''
    this.state= {term: ''};
  }

  render(){
      return (
      <div>
        
        <input
        //value="test"
        onChange={event => this.setState({term: event.target.value}) } 
        />  
        {this.state.term}
      </div>
      ); 
  }

  //function raised when a change occurs on the input
  // same as (event) => console.log(event.target.value)
  /*onInputChange(event){
    console.log(event.target.value);  
  }*/
}

export default SearchBar;