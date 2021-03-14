import InputField from './component/inputField';
import Section from './component/section';
import './App.css';

const PersonalSection = (
  <section id='personal'>
    <InputField label='First Name' type='text' />
    <InputField label='Last Name' type='text' />
    <InputField label='Email' type='email' />
    <InputField label='Phone' type='tel' />
    <InputField label='Professional Summary' type='textarea' />
  </section>
);

const EmploymentSection = (
  <section id='employment'>
    <InputField label='Job Title' type='text' />
    <InputField label='Company' type='text' />
    <InputField label='Start Date' type='date' />
    <InputField label='End Date' type='date' />
    <InputField label='Description' type='textarea' />
  </section>
);

const EducationSection = (
  <section id='education'>
    <InputField label='School' type='text' />
    <InputField label='Degree' type='text' />
    <InputField label='Start Date' type='date' />
    <InputField label='End Date' type='date' />
    <InputField label='Description' type='textarea' />
  </section>
);

function App() {
  return (
    <>
      {PersonalSection}
      <Section section={EmploymentSection} />
      <Section section={EducationSection} />
    </>
  );
}

export default App;
