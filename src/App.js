import React, { Component } from 'react';
import InputField from './component/inputField';
import NewSectionBtn from './component/button';
import './App.css';

function PersonalSection() {
  return (
    <section id='personal'>
      <InputField label='First Name' type='text' />
      <InputField label='Last Name' type='text' />
      <InputField label='Email' type='email' />
      <InputField label='Phone' type='tel' />
      <InputField label='Professional Summary' type='textarea' />
    </section>
  );
}

function EmploymentSection() {
  return (
    <section id='employment'>
      <InputField label='Job Title' type='text' />
      <InputField label='Company' type='text' />
      <InputField label='Start Date' type='date' />
      <InputField label='End Date' type='date' />
      <InputField label='Description' type='textarea' />
    </section>
  );
};

function EducationSection() {
  return (
    <section id='education'>
      <InputField label='School' type='text' />
      <InputField label='Degree' type='text' />
      <InputField label='Start Date' type='date' />
      <InputField label='End Date' type='date' />
      <InputField label='Description' type='textarea' />
    </section>
  );
};

export class App extends Component {
  static state = {
    sections: {}
  };

  static handleClick = () => {
    let newSections = Object.assign({}, this.state.section,
      { employment: 1 }
    );

    this.setState({
      sections: newSections
    });
  };

  render() {
    return (
      <div id='App'>
        <PersonalSection />
        <div className='divider' />
        <EmploymentSection />
        <NewSectionBtn section={EmploymentSection} />
        <div className='divider' />
        <EducationSection />
        <NewSectionBtn section={EducationSection} />
      </div>
    );
  }
}

export default App;
