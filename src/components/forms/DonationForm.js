import React, { useState } from 'react';
import './DonationForm.css'; // Import the CSS file

const DonationForm = () => {
  const [selectedAmount, setSelectedAmount] = useState(500);
  const [customAmount, setCustomAmount] = useState('');
  const [isCustom, setIsCustom] = useState(false);
  const [currency, setCurrency] = useState('Ksh');

  // Conversion rates
  const conversionRates = {
    Ksh: 1,
    USD: 140,
    Euro: 145,
  };

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
    setCustomAmount(''); // Clear custom input when clicking a button
    setSelectedAmount(amount);
  };

  const handleCustomClick = () => {
    setIsCustom(true);  // Switch to custom mode
    setSelectedAmount(''); // Clear selected predefined amount
  };

  // Function to handle formatting of the custom input value
  const formatNumberWithCommas = (value) => {
    if (!value) return value; // Prevent formatting empty value
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // Update custom amount and remove commas while typing
  const handleCustomAmountChange = (e) => {
    const value = e.target.value.replace(/,/g, ''); // Remove commas before storing
    setCustomAmount(value);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  // If custom, use customAmount, otherwise, use selectedAmount (raw for calculation)
  const rawAmount = isCustom ? customAmount : selectedAmount;
  const convertedAmount = rawAmount ? convertAmount(rawAmount) : '0.00';

  // Format the amount for display (after conversion)
  const formattedAmount = new Intl.NumberFormat().format(Number(convertedAmount));

  return (
    <div className="donation-form">

      {/* Display Div */}
      <div className="donation-display">
        <div className="currency-selector">
          <select value={currency} onChange={handleCurrencyChange} className="">
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
        onClick={() => alert(`You donated ${formattedAmount} ${currency}`)}
        className="item-btn donate-btn"
      >
        Donate Now
      </button>
    </div>
  );
};

export default DonationForm;
