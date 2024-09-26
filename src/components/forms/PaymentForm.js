import React, { useState } from 'react';
import './PaymentForm.css';
import { IoClose } from 'react-icons/io5';
import CustomSpinner from '../animations/CustomSpinner';
import { Modal } from 'react-bootstrap';
import PayPalIntegration from '../payments/PayPalIntegration';
import CreditCard from '../payments/CreditCard';
import OfflineDonations from '../payments/OfflineDonations';

const PaymentForm = ({ show, handleClose, selectedAmount, currency }) => {
  const [activeTab, setActiveTab] = useState('credit-card');
  const [loading, setLoading] = useState(false);

  const handleTabChange = (tab) => {
    setLoading(true); // Show spinner
    setTimeout(() => {
      setActiveTab(tab);
      setLoading(false); // Hide spinner after the delay
    }, 500); // Delay of 500ms before rendering the new tab
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="container modal-pop-up">
        <div className="row">
          <div className="modal-inner">
            <div className="card payment-card">
              <button title="Close (Esc)" onClick={handleClose} type="button" className="mfp-close">
                <IoClose />
              </button>
              <header className="card-header">
                <div className="bg-white pl-2 pr-2 pb-2">
                  <div className="select-title pb-2 mb-3">
                    <h2>Select Payment Method</h2>
                    {loading && (
                      <div className="spinner-overlay">
                        <CustomSpinner />
                      </div>
                    )}
                  </div>
                  <ul role="tablist" className="nav bg-light nav-pills rounded nav-fill mb-3">
                    <li className="nav-item">
                      <button
                        onClick={() => handleTabChange('credit-card')}
                        className={`nav-link ${activeTab === 'credit-card' ? 'active' : ''}`}
                      >
                        <i className="fas fa-credit-card mr-2"></i> Credit Card
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        onClick={() => handleTabChange('paypal')}
                        className={`nav-link ${activeTab === 'paypal' ? 'active' : ''}`}
                      >
                        <i className="fab fa-paypal mr-2"></i> PayPal
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        onClick={() => handleTabChange('net-banking')}
                        className={`nav-link ${activeTab === 'net-banking' ? 'active' : ''}`}
                      >
                        <i className="fas fa-mobile-alt mr-2"></i> Offline Donation
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="tab-content">
                  <div
                    className={`tab-pane fade ${activeTab === 'credit-card' ? 'show active' : ''}`}
                    style={{ opacity: loading && activeTab === 'credit-card' ? 0.3 : 1 }}
                  >
                    {activeTab === 'credit-card' && (
                      <CreditCard
                        selectedAmount={selectedAmount}
                        currency={currency}
                      />
                    )}
                  </div>
                  <div
                    className={`tab-pane fade ${activeTab === 'paypal' ? 'show active' : ''}`}
                    style={{ opacity: loading && activeTab === 'paypal' ? 0.3 : 1 }}
                  >
                    {activeTab === 'paypal' && 
                      <PayPalIntegration
                        selectedAmount={selectedAmount}
                        currency={currency}
                      />}
                  </div>
                  <div
                    className={`tab-pane fade ${activeTab === 'net-banking' ? 'show active' : ''}`}
                    style={{ opacity: loading && activeTab === 'net-banking' ? 0.3 : 1 }}
                  >
                    {activeTab === 'net-banking' && (
                      <OfflineDonations
                        selectedAmount={selectedAmount}
                        currency={currency}
                      />
                    )}
                  </div>
                </div>
              </header>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PaymentForm;
