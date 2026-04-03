export default function UserInput({onChange, inputData}) {

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>initial investment</label>
                    <input name="initialInvestment"
                           onChange={(event) => onChange("initialInvestment", event.target.value)}
                           type="number"
                           required value={inputData.initialInvestment} />
                </p>
                <p>
                    <label>annual investment</label>
                    <input name="annualInvestment"
                           onChange={(event) => onChange("annualInvestment", event.target.value)}
                           type="number"
                           required value={inputData.annualInvestment} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>expected return</label>
                    <input name="expectedReturn"
                           onChange={(event) => onChange("expectedReturn", event.target.value)}
                           type="number"
                           required value={inputData.expectedReturn} />
                </p>
                <p>
                    <label>duration</label>
                    <input name="duration"
                           onChange={(event) => onChange("duration", event.target.value)}
                           type="number"
                           required value={inputData.duration} />
                </p>
            </div>
        </section>
    )
}