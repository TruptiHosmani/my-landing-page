import React, { useState } from 'react';
import GaugeChart from 'react-gauge-chart';
import Navbar from './Navbar';
import Footer from './Footer';

function BmiCalc () {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('metric');
    const [bmi, setBmi] = useState(null);

    const calculateBMI = () => {
        let bmi;
        const heightInMeters = height / 100;
        if (unit === 'metric') {
            bmi = weight / (heightInMeters * heightInMeters);
        } else if (unit === 'imperial') {
            const weightInKg = weight * 0.453592;
            const heightInMeters = height * 0.0254;
            bmi = weightInKg / (heightInMeters * heightInMeters);
        }
        setBmi(bmi.toFixed(2));
    };

    const getBMICategory = () => {
        if (bmi < 18.5) return 'Underweight';
        if (bmi >= 18.5 && bmi < 24.9) return 'Normal weight';
        if (bmi >= 25 && bmi < 29.9) return 'Overweight';
        if (bmi >= 30) return 'Obesity';
    };
    const  gageCalc = (bmi) => {
        if (bmi < 18.5) return 0.25;
        if (bmi >= 18.5 && bmi < 24.9) return 0.5;
        if (bmi >= 25 && bmi < 29.9) return 0.75;
        if (bmi >= 30) return 0.9;
    }

    return (
        <>
        <main className="py-16">
            <Navbar />
            <section className="border-b m-2" id="projects">
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                    <h1 className="text-4xl font-bold mb-8">BMI Calculator</h1>
                    <div className="flex flex-col w-full sm:w-1/2">
                        <label htmlFor="select" className="block text-indigo-700 text-sm font-bold mb-2">Select Metric:</label>
                        <select className="mb-4 p-2 border border-indigo-300 rounded w-full" value={unit} onChange={e => setUnit(e.target.value)}>
                            <option value="metric">Metric (cm, kg)</option>
                            <option value="imperial">Imperial (in, lb)</option>
                        </select>
                    </div>
                    <div className="flex flex-col w-full sm:w-1/2">
                        <div className="mb-4">
                            <label htmlFor="weight" className="block text-indigo-700 text-sm font-bold mb-2">Weight:</label>
                            <input id="weight" type="number" onChange={e => setHeight(e.target.value)}  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="height" className="block text-indigo-700 text-sm font-bold mb-2">Height:</label>
                            <input id="height" type="number" onChange={e => setWeight(e.target.value)}  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                        </div>
                    </div>
                    <button className="p-2 bg-indigo-500 text-white rounded w-full md:w-auto" onClick={calculateBMI}>Calculate BMI</button>
                    {bmi && (
                        <div className="mt-8 text-center">
                            <GaugeChart
                                className="w-1/2"
                                id="gauge-chart"
                                nrOfLevels={4}
                                arcsLength={[0.25, 0.25, 0.25, 0.25]}
                                colors={["blue", "green", "yellow", "red"]}
                                textComponent="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-900"
                                percent={gageCalc(bmi)}
                            />
                            <p className="text-2xl font-bold">Your BMI is {bmi}</p>
                            <p className="text-xl">{getBMICategory()}</p>
                        </div>
                    )}
                   <div className="mt-8">
                        <table className="table-auto">
                            <thead>
                                <tr>
                                    <th className="text-indigo-500 px-4 py-2">BMI Category</th>
                                    <th className="text-indigo-500 px-4 py-2">BMI Range</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-indigo-500 px-4 py-2">Underweight</td>
                                    <td className="border border-indigo-500 px-4 py-2">&lt; 18.5</td>
                                </tr>
                                <tr>
                                    <td className="border border-indigo-500 px-4 py-2">Normal weight</td>
                                    <td className="border border-indigo-500 px-4 py-2">18.5–24.9</td>
                                </tr>
                                <tr>
                                    <td className="border border-indigo-500 px-4 py-2">Overweight</td>
                                    <td className="border border-indigo-500 px-4 py-2">25–29.9</td>
                                </tr>
                                <tr>
                                    <td className="border border-indigo-500 px-4 py-2">Obesity</td>
                                    <td className="border border-indigo-500 px-4 py-2">30 or greater</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </section>
        </main>
        <Footer />
        </>
    )
}

export default BmiCalc;