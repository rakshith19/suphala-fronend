import React, { useState, useEffect } from 'react';

const CompanySoftwareDashboard = () => {
    // State variables to hold the data
    const [totalBatchNumber, setTotalBatchNumber] = useState(0);
    const [pendingBatchNumber, setPendingBatchNumber] = useState(0);
    const [totalEmployees, setTotalEmployees] = useState(0);

    // Simulated data fetching or calculation
    useEffect(() => {
        // Simulated API call or data calculation
        // Replace this with your actual data fetching logic
        const fetchData = () => {
            // Simulated data
            const totalBatches = 100;
            const pendingBatches = 20;
            const totalEmployeesCount = 500;

            setTotalBatchNumber(totalBatches);
            setPendingBatchNumber(pendingBatches);
            setTotalEmployees(totalEmployeesCount);
        };

        // Call the fetchData function
        fetchData();
    }, []);

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', width: '30%' }}>
                <h2>Total Batch Number:</h2>
                <div style={{ backgroundColor: '#ff7f0e', color: '#ffffff', padding: '20px', borderRadius: '4px', fontSize: '3rem' }}>{totalBatchNumber}</div>
            </div>
            <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', width: '30%' }}>
                <h2>Pending Batch Number:</h2>
                <div style={{ backgroundColor: '#2ca02c', color: '#ffffff', padding: '20px', borderRadius: '4px', fontSize: '3rem' }}>{pendingBatchNumber}</div>
            </div>
            <div style={{ backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', width: '30%' }}>
                <h2>Total Employees:</h2>
                <div style={{ backgroundColor: '#1f77b4', color: '#ffffff', padding: '20px', borderRadius: '4px', fontSize: '3rem' }}>{totalEmployees}</div>
            </div>
        </div>
    );
};

export default CompanySoftwareDashboard;
