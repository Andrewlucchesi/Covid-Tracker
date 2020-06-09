import React, { Component } from 'react'

class Checkbox extends Component {  

  render() {
    return (
      <div>
        <p>
          <label>
            <input type="checkbox" id="cough" name="cough" onChange={this.props.onChange} />
            <span>Cough</span>
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
            <input type="checkbox" id="fever" name="fever" onChange={this.props.onChange} />
            <span>Fever</span>
          </label>
        </p>

        <p>
          <label>
            <input type="checkbox" id="taste" name="taste" onChange={this.props.onChange} />
            <span>Loss of Taste or Smell</span>
          </label>
        </p>      

        <p>
          <label>
            <input type="checkbox" id="muscle" name="muscle" onChange={this.props.onChange} />
            <span>Muscle Aches</span>
          </label>
        </p>

        <p>
          <label>
            <input type="checkbox" id="breath" name="breath" onChange={this.props.onChange} />
            <span>Shortness of Breath</span>
          </label>
        </p>

        <p>
          <label>
            <input type="checkbox" id="soreThroat" name="soreThroat" onChange={this.props.onChange} />
            <span>Sore Throat</span>
          </label>
        </p>

      </div>
    )
  }
}

export default Checkbox 