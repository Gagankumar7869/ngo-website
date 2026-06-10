import React, { useState } from 'react';

export default function Home() {
  // --- STATE FOR UPI CLAIM FORM ---
  const [formData, setFormData] = useState({
    donorName: '',
    email: '',
    amount: '',
    utrNumber: ''
  });

  // --- HANDLER FOR UPI CLAIM FORM ---
  const handleClaimSubmit = async (e) => {
    e.preventDefault();
    try {
      // Connects to your Eclipse Spring Boot server
      const response = await fetch('http://localhost:8080/api/receipts/claim', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Claim submitted successfully! The admin will verify and send your receipt.");
        // Clear the form after success
        setFormData({ donorName: '', email: '', amount: '', utrNumber: '' });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error connecting to server:", error);
      alert("Unable to connect to the server. Make sure your Eclipse backend is running!");
    }
  };

  // --- STATE AND HANDLERS FOR IMAGE GALLERY ---
  const [selectedImage, setSelectedImage] = useState(null);
  
  const handleImageClick = (imagePath) => {
    setSelectedImage(imagePath);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="home-container">
      
      {/* 1. HERO SECTION */}
      <div className="hero-gradient text-center pb-5 pt-5 mb-5">
        <div className="container mt-4 pt-4 pb-4">
          <h1 className="display-4 fw-bold mb-3 text-white">Serving Humanity with Love</h1>
          <p className="lead mb-4 text-white" style={{ opacity: 0.9 }}>
            Supporting Gurukul Chatra Nivas & Abha Seva Sadan in their mission to provide education and healthcare.
          </p>
          <a href="#donate-section" className="btn btn-coral btn-lg shadow mt-2">Make a Donation</a>
        </div>
      </div>
      {/* 1.5 ABOUT OUR INITIATIVES (NEW) */}
      <div className="container my-5 pt-4">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: 'var(--primary-blue)' }}>Our Core Initiatives</h2>
          <p className="text-muted">Empowering the Sambalpur community through healthcare and education.</p>
        </div>

        <div className="row g-4 align-items-stretch">
          {/* Gurukul Chatra Nivas Details */}
          <div className="col-md-6">
            <div className="premium-card h-100 p-4 p-md-5" style={{ borderLeft: '5px solid var(--accent-coral)' }}>
              <h3 className="fw-bold mb-3" style={{ color: 'var(--primary-blue)' }}>Gurukul Chatra Nivas</h3>
              <h5 className="text-dark mb-3">Nurturing Future Leaders</h5>
              <p className="text-muted" style={{ lineHeight: '1.8' }}>
                Gurukul Chatra Nivas provides a safe, nurturing home and high-quality education for children from marginalized and underprivileged backgrounds. 
              </p>
              <p className="text-muted" style={{ lineHeight: '1.8' }}>
                Beyond just standard academics, we focus heavily on value-based education, essential life skills, and holistic physical development. Our goal is to empower these children with the knowledge and character they need to break the cycle of poverty and build a brighter future for themselves and their communities.
              </p>
            </div>
          </div>

          {/* Abha Seva Sadan Details */}
          <div className="col-md-6">
            <div className="premium-card h-100 p-4 p-md-5" style={{ borderLeft: '5px solid var(--primary-blue)' }}>
              <h3 className="fw-bold mb-3" style={{ color: 'var(--accent-coral)' }}>Abha Seva Sadan</h3>
              <h5 className="text-dark mb-3">Healthcare for All</h5>
              <p className="text-muted" style={{ lineHeight: '1.8' }}>
                Abha Seva Sadan is our dedicated healthcare facility committed to providing free and highly subsidized medical treatments to those who cannot afford private care.
              </p>
              <p className="text-muted" style={{ lineHeight: '1.8' }}>
                Operating with a spirit of service, our medical camps and daily clinics ensure that basic healthcare remains a fundamental human right, not a privilege. We provide essential medicines, expert consultations, and emergency support to the surrounding rural populations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. DONATION HUB */}
      <div id="donate-section" className="container my-5 pt-4">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: 'var(--primary-blue)' }}>Support Our Mission</h2>
          <p className="text-muted">100% of your contribution goes directly to the cause.</p>
        </div>

        <div className="row g-4 align-items-stretch">
          {/* QR Code 1: Abha Seva Sadan */}
          <div className="col-md-4">
            <div className="premium-card h-100 text-center p-4">
              <h5 className="fw-bold mb-3" style={{ color: 'var(--primary-blue)' }}>Abha Seva Sadan</h5>
              <div className="bg-light p-3 rounded-4 mb-3 d-inline-block">
                <img src="/images/abha-qr.png" alt="Abha Seva Sadan QR Code" className="img-fluid" style={{ maxWidth: '160px' }} />
              </div>
              <p className="text-muted small mb-0">Scan via GPay, PhonePe, or Paytm</p>
            </div>
          </div>

          {/* QR Code 2: Gurukul */}
          <div className="col-md-4">
            <div className="premium-card h-100 text-center p-4">
              <h5 className="fw-bold mb-3" style={{ color: 'var(--primary-blue)' }}>Gurukul Chatra Nivas</h5>
              <div className="bg-light p-3 rounded-4 mb-3 d-inline-block">
                {/* Make sure you have gurukul-qr.png in your public/images folder! */}
                <img src="/images/gurukul-qr.png" alt="Gurukul QR Code" className="img-fluid" style={{ maxWidth: '160px' }} />
              </div>
              <p className="text-muted small mb-0">Scan via GPay, PhonePe, or Paytm</p>
            </div>
          </div>

          {/* Bank Details */}
          <div className="col-md-4">
            <div className="premium-card h-100 p-4" style={{ borderTop: '5px solid var(--accent-coral)' }}>
              <h5 className="fw-bold mb-4" style={{ color: 'var(--primary-blue)' }}>Direct Bank Transfer</h5>
              <div className="mb-3 border-bottom pb-2">
                <small className="text-muted text-uppercase fw-bold" style={{ fontSize: '0.75rem' }}>Account Name</small>
                <p className="fw-bold mb-0 text-dark">ANDS Foundation</p>
              </div>
              <div className="mb-3 border-bottom pb-2">
                <small className="text-muted text-uppercase fw-bold" style={{ fontSize: '0.75rem' }}>Account Number</small>
                <p className="fw-bold mb-0 text-dark">12345678901234</p>
              </div>
              <div className="mb-3 border-bottom pb-2">
                <small className="text-muted text-uppercase fw-bold" style={{ fontSize: '0.75rem' }}>IFSC Code</small>
                <p className="fw-bold mb-0 text-dark">SBIN0001234</p>
              </div>
              <div>
                <small className="text-muted text-uppercase fw-bold" style={{ fontSize: '0.75rem' }}>Bank Branch</small>
                <p className="fw-bold mb-0 text-dark">SBI, Sambalpur</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. UPI CLAIM FORM */}
      <div className="container my-5 pb-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="premium-card p-4 p-md-5">
              <div className="text-center mb-4">
                <h3 className="fw-bold" style={{ color: 'var(--primary-blue)' }}>Claim Your Donation Receipt</h3>
                <p className="text-muted small">Paid via QR code? Enter your details below to generate your official tax receipt.</p>
              </div>
              
              <form onSubmit={handleClaimSubmit}>
                <div className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label text-muted small fw-bold">Donor Name</label>
                    <input type="text" className="form-control form-control-lg" placeholder="e.g. John Doe" required
                      value={formData.donorName}
                      onChange={(e) => setFormData({...formData, donorName: e.target.value})} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-muted small fw-bold">Email Address</label>
                    <input type="email" className="form-control form-control-lg" placeholder="e.g. john@example.com" required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-muted small fw-bold">Donation Amount (₹)</label>
                    <input type="number" className="form-control form-control-lg" placeholder="e.g. 500" required
                      value={formData.amount}
                      onChange={(e) => setFormData({...formData, amount: e.target.value})} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-muted small fw-bold">12-Digit UTR Number</label>
                    <input type="text" className="form-control form-control-lg" placeholder="e.g. 123456789012" 
                      minLength="12" maxLength="12" required
                      value={formData.utrNumber}
                      onChange={(e) => setFormData({...formData, utrNumber: e.target.value})} />
                  </div>
                  <div className="col-12 mt-4 text-center">
                    <button type="submit" className="btn btn-coral btn-lg px-5 shadow-sm">Submit Details & Get Receipt</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* 4. PHOTO GALLERIES */}
      <div className="container my-5 pb-5">
        <h3 className="fw-bold mb-4 text-center" style={{ color: 'var(--primary-blue)' }}>Glimpses of Our Work</h3>
        
        {/* Hospital Images */}
        <h5 className="mt-5 mb-3 text-muted fw-bold">Abha Seva Sadan Hospital</h5>
        <div className="row g-3">
          {[1, 2, 3, 4].map((num) => (
            <div className="col-6 col-md-3" key={`hospital-${num}`}>
              <img 
                src={`/images/hospital-${num}.jpg`} 
                alt={`Hospital facility ${num}`} 
                className="img-fluid rounded shadow-sm"
                style={{ cursor: 'pointer', objectFit: 'cover', height: '220px', width: '100%' }}
                onClick={() => handleImageClick(`/images/hospital-${num}.jpg`)}
              />
            </div>
          ))}
        </div>

        {/* Gurukul Images */}
        <h5 className="mt-5 mb-3 text-muted fw-bold">Gurukul Chatra Nivas</h5>
        <div className="row g-3">
          {[1, 2, 3, 4].map((num) => (
            <div className="col-6 col-md-3" key={`gurukul-${num}`}>
              <img 
                src={`/images/gurukul-${num}.jpg`} 
                alt={`Gurukul activities ${num}`} 
                className="img-fluid rounded shadow-sm"
                style={{ cursor: 'pointer', objectFit: 'cover', height: '220px', width: '100%' }}
                onClick={() => handleImageClick(`/images/gurukul-${num}.jpg`)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* IMAGE ENLARGEMENT MODAL */}
      {selectedImage && (
        <div 
          className="modal d-flex align-items-center justify-content-center" 
          style={{ backgroundColor: 'rgba(0,0,0,0.85)', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1050 }}
          onClick={closeImage}
        >
          <div style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }}>
            <button 
              className="btn btn-danger position-absolute shadow" 
              style={{ top: '-15px', right: '-15px', borderRadius: '50%', width: '40px', height: '40px', fontWeight: 'bold' }}
              onClick={closeImage}
            >
              X
            </button>
            <img src={selectedImage} alt="Enlarged view" className="img-fluid rounded border border-white border-4 shadow-lg" style={{ maxHeight: '85vh' }} />
          </div>
        </div>
      )}
      
    </div>
  );
}