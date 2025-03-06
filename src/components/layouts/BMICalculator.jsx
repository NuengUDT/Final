import React from 'react';
import './BMICalculator.css';


export const BMICalculator = ({
  weight,
  setWeight,
  height,
  setHeight,
  bmi,
  setBmi,
  criteria,
  setCriteria,
}) => {
  const calculateBMI = () => {
    // แปลงค่าเป็นตัวเลขและตรวจสอบค่าว่าง
    const weightInKg = Number(weight);
    const heightInCm = Number(height);

    // ตรวจสอบค่าที่รับเข้ามา
    if (!weightInKg || !heightInCm || weightInKg <= 0 || heightInCm <= 0) {
      setCriteria('กรุณากรอกน้ำหนักและส่วนสูงให้ถูกต้อง');
      setBmi('0.00');
      return;
    }

    // แปลงความสูงจาก cm เป็น m
    const heightInM = heightInCm / 100;

    // คำนวณ BMI
    const bmiValue = weightInKg / (heightInM * heightInM);

    // ตรวจสอบว่า BMI เป็นตัวเลขที่ถูกต้อง
    if (isNaN(bmiValue)) {
      setCriteria('ค่า BMI ไม่ถูกต้อง กรุณาลองใหม่');
      setBmi('0.00');
      return;
    }

    // กำหนดค่า BMI และเกณฑ์
    setBmi(bmiValue.toFixed(2));

    // แปลผล BMI
    if (bmiValue < 18.5) {
      setCriteria('น้ำหนักน้อย/ผอม');
    } else if (bmiValue >= 18.5 && bmiValue <= 22.9) {
      setCriteria('ปกติ (สุขภาพดี)');
    } else if (bmiValue >= 23 && bmiValue <= 24.9) {
      setCriteria('ท้วม/อ้วนระดับ 1');
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      setCriteria('อ้วน/อ้วนระดับ 2');
    } else {
      setCriteria('อ้วนมาก/อ้วนระดับ 3');
    }
  };

  return (
    <div className="bmi-container">
      <div className="bmi-box">
        <h2>BMI Calculator</h2>
        <div className="input-group">
          <label>
            น้ำหนัก (kg):
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="กรอกน้ำหนัก"
            />
          </label>
        </div>
        <div className="input-group">
          <label>
            ส่วนสูง (cm):  {/* เปลี่ยนจาก m เป็น cm */}
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="กรอกส่วนสูง (เซนติเมตร)"
            />
          </label>
        </div>
        <button onClick={calculateBMI}>คำนวณ BMI</button>
        {bmi && <p className="result">ค่า BMI: {bmi}</p>}
        {criteria && <p className="result">อยู่ในเกณฑ์: {criteria}</p>}
      </div>
    </div>
  );
};
