import React, {FC, MouseEvent} from 'react';

interface Step1Props {
    proceedToNextStep: Function
};

const Step1: FC<Step1Props> = ({ proceedToNextStep }) => {
    const handler = (e: MouseEvent) => {
        e.preventDefault();
        proceedToNextStep();
    };

    return <>
        <select name="title" required>
            <option disabled>Please select a title...</option>
            <option>Mrs</option>
            <option>Miss</option>
            <option>Ms</option>
            <option>Master</option>
            <option>Mr</option>
            <option>Dr</option>
        </select>
        <input placeholder="Please enter your name..." required />
        <input type="date" required />
        <button onClick={handler}>Continue</button>
    </>;
}

export default Step1;
