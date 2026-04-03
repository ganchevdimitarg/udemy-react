import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
import {useState} from "react";
import {calculateInvestmentResults} from "./util/investment.js";

function App() {
   const [inputData, setInputData] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

   const inputsInValid = inputData.duration >= 1;

    function handleInputChange(name, value) {
        setInputData((prevInput) => ({...prevInput, [name]: +value}))
    }

    return (
        <main>
            <Header/>
            <UserInput onChange={handleInputChange} inputData={inputData} />
            {!inputsInValid && <p className="center">Please enter a duration greater than zero.</p>}
            {inputsInValid && <Results data={inputData}/>}
        </main>
    )
}

export default App
