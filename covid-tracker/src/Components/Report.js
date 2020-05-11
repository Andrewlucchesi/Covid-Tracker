import React from 'react'

class Report extends React.Component{
  constructor(props){
      super(props);
      this.state ={
        text: "",
        showText: false
      }
  }


  handleChange= (e) => {
    this.setState({
      text: e.target.value})
  }

  handleSubmit= (e) => {
    this.setState({
      showText: true
    })
    e.preventDefault();
  }
  render = () => {
    return (
      <div>
        <p>Did you test positive?</p>
        <form onSubmit={this.handleSubmit}>
          <label>Enter your zipcode:
            <input type="text" value={this.state.text}
            onChange={this.handleChange}/>
          </label>
          <input type="submit" value = "Submit" />
          {this.state.showText && <p>{this.state.text}</p>}
        </form>
        
      </div>
    );
  }
}


export default Report