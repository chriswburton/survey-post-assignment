import React, {FC, useState, MouseEvent} from 'react';
import './App.scss';
import {Step1, Step2} from './components';

const App: FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const SHOW_STEP_ONE = currentStep === 0;
  const SHOW_STEP_TWO = currentStep === 1;

  const proceedToNextStep = () => {
    setCurrentStep(1);
  };
  const submitForm = () => {};

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple details web app!</h1>
      </header>
      <main>
        <p>Please enter your details:</p>
        <form onSubmit={submitForm}>
          { SHOW_STEP_ONE && <Step1 proceedToNextStep={proceedToNextStep} /> }
          { SHOW_STEP_TWO && <Step2 submitForm={submitForm} /> }
        </form>
      </main>
    </div>
  );
}

export default App;
