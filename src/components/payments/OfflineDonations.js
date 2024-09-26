import React, { useState } from 'react'
import './OfflineDonations.css'
import CustomSpinner from '../animations/CustomSpinner';

function OfflineDonations({selectedAmount, currency}) {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [loading, setLoading] = useState(false);

    const [formValid, setFormValid] = useState(true);

    const validateForm = () => {
        const isValid = email && firstName && lastName && !emailError;
        setFormValid(isValid);
      };

      const handleSubmit = () => {
        if (formValid) {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            alert('Submission successful! Receipt will be sent via email');
          }, 3000);
        } else {
          alert('Please fill out all required fields correctly.');
        }
      };

    const handleInputChange = (setter) => (e) => {
        setter(e.target.value);
        validateForm();
      };

      const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const validateEmail = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
          setEmailError('Please enter a valid email address');
        } else {
          setEmailError('');
        }
      };
    
    //   const formattedDonationAmount = Number(selectedAmount).toFixed(2);

  return (
    <>
        <form role="form" onSubmit={(e) => e.preventDefault()}>
            <div className="select-title pb-2 mb-3">
            <h2>Personal Info</h2>
            </div>
            <div className="row">
            <div className="form-group col-sm-6">
                <label htmlFor="firstName"><h6>First Name</h6></label>
                <input 
                type="text" 
                name="firstName" 
                placeholder="First Name" 
                value={firstName}
                onChange={handleInputChange(setFirstName)}
                required 
                className="form-control" 
                />
            </div>
            <div className="form-group col-sm-6">
                <label htmlFor="lastName"><h6>Last Name</h6></label>
                <input 
                type="text" 
                name="lastName" 
                placeholder="Last Name" 
                value={lastName}
                onChange={handleInputChange(setLastName)}
                required 
                className="form-control" 
                />
            </div>
            </div>
            <div className="form-group">
            <label htmlFor="email"><h6>Email Address</h6></label>
            <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={handleEmailChange}
                onBlur={validateEmail}
                required
                className="form-control"
            />
            {emailError && <small className="text-danger">{emailError}</small>}
            </div>
        </form>

        <div class="donation-container">
        <p>In order to make an offline donation, we ask that you please follow these instructions:</p>
        <ol>
            <li>Make a check payable to <strong>"Compashon"</strong></li>
            <li>On the memo line of the check, please indicate that the donation is for <strong>"Compashon"</strong></li>
            <li>
                Please mail your cheque to:
                <div class="address">
                    Compashon<br/>
                    444 Not A Real St.<br/>
                    Anytown, KE 56789
                </div>
            </li>
        </ol>
        <p>All contributions will be gratefully acknowledged and are tax deductible.</p>
    </div>
        <p id="give-final-total-wrap" className="form-wrap mb-3 mt-3">
        <span className="give-donation-total-label">Donation Total: </span>
        <span className="give-final-total-amount" data-total={selectedAmount}>
            {currency} {selectedAmount}
        </span>
        </p>

        <button
          onClick={handleSubmit}
          className="item-btn"
          disabled={loading}
        >
          {loading ? <CustomSpinner /> : 'Submit Now'}
        </button>
    </>
  )
}

export default OfflineDonations