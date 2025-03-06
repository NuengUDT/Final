import React, { useState } from 'react';

export const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [error, setError] = useState('');

  const calculateBMI = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (isNaN(weightNum) || isNaN(heightNum) || weightNum <= 0 || heightNum <= 0) {
      setError('Please enter valid weight and height.');
      setBmi(null);
      return;
    }

    const calculatedBmi = weightNum / (heightNum * heightNum);
    setBmi(calculatedBmi.toFixed(2));
    setError('');
  };

  return (
    <div className="bmi-calculator">
      <h2>BMI Calculator</h2>
      <div>
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Height (m):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {error && <p className="error">{error}</p>}
      {bmi && <p>Your BMI is: {bmi}</p>}
    </div>
  );
};