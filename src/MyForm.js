import React, { useState } from 'react';
import axios from 'axios';

const categories = [
    { name: 'Raw Material', subcategories: ['Grains', 'Vegetables'] },
    { name: 'Spices', subcategories: ['Whole Spices', 'Ground Spices'] },
    { name: 'Jackfruit', subcategories: ['Fresh Jackfruit', 'Jackfruit Products'] },
    { name: 'Packages', subcategories: ['Boxes', 'Bags'] }
];

const MyForm = () => {
    const [date, setDate] = useState('');
    const [batchNumber, setBatchNumber] = useState('');
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [quantity, setQuantity] = useState('');
    const [items, setItems] = useState([]);
    const [showTable, setShowTable] = useState(false);
    const [error, setError] = useState('');

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleBatchNumberChange = (e) => {
        // Allow only numbers
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setBatchNumber(e.target.value);
        }
    };

    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        setCategory(selectedCategory);
        // Reset subcategory when category changes
        setSubcategory('');
    };

    const handleSubcategoryChange = (e) => {
        setSubcategory(e.target.value);
    };

    const handleQuantityChange = (e) => {
        // Allow only numbers
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setQuantity(e.target.value);
        }
    };

    const handleEdit = () => {
        // Implement edit functionality here
        console.log('Edit clicked');
    };

    const handleDelete = (index) => {
        const updatedItems = items.filter((item, i) => i !== index);
        setItems(updatedItems);
    };

    const handleSubmit = async () => {
        // Check if any of the required fields are empty
        if (!date || !batchNumber || !category || !subcategory || !quantity) {
            setError('All fields are required');
            return;
        }

        setError(''); // Clear previous error
        const newItem = { date, batchNumber, category, subcategory, quantity };
        setItems([...items, newItem]);
        // Reset form fields after submission
        setDate('');
        setBatchNumber('');
        setCategory('');
        setSubcategory('');
        setQuantity('');
        setShowTable(true);
    };

    const handleBulkSubmit = async () => {
        // Exclude the 'delete' property from each item
        const dataToSend = items.map(({ delete: _, ...item }) => item);
        // Send data to backend
        try {
            await axios.post('/api/addDataBulk', dataToSend);
            console.log('Data added successfully to the backend');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <div style={{ padding: '20px' }}>
                <label style={{ marginBottom: '10px', display: 'block' }}>Date:</label>
                <input type="date" value={date} onChange={handleDateChange} style={{ marginBottom: '20px', padding: '5px' }} />

                <label style={{ marginBottom: '10px', display: 'block' }}>Batch Number:</label>
                <input type="text" value={batchNumber} onChange={handleBatchNumberChange} style={{ marginBottom: '20px', padding: '5px' }} />

                <label style={{ marginBottom: '10px', display: 'block' }}>Category:</label>
                <select value={category} onChange={handleCategoryChange} style={{ marginBottom: '20px', padding: '5px' }}>
                    <option value="">Select Category</option>
                    {categories.map((cat, index) => (
                        <option key={index} value={cat.name}>
                            {cat.name}
                        </option>
                    ))}
                </select>

                <label style={{ marginBottom: '10px', display: 'block' }}>Subcategory:</label>
                <select value={subcategory} onChange={handleSubcategoryChange} style={{ marginBottom: '20px', padding: '5px' }}>
                    <option value="">Select Subcategory</option>
                    {category &&
                        categories
                            .find((cat) => cat.name === category)
                            .subcategories.map((subcat, index) => (
                                <option key={index} value={subcat}>
                                    {subcat}
                                </option>
                            ))}
                </select>

                <label style={{ marginBottom: '10px', display: 'block' }}>Quantity:</label>
                <input type="text" value={quantity} onChange={handleQuantityChange} style={{ marginBottom: '20px', padding: '5px' }} />

                {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

                <div style={{ textAlign: 'right' }}>
                    <button onClick={handleEdit} style={{ marginRight: '10px', padding: '10px 20px', backgroundColor: '#f0f0f0', border: '1px solid #ccc', borderRadius: '5px', cursor: 'pointer' }}>Edit</button>
                    <button onClick={handleSubmit} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
                </div>
            </div>

            {showTable && (
                <div>
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', textAlign: 'center' }}>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Batch Number</th>
                                <th>Category</th>
                                <th>Subcategory</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.date}</td>
                                    <td>{item.batchNumber}</td>
                                    <td>{item.category}</td>
                                    <td>{item.subcategory}</td>
                                    <td>{item.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button onClick={handleBulkSubmit} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit Data to Backend</button>
                </div>
            )}
        </div>
    );
};

export default MyForm;
