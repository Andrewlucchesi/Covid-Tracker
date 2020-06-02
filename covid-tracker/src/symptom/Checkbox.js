import React, { Component } from 'react'

class Checkbox extends Component {  

  render() {
    return (
      <div>
        <p>
          <label>
            <input type="checkbox" id="fever" name="fever" onChange={this.props.onChange} />
            <span>Fever</span>
          </label>
        </p>

        <p>
          <label>
            <input type="checkbox" id="cough" name="cough" onChange={this.props.onChange} />
            <span>Cough</span>
          </label>
        </p>

        <p>
          <label>
            <input type="checkbox" id="soreThroat" name="soreThroat" onChange={this.props.onChange} />
            <span>Sore Throat</span>
          </label>
        </p>

        <p>
          <label>
            <input type="checkbox" id="breath" name="breath" onChange={this.props.onChange} />
            <span>Shortness of breath</span>
          </label>
        </p>

        <p>
          <label>
            <input type="checkbox" id="fatigue" name="fatigue" onChange={this.props.onChange} />
            <span>Fatigue</span>
          </label>
        </p>

        <p>
          <label>
            <input type="checkbox" id="taste" name="taste" onChange={this.props.onChange} />
            <span>New Loss of taste or smell</span>
          </label>
        </p>      

        <p>
          <label>
            <input type="checkbox" id="muscle" name="muscle" onChange={this.props.onChange} />
            <span>Muscle Aches</span>
          </label>
        </p>

      </div>
    )
  }
}

export default Checkbox 