import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputField extends Component {
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
