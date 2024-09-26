import React, { useState } from 'react'
import { FaCcAmex, FaCcMastercard, FaCcVisa } from 'react-icons/fa';
import CustomSpinner from '../animations/CustomSpinner';

function CreditCard({selectedAmount, currency}) {

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cvc, setCvc] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [loading, setLoading] = useState(false);
    const [formValid, setFormValid] = useState(true);
  
    
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
  
    const validateForm = () => {
      const isValid = email && firstName && lastName && cardNumber && cvc && expirationDate && !emailError;
      setFormValid(isValid);
    };
  
    const handleDonate = () => {
      if (formValid) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          // Perform any additional actions after donation
        }, 3000);
      } else {
        alert('Please fill out all required fields correctly.');
      }
    };
  
    const handleInputChange = (setter) => (e) => {
      setter(e.target.value);
      validateForm();
    };
  


  return (
    <div className="tab-pane fade show active pt-3">
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

                        <div className="select-title pb-2 mt-3 mb-3">
                          <h2>Credit Card Info</h2>
                        </div>
                        <div className='row'>
                          <div className='col-sm-8'>
                            <div className="form-group">
                              <label htmlFor="cardNumber"><h6>Card Number</h6></label>
                              <div className="input-group">
                                <input 
                                  type="text" 
                                  name="cardNumber" 
                                  value={cardNumber}
                                  onChange={handleInputChange(setCardNumber)}
                                  pattern="[0-9]*"
                                  inputMode="numeric"
                                  placeholder="Valid Card Number" 
                                  title="Only numbers are allowed"
                                  className="form-control"
                                  onInput={(e) => {
                                    e.target.value = e.target.value.replace(/[^0-9]/g, '');
                                  }} 
                                  required 
                                />
                                <div className="input-group-append">
                                  <span className="input-group-text text-muted">
                                    <i className="mx-2"><FaCcVisa /></i>
                                    <i className="mx-2"><FaCcMastercard /></i>
                                    <i className=""><FaCcAmex /></i>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='col-sm-4'>
                            <div className="form-group mb-4">
                              <label data-toggle="tooltip" title="Three digit CV code on the back of your card">
                                <h6>CVC<i className="fa fa-question-circle d-inline"></i></h6>
                              </label>
                              <input 
                                type='text'
                                value={cvc}
                                onChange={handleInputChange(setCvc)}
                                required 
                                className="form-control"
                                placeholder="CVC"
                                maxLength="4"
                                onInput={(e) => {
                                  e.target.value = e.target.value.replace(/[^0-9]/g, '');
                                }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-sm-8'>
                            <div className="form-group">
                              <label htmlFor="username"><h6>Cardholder Name</h6></label>
                              <input 
                                type="text" 
                                name="username" 
                                placeholder="Cardholder Name" 
                                required 
                                className="form-control" 
                              />
                            </div>
                          </div>
                          <div className='col-sm-4'>
                            <div className="form-group">
                              <label htmlFor="expirationDate"><h6>Expiration Date</h6></label>
                              <input
                                type="text"
                                name="expirationDate"
                                value={expirationDate}
                                onChange={handleInputChange(setExpirationDate)}
                                placeholder="MM/YY"
                                maxLength="5"
                                pattern="(0[1-9]|1[0-2])\/([0-9]{2})"
                                className="form-control"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <p id="give-final-total-wrap" className="form-wrap mb-3 mt-3">
                        <span className="give-donation-total-label">Donation Total: </span>
                        <span className="give-final-total-amount" data-total={selectedAmount}>
                          {currency} {selectedAmount}
                        </span>
                      </p>
                      <button
                        onClick={handleDonate}
                        className="item-btn"
                        disabled={loading}
                      >
                        {loading ? <CustomSpinner /> : 'Donate Now'}
                      </button>

                      </form>
                    </div>
  )
}

export default CreditCard