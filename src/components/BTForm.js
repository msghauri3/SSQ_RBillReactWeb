// AppRBillWebReact/components/BTForm.js
import React, { useState, useEffect } from 'react';
import '../styles/BTForm.css';
import { generateElectricityPDF } from "../reports/ElectricityBill";
import { generateMaintenancePDF } from "../reports/MaintenanceBill";

function BTForm() {
  const [btNumber, setBtNumber] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaError, setCaptchaError] = useState('');
  const [kuickpayRefNo, setKuickpayRefNo] = useState('');

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomCaptcha = '';
    for (let i = 0; i < 6; i++) {
      randomCaptcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(randomCaptcha);
    setCaptchaInput('');
    setCaptchaError('');
  };


  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleGenerateBill = () => {
    if (!btNumber) {
      alert("Please enter Reference Number.");
      return;
    }

    const dummyData = [
      { btNo: btNumber }
    ];

    // 🔹 Conditional logic based on BT number
    if (btNumber === "10014") {
      generateElectricityPDF(dummyData);
    }
    else if (btNumber === "10015") {
      generateMaintenancePDF(dummyData);
    }
    else {
      alert("Invalid BT Number! Please enter 10014 or 10015 to test.");
    }
  };



  // const handleBTSubmit = (e) => {
  //   e.preventDefault();

  //   if (captchaInput.toUpperCase() !== captcha) {
  //     setCaptchaError('Captcha is incorrect. Please try again.');
  //     generateCaptcha();
  //     return;
  //   }

  //   console.log('BT Number:', btNumber);
  //   alert(`BT Number: ${btNumber}\nCaptcha verified successfully!`);

  //   handleGenerateBill();

  //   setBtNumber('');
  //   setCaptchaInput('');
  //   generateCaptcha();
  // };

  // inside BTForm component


  const isDev = process.env.NODE_ENV === "development";
  const handleBTSubmit = (e) => {
    e.preventDefault();

    // If dev, skip captcha check
    if (!isDev) {
      if (captchaInput.toUpperCase() !== captcha) {
        setCaptchaError('Captcha is incorrect. Please try again.');
        generateCaptcha();
        return;
      }
    }

    // proceed to generate bill
    handleGenerateBill();
  };


  const handleKuickpaySubmit = (e) => {
    e.preventDefault();

    console.log('Kuickpay Reference No:', kuickpayRefNo);
    alert(`Kuickpay Reference No: ${kuickpayRefNo}\nRedirecting to payment page...`);

    setKuickpayRefNo('');
  };

  return (
    <div className="bt-form-wrapper">

      {/* Column 1: BT Information with Captcha */}
      <div className="column-1">
        <div className="form-card">
          <h3>Online Bill Print</h3>

          <form onSubmit={handleBTSubmit}>
            <div className="form-group">
              <label htmlFor="btNumber">kuickpay Reference No:</label>
              <input
                id="btNumber"
                type="text"
                value={btNumber}
                onChange={(e) => setBtNumber(e.target.value)}
                placeholder="Enter kuickpay Reference No."
                required
              />
            </div>

            <div className="form-group">
              <label>Captcha</label>
              <div className="captcha-box">
                <div className="captcha-display">{captcha}</div>
                <button
                  type="button"
                  className="captcha-refresh-btn"
                  onClick={generateCaptcha}
                  title="Refresh Captcha"
                >
                  🔄
                </button>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="captchaInput">Enter text</label>
              <input
                id="captchaInput"
                type="text"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                placeholder="Enter captcha"
                required={!isDev} // ✅ skip required in test mode
              />
              {captchaError && <span className="error-message">{captchaError}</span>}
            </div>

            <button type="submit" className="submit-btn">
              Generate Bill
            </button>
          </form>
        </div>
      </div>

      {/* Column 2: Kuick Pay Online */}
      <div className="column-2">
        <div className="form-card">
          <h3>Kuick Pay Online</h3>

          <form onSubmit={handleKuickpaySubmit}>
            <div className="form-group">
              <label htmlFor="kuickpayRefNo">kuickpay Reference No:</label>
              <input
                id="kuickpayRefNo"
                type="text"
                value={kuickpayRefNo}
                onChange={(e) => setKuickpayRefNo(e.target.value)}
                placeholder="Enter kuickpay Reference No."
                required
              />
            </div>

            <button type="submit" className="submit-btn kuickpay-btn">
              Pay Bill
            </button>
          </form>
        </div>
      </div>

      {/* Column 3: Image */}
      <div className="column-3">
        <div className="image-card">
          <img src="/slider01.png" alt="Bill" className="image-display" />
        </div>
      </div>
    </div>
  );
}

export default BTForm;