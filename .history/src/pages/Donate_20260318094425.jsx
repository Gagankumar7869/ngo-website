import React from 'react';
// Ensure this path matches where you saved the QR code image from the PDF
import qrCodeImage from '../assets/images/abha-qr.png'; 

const Donate = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center mb-5">
          <h2 className="fw-bold text-primary mb-2">Appeal for Donations</h2>
          <h4 className="text-secondary mb-3">Abha Seva Sadan Multi-Therapy Charitable Hospital</h4>
          <p className="fst-italic text-muted fs-5">"Serving Humanity is Serving God"</p>
          <p className="lead mt-4">
            We are dedicated to providing affordable and integrated healthcare to the underprivileged. 
            Your contributions will help us build the hospital, procure medical equipment, and support free health camps.
          </p>
        </div>
      </div>

      <div className="row justify-content-center">
        {/* Bank Details Card */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100 border-0">
            <div className="card-body p-4 bg-light rounded">
              <h4 className="card-title text-primary mb-4 border-bottom pb-2">Direct Bank Transfer</h4>
              <ul className="list-unstyled fs-5">
                <li className="mb-3"><strong>Account Name:</strong> Abha Seva Sadan</li>
                <li className="mb-3"><strong>Account Number:</strong> 44087197883</li>
                <li className="mb-3"><strong>Bank Name:</strong> State Bank of India</li>
                <li className="mb-3"><strong>Branch:</strong> Dhanupali Branch (11576)</li>
                <li className="mb-3"><strong>IFSC Code:</strong> SBIN0011576</li>
              </ul>
            </div>
          </div>
        </div>

        {/* QR Code Card */}
        <div className="col-md-5 mb-4 text-center">
          <div className="card shadow-sm h-100 border-0">
            <div className="card-body p-4">
              <h4 className="card-title text-primary mb-4">Scan & Donate via UPI</h4>
              <img 
                src={qrCodeImage} 
                alt="Abha Seva Sadan QR Code" 
                className="img-fluid mb-3 border p-2 rounded shadow-sm"
                style={{ maxWidth: '250px' }}
              />
              <p className="text-muted mt-2">
                Scan using Google Pay, PhonePe, Paytm, or any UPI app.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer / Contact Info */}
      <div className="row justify-content-center mt-4">
        <div className="col-lg-10 text-center text-muted small">
          <hr />
          <p className="mb-1 fw-bold">Abha Seva Sadan - A Unit of ANDS FOUNDATION</p>
          <p className="mb-1">Reg. No. 1956/4/3864-2006</p>
          <p className="mb-1">Gargadbahal, Jujomura-768105, Sambalpur, Odisha, BHARAT</p>
          <p className="mb-0">Mob: 9938167456 | Email: abhasevasadansambalpur@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Donate;