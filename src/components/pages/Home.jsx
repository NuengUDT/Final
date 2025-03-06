import React from "react";

const Home = () => {
    return (
        <div className="container mt-4">
            <h1>ค่า BMI คืออะไร?</h1>
            <p>BMI หรือ ดัชนีมวลกาย เป็นค่าที่ใช้วัดระดับความสมส่วนของร่างกายโดยคำนวณจากน้ำหนักและส่วนสูง</p>
            <p>สูตรคำนวณ BMI: BMI = น้ำหนัก (กก.) / (ส่วนสูง (ม.) * ส่วนสูง (ม.))</p>
        </div>
    );
};

export default Home;
