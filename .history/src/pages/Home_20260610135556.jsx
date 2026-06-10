import React, { useState } from 'react';
import { FaGraduationCap, FaHeartbeat, FaUniversity, FaMobileAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
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

  // --- FRONTEND PDF GENERATOR ---
  const handleClaimSubmit = (e) => {
    e.preventDefault();
    
    try {
      const isGurukul = formData.fundSelect === 'Gurukul Chatra Nivas';

      const doc = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: [220, 130]
      });

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

      doc.setLineWidth(0.5);
      doc.setDrawColor(100, 100, 100);
      doc.rect(5, 5, 210, 120);

      doc.setFontSize(12);
      const randomSlNo = Math.floor(Math.random() * 1000) + 118; 
      const today = new Date().toLocaleDateString();
      
      doc.setFont("helvetica", "bold");
      doc.text(`Sl. No: ${randomSlNo}`, 15, 55);
      doc.text(`Date : ${today}`, 175, 55);

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

      doc.setFillColor(60, 60, 60); 
      doc.rect(15, 115, 20, 10, "F");
      doc.setTextColor(255, 255, 255);
      doc.text("Rs.", 18, 122);
      
      doc.setDrawColor(0, 0, 0);
      doc.rect(35, 115, 35, 10, "S");
      doc.setTextColor(0, 0, 0); 
      doc.text(`${formData.amount} /-`, 38, 122);

      doc.text("Signature", 185, 122);

      const fileName = isGurukul ? `Gurukul_Receipt_${formData.donorName}.pdf` : `Abha_Seva_Sadan_Receipt_${formData.donorName}.pdf`;
      doc.save(fileName);
      
      alert("Official Receipt generated and downloaded successfully!");
      setFormData({ donorName: '', email: '', amount: '', utrNumber: '', fundSelect: 'Abha Seva Sadan' });

    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Could not generate the receipt.");
    }
  };

  const handleImageClick = (imagePath) => setSelectedImage(imagePath);
  const closeImage = () => setSelectedImage(null);

  // Reusable style object for the Therapy Grid boxes
  const therapyBoxStyle = {
    color: '#2B6CB0',
    border: '1px solid rgba(43, 108, 176, 0.2)',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
    transition: 'all 0.2s ease-in-out'
  };

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

      {/* 2. ABHA SEVA SADAN SECTION */}
      <div className="container my-5 py-4">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <h2 className="fw-bold mb-2" style={{ color: '#2B6CB0' }}>Abha Seva Sadan</h2>
            <h5 className="text-muted mb-4">Multi-Therapy Charitable Hospital</h5>
            <p className="text-dark mb-4" style={{ fontSize: '1.1rem' }}>
              We provide affordable and integrated healthcare to the underprivileged, blending modern science with ancient wellness traditions.
            </p>
            
            {/* Therapies Grid - Styled to match screenshot */}
            <div className="row row-cols-2 g-3 text-center fw-bold">
              <div className="col"><div className="bg-white p-3" style={therapyBoxStyle}>Allopathy</div></div>
              <div className="col"><div className="bg-white p-3" style={therapyBoxStyle}>Ayurveda</div></div>
              <div className="col"><div className="bg-white p-3" style={therapyBoxStyle}>Naturopathy</div></div>
              <div className="col"><div className="bg-white p-3" style={therapyBoxStyle}>Yoga & Meditation</div></div>
              <div className="col"><div className="bg-white p-3" style={therapyBoxStyle}>Acupuncture</div></div>
              <div className="col"><div className="bg-white p-3" style={therapyBoxStyle}>Homeopathy</div></div>
              <div className="col"><div className="bg-white p-3" style={therapyBoxStyle}>Psychological Counseling</div></div>
              <div className="col"><div className="bg-white p-3" style={therapyBoxStyle}>Disabilities Rehabilitation</div></div>
            </div>
          </div>
          
          <div className="col-lg-5">
            {/* Hospital Vision Box - Styled to match screenshot */}
            <div className="p-5 text-center text-white" style={{ backgroundColor: '#3B82F6', borderRadius: '12px', boxShadow: '0 15px 35px rgba(59, 130, 246, 0.3)' }}>
              <h3 className="fw-bold mb-4">Hospital Vision</h3>
              <p className="mb-0 fs-5" style={{ lineHeight: '1.6' }}>
                To create a center of healing focused on the total wellbeing of body, mind, and spirit for those who cannot afford treatment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. GURUKUL CHATRA NIVAS SECTION */}
      <div className="container my-5 py-5 border-top border-bottom">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: 'var(--primary-blue)' }}>Gurukul Chatra Nivas</h2>
          <h5 className="mb-3" style={{ color: '#D53F8C' }}>A Home of Learning, Values & Service</h5>
        </div>

        <div className="row g-4 align-items-stretch">
          <div className="col-md-6">
            <div className="h-100 p-4 p-md-5 rounded-4 shadow-sm" style={{ backgroundColor: '#F7FAFC' }}>
              <h4 className="fw-bold mb-4" style={{ color: 'var(--primary-blue)' }}>Provisions & Education</h4>
              <p className="text-dark mb-0" style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
                We offer free lodging, balanced vegetarian meals, and admission to nearby schools/colleges for economically disadvantaged boys. Our holistic approach includes daily evening tuition, regular medical check-ups, and participation in cultural festivals.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-4 p-md-5 rounded-4 shadow-sm bg-white border">
              <h4 className="fw-bold mb-4" style={{ color: 'var(--primary-blue)' }}>Rules & Daily Routine</h4>
              <ul className="list-unstyled mb-0 text-dark" style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
                <li className="mb-3">🌅 <strong>Brahma Muhurta:</strong> Wake up at 4:30 AM for personal hygiene and yoga.</li>
                <li className="mb-3">🥦 <strong>Diet:</strong> Strictly sentient vegetarian food. No outside junk food.</li>
                <li className="mb-3">🛑 <strong>Strict Bans:</strong> Zero tolerance for intoxicants or smartphones.</li>
                <li>🤫 <strong>Discipline:</strong> Absolute silence observed during study hours.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 4. SUPPORT OUR MISSION BANNER */}
      <div className="py-5 my-5 shadow-lg" style={{ backgroundColor: '#1A365D', color: 'white' }}>
        <div className="container py-4 text-center">
          <p className="fw-bold mb-2" style={{ color: '#F6E05E', letterSpacing: '1px' }}>Help & donate us now</p>
          <h2 className="fw-bold mb-5 display-5">How Can You Support Our Mission</h2>
          
          <div className="row g-4 text-start">
            <div className="col-md-4">
              {/* Mission Card 1 - Styled to match screenshot */}
              <div className="h-100 p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.15)', borderRadius: '12px' }}>
                <h4 className="fw-bold mb-3">Sponsor a Child's Education</h4>
                <p className="mb-0" style={{ opacity: 0.9, lineHeight: '1.6' }}>
                  Support the children at Gurukul Chatra Nivas by funding their tuition, school supplies, and daily nutritious meals.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              {/* Mission Card 2 - Styled to match screenshot */}
              <div className="h-100 p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.15)', borderRadius: '12px' }}>
                <h4 className="fw-bold mb-3">Sponsor Medical Care</h4>
                <p className="mb-0" style={{ opacity: 0.9, lineHeight: '1.6' }}>
                  Help us procure medical equipment and provide free or low-cost holistic treatments at Abha Seva Sadan.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              {/* Mission Card 3 - Styled to match screenshot */}
              <div className="h-100 p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.15)', borderRadius: '12px' }}>
                <h4 className="fw-bold mb-3">Celebrate Your Special Day</h4>
                <p className="mb-0" style={{ opacity: 0.9, lineHeight: '1.6' }}>
                  Celebrate your birthdays or anniversaries by sponsoring a special meal for the children and making a real difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. DUAL-ACCOUNT DONATION HUB */}
      <div id="donate-section" className="container my-5 pt-4">
        <div className="row g-4 align-items-stretch justify-content-center">
          
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
                <div className="pt-2 border-top">
                  <small className="text-muted text-uppercase fw-bold" style={{ fontSize: '0.7rem' }}><FaMobileAlt className="me-1"/> Official UPI ID</small>
                  <p className="fw-bold mb-0 text-dark">abhasevasadan@sbi</p>
                </div>
              </div>
            </div>
          </div>

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

      {/* 6. UPI CLAIM FORM */}
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

      {/* 7. DYNAMIC TABBED PHOTO GALLERY */}
      <div className="container my-5 pb-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: 'var(--primary-blue)' }}>Glimpses of Our Work</h2>
          <p className="text-muted">See the impact of your contributions on the ground.</p>
        </div>
        
        <div className="d-flex justify-content-center mb-4">
          <div className="btn-group shadow-sm bg-white rounded-pill p-1">
            <button className={`btn rounded-pill px-4 ${activeTab === 'All' ? 'btn-coral' : 'btn-light text-muted border-0'}`} onClick={() => setActiveTab('All')}>All Photos</button>
            <button className={`btn rounded-pill px-4 ${activeTab === 'Gurukul' ? 'btn-coral' : 'btn-light text-muted border-0'}`} onClick={() => setActiveTab('Gurukul')}>Gurukul</button>
            <button className={`btn rounded-pill px-4 ${activeTab === 'Hospital' ? 'btn-coral' : 'btn-light text-muted border-0'}`} onClick={() => setActiveTab('Hospital')}>Hospital</button>
          </div>
        </div>

        <div className="row g-4">
          {(activeTab === 'All' || activeTab === 'Gurukul') && 
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
          {(activeTab === 'All' || activeTab === 'Hospital') && 
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

      {/* 8. FOOTER SECTION */}
      <footer className="text-center py-5 mt-5" style={{ backgroundColor: '#1A365D', color: '#A0AEC0' }}>
        <div className="container">
          <h4 className="fw-bold mb-3" style={{ color: '#F6E05E', letterSpacing: '1px' }}>ANDS FOUNDATION</h4>
          <p className="mb-1" style={{ fontSize: '0.9rem' }}>Reg. No. 1956/4/3864-2006</p>
          <p className="mb-4" style={{ fontSize: '0.9rem' }}>Gargadbahal, Jujomura & Govindtola, Dhanupali, Sambalpur, Odisha</p>
          
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 gap-md-5 mt-4" style={{ color: 'white' }}>
            <div className="d-flex align-items-center fw-semibold">
              <FaPhone className="me-2 text-muted" /> +91 9938167456
            </div>
            <div className="d-flex align-items-center fw-semibold">
              <FaEnvelope className="me-2 text-muted" /> abhasevasadansambalpur@gmail.com
            </div>
          </div>
        </div>
      </footer>

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