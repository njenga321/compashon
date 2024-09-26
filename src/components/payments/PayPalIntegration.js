import React, { useEffect, useState } from 'react';

const PayPalIntegration = ({selectedAmount, currency}) => {
  const [sdkReady, setSdkReady] = useState(false);

  // Function to dynamically load the PayPal SDK
  const addPayPalSdk = () => {
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=Af-thUakn7pZIZTz4TK6GX7AYvEUZ0ny_DZ7lSTXco72SZLCzet7tGXPYt8QuUaiHTPcDRDstweY-swM';
    script.async = true;
    script.onload = () => setSdkReady(true); // Set SDK ready once it's loaded
    document.body.appendChild(script);
  };

  useEffect(() => {
    // Load PayPal SDK when component mounts
    if (!window.paypal) {
      addPayPalSdk();
    } else {
      setSdkReady(true);
    }
  }, []);

  useEffect(() => {
    // Once SDK is ready, render the PayPal button
    if (sdkReady) {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: selectedAmount, 
                },
                payee: {
                  email_address: 'njengapeter006@gmail.com', // Receiving PayPal email
                },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            console.log('Payment successful!', details);
            // Redirect to payment confirmation
            window.location.href = './payment-confirmation';
          });
        },
        onError: (err) => {
          console.error('PayPal error', err);
          // Handle error (e.g., display an error message to the user)
        },
      }).render('#paypal-button-container');
    }
  }, [sdkReady]); // This ensures the button renders once the SDK is ready

  return (
    <div className="tab-pane fade show active pt-3">
      {sdkReady ? (
        <div id="paypal-button-container"></div>
      ) : (
        <p>Loading PayPal button...</p>
      )}
      <p id="give-final-total-wrap" className="form-wrap mb-3 mt-3">
        <span className="give-donation-total-label">Donation Total: </span>
        <span className="give-final-total-amount" data-total={selectedAmount}>
            {currency} {selectedAmount}
        </span>
        </p>
      <p className="text-muted">
        Note: After clicking on the button, you will be directed to a secure
        gateway for payment. After completing the payment process, you will be
        redirected back to the website to view details of your order.
      </p>
    </div>
  );
};

export default PayPalIntegration;
