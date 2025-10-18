// AppRBillWebReact/components/BTForm.js
import React, { useState, useEffect } from 'react';
import '../styles/BTForm.css';

function BTForm() {
  const [btNumber, setBtNumber] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaError, setCaptchaError] = useState('');
  const [kuickpayRefNo, setKuickpayRefNo] = useState('');

  const generateCaptcha = () => {
    const randomCaptcha = Math.random().toString(36).substring(2, 8).toUpperCase();
    setCaptcha(randomCaptcha);
    setCaptchaInput('');
    setCaptchaError('');
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleBTSubmit = (e) => {
    e.preventDefault();
    
    if (captchaInput.toUpperCase() !== captcha) {
      setCaptchaError('Captcha is incorrect. Please try again.');
      generateCaptcha();
      return;
    }

    console.log('BT Number:', btNumber);
    alert(`BT Number: ${btNumber}\nCaptcha verified successfully!`);
    
    setBtNumber('');
    setCaptchaInput('');
    generateCaptcha();
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
          <h3>BT Information</h3>
          
          <form onSubmit={handleBTSubmit}>
            <div className="form-group">
              <label htmlFor="btNumber">BT Number</label>
              <input
                id="btNumber"
                type="text"
                value={btNumber}
                onChange={(e) => setBtNumber(e.target.value)}
                placeholder="Enter BT Number"
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
                required
              />
              {captchaError && <span className="error-message">{captchaError}</span>}
            </div>

            <button type="submit" className="submit-btn">
              Submit
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
              <label htmlFor="kuickpayRefNo">Reference No</label>
              <input
                id="kuickpayRefNo"
                type="text"
                value={kuickpayRefNo}
                onChange={(e) => setKuickpayRefNo(e.target.value)}
                placeholder="Enter Reference No"
                required
              />
            </div>

            <button type="submit" className="submit-btn kuickpay-btn">
              Proceed Payment
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