import React, { useState } from 'react';

// Komponent dla każdego pola input
const NumberInput = ({ label, name, value, handleChange }) => (
    <div className="mb-4">
        <label htmlFor={name} className="block text-lg font-semibold text-white mb-2">
            {label}
        </label>
        <input 
            type="number"
            id={name}
            name={name}
            value={value}
            onChange={handleChange}
            className="calculator-input w-full p-2 rounded border border-gray-300"
            required
        />
    </div>
);

// Komponent dla pojedynczej opcji checkbox
const Checkbox = ({ label, name }) => (
    <li className="calculator-li">
        <div className="flex items-center ps-3">
            <input 
                type="checkbox"
                id={name}
                name={name}
                className="calculator-checkbox" 
            />
            <label htmlFor={name} className="calculator-label ml-2">
                {label}
            </label>
        </div>
    </li>
);

const CalculatorForm = () => {
    const [formData, setFormData] = useState({ xpWanted: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="w-full max-w-md ml-14 bg-gray-500 dark:bg-gray-900 border border-gray-400 dark:border-gray-700 rounded-lg shadow p-6 md:p-8">
            <form onSubmit={handleSubmit}>
                <NumberInput 
                    label="XP Wanted:"
                    name="xpWanted"
                    value={formData.xpWanted}
                    handleChange={handleChange}
                />

                <h3 className="my-4 font-semibold text-white">Bonuses</h3>
                <ul className="calculator-ul">
                    <Checkbox 
                        label="15% (1 hour)" 
                        name="firstBonus"
                    />
                    <Checkbox 
                        label="10% (90 minutes)" 
                        name="secondBonus"
                    />
                    <Checkbox
                        label="5% (2 hours)"
                        name="thirdBonus"
                    />
                    <Checkbox
                        label="5% (1 day)"
                        name="thirdBonus"
                    />
                    <Checkbox
                        label="5% (1 week)"
                        name="thirdBonus"
                    />
                    <Checkbox
                        label="50% (30 minutes)"
                        name="thirdBonus"
                    />
                    <Checkbox
                        label="5% (faction)"
                        name="thirdBonus"
                    />
                    <Checkbox
                        label="5% (faction bonus zone)"
                        name="thirdBonus"
                    />
                    <Checkbox
                        label="50% (premium)"
                        name="thirdBonus"
                    />
                    <Checkbox
                        label="5% (voice)"
                        name="thirdBonus"
                    />
                    <Checkbox
                        label="10% (active voice)"
                        name="thirdBonus"
                    />
                    <Checkbox
                        label="5% (linked discord)"
                        name="thirdBonus"
                    />
                    <Checkbox
                        label="25% (500 boosts collected)"
                        name="thirdBonus"
                    />
                    <Checkbox
                        label="100% (double xp)"
                        name="thirdBonus"
                    />
                    <Checkbox
                        label="5% (Airline Perk)"
                        name="thirdBonus"
                    />
                </ul>
            </form>
        </div>
    );
};

export default CalculatorForm;
