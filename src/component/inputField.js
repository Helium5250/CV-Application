import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './inputField.css';

export class InputField extends Component {
  state = {

  };

  static propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'email', 'tel', 'date', 'textarea']).isRequired
  };

  render() {
    return (
      <div className='inputDiv'>
        <label>{this.props.label}</label>
        <div className='inputField'>
        {
          this.props.type === 'textarea'
            ? <textarea></textarea>
            : <input type={this.props.type}></input>
        }
        </div>
      </div>
    );
  }
}

export default InputField;
