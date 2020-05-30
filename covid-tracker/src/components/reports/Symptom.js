import React, { Component } from 'react'

class Symptom extends Component {  
  render() {
    return (
      <div>
      
        <p>
          <label>
            <input type="checkbox" id="fever" name="fever" onChange={this.handleChange} />
            <span>Fever</span>
          </label>
        </p>

        <p>
          <label>
            <input type="checkbox" id="cough" name="cough" onChange={this.handleChange} />
            <span>Cough</span>
          </label>
        </p>

        <p>
          <label>
            <input type="checkbox" id="soreThroat" name="soreThroat" onChange={this.handleChange} />
            <span>Sore Throat</span>
          </label>
        </p>

        <p>
          <label>
            <input type="checkbox" id="breath" name="breath" onChange={this.handleChange} />
            <span>Shortness of breath</span>
          </label>
        </p>

        <p>
          <label>
            <input type="checkbox" id="fatigue" name="fatigue" onChange={this.handleChange} />
            <span>Fatigue</span>
          </label>
        </p>

        <p>
          <label>
            <input type="checkbox" id="taste" name="taste" onChange={this.handleChange} />
            <span>New Loss of taste or smell</span>
          </label>
        </p>      

        <p>
          <label>
            <input type="checkbox" id="muscle" name="muscle" onChange={this.handleChange} />
            <span>Muscle Aches</span>
          </label>
        </p>

      </div>
    )
  }
}

export default Symptom 