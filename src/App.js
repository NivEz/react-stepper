import React from "react";
import {useState, useEffect} from "react";
import {useOnHashChange} from "./useOnHashChange";

const Steps = ({ steps }) => {
    const [currentStep, setCurrentStep] = useState(1);

    const stepHandler = () => {
        let stepHash = (window.location.hash).slice(1);
        if (!stepHash) {
            setCurrentStep(1);
        } else {
            stepHash = Number(stepHash);
            setCurrentStep(stepHash);
        }
    }

    useEffect(stepHandler, []);

    useOnHashChange(window.location.hash, stepHandler);

    return (
        <section>
            <div className="steps-content">{steps[currentStep]}</div>
            <PreviousStep step={currentStep}/>
            <NextStep step={currentStep}/>
        </section>
    );
};

const NextStep = ({ step }) => {
    return (
        <a href={"#" + (step + 1)}>
            <button className="next-btn">
                Next
            </button>
        </a>
    );
};

const PreviousStep = ({ step }) => {
    return (
        <a href={"#" + (step - 1)}>
            <button className="previous-btn">
                Previous
            </button>
        </a>
    );
};


// Your steps
const FirstStep = () => {
    return (
        <div>
            <h3>Step 1:</h3>
            <form>
                <label htmlFor="name">Name: </label>
                <br/>
                <input id="name"/>
            </form>
        </div>
    );
};

const SecondStep = () => {
    return (
        <div>
            <h3>Step 2:</h3>
            <form>
                <label htmlFor="secret">Tell me a secret: </label>
                <br/>
                <input id="secret"/>
            </form>
        </div>
    );
};


const steps = {
    1: <FirstStep/>,
    2: <SecondStep/>
};


export default function App() {
    return (
        <section className="App">
            <Steps steps={steps}/>
        </section>
    );
}