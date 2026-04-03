import {calculateInvestmentResults, formatter} from "../util/investment.js";

export default function Results({data}) {
    const results = calculateInvestmentResults(data);
    const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;

    return (
        <table id="result">
            <thead>
            <tr>
                <th className="center">Year</th>
                <th className="center">Investment Value</th>
                <th className="center">Interest (Year)</th>
                <th className="center">Total Interest</th>
                <th className="center">Invested Capital</th>
            </tr>
            </thead>
            <tbody>
            {results.map((item, index) => {
                const totalInterest = item.valueEndOfYear - item.annualInvestment * item.year - initialInvestment;
                const totalAnnualInvested = item.valueEndOfYear - totalInterest;
                return <tr key={index}>
                    <td>{item.year}</td>
                    <td>{formatter.format(item.valueEndOfYear)}</td>
                    <td>{formatter.format(item.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAnnualInvested)}</td>
                </tr>
            })}
            </tbody>

        </table>
    )
}