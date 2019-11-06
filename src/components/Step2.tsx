import React, {FC, MouseEvent} from 'react';

interface Step2Props {
    submitForm: Function
};

const Step2: FC<Step2Props> = ({ submitForm }) => {
    const handler = (e: MouseEvent) => {
        e.preventDefault();
        submitForm();
    };

    return <>
        <input placeholder="Please enter your current location..." required />
        <input placeholder="Please enter your current location..." required />
        <input type="date" required />
        <button onClick={handler}>Submit</button>
    </>;
}

export default Step2;
