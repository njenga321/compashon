import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DonationForm.css';
import PaymentForm from './PaymentForm';

const DonationForm = () => {
  const [selectedAmount, setSelectedAmount] = useState(500);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [currency, setCurrency] = useState('Ksh');
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  // Conversion rates
  const conversionRates = {
    Ksh: 1,
    USD: 140,
    Euro: 145,
  };

  const navigate = useNavigate();

  // Function to get currency symbol
  const getCurrencySymbol = () => {
    switch (currency) {
      case 'USD':
        return '$';
      case 'Euro':
        return '€';
      default:
        return 'Ksh';
    }
  };

  // Function to convert amount based on currency
  const convertAmount = (amount) => {
    return (amount / conversionRates[currency]).toFixed(2);
  };

  // Button values in Ksh (raw values for conversion)
  const donationAmounts = [500, 1000, 5000];

  const handleAmountClick = (amount) => {
    setIsCustom(false);
    setCustomAmount('');
    setSelectedAmount(amount);
  };

  const handleCustomClick = () => {
    setIsCustom(true);
    setSelectedAmount('');
  };

  // Format number with commas
  const formatNumberWithCommas = (value) => {
    if (!value) return value;
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value.replace(/,/g, '');
    setCustomAmount(value);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleShowPayment = () => {
    setShowPaymentModal(true);
  };

  const handleClosePayment = () => {
    setShowPaymentModal(false);
  };

  // If custom, use customAmount, otherwise, use selectedAmount
  const rawAmount = isCustom ? customAmount : selectedAmount;
  const convertedAmount = rawAmount ? convertAmount(rawAmount) : '0.00';
  const formattedAmount = new Intl.NumberFormat().format(Number(convertedAmount));

 

  return (
    <div className="donation-form">
      <div className="donation-display">
        <div className="currency-selector">
          <select value={currency} onChange={handleCurrencyChange}>
            <option value="Ksh">Ksh</option>
            <option value="USD">USD</option>
            <option value="Euro">Euro</option>
          </select>
        </div>
        <div className="amount-display">
          <div>
            {isCustom ? (
              <input
                type="text"
                value={formatNumberWithCommas(customAmount)}
                onChange={handleCustomAmountChange}
                placeholder="Enter amount"
                className="custom-amount-input"
              />
            ) : (
              <span className="donation-amount">{formattedAmount}</span>
            )}
          </div>
        </div>
      </div>
      <div className="donation-buttons">
        {donationAmounts.map((amount) => (
          <button
            key={amount}
            onClick={() => handleAmountClick(amount)}
            className="item-btn"
          >
            {getCurrencySymbol()} {new Intl.NumberFormat().format(convertAmount(amount))}
          </button>
        ))}
        <button onClick={handleCustomClick} className="item-btn">
          Custom
        </button>
      </div>
      <button
        onClick={handleShowPayment}
        className="item-btn donate-btn"
      >
        Donate Now
      </button>

      <PaymentForm
        show={showPaymentModal}
        handleClose={handleClosePayment}
        selectedAmount={formattedAmount}
        currency={currency}
      />
    </div>
  );
};

export default DonationForm;
