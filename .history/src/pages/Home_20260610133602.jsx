import React, { useState } from 'react';
import { FaGraduationCap, FaHeartbeat, FaUniversity, FaMobileAlt } from 'react-icons/fa';
import jsPDF from 'jspdf';

export default function Home() {
  // --- STATE FOR UPI CLAIM FORM ---
  const [formData, setFormData] = useState({
    donorName: '',
    email: '',
    amount: '',
    utrNumber: '',
    fundSelect: 'Abha Seva Sadan' 
  });

  // --- STATE FOR GALLERY ---
  const [activeTab, setActiveTab] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  // --- FRONTEND PDF GENERATOR (MATCHING PHYSICAL RECEIPTS) ---
  const handleClaimSubmit = (e) => {
    e.preventDefault();
    
    try {
      const isGurukul = formData.fundSelect === 'Gurukul Chatra Nivas';

      const doc = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: [220, 130]
      });

      // Headers
      doc.setFont("helvetica", "bold");
      doc.setFontSize(24);
      doc.setTextColor(80, 80, 80); 
      doc.text(isGurukul ? "GURUKUL CHATRA NIVAS" : "ABHA SEVA SADAN", 110, 20, { align: "center" });
      
      doc.setFont("helvetica", "normal");
      doc.setFontSize(14);
      doc.text("ANDS FOUNDATION", 110, 28, { align: "center" });
      
      doc.setFontSize(10);
      doc.text(isGurukul ? "Regd. No. 1956/4/3864-2006" : "Regd No. - 1956/4/3864-2006", 110, 34, { align: "center" });
      doc.text(isGurukul ? "GOVINDTOLA, DHANUPALI, SAMBALPUR-768005" : "Gargadbahal, Jujomura, Sambalpur-768105", 110, 40, { align: "center" });

      // Border
      doc.setLineWidth(0.5);
      doc.setDrawColor(100, 100, 100);
      doc.rect(5, 5, 210, 120);

      // Sl.No and Date
      doc.setFontSize(12);
      const randomSlNo = Math.floor(Math.random() * 1000) + 118; 
      const today = new Date().toLocaleDateString();
      
      doc.setFont("helvetica", "bold");
      doc.text(`Sl. No: ${randomSlNo}`, 15, 55);
      doc.text(`Date : ${today}`, 175, 55);

      // Main Receipt Body
      doc.setFont("helvetica", "normal");
      doc.text("Received with thanks from Mr/Mrs/Ms.", 15, 70);
      doc.setFont("helvetica", "bold");
      doc.text(formData.donorName, 90, 69); 
      doc.setLineWidth(0.2);
      doc.line(88, 71, 205, 71); 

      doc.setFont("helvetica", "normal");
      doc.text("a sum of Rupees", 15, 85);
      doc.setFont("helvetica", "bold");
      doc.text(`${formData.amount} /-`, 50, 84);
      doc.line(48, 86, 170, 86);

      if (isGurukul) {
        doc.setFont("helvetica", "normal");
        doc.text("By Cash/Cheque/", 175, 85);
        
        doc.text("UPI", 15, 100);
        doc.setFont("helvetica", "bold");
        doc.text(formData.utrNumber, 25, 99);
        doc.line(23, 101, 80, 101); 
        
        doc.setFont("helvetica", "normal");
        doc.text("Date", 85, 100);
        doc.setFont("helvetica", "bold");
        doc.text(today, 95, 99);
        doc.line(93, 101, 130, 101); 
        
        doc.setFont("helvetica", "bold");
        doc.text("on account of Gurukul Chatra Nivas.", 135, 100);
      } else {
        doc.setFont("helvetica", "normal");
        doc.text("by Cash/Cheque/Draft No.", 15, 100);
        doc.setFont("helvetica", "bold");
        doc.text(`UPI - ${formData.utrNumber}`, 65, 99);
        doc.line(63, 101, 130, 101);
        
        doc.setFont("helvetica", "normal");
        doc.text("Dated", 132, 100);
        doc.setFont("helvetica", "bold");
        doc.text(today, 145, 99);
        doc.line(144, 101, 180, 101);
        
        doc.setFont("helvetica", "bold");
        doc.text("on account of ABHA SEVA SADAN.", 15, 110);
      }

      // Bottom Rs. Box
      doc.setFillColor(60, 60, 60); 
      doc.rect(15, 115, 20, 10, "F");
      doc.setTextColor(255, 255, 255);
      doc.text("Rs.", 18, 122);
      
      doc.setDrawColor(0, 0, 0);
      doc.rect(35, 115, 35, 10, "S");
      doc.setTextColor(0, 0, 0); 
      doc.text(`${formData.amount} /-`, 38, 122);

      // Signature Line
      doc.text("Signature", 185, 122);

      // Download PDF
      const fileName = isGurukul ? `Gurukul_Receipt_${formData.donorName}.pdf` : `Abha_Seva_Sadan_Receipt_${formData.donorName}.pdf`;
      doc.save(fileName);
      
      alert("Official Receipt generated and downloaded successfully!");
      setFormData({ donorName: '', email: '', amount: '', utrNumber: '', fundSelect: 'Abha Seva Sadan' });

    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Could not generate the receipt.");
    }
  };

  // --- HANDLERS FOR IMAGE MODAL ---
  const handleImageClick = (imagePath) => setSelectedImage(imagePath);
  const closeImage = () => setSelectedImage(null);

  return (
    <div className="home-container">
      
      {/* 1. HERO SECTION */}
      <div className="hero-gradient text-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3 text-white">Serving Humanity with Love</h1>
          <p className="lead mb-4 text-white" style={{ opacity: 0.9 }}>
            Supporting Gurukul Chatra Nivas & Abha Seva Sadan in their mission to provide education and healthcare.
          </p>
          <a href="#donate-section" className="btn btn-coral btn-lg shadow mt-2">Make a Donation</a>
        </div>
      </div>

      {/* 2. OUR INITIATIVES */}
      <div className="container my-5 pt-4">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: 'var(--primary-blue)' }}>Our Core Initiatives</h2>
          <p className="text-muted">Empowering the Sambalpur community through healthcare and education.</p>
        </div>

        <div className="row g-4 align-items-stretch">
          {/* Gurukul Chatra Nivas Details */}
          <div className="col-lg-6">
            <div className="premium-card h-100 p-4 p-md-5" style={{ borderLeft: '5px solid var(--accent-coral)' }}>
              <FaGraduationCap size={45} color="var(--accent-coral)" className="mb-3" />
              <h3 className="fw-bold mb-3" style={{ color: 'var(--primary-blue)' }}>Gurukul Chatra Nivas</h3>
              <h5 className="text-dark mb-3">Nurturing Future Leaders</h5>
              <p className="text-muted" style={{ lineHeight: '1.8' }}>
                The Gurukula Chatra Nivas is a humble yet profound initiative to provide a safe, nurturing, and value-based environment for students from underprivileged and remote areas. Here, they receive education, food, shelter, and moral guidance to grow into responsible, self-reliant citizens.
              </p>
              <h6 className="fw-bold mt-4 mb-2 text-dark">Your Support Provides:</h6>
              <ul className="text-muted mb-0" style={{ lineHeight: '1.8' }}>
                <li>Comfortable and clean living spaces & nutritious meals</li>
                <li>Educational materials and tuition</li>
                <li>Health care, clothing, and cultural & spiritual education</li>
              </ul>
            </div>
          </div>

          {/* Abha Seva Sadan Details */}
          <div className="col-lg-6">
            <div className="premium-card h-100 p-4 p-md-5" style={{ borderLeft: '5px solid var(--primary-blue)' }}>
              <FaHeartbeat size={45} color="var(--primary-blue)" className="mb-3" />
              <h3 className="fw-bold mb-3" style={{ color: 'var(--accent-coral)' }}>Abha Seva Sadan</h3>
              <h5 className="text-dark mb-3">Multi-Therapy Charitable Hospital</h5>
              <p className="text-muted" style={{ lineHeight: '1.8' }}>
                Dedicated to providing affordable and integrated healthcare to the underprivileged, bridging the gap for rural and tribal populations who face severe challenges accessing quality care. We offer free and low-cost treatments blending modern science with ancient wellness traditions.
              </p>
              <h6 className="fw-bold mt-4 mb-2 text-dark">Therapies Offered Include:</h6>
              <ul className="text-muted mb-0" style={{ lineHeight: '1.8', columnCount: 2 }}>
                <li>Allopathy</li>
                <li>Ayurveda</li>
                <li>Naturopathy</li>
                <li>Yoga & Meditation</li>
                <li>Acupuncture</li>
                <li>Homeopathy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 3. DUAL-ACCOUNT DONATION HUB */}
      <div id="donate-section" className="container my-5 pt-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: 'var(--primary-blue)' }}>Support Our Mission</h2>
          <p className="text-muted">Every Rupee Matters. Every Life Counts. Choose an initiative to support below.</p>
        </div>

        <div className="row g-4 align-items-stretch justify-content-center">
          
          {/* Abha Seva Sadan Donation Box */}
          <div className="col-lg-6">
            <div className="glass-card h-100 p-4 p-md-5 text-center" style={{ borderTop: '5px solid var(--primary-blue)' }}>
              <h4 className="fw-bold mb-4" style={{ color: 'var(--primary-blue)' }}>Donate to Abha Seva Sadan</h4>
              
              <div className="bg-white p-3 rounded-4 mb-4 d-inline-block shadow-sm">
                <img src="/images/abha-qr.png" alt="Abha Seva Sadan QR Code" className="img-fluid" style={{ maxWidth: '180px' }} />
              </div>
              
              <div className="text-start bg-light p-4 rounded-4">
                <h6 className="fw-bold text-dark mb-3"><FaUniversity className="me-2 text-primary" />Direct Bank Transfer</h6>
                <div className="mb-2">
                  <small className="text-muted text-uppercase fw-bold" style={{ fontSize: '0.7rem' }}>Account Name</small>
                  <p className="fw-bold mb-0 text-dark">Abha Seva Sadan</p>
                </div>
                <div className="mb-2">
                  <small className="text-muted text-uppercase fw-bold" style={{ fontSize: '0.7rem' }}>Account Number</small>
                  <p className="fw-bold mb-0 text-dark">44087197883</p>
                </div>
                <div className="row mb-3">
                  <div className="col-6">
                    <small className="text-muted text-uppercase fw-bold" style={{ fontSize: '0.7rem' }}>IFSC Code</small>
                    <p className="fw-bold mb-0 text-dark">SBIN0011576</p>
                  </div>
                  <div className="col-6">
                    <small className="text-muted text-uppercase fw-bold" style={{ fontSize: '0.7rem' }}>Branch</small>
                    <p className="fw-bold mb-0 text-dark">SBI, Dhanupali</p>
                  </div>
                </div>
                {/* UPI ID SECTION FOR ABHA SEVA SADAN */}
                <div className="pt-2 border-top">
                  <small className="text-muted text-uppercase fw-bold" style={{ fontSize: '0.7rem' }}><FaMobileAlt className="me-1"/> Official UPI ID</small>
                  <p className="fw-bold mb-0 text-dark">abhasevasadan@sbi</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gurukul Chatra Nivas Donation Box */}
          <div className="col-lg-6">
            <div className="glass-card h-100 p-4 p-md-5 text-center" style={{ borderTop: '5px solid var(--accent-coral)' }}>
              <h4 className="fw-bold mb-4" style={{ color: 'var(--accent-coral)' }}>Donate to Gurukul Chatra Nivas</h4>
              
              <div className="bg-white p-3 rounded-4 mb-4 d-inline-block shadow-sm">
                <img src="/images/gurukul-qr.png" alt="Gurukul QR Code" className="img-fluid" style={{ maxWidth: '180px' }} />
              </div>
              
              <div className="text-start bg-light p-4 rounded-4">
                <h6 className="fw-bold text-dark mb-3"><FaUniversity className="me-2" style={{ color: 'var(--accent-coral)' }}/>Direct Bank Transfer</h6>
                <div className="mb-2">
                  <small className="text-muted text-uppercase fw-bold" style={{ fontSize: '0.7rem' }}>Account Name</small>
                  <p className="fw-bold mb-0 text-dark">Gurukul Chatra Nivas</p>
                </div>
                <div className="mb-2">
                  <small className="text-muted text-uppercase fw-bold" style={{ fontSize: '0.7rem' }}>Account Number</small>
                  <p className="fw-bold mb-0 text-dark">44191849173</p>
                </div>
                <div className="row mb-3">
                  <div className="col-6">
                    <small className="text-muted text-uppercase fw-bold" style={{ fontSize: '0.7rem' }}>IFSC Code</small>
                    <p className="fw-bold mb-0 text-dark">SBIN0011576</p>
                  </div>
                  <div className="col-6">
                    <small className="text-muted text-uppercase fw-bold" style={{ fontSize: '0.7rem' }}>Branch</small>
                    <p className="fw-bold mb-0 text-dark">SBI, Dhanupali</p>
                  </div>
                </div>
                <div className="pt-2 border-top">
                  <small className="text-muted text-uppercase fw-bold" style={{ fontSize: '0.7rem' }}><FaMobileAlt className="me-1"/> Official UPI ID</small>
                  <p className="fw-bold mb-0 text-dark">gurukulchatraniwas@sbi</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 4. UPI CLAIM FORM WITH DROPDOWN */}
      <div className="container my-5 pb-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="premium-card p-4 p-md-5">
              <div className="text-center mb-4">
                <h3 className="fw-bold" style={{ color: 'var(--primary-blue)' }}>Claim Your Donation Receipt</h3>
                <p className="text-muted small">Paid via QR code or Bank Transfer? Enter your details below to generate your official tax receipt.</p>
              </div>
              
              <form onSubmit={handleClaimSubmit}>
                <div className="row g-4">
                  <div className="col-12">
                    <label className="form-label text-muted small fw-bold">Donated To</label>
                    <select 
                      className="form-select form-select-lg bg-light border-0" 
                      value={formData.fundSelect}
                      onChange={(e) => setFormData({...formData, fundSelect: e.target.value})}
                      required
                    >
                      <option value="Abha Seva Sadan">Abha Seva Sadan</option>
                      <option value="Gurukul Chatra Nivas">Gurukul Chatra Nivas</option>
                    </select>
                  </div>
                  
                  <div className="col-md-6">
                    <label className="form-label text-muted small fw-bold">Donor Name</label>
                    <input type="text" className="form-control form-control-lg bg-light border-0" placeholder="e.g. John Doe" required
                      value={formData.donorName}
                      onChange={(e) => setFormData({...formData, donorName: e.target.value})} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-muted small fw-bold">Email Address</label>
                    <input type="email" className="form-control form-control-lg bg-light border-0" placeholder="e.g. john@example.com" required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-muted small fw-bold">Donation Amount (₹)</label>
                    <input type="number" className="form-control form-control-lg bg-light border-0" placeholder="e.g. 500" required
                      value={formData.amount}
                      onChange={(e) => setFormData({...formData, amount: e.target.value})} />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-muted small fw-bold">12-Digit UTR Number</label>
                    <input type="text" className="form-control form-control-lg bg-light border-0" placeholder="e.g. 123456789012" 
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

      {/* 5. DYNAMIC TABBED PHOTO GALLERY */}
      <div className="container my-5 pb-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: 'var(--primary-blue)' }}>Glimpses of Our Work</h2>
          <p className="text-muted">See the impact of your contributions on the ground.</p>
        </div>
        
        {/* Gallery Tabs */}
        <div className="d-flex justify-content-center mb-4">
          <div className="btn-group shadow-sm bg-white rounded-pill p-1">
            <button 
              className={`btn rounded-pill px-4 ${activeTab === 'All' ? 'btn-coral' : 'btn-light text-muted border-0'}`}
              onClick={() => setActiveTab('All')}
            >
              All Photos
            </button>
            <button 
              className={`btn rounded-pill px-4 ${activeTab === 'Gurukul' ? 'btn-coral' : 'btn-light text-muted border-0'}`}
              onClick={() => setActiveTab('Gurukul')}
            >
              Gurukul
            </button>
            <button 
              className={`btn rounded-pill px-4 ${activeTab === 'Hospital' ? 'btn-coral' : 'btn-light text-muted border-0'}`}
              onClick={() => setActiveTab('Hospital')}
            >
              Hospital
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="row g-4">
          {/* GURUKUL IMAGES */}
          {(activeTab === 'All' || activeTab === 'Gurukul') && 
            /* You can add more numbers to this array if you have more than 8 photos! */
            [1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div className="col-6 col-md-4 col-lg-3" key={`gurukul-${num}`}>
                <div className="premium-card h-100 p-1">
                  <img 
                    src={`/images/gurukul-${num}.jpg`} 
                    alt={`Gurukul activities ${num}`} 
                    className="img-fluid rounded-3"
                    style={{ cursor: 'pointer', objectFit: 'cover', height: '220px', width: '100%', transition: 'transform 0.3s' }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.03)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                    onClick={() => handleImageClick(`/images/gurukul-${num}.jpg`)}
                    onError={(e) => e.target.style.display = 'none'} 
                  />
                </div>
              </div>
          ))}

          {/* HOSPITAL IMAGES */}
          {(activeTab === 'All' || activeTab === 'Hospital') && 
            /* You can add more numbers to this array if you have more than 8 photos! */
            [1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div className="col-6 col-md-4 col-lg-3" key={`hospital-${num}`}>
                <div className="premium-card h-100 p-1">
                  <img 
                    src={`/images/hospital-${num}.jpg`} 
                    alt={`Hospital facility ${num}`} 
                    className="img-fluid rounded-3"
                    style={{ cursor: 'pointer', objectFit: 'cover', height: '220px', width: '100%', transition: 'transform 0.3s' }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.03)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                    onClick={() => handleImageClick(`/images/hospital-${num}.jpg`)}
                    onError={(e) => e.target.style.display = 'none'}
                  />
                </div>
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
            <img src={selectedImage} alt="Enlarged view" className="img-fluid rounded-4 border border-white border-4 shadow-lg" style={{ maxHeight: '85vh' }} />
          </div>
        </div>
      )}
      
    </div>
  );
}