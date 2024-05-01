import React, { useState } from 'react';

const Form = () => {
    // State to store form data
    const [formData, setFormData] = useState({
        division1: {
            date: '',
            batchNumber: '',
            category: '',
            subcategory: '',
            quantity: '',
        },
        division2: {
            date: '',
            batchNumber: '',
            category: '',
            subcategory: '',
            quantity: '',
        },
        division3: {
            date: '',
            batchNumber: '',
            category: '',
            subcategory: '',
            quantity: '',
        },
        division4: {
            date: '',
            batchNumber: '',
            category: '',
            subcategory: '',
            quantity: '',
        },
    });

    // State to store form errors
    const [formErrors, setFormErrors] = useState({
        division1: {
            category: '',
            subcategory: '',
            quantity: '',
        },
        division2: {
            category: '',
            subcategory: '',
            quantity: '',
        },
        division3: {
            category: '',
            subcategory: '',
            quantity: '',
        },
        division4: {
            category: '',
            subcategory: '',
            quantity: '',
        },
    });

    // State to store submitted data
    const [submittedData, setSubmittedData] = useState([]);

    // Function to handle input changes
    const handleInputChange = (division, field, value) => {
        setFormData(prevState => ({
            ...prevState,
            [division]: {
                ...prevState[division],
                [field]: value,
            },
        }));
    };

    // Function to handle form submission
    const handleSubmit = division => {
        const { category, subcategory, quantity } = formData[division];
        if (!category || !subcategory || !quantity) {
            setFormErrors(prevState => ({
                ...prevState,
                [division]: {
                    category: !category ? 'Category is required' : '',
                    subcategory: !subcategory ? 'Subcategory is required' : '',
                    quantity: !quantity ? 'Quantity is required' : '',
                },
            }));
            return;
        }

        const newData = { ...formData[division], division };
        setSubmittedData(prevData => [...prevData, newData]);
        setFormData(prevState => ({
            
            ...prevState,
            [division]: {
                date: '',
                batchNumber: '',
                category: '',
                subcategory: '',
                quantity: '',
            },
        }));
        setFormErrors(prevState => ({
            ...prevState,
            [division]: {
                category: '',
                subcategory: '',
                quantity: '',
            },
        }));
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: 'auto' }}>
            <div style={{ marginBottom: '20px' }}>
                <h2 style={{ textAlign: 'center' }}>PRODUCTION WITHDRAW</h2>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {/* Inputs for Division 1 */}
                    <h3>Division 1</h3>
                    <label>Date:</label>
                    <input
                        type="date"
                        value={formData.division1.date}
                        onChange={e => handleInputChange('division1', 'date', e.target.value)}
                    />
                    <label>Batch Number:</label>
                    <input
                        type="text"
                        value={formData.division1.batchNumber}
                        onChange={e => handleInputChange('division1', 'batchNumber', e.target.value)}
                    />
                    <label>Category:</label>
                    <select
                        value={formData.division1.category}
                        onChange={e => handleInputChange('division1', 'category', e.target.value)}
                        style={{ marginBottom: '5px' }}
                    >
                        <option value="">Select Category</option>
                        <option value="RawMaterial">Raw Material</option>
                        <option value="Spices">Spices</option>
                        <option value="JackFruit">JackFruit</option>
                        <option value="Packets">Packets</option>
                    </select>
                    {formErrors.division1.category && <p style={{ color: 'red', marginBottom: '5px' }}>{formErrors.division1.category}</p>}
                    <label>Subcategory:</label>
                    <select
                        value={formData.division1.subcategory}
                        onChange={e => handleInputChange('division1', 'subcategory', e.target.value)}
                        style={{ marginBottom: '5px' }}
                    >
                        <option value="">Select Subcategory</option>
                        {formData.division1.category === 'RawMaterial' &&
                            ['RW1', 'RW2', 'RW3', 'RW4'].map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        {formData.division1.category === 'Spices' &&
                            ['Spices1', 'Spices2'].map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        {formData.division1.category === 'JackFruit' &&
                            ['JF1', 'JF2'].map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        {formData.division1.category === 'Packets' &&
                            ['PKT100', 'PKT400'].map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                    </select>
                    {formErrors.division1.subcategory && <p style={{ color: 'red', marginBottom: '5px' }}>{formErrors.division1.subcategory}</p>}
                    <label>Quantity:</label>
                    <input
                        type="text"
                        value={formData.division1.quantity}
                        onChange={e => handleInputChange('division1', 'quantity', e.target.value)}
                    />
                    {formErrors.division1.quantity && <p style={{ color: 'red', marginBottom: '5px' }}>{formErrors.division1.quantity}</p>}
                    <button onClick={() => handleSubmit('division1')} style={{ backgroundColor: 'green', color: 'white', marginLeft: 'auto' }}>Submit</button>
                </div>
            </div>
            {/* Submitted Data Table */}
            <div>
                <h3>Withdrwed ITEMS</h3>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ background:'yellow' }}>
                            <th>Category</th>
                            <th>Subcategory</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {submittedData.map((data, index) => (
                            <tr key={index} style={{ textAlign: 'center' }}>
                                <td>{data.category}</td>
                                <td>{data.subcategory}</td>
                                <td>{data.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Edit and Submit Buttons */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                <button style={{ backgroundColor: 'red', color: 'white', marginRight: '10px' }}>Edit</button>
                <button onClick={() => handleSubmit('division1')} style={{ backgroundColor: 'green', color: 'white' }}>Submit</button>
            </div>
        </div>
    );
};

export default Form;
