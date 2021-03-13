import InputField from './component/inputField';
import './App.css';

function App() {
  return (
    <div className="App">
      <section id='personal'>
        <InputField label='First Name' type='text' />
        <InputField label='Last Name' type='text' />
        <InputField label='Email' type='email' />
        <InputField label='Phone' type='tel' />
        <InputField label='Professional Summary' type='textarea' />
      </section>
      <section id='employment'>
        <InputField label='Job Title' type='text' />
        <InputField label='Company' type='text' />
        <InputField label='Start Date' type='date' />
        <InputField label='End Date' type='date' />
        <InputField label='Description' type='textarea' />
      </section>
      <section id='education'>
        <InputField label='School' type='text' />
        <InputField label='Degree' type='text' />
        <InputField label='Start Date' type='date' />
        <InputField label='End Date' type='date' />
        <InputField label='Description' type='textarea' />
      </section>
    </div>
  );
}

export default App;
