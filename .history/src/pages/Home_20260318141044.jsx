import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
const qrCodeImage = '/images/abha-qr.png';

const Home = () => {
  const hospitalPhotos = Array.from({ length: 6 }, (_, i) => i + 1);
  const gurukulPhotos = Array.from({ length: 18 }, (_, i) => i + 1);

  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
    setShowModal(true);
  };

  return (
    <div>
      {/* SPLIT HERO SECTION */}
      <header className="bg-white py-5 mt-3 mb-5">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0 pe-lg-5">
              <h1 className="display-4 fw-bold mb-4 text-ngo-blue">
                Serving Humanity is <span className="text-ngo-coral">Serving God</span>
              </h1>
              <p className="lead text-muted mb-4 lh-base">
                A unified mission to uplift the underprivileged in Sambalpur, Odisha. 
                We provide integrated healthcare at Abha Seva Sadan and holistic, moral education for boys at Gurukul Chatra Nivas.
              </p>
              <div className="d-flex gap-3">
                <a href="#gurukul" className="btn btn-outline-custom btn-lg px-4 rounded-pill fw-semibold">
                  Read More
                </a>
                <a href="#donate" className="btn btn-donate btn-lg px-4 rounded-pill fw-bold">
                  Donate Now
                </a>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img 
                src={`/src/assets/images/gurukul-1.jpg`} 
                alt="Children of Gurukul" 
                className="img-fluid hero-image border border-white border-5 shadow-lg"
              />
            </div>
          </div>
        </div>
      </header>

      {/* DARK SUPPORT CARDS SECTION */}
      <section className="py-5 bg-ngo-blue">
        <div className="container text-center py-5">
          <p className="text-ngo-yellow fst-italic mb-2 fs-5">Help & donate us now</p>
          <h2 className="fw-bold text-white mb-5 display-6">How Can You Support Our Mission</h2>
          
          <div className="row g-4 px-lg-5">
            <div className="col-md-4">
              <div className="support-card p-4 h-100 rounded text-start">
                <h4 className="fw-bold mb-3">Sponsor a Child's Education</h4>
                <p className="mb-0">Support the children at Gurukul Chatra Nivas by funding their tuition, school supplies, and daily nutritious meals.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="support-card p-4 h-100 rounded text-start">
                <h4 className="fw-bold mb-3">Sponsor Medical Care</h4>
                <p className="mb-0">Help us procure medical equipment and provide free or low-cost holistic treatments at Abha Seva Sadan.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="support-card p-4 h-100 rounded text-start">
                <h4 className="fw-bold mb-3">Celebrate Your Special Day</h4>
                <p className="mb-0">Celebrate your birthdays or anniversaries by sponsoring a special meal for the children and making a real difference.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABHA SEVA SADAN (HOSPITAL) */}
      <section id="hospital" className="bg-ngo-light py-5">
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-7">
              <h2 className="fw-bold text-ngo-teal mb-3">Abha Seva Sadan</h2>
              <h5 className="text-secondary mb-4">Multi-Therapy Charitable Hospital</h5>
              <p className="fs-5 text-muted">
                We provide affordable and integrated healthcare to the underprivileged, blending modern science with ancient wellness traditions.
              </p>
              <div className="row g-3 mt-3">
                {['Allopathy', 'Ayurveda', 'Naturopathy', 'Yoga & Meditation', 'Acupuncture', 'Homeopathy', 'Psychological Counseling', 'Disabilities Rehabilitation'].map((therapy, index) => (
                  <div key={index} className="col-sm-6">
                    <div className="p-2 border rounded bg-white text-center fw-semibold text-ngo-teal shadow-sm">
                      {therapy}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-5 mt-4 mt-lg-0 text-center">
               <div className="bg-ngo-teal text-white p-4 rounded-4 shadow-lg">
                  <h4 className="fw-bold mb-3">Hospital Vision</h4>
                  <p className="mb-0 fs-5 lh-base">To create a center of healing focused on the total wellbeing of body, mind, and spirit for those who cannot afford treatment.</p>
               </div>
            </div>
          </div>

          {/* HOSPITAL PHOTO GALLERY */}
          <div className="mt-5 pt-3">
            <h4 className="fw-bold mb-4 text-ngo-teal border-bottom border-secondary pb-2">Glimpses of Abha Seva Sadan</h4>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3">
              {hospitalPhotos.map((num) => (
                <div className="col" key={`hosp-${num}`}>
                  <div 
                    className="ratio ratio-1x1 bg-white rounded shadow-sm overflow-hidden d-flex align-items-center justify-content-center text-white"
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleImageClick(`/images/hospital-${num}.jpg`)}
                  >
                    <img 
                      src={`/images/hospital-${num}.jpg`} 
                      alt={`Hospital ${num}`} 
                      className="img-fluid object-fit-cover w-100 h-100 support-card m-0 border-0" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GURUKUL CHATRA NIVAS (HOSTEL) */}
      <section id="gurukul" className="bg-white py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-ngo-blue mb-2">Gurukul Chatra Nivas</h2>
            <h5 className="text-ngo-coral">A Home of Learning, Values & Service</h5>
          </div>

          <div className="row g-5">
            <div className="col-md-6">
              <div className="p-4 bg-ngo-light rounded-4 h-100 border-start border-4 border-ngo-yellow">
                <h4 className="fw-bold text-ngo-blue mb-3">Provisions & Education</h4>
                <p className="text-muted fs-5 lh-base mb-0">
                  We offer free lodging, balanced vegetarian meals, and admission to nearby schools/colleges for economically disadvantaged boys. Our holistic approach includes daily evening tuition, regular medical check-ups, and participation in cultural festivals.
                </p>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="p-4 bg-ngo-light rounded-4 h-100 border-start border-4 border-ngo-teal">
                <h4 className="fw-bold text-ngo-blue mb-3">Rules & Daily Routine</h4>
                <ul className="list-unstyled text-muted fs-5 lh-base mb-0">
                  <li className="mb-2">🌅 <strong>Brahma Muhurta:</strong> Wake up at 4:30 AM for personal hygiene and yoga.</li>
                  <li className="mb-2">🥗 <strong>Diet:</strong> Strictly sentient vegetarian food. No outside junk food.</li>
                  <li className="mb-2">🛑 <strong>Strict Bans:</strong> Zero tolerance for intoxicants or smartphones.</li>
                  <li className="mb-0">🤫 <strong>Discipline:</strong> Absolute silence observed during study hours.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* GURUKUL PHOTO GALLERY */}
          <div className="mt-5 pt-5">
            <h4 className="fw-bold mb-4 text-ngo-blue border-bottom pb-2">Glimpses of Gurukul Chatra Nivas</h4>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3">
              {gurukulPhotos.map((num) => (
                <div className="col" key={`guru-${num}`}>
                  <div 
                    className="ratio ratio-1x1 bg-ngo-light rounded shadow-sm overflow-hidden d-flex align-items-center justify-content-center text-white"
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleImageClick(`/src/assets/images/gurukul-${num}.jpg`)}
                  >
                    <img 
                      src={`/src/assets/images/gurukul-${num}.jpg`} 
                      alt={`Gurukul ${num}`} 
                      className="img-fluid object-fit-cover w-100 h-100 support-card m-0 border-0" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATED DONATION SECTION */}
      <section id="donate" className="bg-ngo-teal text-white py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-ngo-yellow mb-3 display-5">Support Our Mission</h2>
            <p className="lead mx-auto fs-4" style={{ maxWidth: '800px' }}>
              Your contributions help construct hospital wards, support staff salaries, and provide food and education to the children of Gurukul Chatra Nivas.
            </p>
          </div>

          <div className="row justify-content-center align-items-stretch g-4">
            <div className="col-md-5">
              <div className="card h-100 shadow-lg border-0 text-dark rounded-4">
                <div className="card-body p-5 bg-white rounded-4 text-center">
                  <h3 className="card-title text-ngo-blue fw-bold mb-4">Direct Bank Transfer</h3>
                  <ul className="list-unstyled fs-5 text-start d-inline-block text-muted">
                    <li className="mb-3"><strong className="text-dark">Account Name:</strong> Abha Seva Sadan</li>
                    <li className="mb-3"><strong className="text-dark">A/c Number:</strong> 44087197883</li>
                    <li className="mb-3"><strong className="text-dark">Bank:</strong> State Bank of India</li>
                    <li className="mb-3"><strong className="text-dark">Branch:</strong> Dhanupali (11576)</li>
                    <li className="mb-0"><strong className="text-dark">IFSC Code:</strong> SBIN0011576</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-5">
              <div className="card h-100 shadow-lg border-0 text-dark rounded-4">
                <div className="card-body p-5 text-center d-flex flex-column justify-content-center align-items-center">
                  <h3 className="card-title text-ngo-blue fw-bold mb-4">Scan & Donate via UPI</h3>
                  <img 
                    src={qrCodeImage} 
                    alt="Donate via UPI" 
                    className="img-fluid border border-3 border-ngo-teal p-2 rounded shadow-sm mb-3"
                    style={{ maxWidth: '200px' }}
                  />
                  <p className="text-muted fw-semibold mb-0 fs-5">Google Pay • PhonePe • Paytm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ngo-blue text-white text-center py-5">
        <div className="container">
          <h4 className="mb-2 fw-bold text-ngo-yellow tracking-wide">ANDS FOUNDATION</h4>
          <p className="mb-2 text-white-50">Reg. No. 1956/4/3864-2006</p>
          <p className="mb-3 text-white-50">Gargadbahal, Jujomura & Govindtola, Dhanupali, Sambalpur, Odisha</p>
          <hr className="border-secondary mx-auto" style={{ maxWidth: '400px' }} />
          <p className="mb-0 mt-3 fs-5">
            <span className="me-3">📞 +91 9938167456</span> 
            <span>✉️ abhasevasadansambalpur@gmail.com</span>
          </p>
        </div>
      </footer>

      {/* IMAGE MODAL (POP-UP) */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header closeButton className="border-0 pb-0"></Modal.Header>
        <Modal.Body className="text-center pt-0 pb-4 px-4">
          <img src={selectedImage} alt="Expanded View" className="img-fluid rounded shadow-lg" />
        </Modal.Body>
      </Modal>

    </div>
  );
};

export default Home;