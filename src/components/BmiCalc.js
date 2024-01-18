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
        <main className="bg-off-white py-32">
            <Navbar />
            <section className="dark:bg-gray-900 border-b" id="projects">
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                    <h1 className="text-4xl font-bold mb-8">BMI Calculator</h1>
                    <div className="flex space-x-4 mb-4">
                        <select className="sm:col-span-2 p-2 border border-gray-300 rounded" value={unit} onChange={e => setUnit(e.target.value)}>
                            <option value="metric">Metric (cm, kg)</option>
                            <option value="imperial">Imperial (in, lb)</option>
                        </select>
                        <input className="sm:col-span-2 p-2 border border-gray-300 rounded" type="number" placeholder="Enter your height" onChange={e => setHeight(e.target.value)} />
                        <input className="sm:col-span-2 p-2 border border-gray-300 rounded" type="number" placeholder="Enter your weight" onChange={e => setWeight(e.target.value)} />
                    </div>
                    <button className="p-2 bg-blue-500 text-white rounded" onClick={calculateBMI}>Calculate BMI</button>
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
                </div>
            </section>
        </main>
        <Footer />
        </>
    )
}

export default BmiCalc;