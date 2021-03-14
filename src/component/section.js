import React, { Component } from 'react';
import PropTypes from 'prop-types';

const NewIco = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" /></svg>
);

export default class Section extends Component {
  static propTypes = {
    section: PropTypes.element.isRequired
  };

  state = {
    sectionNum: 0
  };

  render() {
    return (
      <>
        <div className='divider' />
        {this.props.section}
        {[...Array(this.state.sectionNum)].map(
          () => this.props.section
        )}
        <button
          className='newBtn'
          onClick={() => this.setState(
            (prevState) => ({ 
              sectionNum: prevState.sectionNum + 1 
            })
          )}
        >
          {NewIco}
          New Section
        </button>
      </>
    );
  }
}