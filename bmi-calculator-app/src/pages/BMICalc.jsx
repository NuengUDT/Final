import React, { useState } from "react";

const BMIcalc = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState("");

    const calculateBMI = () => {
        if (weight && height) {
            const heightInMeters = height / 100;
            const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
            setBmi(bmiValue);

            if (bmiValue < 18.5) {
                setCategory("น้ำหนักน้อยกว่ามาตรฐาน");
            } else if (bmiValue < 24.9) {
                setCategory("น้ำหนักปกติ");
            } else if (bmiValue < 29.9) {
                setCategory("น้ำหนักเกิน");
            } else {
                setCategory("โรคอ้วน");
            }
        } else {
            setBmi(null);
            setCategory("");
        }
    };

    return (
        <div className="container mt-4">
            <h1>คำนวณค่า BMI</h1>
            <div className="mb-3">
                <label className="form-label">น้ำหนัก (กก.)</label>
                <input type="number" className="form-control" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">ส่วนสูง (ซม.)</label>
                <input type="number" className="form-control" value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>
            <button className="btn btn-primary" onClick={calculateBMI}>คำนวณ BMI</button>

            {bmi && (
                <div className="mt-3">
                    <h3>ค่า BMI ของคุณ: {bmi}</h3>
                    <p>เกณฑ์สุขภาพ: {category}</p>
                </div>
            )}
        </div>
    );
};

export default BMIcalc;
