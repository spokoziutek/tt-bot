import React, {useState} from 'react';

const FishCalculator = () => {

    const [formData, setFormData] = useState ({
        xpWanted: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDeafult();
    };

    return (
        <div className="w-full max-w-sm bg-gray-500 dark:bg-gray-900 border border-gray-400 dark:border-gray-700 rounded-lg shadow sm:p-6 md:p-8">
            <form onSubmit={handleSubmit}>
                <label for="xpWanted" className='block text-lg font-semibold text-white'>Level Wanted:</label>
                <input type='number' value={formData.lvlWanted} onChange={handleChange} name="lvlWanted"
                        className="rounded-lg bg-gray-300 dark:bg-gray-700 text-md dark:text-gray-400 border-none focus:outline-none p-1" required />
            </form>
        </div>
    );
};

export default FishCalculator;